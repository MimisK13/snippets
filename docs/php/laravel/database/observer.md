# Eloquent Observers

[[TOC]]

Eloquent observers group model event handlers in one class. Each method name corresponds to a model lifecycle event and receives the affected model.[1]

## Model events

Common Eloquent model events include:

```text
retrieved, creating, created, updating, updated, saving, saved,
deleting, deleted, trashed, forceDeleting, forceDeleted,
restoring, restored, replicating
```

Use an observer when a model has several related lifecycle handlers. Keep business workflows that span multiple aggregates in an application service or action instead of hiding them in a large observer.

## Create an observer

```bash
php artisan make:observer ProductObserver --model=Product
```

A current observer can use typed methods and only implement the events it needs:

```php
namespace App\Observers;

use App\Models\Product;

class ProductObserver
{
    public function created(Product $product): void
    {
        // Dispatch indexing, audit, or other application work.
    }

    public function updated(Product $product): void
    {
        // React to a persisted update.
    }

    public function deleted(Product $product): void
    {
        // React to a delete or soft delete.
    }
}
```

## Register an observer

Laravel supports the `ObservedBy` attribute on the model:

```php
namespace App\Models;

use App\Observers\ProductObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;

#[ObservedBy([ProductObserver::class])]
class Product extends Model
{
    // ...
}
```

Alternatively, register it explicitly in the `boot` method of `AppServiceProvider`:

```php
namespace App\Providers;

use App\Models\Product;
use App\Observers\ProductObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Product::observe(ProductObserver::class);
    }
}
```

Use one registration approach for a given observer. Do not register the same observer through both the attribute and `observe()` unless duplicate handling is intentional and tested.

## Observers and transactions

If an observer should run only after a surrounding database transaction commits, implement `ShouldHandleEventsAfterCommit`:

```php
namespace App\Observers;

use App\Models\User;
use Illuminate\Contracts\Events\ShouldHandleEventsAfterCommit;

class UserObserver implements ShouldHandleEventsAfterCommit
{
    public function created(User $user): void
    {
        // The handler runs after the transaction commits.
    }
}
```

If no transaction is active, the handler executes immediately.[1]

## Important caveats

Mass update and delete queries do not retrieve models, so their individual model events are not dispatched:

```php
// No individual retrieved/updated events are fired for each row.
Product::where('archived', true)->update(['status' => 'inactive']);
```

If observers, casts, accessors, or per-model authorization are required, load and process model instances explicitly. For high-volume jobs, weigh the lifecycle behavior against memory and query costs.

Use the quiet model operations in [Quiet model events](quiet-model-events.md) when the operation is intentionally silent and the scope is explicit.

## Sources

[1] Laravel 13.x Eloquent documentation — https://laravel.com/docs/13.x/eloquent#events
[2] Laravel 13.x Eloquent API: `Model` — https://api.laravel.com/docs/13.x/Illuminate/Database/Eloquent/Model.html
