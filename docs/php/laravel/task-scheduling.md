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

## Sources

- [1] [Laravel News — Laravel 13.35](https://laravel-news.com/laravel-13-35-0)
- [2] [Laravel Framework PR #61789](https://github.com/laravel/framework/pull/61789)
- [3] [Laravel Framework PR #61764](https://github.com/laravel/framework/pull/61764)