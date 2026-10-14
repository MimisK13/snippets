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

## Run scheduled tasks on one server by default

Laravel 13.35.0 adds `Schedule::alwaysOnOneServer()` for multi-server deployments. [Laravel News](https://laravel-news.com/laravel-13-35-0) and [framework PR #61789](https://github.com/laravel/framework/pull/61789) document the change. It applies the `onOneServer()` lock to scheduled tasks without repeating `->onOneServer()` on every task.

```php
use Illuminate\Console\Scheduling\Schedule;

// AppServiceProvider::boot()
Schedule::alwaysOnOneServer();
```

The servers must share a cache store. Tasks need names for the lock; unnamed closure tasks are skipped.[26]

**Introduced in:** Laravel Framework `v13.35.0`, PR `laravel/framework#61789`.

## Stop long-running scheduled work safely during deployments

Laravel 13.35.0 adds `Schedule::hasBeenInterruptedSince()` so long-running commands can observe `schedule:interrupt` and stop at a safe point. See [Laravel News](https://laravel-news.com/laravel-13-35-0) and [framework PR #61764](https://github.com/laravel/framework/pull/61764).

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

Sources: [Laravel News — Laravel 13.35.0](https://laravel-news.com/laravel-13-35-0), [framework PR #61789](https://github.com/laravel/framework/pull/61789), [framework PR #61764](https://github.com/laravel/framework/pull/61764).