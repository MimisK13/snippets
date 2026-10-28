# Read Replicas

[[TOC]]

Laravel can route writes to a primary database connection and reads to replicas. Replica lag can make a user update a record, follow a redirect, and then see the previous value. Laravel 13.38.0 adds `PreventStaleDatabaseReads` and `usingWritePdo()` for read-after-write consistency.[1][2][3][4]

## Connection setup

Configure read and write hosts on the same connection. Laravel merges the remaining options into both configurations.[1]

```php
// config/database.php
'mysql' => [
    'driver' => 'mysql',
    'read' => [
        'host' => [
            env('DB_READ_HOST_1'),
            env('DB_READ_HOST_2'),
        ],
    ],
    'write' => [
        'host' => [env('DB_WRITE_HOST')],
    ],
    'sticky' => true,
    'database' => env('DB_DATABASE'),
    'username' => env('DB_USERNAME'),
    'password' => env('DB_PASSWORD'),
];
```

With `sticky` enabled, reads after a write use the primary connection for the rest of the current request. It does not cover a later request after a redirect.[1][2]

## Stale-read middleware

`PreventStaleDatabaseReads` stores the time of a write in the session. For the next two seconds, by default, reads from that user use the write connection.[2][3]

```php
// bootstrap/app.php
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Foundation\Http\Middleware\PreventStaleDatabaseReads;

->withMiddleware(function (Middleware $middleware): void {
    $middleware->web(append: [
        PreventStaleDatabaseReads::class,
    ]);
})
```

Use `for()` to configure the window:

```php
use Illuminate\Foundation\Http\Middleware\PreventStaleDatabaseReads;
use Illuminate\Support\Facades\Route;

Route::middleware(PreventStaleDatabaseReads::for(10))
    ->group(function (): void {
        Route::get('/posts/{post}', ShowPostController::class);
        Route::put('/posts/{post}', UpdatePostController::class);
    });
```

Choose a duration based on measured replica lag. A window shorter than the actual lag can still return stale data, while a needlessly long window reduces replica usage.[2][3]

The middleware depends on session state and operates on the default connection. It is most suitable for browser requests where one user should see their own recent writes.[3]

## `usingWritePdo()`

Use `usingWritePdo()` when one block must read from the primary regardless of who performed the write. Every query inside the callback, including relationship queries, uses the write connection.[2][4]

```php
use App\Models\User;
use Illuminate\Support\Facades\DB;

$drafts = DB::connection()->usingWritePdo(function () use ($email) {
    $user = User::query()
        ->where('email', $email)
        ->first();

    return $user?->posts()
        ->whereNull('published_at')
        ->get();
});
```

The callback's return value is returned. Laravel restores the previous connection preference in a `finally` block, including when the callback throws.[4]

`onWriteConnection()` affects the query it starts, but a relationship creates another query. Use the callback when the complete operation must stay on the primary.[2][4]

## Transactions

Queries inside a database transaction already use the write connection. Do not add `usingWritePdo()` around a transaction solely for read-after-write consistency.[2]

```php
use Illuminate\Support\Facades\DB;

$order = DB::transaction(function () use ($orderId) {
    $order = Order::query()->findOrFail($orderId);
    $order->markAsPaid();

    return $order->fresh();
});
```

## Testing

Query-log entries expose a `readWriteType` value of `read` or `write`. This can verify that a request used the expected connection.[2][3]

```php
use Illuminate\Support\Facades\DB;

DB::forgetRecordModificationState();
DB::enableQueryLog();

$this->actingAs($user)
    ->get("/posts/{$post->id}")
    ->assertOk();

$this->assertSame(
    'write',
    DB::getQueryLog()[0]['readWriteType'],
);
```

Avoid `RefreshDatabase` for this specific assertion because its transaction forces reads to the write connection and can make the test pass without the middleware.[2]

## Good practices

- Measure real replica lag before choosing the middleware window.
- Apply the middleware only to session-backed routes that need read-your-writes behavior.
- Use `usingWritePdo()` for small consistency-critical blocks in jobs or services.
- Keep transactions for atomicity; do not replace them with connection routing.
- Monitor primary load after enabling a long consistency window.

## Bad practices

Do not force all application reads to the primary as a default workaround. That removes much of the benefit of replicas.

Do not assume `sticky` covers redirects or later requests. Its state lasts only for the current request.[1][2]

Do not use a fixed window without checking production replica lag. Consistency depends on the window being long enough for the actual environment.

## Version

- `PreventStaleDatabaseReads` introduced in Laravel Framework `v13.38.0`, PR `laravel/framework#62078`.[3][5]
- `Connection::usingWritePdo()` introduced in Laravel Framework `v13.38.0`, PR `laravel/framework#62099`.[4][5]

## Sources

- [1] [Laravel 13.x — Read and write connections](https://laravel.com/docs/13.x/database#read-and-write-connections)
- [2] [Laravel News — Read replicas](https://laravel-news.com/laravel-prevent-stale-database-reads)
- [3] [Laravel Framework PR #62078](https://github.com/laravel/framework/pull/62078)
- [4] [Laravel Framework PR #62099](https://github.com/laravel/framework/pull/62099)
- [5] [Laravel Framework v13.38.0](https://github.com/laravel/framework/releases/tag/v13.38.0)
