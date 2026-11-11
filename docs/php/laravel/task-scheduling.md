# Task Scheduling

```php
$schedule->command('emails:send')
    ->daily()
    ->onSuccess(function() {
        // The task succeeded
    })
    ->onFailure(function() {
        // The task failed
    });
```

## Single-server tasks

Laravel 13.35.0 adds `Schedule::alwaysOnOneServer()` for multi-server deployments. It applies the `onOneServer()` lock to scheduled tasks without repeating `->onOneServer()` on every task.[1][2]

```php
use Illuminate\Console\Scheduling\Schedule;

// AppServiceProvider::boot()
Schedule::alwaysOnOneServer();
```

The servers must share a cache store. Tasks need names for the lock; unnamed closure tasks are skipped.[2]

**Introduced in:** Laravel Framework `v13.35.0`, PR `laravel/framework#61789`.

## Deployment interrupts

Laravel 13.35.0 adds `Schedule::hasBeenInterruptedSince()` so long-running commands can observe `schedule:interrupt` and stop at a safe point.[1][3]

```php
use Illuminate\Console\Scheduling\Schedule;

public function handle(Schedule $schedule): void
{
    $startedAt = now();

    foreach ($this->batches() as $batch) {
        if ($schedule->hasBeenInterruptedSince($startedAt)) {
            return;
        }

        $this->process($batch);
    }
}
```

This is useful during deploys, especially for commands launched with `runInBackground()`. Make the work restartable or checkpointed before returning.

**Introduced in:** Laravel Framework `v13.35.0`, PR `laravel/framework#61764`.

## Failed runtime

Laravel 13.37.0 adds the elapsed runtime to `ScheduledTaskFailed`, matching the timing already available on successful scheduled-task events.[4][5]

```php
use Illuminate\Console\Events\ScheduledTaskFailed;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;

Event::listen(function (ScheduledTaskFailed $event): void {
    Log::error('Scheduled task failed', [
        'command' => $event->task->command,
        'runtime_seconds' => $event->runtime,
        'exception' => $event->exception->getMessage(),
    ]);
});
```

Use the runtime to distinguish a command that failed immediately from one that ran for a long time before failing. The value is nullable for compatibility with manually constructed events.[5]

## Session cleanup

Laravel 13.39.0 adds `session:garbage-collect`, which invokes the configured session handler's garbage collector using `session.lifetime`.[6][7][8]

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('session:garbage-collect')
    ->hourly()
    ->onOneServer();
```

Scheduled cleanup avoids making a random web request pay the cleanup cost and continues to run during low-traffic periods.[7]

When the scheduler is responsible for cleanup, disable request-driven cleanup explicitly:

```php
// config/session.php
'lottery' => [0, 100],
```

Run the scheduler on one server when several application instances share the same session store. Verify that the selected session driver implements garbage collection before relying on the command.

## Skip reasons

Laravel 13.42 adds a `reason` property to `ScheduledTaskSkipped`. It holds a `ScheduledTaskSkipReason` enum with `ConditionNotMet`, `Paused`, and `RanOnAnotherServer`:[9][10][11]

```php
use Illuminate\Console\Events\ScheduledTaskSkipped;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;

Event::listen(function (ScheduledTaskSkipped $event): void {
    Log::info('Scheduled task skipped', [
        'task' => $event->task->getSummaryForDisplay(),
        'reason' => $event->reason?->value,
    ]);
});
```

## JSON timezones

Laravel 13.42 changes `schedule:list --json` to return each task's own cron expression and timezone. Previously, every expression was converted to the application timezone, so stored output could be off by an hour after a DST change. Passing `--timezone` still converts every task to that timezone.[9][10][11]

If you parse this JSON, check tasks that set their own `timezone()`, because their `expression`, `timezone`, and `next_due_date` values change.[9]

## Sources

- [1] [Laravel News — Laravel 13.35](https://laravel-news.com/laravel-13-35-0)
- [2] [Laravel Framework PR #61789](https://github.com/laravel/framework/pull/61789)
- [3] [Laravel Framework PR #61764](https://github.com/laravel/framework/pull/61764)
- [4] [Laravel Framework v13.37.0](https://github.com/laravel/framework/releases/tag/v13.37.0)
- [5] [Laravel Framework PR #61970](https://github.com/laravel/framework/pull/61970)
- [6] [Laravel Framework v13.39.0](https://github.com/laravel/framework/releases/tag/v13.39.0)
- [7] [Laravel Framework PR #62104](https://github.com/laravel/framework/pull/62104)
- [8] [Laravel Framework PR #62150](https://github.com/laravel/framework/pull/62150)
- [9] [Laravel News — Laravel 13.42.0](https://laravel-news.com/laravel-13-42-0)
- [10] [Laravel Framework PR #62294](https://github.com/laravel/framework/pull/62294)
- [11] [Laravel Framework PR #62352](https://github.com/laravel/framework/pull/62352)
