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