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

## Version note

- Introduced in: Laravel Framework `v13.31.0`.[1][3]
- PR: `laravel/framework#61373` by Jack Bayliss.[1][2]
- If you maintain snippets for older Laravel versions, keep the manual sum as the fallback.

## Sources

[1] Laravel Framework v13.31.0 release notes — https://github.com/laravel/framework/releases/tag/v13.31.0
[2] Laravel Framework PR #61373 — https://github.com/laravel/framework/pull/61373
[3] Laravel News: Queue totalSize() and JobInterrupted Event in Laravel 13.31 — https://laravel-news.com/laravel-13-31-0
[4] Laravel 13.x Queues: Monitoring Your Queues — https://laravel.com/docs/13.x/queues#monitoring-your-queues
