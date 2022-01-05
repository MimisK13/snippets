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
