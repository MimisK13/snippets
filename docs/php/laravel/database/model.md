# Model

[[TOC]]

## Generate
```bash
php artisan make:model Product
```

### Options

| Options                            | Description                                                                                        |
|:-----------------------------------|:---------------------------------------------------------------------------------------------------|
| --migration                        | Generate Model and a migration file                                                                |
| -m                                 |                                                                                                    |
| --factory                          | Generate Model and a ProductFactory class                                                          |
| -f                                 |                                                                                                    |
| --seed                             | Generate Model and a ProductSeeder class                                                           |
| -s                                 |                                                                                                    |
| --controller                       | Generate Model and a ProductController class                                                       |
| -c                                 |                                                                                                    |
| --controller --resource --requests | Generate Model, ProductController resource class, and form request classes                         |
| -crR                               |                                                                                                    |
|                                    |                                                                                                    |
| --policy                           | Generate Model and a ProductPolicy class                                                           |
| -mfsc                              | Generate a model and a migration, factory, seeder, and controller...                               |
| --all                              | Shortcut to generate a model, migration, factory, seeder, policy, controller, and form requests... |
| --pivot                            | Generate a pivot model...                                                                          |

## Model Conventions

### Table Names

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'my_products';
}
```

### Primary Keys

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'product_id';
	
    /**
     * Indicates if the model's ID is auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The data type of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'string';	
}
```

### Timestamps
```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
	
	/**
     * The storage format of the model's date columns.
     *
     * @var string
     */
    protected $dateFormat = 'U';
	
	// Customize names
	const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'updated_date';
}
```

## `defaults()`

Laravel 13.35.0 adds an opt-in `defaults()` method through the `HasDefaultAttributes` trait. Unlike static `$attributes`, the method can derive defaults from configuration, feature flags, or the current date.[1][2]

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasDefaultAttributes;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasDefaultAttributes;

    protected function defaults(): array
    {
        return [
            'cancelled' => false,
            'trial_days' => config('billing.default_trial_days', 14),
        ];
    }
}
```

The returned values are raw defaults: they take precedence over `$attributes` and skip casts and mutators. Use this trait only on models that intentionally opt into the behavior.

**Introduced in:** Laravel Framework `v13.35.0`, PR `laravel/framework#61813`.

## Keyless models

Laravel 13.39.0 allows `key: false` on the `#[Table]` attribute. This disables the default `id` primary key and automatically marks the model as non-incrementing.[3][4][5]

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

#[Table(name: 'activity_log', key: false)]
class Activity extends Model
{
    public $timestamps = false;

    protected $guarded = [];
}
```

The model can insert rows without defining `protected $primaryKey = null` or manually setting `$incrementing = false`:

```php
Activity::create([
    'event' => 'login',
    'payload' => json_encode(['user_id' => $user->id]),
]);
```

Use keyless models for append-only logs, staging tables, database views, or legacy tables that genuinely have no unique key. Operations that need model identity—such as instance updates, deletes, `refresh()`, route-model binding, and some relationships—still require a stable key and should not be assumed to work safely.

## Sources

- [1] [Laravel News — Laravel 13.35](https://laravel-news.com/laravel-13-35-0)
- [2] [Laravel Framework PR #61813](https://github.com/laravel/framework/pull/61813)
- [3] [Laravel Framework v13.39.0](https://github.com/laravel/framework/releases/tag/v13.39.0)
- [4] [Laravel Framework PR #62113](https://github.com/laravel/framework/pull/62113)
- [5] [Laravel Framework PR #62205](https://github.com/laravel/framework/pull/62205)
