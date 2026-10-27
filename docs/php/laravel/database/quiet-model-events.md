# Quiet Eloquent Model Events

[[TOC]]

Eloquent model events are useful for auditing, cache invalidation, indexing, notifications, and other side effects. Some controlled operations must update a model without dispatching those events. Laravel provides narrowly scoped quiet methods and the broader `withoutEvents()` callback for this purpose.[1][2]

## Use `withoutEvents()` for a block

`withoutEvents()` temporarily disables model events for every model operation executed inside its closure. The closure's return value is returned by `withoutEvents()`.[1][2]

```php
use App\Models\User;

$user = User::withoutEvents(function () {
    User::findOrFail(1)->delete();

    return User::find(2);
});
```

The scope is the callback, not the whole request or process. Keep the block small so that an unrelated model operation does not accidentally become silent.

## Use a quiet method for one model

For one model instance, prefer the operation-specific method:

```php
use App\Models\User;

$user = User::findOrFail($id);
$user->name = 'Victoria Faith';
$user->saveQuietly();
```

Laravel also provides quiet variants for common model operations:

```php
$user->updateQuietly(['status' => 'inactive']);
$user->deleteQuietly();
$user->forceDeleteQuietly();
$user->restoreQuietly();
$user->replicateQuietly();
$user->pushQuietly();
```

The Laravel 13.x API also documents quiet increment/decrement operations, including `incrementQuietly()`, `decrementQuietly()`, `incrementEachQuietly()`, and `decrementEachQuietly()`.[2]

## Choosing the scope

```php
// One instance and one operation: prefer the narrow method.
$user->updateQuietly(['last_seen_at' => now()]);

// Several intentional operations: use a small callback.
User::withoutEvents(function () use ($user) {
    $user->update(['status' => 'inactive']);
    $user->delete();
});
```

Use `withoutEvents()` when all operations in the callback should be silent. Use `saveQuietly()`, `updateQuietly()`, or another operation-specific method when only one operation should bypass events.

## Migration or cleanup example

```php
use App\Models\User;

User::withoutEvents(function (): void {
    User::where('status', 'pending')
        ->orderBy('id')
        ->eachById(function (User $user): void {
            $user->updateQuietly([
                'status' => 'inactive',
            ]);
        });
});
```

For a pure bulk database change where model behavior is not needed, a query-level update may be simpler and faster:

```php
User::where('status', 'pending')
    ->update(['status' => 'inactive']);
```

Remember that mass updates do not dispatch individual model events because the models are not retrieved.[1]

## Good practice

- Choose the narrowest quiet scope that expresses the intent.
- Add a comment when bypassing an observer would otherwise be surprising.
- Consider whether audit, cache, search-index, notification, or authorization behavior is being skipped.
- Use a transaction when the operation must remain atomic; muting events does not provide transaction safety.
- Test both the data result and the intentionally absent side effect.
- Prefer a query-level update for a straightforward bulk change when model lifecycle behavior is not required.

```php
// Explicitly silent: this import must not create notifications or audit rows.
User::withoutEvents(function () use ($user, $attributes): void {
    $user->update($attributes);
});
```

## Bad practice

Do not disable events across unrelated work:

```php
// Bad: the scope is too broad and can hide unrelated side effects.
User::withoutEvents(function (): void {
    $user->update(['status' => 'inactive']);
    NotificationPreference::updateOrCreate(/* ... */);
    AuditLog::create(/* ... */);
});
```

Do not assume `withoutEvents()` disables every possible event in the application. It mutes Eloquent model events; it does not generally disable arbitrary application events, queued jobs, database triggers, or external side effects already initiated elsewhere.

Do not use a quiet operation to hide a required audit trail or to avoid fixing an observer that is incorrectly designed. Make the exception explicit and document the reason.

## Version and API note

`withoutEvents()` and `saveQuietly()` are established Eloquent APIs. Laravel 13.x also documents `updateQuietly()`, `deleteQuietly()`, `forceDeleteQuietly()`, `restoreQuietly()`, `replicateQuietly()`, `pushQuietly()`, and quiet increment/decrement methods.[1][2]

Check the framework version used by the application before relying on a particular quiet method. The current Laravel 13.x API reference is the source of truth for the exact available method set.[2]

## Sources

[1] Laravel 13.x Eloquent documentation — https://laravel.com/docs/13.x/eloquent#muting-events
[2] Laravel 13.x Eloquent `Model` API — https://api.laravel.com/docs/13.x/Illuminate/Database/Eloquent/Model.html
[3] Medium: How to Use `withoutEvents()` in Laravel for Efficient Event Management — https://medium.com/@binumathew1988/how-to-use-withoutevents-in-laravel-for-efficient-event-management-2be1449e9a3e
