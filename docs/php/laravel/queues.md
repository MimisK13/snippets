# Queues

[[TOC]]

## Count every queued job on a connection

Laravel 13.31.0 introduced `Queue::totalSize()` via framework PR #61373.[1][2] Use it when you want a single number for the total jobs currently on a queue connection, instead of manually adding pending, delayed, and reserved counts.[2][3]

```php
use Illuminate\Support\Facades\Queue;

$totalJobs = Queue::totalSize();
```

Before `totalSize()`, the equivalent code was more verbose:

```php
use Illuminate\Support\Facades\Queue;

$totalJobs = Queue::totalPendingSize()
    + Queue::totalDelayedSize()
    + Queue::totalReservedSize();
```

The original PR describes this as answering: "how many total jobs do I have in my X connection right now?"[2]

## Use it for lightweight queue health checks

`Queue::totalSize()` is useful for dashboards, deploy smoke checks, or operational alerts where you need one backlog number.

```php
use Illuminate\Support\Facades\Queue;

if (Queue::totalSize() > 1_000) {
    report('Queue backlog is above the expected threshold.');
}
```

For production alerting, Laravel also ships `queue:monitor`, which dispatches a `QueueBusy` event when a queue exceeds a threshold.[4]

```php
// routes/console.php
use Illuminate\Support\Facades\Schedule;

Schedule::command('queue:monitor redis:default,redis:mail --max=100')
    ->everyMinute();
```

## Check support before relying on it everywhere

The PR notes that `totalSize()` is intended for the Database, Redis, Cloud queue connections, and the queue fake.[2] Be careful with drivers where the total is not meaningful or may be approximate.

```php
use Illuminate\Support\Facades\Queue;

$totalJobs = Queue::totalSize();

// Good for a health card / rough backlog indicator.
// Do not use this alone as a billing, SLA, or exact audit metric.
```

## Good practice

Use `Queue::totalSize()` when you need a high-level backlog number.

```php
use Illuminate\Support\Facades\Queue;

$backlog = Queue::totalSize();

return [
    'queue_backlog' => $backlog,
    'healthy' => $backlog < 500,
];
```

Keep per-state metrics when you need to understand why the queue is growing.

```php
use Illuminate\Support\Facades\Queue;

return [
    'total' => Queue::totalSize(),
    'pending' => Queue::totalPendingSize(),
    'delayed' => Queue::totalDelayedSize(),
    'reserved' => Queue::totalReservedSize(),
];
```

Use `queue:monitor` or Horizon for alerting and operational monitoring instead of building all queue supervision around one ad-hoc controller endpoint.[4]

## Bad practice

Do not keep manually summing the three total methods when your app runs on Laravel 13.31.0 or newer.

```php
// Bad: noisy and easier to get wrong after totalSize() exists.
$totalJobs = Queue::totalPendingSize()
    + Queue::totalDelayedSize()
    + Queue::totalReservedSize();
```

Do not confuse `Queue::size($queue)` with `Queue::totalSize()`.

```php
// Queue::size('emails') answers one named queue.
$emails = Queue::size('emails');

// Queue::totalSize() answers the whole connection total.
$total = Queue::totalSize();
```

Do not make destructive automation decisions from the total alone.

```php
// Bad: total backlog alone does not tell you whether jobs are stuck,
// delayed intentionally, reserved by active workers, or just temporarily busy.
if (Queue::totalSize() > 10_000) {
    Artisan::call('queue:clear');
}
```

Prefer reporting, alerting, or investigating before clearing or restarting queue infrastructure.

## Inspect jobs across every queue

Laravel 13.8.0 introduced queue-wide inspection methods via framework PR #59997.[17][18][19] Use them when you need pending, delayed, or reserved jobs across all queues on a connection without manually merging per-queue results.[17][19]

```php
use Illuminate\Support\Facades\Queue;

$pending = Queue::allPendingJobs();
$delayed = Queue::allDelayedJobs();
$reserved = Queue::allReservedJobs();
```

Before these methods, checking several queues required one call per queue and manual merging.[17][19]

```php
// Before: one query per queue.
$reserved = Queue::reservedJobs('default')
    ->merge(Queue::reservedJobs('emails'))
    ->merge(Queue::reservedJobs('reports'));

// After: one call across every queue.
$reserved = Queue::allReservedJobs();
```

Each item is an `InspectedJob` with properties such as `uuid`, `name`, `attempts`, and `createdAt`.[17][19]

```php
Queue::allReservedJobs()->each(function ($job) {
    logger()->info('Reserved job still running', [
        'uuid' => $job->uuid,
        'name' => $job->name,
        'attempts' => $job->attempts,
        'created_at' => $job->createdAt,
    ]);
});
```

## Good practice: deployment safety checks

Use `allReservedJobs()` before stopping workers during deploys when you need to avoid killing active jobs.[17][19]

```php
use Illuminate\Support\Facades\Queue;

if (Queue::allReservedJobs()->isNotEmpty()) {
    throw new RuntimeException('Workers still have reserved jobs. Wait before shutdown.');
}
```

## Bad practice: treating inspection as a queue dashboard replacement

Do not poll these methods aggressively from public endpoints. They can inspect every queue and may be expensive on large installations.

```php
// Bad: unbounded public polling endpoint.
Route::get('/queue/jobs', fn () => [
    'pending' => Queue::allPendingJobs(),
    'delayed' => Queue::allDelayedJobs(),
    'reserved' => Queue::allReservedJobs(),
]);
```

Prefer internal tooling, scheduled checks, logs, or a proper queue dashboard for continuous monitoring.

## Dispatch many jobs efficiently with `Bus::bulk()`

Laravel 13.13.0 introduced `Bus::bulk()` via framework PR #60297.[14][15][16] Use it when you need to enqueue many independent jobs efficiently, but do not need `Bus::batch()` progress tracking, callbacks, cancellation, or database batch records.[14][16]

```php
use App\Jobs\ProcessUser;
use App\Models\User;
use Illuminate\Support\Facades\Bus;

$users = User::query()->where('active', true)->get();

Bus::bulk(
    $users->map(fn (User $user) => new ProcessUser($user))->all(),
);
```

`Bus::bulk()` groups jobs by connection and queue, then uses the underlying queue `bulk()` method for each group.[14][16]

```php
use Illuminate\Support\Facades\Bus;

Bus::bulk([
    new ProcessReport($reportId),
    (new SyncCustomer($customerId))->onQueue('high'),
    (new RebuildSearchIndex($modelId))->onConnection('redis'),
]);
```

## Good practice: choose bulk vs batch deliberately

Use `Bus::bulk()` for fire-and-forget mass dispatch where failed jobs can be handled through the normal failed-jobs flow.[16]

```php
// Good: no progress UI or batch callbacks needed.
Bus::bulk($jobs);
```

Keep `Bus::batch()` when the application needs batch lifecycle features.

```php
use Illuminate\Support\Facades\Bus;
use Throwable;

Bus::batch($jobs)
    ->then(fn () => report_import_finished())
    ->catch(fn (Throwable $e) => report($e))
    ->finally(fn () => cleanup_import_state())
    ->dispatch();
```

## Bad practice: replacing batches when you need lifecycle tracking

Do not replace `Bus::batch()` with `Bus::bulk()` if callers depend on progress, cancellation, callbacks, or batch IDs.

```php
// Bad: this loses batch progress/callback semantics.
Bus::bulk($jobs);
```

Do not build a huge in-memory job array for unbounded datasets. Chunk your source records and call `Bus::bulk()` per chunk.

```php
User::query()->where('active', true)->chunkById(1_000, function ($users) {
    Bus::bulk(
        $users->map(fn (User $user) => new ProcessUser($user))->all(),
    );
});
```

## Reroute queue names and connections with `Queue::forward()`

Laravel 13.26.0 introduced `Queue::forward()` via framework PR #61188.[7][8][9] Use it when application code dispatches to logical queue names, but a specific environment should send those jobs to a different queue name, connection, or both.[7][8]

Register forwards from a service provider, usually `AppServiceProvider::boot()`.[7]

```php
namespace App\Providers;

use Illuminate\Support\Facades\Queue;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        if ($this->app->isProduction()) {
            Queue::forward('reports', 'reports.fifo', 'cloud');
        }
    }
}
```

Supported shapes include renaming a queue, moving it to another connection, or mapping several queues at once.[7]

```php
use Illuminate\Support\Facades\Queue;

// Rename the queue and move it to another connection.
Queue::forward('reports', 'reports.fifo', 'cloud');

// Keep the same queue name, but move it to another connection.
Queue::forward('payments', connection: 'cloud');

// Rename on the same connection.
Queue::forward('updates', 'notifications');

// Forward several queues to one connection.
Queue::forward([
    'reports' => 'reports.fifo',
    'emails' => 'emails.fifo',
], connection: 'cloud');
```

This is useful when production uses different queue infrastructure than local or staging environments. For example, local code can keep dispatching to `reports`, while production forwards that logical queue to `reports.fifo` on a managed queue connection.[7][8]

## Good practice: centralized queue routing

Keep stable logical queue names in jobs and dispatch sites, then forward them at the infrastructure boundary.

```php
// Application code keeps the business-level queue name.
GenerateReport::dispatch()->onQueue('reports');

// Infrastructure routing lives in one provider.
Queue::forward('reports', 'reports.fifo', 'cloud');
```

Document the forward near the service-provider registration so workers, Horizon, Supervisor, and runbooks follow the final routed queue name.

## Bad practice: treating forwards as a global find-and-replace

A forward is a dispatch-time mapping, not a migration for jobs already sitting on an old queue.[7] Drain the old queue during cutover, then retire old workers instead of running both names indefinitely.[7]

```php
// Bad: forwarding new jobs but forgetting the old queue still has jobs.
Queue::forward('reports', 'reports.fifo', 'cloud');

// Keep old workers only long enough to drain the old queue.
```

Do not use `Queue::forward()` as business logic, throttling, pausing, or retry control. It changes where new jobs are pushed; it does not pause consumption or move jobs that already exist.[7]

## Log worker pause and resume signals

Laravel 13.8.0 introduced `WorkerPausing` and `WorkerResuming` events via framework PR #59895.[17][18][20] These events are dispatched when a queue worker receives `SIGUSR2` to pause or `SIGCONT` to resume.[17][20]

```php
use Illuminate\Queue\Events\WorkerPausing;
use Illuminate\Queue\Events\WorkerResuming;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;

Event::listen(function (WorkerPausing $event) {
    Log::info('Queue worker pausing', [
        'connection' => $event->connectionName,
        'queue' => $event->queue,
    ]);
});

Event::listen(function (WorkerResuming $event) {
    Log::info('Queue worker resuming', [
        'connection' => $event->connectionName,
        'queue' => $event->queue,
    ]);
});
```

Use these for deployment observability when workers are paused/resumed by infrastructure, Supervisor/systemd wrappers, or container orchestration.

Do not use these events to infer that jobs completed successfully. They describe worker state transitions, not job outcomes.

## Track worker lifecycle metrics with `WorkerStopping`

Laravel 13.18.0 added `jobsProcessed` and `lastJobProcessedAt` to the `WorkerStopping` event via framework PRs #60592 and #60608.[10][11][12][13] Use these fields to log worker throughput when a daemon exits, without reconstructing the lifecycle from individual job events.[10][12]

```php
use Illuminate\Queue\Events\WorkerStopping;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;

Event::listen(function (WorkerStopping $event) {
    Log::info('Queue worker stopped', [
        'jobs_processed' => $event->jobsProcessed,
        'last_job_processed_at' => $event->lastJobProcessedAt,
    ]);
});
```

`lastJobProcessedAt` is a microtime timestamp of the final processed job, and it stays `null` when the worker did not process any jobs.[10][13]

```php
Event::listen(function (WorkerStopping $event) {
    if ($event->lastJobProcessedAt === null) {
        Log::info('Worker stopped without processing jobs');
    }
});
```

## Good practice: worker lifecycle metrics

Use these fields to tune worker options such as `--max-time`, `--max-jobs`, memory limits, and process-manager restart behavior.[12]

```php
Event::listen(function (WorkerStopping $event) {
    metrics()->gauge('queue.worker.jobs_processed', $event->jobsProcessed ?? 0);

    if ($event->lastJobProcessedAt !== null) {
        metrics()->timing(
            'queue.worker.seconds_since_last_job',
            microtime(true) - $event->lastJobProcessedAt,
        );
    }
});
```

Do not treat `lastJobProcessedAt` as an application timestamp. It is a worker runtime timestamp meant for lifecycle/telemetry use.

## Log why a queue worker stopped

Laravel 13.30.0 added queue worker stop reasons to `php artisan queue:work` output via framework PR #61339.[5][6] This helps distinguish normal restarts from memory limits, timeouts, lost connections, or deploy-triggered `queue:restart` signals.[5]

Plain output now includes the stop reason:

```text
2026-09-01 13:20:40 Worker STOPPED Memory limit exceeded
```

With `--json`, the stopped record includes a stable `reason`, an `exit_code`, the number of processed jobs, memory usage, and a timestamp.[5]

```bash
php artisan queue:work --json --max-time=3600 2>&1 \
    | jq -c 'select(.status == "stopped")'
```

Example stopped record:

```json
{
  "level": "info",
  "status": "stopped",
  "reason": "empty",
  "exit_code": 0,
  "jobs_processed": 12,
  "memory": 34.0,
  "timestamp": "2026-09-01T13:20:40.118273+00:00"
}
```

The same data is available through the `WorkerStopping` event when you need to push stop reasons into logs or metrics.[5]

```php
use Illuminate\Queue\Events\WorkerStopping;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;

Event::listen(function (WorkerStopping $event) {
    Log::info('Worker stopped', [
        'reason' => $event->reason?->value,
        'status' => $event->status,
        'jobs' => $event->jobsProcessed,
        'memory' => $event->memoryUsage,
    ]);
});
```

Known stop reasons include `empty`, `empty_for`, `max_jobs`, `max_time`, `restart_signal`, `interrupted`, `lost_connection`, `memory`, and `timed_out`.[5]

## Good practice: worker stop observability

Log or metric the `reason` field when workers are managed by Supervisor, systemd, containers, or deploy scripts.

```php
Event::listen(function (WorkerStopping $event) {
    metrics()->increment('queue.worker.stopped', tags: [
        'reason' => $event->reason?->value ?? 'unknown',
        'exit_code' => (string) $event->status,
    ]);
});
```

Use `--json` when your process manager already captures stdout and you want log pipelines to filter stopped records.

```bash
php artisan queue:work redis --queue=default --json
```

## Bad practice: treating every stop as a crash

Do not page the team for every worker stop. Some reasons are expected and exit with code `0`, such as `max_jobs`, `max_time`, `empty`, or `restart_signal`.[5]

```php
// Bad: this treats planned worker recycling as an incident.
Event::listen(function (WorkerStopping $event) {
    alert('Queue worker stopped');
});
```

Prefer severity based on the reason and exit code.

```php
Event::listen(function (WorkerStopping $event) {
    if (in_array($event->reason?->value, ['memory', 'timed_out', 'lost_connection'], true)) {
        alert('Queue worker stopped unexpectedly', [
            'reason' => $event->reason?->value,
            'exit_code' => $event->status,
        ]);
    }
});
```

External kills, such as an OOM killer or `SIGKILL`, may not dispatch the event because the worker cannot run its shutdown code.[5]

## Version note

- `Queue::totalSize()` introduced in: Laravel Framework `v13.31.0`.[1][3]
- `Queue::totalSize()` PR: `laravel/framework#61373` by Jack Bayliss.[1][2]
- Queue-wide inspection methods `Queue::allPendingJobs()`, `Queue::allDelayedJobs()`, and `Queue::allReservedJobs()` introduced in: Laravel Framework `v13.8.0`.[17][18]
- Queue-wide inspection PR: `laravel/framework#59997`.[17][19]
- `WorkerPausing` and `WorkerResuming` events introduced in: Laravel Framework `v13.8.0`.[17][18]
- Worker pause/resume events PR: `laravel/framework#59895`.[17][20]
- `Bus::bulk()` introduced in: Laravel Framework `v13.13.0`.[14][15]
- `Bus::bulk()` PR: `laravel/framework#60297`.[14][16]
- `Queue::forward()` introduced in: Laravel Framework `v13.26.0`.[7][9]
- `Queue::forward()` PR: `laravel/framework#61188`.[7][8]
- `WorkerStopping::$jobsProcessed` and `WorkerStopping::$lastJobProcessedAt` introduced in: Laravel Framework `v13.18.0`.[10][11]
- Worker lifecycle metrics PRs: `laravel/framework#60592` and `laravel/framework#60608`.[12][13]
- Queue worker stop reasons in `queue:work` output introduced in: Laravel Framework `v13.30.0`.[5][6]
- Worker stop reasons PR: `laravel/framework#61339`.[5][6]
- If you maintain snippets for older Laravel versions, keep the manual sum as the `Queue::totalSize()` fallback.

## Sources

[1] Laravel Framework v13.31.0 release notes — https://github.com/laravel/framework/releases/tag/v13.31.0
[2] Laravel Framework PR #61373 — https://github.com/laravel/framework/pull/61373
[3] Laravel News: Queue totalSize() and JobInterrupted Event in Laravel 13.31 — https://laravel-news.com/laravel-13-31-0
[4] Laravel 13.x Queues: Monitoring Your Queues — https://laravel.com/docs/13.x/queues#monitoring-your-queues
[5] Laravel News: Laravel queue:work Now Prints Why the Worker Stopped — https://laravel-news.com/laravel-queue-worker-stop-reasons
[6] Laravel Framework PR #61339 — https://github.com/laravel/framework/pull/61339
[7] Laravel News: Queue::forward(): Reroute Laravel Queues in One Place — https://laravel-news.com/laravel-queue-forward
[8] Laravel Framework PR #61188 — https://github.com/laravel/framework/pull/61188
[9] Laravel Framework v13.26.0 release notes — https://github.com/laravel/framework/releases/tag/v13.26.0
[10] Laravel News: Worker Metrics on the WorkerStopping Event in Laravel 13.18 — https://laravel-news.com/laravel-13-18-0
[11] Laravel Framework v13.18.0 release notes — https://github.com/laravel/framework/releases/tag/v13.18.0
[12] Laravel Framework PR #60592 — https://github.com/laravel/framework/pull/60592
[13] Laravel Framework PR #60608 — https://github.com/laravel/framework/pull/60608
[14] Laravel News: Bulk Job Dispatching with Bus::bulk() in Laravel 13.13 — https://laravel-news.com/laravel-13-13-0
[15] Laravel Framework v13.13.0 release notes — https://github.com/laravel/framework/releases/tag/v13.13.0
[16] Laravel Framework PR #60297 — https://github.com/laravel/framework/pull/60297
[17] Laravel News: Queue-Wide Inspection Methods in Laravel 13.8.0 — https://laravel-news.com/laravel-13-8-0
[18] Laravel Framework v13.8.0 release notes — https://github.com/laravel/framework/releases/tag/v13.8.0
[19] Laravel Framework PR #59997 — https://github.com/laravel/framework/pull/59997
[20] Laravel Framework PR #59895 — https://github.com/laravel/framework/pull/59895
