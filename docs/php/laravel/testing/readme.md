
![TDD Loop](./images/tdd_loop.png)

[Adam Wathan – Laracon US 2016](https://www.youtube.com/watch?v=MdApmmK71WM)

# Testing

[[TOC]]

## Create Test

```bash
php artisan make:test UserTest
```

## Running

Run all tests

```bash
php artisan test
```

Run specific test

```bash
php artisan test --filter="PostTest"
```

## Examples

### setup()

```php
private $user;

public function setUp(): void
{
	parent::setUp();

	$this->user = User::factory()->create([
		'email'     => 'admin@admin.com',
		'password'  => bcrypt('password')
	]);
}
```

## Fake job properties

Laravel 13.35.0 allows Queue, Bus, Event, and Notification fake assertions to accept expected property arrays instead of callbacks. Public properties are compared strictly, while Eloquent models are compared using `is()`.[1][2]

```php
use Illuminate\Support\Facades\Queue;

Queue::assertPushed(ProcessPodcast::class, [
    'podcast' => $podcast,
    'user' => $user,
    'status' => 'pending',
]);
```

Use the callback form when the assertion needs computed logic or private state; use the array form for direct property matching.

**Introduced in:** Laravel Framework `v13.35.0`, PR `laravel/framework#61770`.

## Migration events

Laravel 13.39.0 adds `#[WithoutMigrationEvents]` for tests using `LazilyRefreshDatabase`. It prevents migration queries and database events from contaminating listeners or query-count assertions in the first test that triggers the migration.[3][4]

```php
use App\Models\User;
use Illuminate\Foundation\Testing\Attributes\WithoutMigrationEvents;

#[WithoutMigrationEvents]
public function test_it_runs_one_query(): void
{
    $this->expectsDatabaseQueryCount(1);

    User::first();
}
```

The attribute can be placed on one test method or on the whole test class.[4]

## After-response jobs

`BusFake` now supports the same after-response toggles as the real dispatcher. This lets selected jobs run while the rest of the bus remains faked.[3][5]

```php
use App\Jobs\GenerateInvoice;
use App\Jobs\SendNewsletter;
use App\Models\Order;
use Illuminate\Support\Facades\Bus;

Bus::fake([SendNewsletter::class]);
Bus::withoutDispatchingAfterResponses();

$order = Order::factory()->create();

SendNewsletter::dispatch();
GenerateInvoice::dispatchAfterResponse($order);

// GenerateInvoice ran immediately; SendNewsletter remained faked.
$this->assertDatabaseHas('invoices', [
    'order_id' => $order->id,
]);

Bus::assertDispatched(SendNewsletter::class);
```

Call `Bus::withDispatchingAfterResponses()` to restore normal after-response behavior on the fake.[5]

## Mail fakes

`MailFake` now intercepts `Mail::html()` and `Mail::plain()` in addition to raw, view, mailable, and queued messages.[3][6]

```php
use Illuminate\Support\Facades\Mail;

Mail::fake();

Mail::html('<p>Hello</p>', function ($message): void {
    $message->to('user@example.com');
});

Mail::plain('emails.welcome', [], function ($message): void {
    $message->to('user@example.com');
});

Mail::assertNothingOutgoing();
```

## Process fakes

Process fake exit-code and exception shorthands now also work with asynchronous `start()` and process pools.[3][7]

```php
use Illuminate\Support\Facades\Process;

Process::fake([
    'backup --run' => 1,
]);

$result = Process::start('backup --run')->wait();

$this->assertSame(1, $result->exitCode());
```

```php
Process::fake([
    'backup --run' => new RuntimeException('Backup failed'),
]);

$this->expectException(RuntimeException::class);

Process::start('backup --run');
```

## Transaction cleanup

`RefreshDatabase` now rolls back every open transaction level during teardown instead of only the outer transaction. A test that accidentally leaves a nested transaction open no longer corrupts the connection state for later tests.[3][8]

## Sources

- [1] [Laravel News — Laravel 13.35](https://laravel-news.com/laravel-13-35-0)
- [2] [Laravel Framework PR #61770](https://github.com/laravel/framework/pull/61770)
- [3] [Laravel Framework v13.39.0](https://github.com/laravel/framework/releases/tag/v13.39.0)
- [4] [Laravel Framework PR #62201](https://github.com/laravel/framework/pull/62201)
- [5] [Laravel Framework PR #62130](https://github.com/laravel/framework/pull/62130)
- [6] [Laravel Framework PR #62162](https://github.com/laravel/framework/pull/62162)
- [7] [Laravel Framework PR #62200](https://github.com/laravel/framework/pull/62200)
- [8] [Laravel Framework PR #62194](https://github.com/laravel/framework/pull/62194)
