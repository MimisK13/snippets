# Pipelines

[[TOC]]

## What is a Laravel Pipeline?

Laravel's `Pipeline` facade lets you send one value through a list of closures, callables, or classes. Each pipe receives the current value and a `$next` closure. When the pipe calls `$next($value)`, Laravel passes the value to the next pipe.[1]

Laravel uses the same idea internally for middleware-style flows, so the mental model is: **one payload in, ordered steps, one result out**.[1][3][4]

```php
use App\Models\User;
use Closure;
use Illuminate\Support\Facades\Pipeline;

$user = Pipeline::send($user)
    ->through([
        function (User $user, Closure $next) {
            // Inspect or modify the payload...

            return $next($user);
        },
        function (User $user, Closure $next) {
            // Another step...

            return $next($user);
        },
    ])
    ->then(fn (User $user) => $user);
```

## Main methods

The core methods you will use most often are `send()`, `through()`, `then()`, and `thenReturn()`. The API also exposes methods such as `pipe()`, `via()`, `finally()`, and transaction-related helpers for more advanced cases.[2]

| Method | Use |
| --- | --- |
| `send($payload)` | Set the object/value that moves through the pipeline. |
| `through([...])` | Define the ordered pipes. |
| `pipe($pipes)` | Add more pipes to an existing pipeline. |
| `via('methodName')` | Call a custom method on pipe classes instead of the default `handle`. |
| `then(fn ($payload) => ...)` | Run the pipeline and finish with a destination callback. |
| `thenReturn()` | Run the pipeline and return the final payload directly. |
| `finally(fn ($payload) => ...)` | Run cleanup/logging after the pipeline finishes. |

## Simple transformation example

Use a pipeline when each step does one small transformation.

```php
use Closure;
use Illuminate\Support\Facades\Pipeline;
use Illuminate\Support\Str;

$slug = Pipeline::send('Laravel pipelines are useful')
    ->through([
        fn (string $title, Closure $next) => $next(Str::slug($title)),
        fn (string $slug, Closure $next) => $next(Str::upper($slug)),
    ])
    ->thenReturn();

// LARAVEL-PIPELINES-ARE-USEFUL
```

This mirrors the common examples from the Laravel docs and community posts: chain steps, keep each step focused, and return the final transformed value.[1][5]

## Pipe classes

For real applications, prefer classes instead of long inline closures. Classes are easier to test, reuse, and reorder.[3][4]

```php
namespace App\Pipes\Orders;

use App\Data\OrderData;
use Closure;

class NormalizeOrderData
{
    public function handle(OrderData $order, Closure $next): OrderData
    {
        $order->email = mb_strtolower(trim($order->email));
        $order->coupon = $order->coupon ? trim($order->coupon) : null;

        return $next($order);
    }
}
```

```php
use App\Data\OrderData;
use App\Pipes\Orders\ApplyCoupon;
use App\Pipes\Orders\CalculateTotals;
use App\Pipes\Orders\NormalizeOrderData;
use Illuminate\Support\Facades\Pipeline;

$order = Pipeline::send(OrderData::fromRequest($request))
    ->through([
        NormalizeOrderData::class,
        ApplyCoupon::class,
        CalculateTotals::class,
    ])
    ->thenReturn();
```

## Query filter pipeline

Pipelines are useful for complex filtering because each filter can live in its own class instead of making a controller full of `if` statements. This pattern appears often in real-world Laravel posts for search, status filters, sorting, tags, and advanced user segmentation.[6]

```php
use App\Models\Product;
use App\QueryFilters\CategoryFilter;
use App\QueryFilters\PriceRangeFilter;
use App\QueryFilters\SearchFilter;
use App\QueryFilters\StatusFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Pipeline;

class ProductController
{
    public function index(Request $request)
    {
        $query = Pipeline::send(Product::query())
            ->through([
                StatusFilter::class,
                SearchFilter::class,
                CategoryFilter::class,
                PriceRangeFilter::class,
            ])
            ->thenReturn();

        return $query->paginate(20);
    }
}
```

Example filter class:

```php
namespace App\QueryFilters;

use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class StatusFilter
{
    public function __construct(private Request $request)
    {
    }

    public function handle(Builder $query, Closure $next): Builder
    {
        if ($this->request->filled('status')) {
            $query->where('status', $this->request->string('status'));
        }

        return $next($query);
    }
}
```

Another filter:

```php
namespace App\QueryFilters;

use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class SearchFilter
{
    public function __construct(private Request $request)
    {
    }

    public function handle(Builder $query, Closure $next): Builder
    {
        if ($this->request->filled('search')) {
            $search = $this->request->string('search');

            $query->where(function (Builder $query) use ($search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhere('sku', 'like', "%{$search}%");
            });
        }

        return $next($query);
    }
}
```

## Good: keep query filters lazy

Send an Eloquent `Builder` through the pipeline, not an already-loaded collection. This keeps filtering in SQL and lets pagination work correctly.

```php
// Good: database does the filtering.
$products = Pipeline::send(Product::query())
    ->through([
        StatusFilter::class,
        SearchFilter::class,
    ])
    ->thenReturn()
    ->paginate(20);
```

```php
// Bad: loads everything first, then filters in memory.
$products = Pipeline::send(Product::all())
    ->through([
        StatusCollectionFilter::class,
        SearchCollectionFilter::class,
    ])
    ->thenReturn();
```

## Business process pipeline

Use a pipeline when a business flow is naturally sequential and every step works on the same payload.[4]

```php
use App\Actions\Checkout\CalculateTotals;
use App\Actions\Checkout\CreatePaymentIntent;
use App\Actions\Checkout\ReserveStock;
use App\Actions\Checkout\ValidateCart;
use App\Data\CheckoutContext;
use Illuminate\Support\Facades\Pipeline;

$checkout = Pipeline::send(CheckoutContext::from($cart, $user))
    ->through([
        ValidateCart::class,
        ReserveStock::class,
        CalculateTotals::class,
        CreatePaymentIntent::class,
    ])
    ->thenReturn();
```

A pipe can also stop the chain early by not calling `$next`, but use that carefully because it changes the control flow.[1]

```php
namespace App\Actions\Checkout;

use App\Data\CheckoutContext;
use Closure;

class ValidateCart
{
    public function handle(CheckoutContext $checkout, Closure $next): CheckoutContext
    {
        if ($checkout->cart->items->isEmpty()) {
            $checkout->fail('Cart is empty.');

            return $checkout; // Stops the pipeline here.
        }

        return $next($checkout);
    }
}
```

## Using a custom pipe method with `via()`

By default, Laravel calls `handle` on pipe classes. If you prefer domain-specific method names, use `via()`.[2]

```php
use App\QueryFilters\ActiveUsers;
use App\QueryFilters\RecentlyCreated;
use App\Models\User;
use Illuminate\Support\Facades\Pipeline;

$users = Pipeline::send(User::query())
    ->through([
        ActiveUsers::class,
        RecentlyCreated::class,
    ])
    ->via('filter')
    ->thenReturn()
    ->get();
```

```php
namespace App\QueryFilters;

use Closure;
use Illuminate\Database\Eloquent\Builder;

class ActiveUsers
{
    public function filter(Builder $query, Closure $next): Builder
    {
        $query->where('active', true);

        return $next($query);
    }
}
```

## Good practices

- Use pipelines when the flow has **multiple ordered steps** operating on the same payload.
- Keep each pipe small: one responsibility per class.
- Prefer pipe classes over large inline closures in production code.
- Type-hint the payload and return value where possible.
- Keep query pipelines on `Builder` objects until the final `get()` / `paginate()`.
- Order pipes intentionally. A pipeline is not a random collection of services.
- Make pipes easy to unit test in isolation.
- Use clear namespaces such as `App\Pipes`, `App\QueryFilters`, or `App\Actions\Checkout`.
- Use `via()` only when a custom method name improves readability.

## Bad practices

### Bad: pipeline for two trivial lines

```php
// Over-engineered.
$name = Pipeline::send($name)
    ->through([
        TrimName::class,
    ])
    ->thenReturn();
```

A normal function call is clearer:

```php
$name = trim($name);
```

### Bad: fat pipe classes

```php
class ProcessOrder
{
    public function handle($order, Closure $next)
    {
        // validates order
        // calculates tax
        // sends email
        // talks to payment provider
        // updates inventory
        // logs analytics

        return $next($order);
    }
}
```

Split this into smaller pipes so each step is named, testable, and replaceable.

### Bad: forgetting `$next`

```php
class ApplyDiscount
{
    public function handle($order, Closure $next)
    {
        $order->discount = 10;

        return $order; // Stops the pipeline accidentally.
    }
}
```

Correct version:

```php
class ApplyDiscount
{
    public function handle($order, Closure $next)
    {
        $order->discount = 10;

        return $next($order);
    }
}
```

### Bad: hiding important side effects

```php
class SendWelcomeEmail
{
    public function handle($user, Closure $next)
    {
        Mail::to($user)->send(new WelcomeMail);

        return $next($user);
    }
}
```

This may be fine for an explicit onboarding pipeline, but it is bad inside a generic data transformation pipeline. Keep side effects obvious and avoid surprising writes, emails, HTTP calls, or payments in pipes that look like simple filters.

## When to avoid pipelines

Avoid pipelines when:

- There is only one step.
- The steps do not share the same payload.
- The order is unclear or highly conditional.
- A simple service method would be easier to read.
- Debugging would require jumping through too many tiny classes.

## Sources

[1] https://laravel.com/docs/12.x/helpers — Laravel 12.x Helpers - Pipeline
[2] https://api.laravel.com/docs/12.x/Illuminate/Pipeline/Pipeline.html — Illuminate\Pipeline\Pipeline API
[3] https://www.honeybadger.io/blog/laravel-pipeline — A guide to Laravel pipelines - Honeybadger
[4] https://kirschbaumdevelopment.com/insights/build-sequences-with-laravel-pipelines — How to build sequences with Laravel pipelines - Kirschbaum
[5] https://www.amitmerchant.com/the-pipeline-helper-in-laravel — The pipeline helper in Laravel - Amit Merchant
[6] https://martinjoo.dev/how-to-use-laravel-pipelines-to-implement-more-advanced-filters — Advanced filters with Laravel pipelines - Martin Joo
