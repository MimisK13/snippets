
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

## Assert fake job properties with arrays

Laravel 13.35.0 allows Queue, Bus, Event, and Notification fake assertions to accept expected property arrays instead of callbacks. [Laravel News](https://laravel-news.com/laravel-13-35-0) and [framework PR #61770](https://github.com/laravel/framework/pull/61770) document the change. Public properties are compared strictly, while Eloquent models are compared using `is()`.

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

Sources: [Laravel News — Laravel 13.35.0](https://laravel-news.com/laravel-13-35-0), [framework PR #61770](https://github.com/laravel/framework/pull/61770).
