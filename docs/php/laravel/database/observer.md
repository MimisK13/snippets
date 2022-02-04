# Observer

[[toc]]

### Methods

```retrieved```, ```creating```, ```created```, ```updating```, ```updated```, ```saving```, ```saved```, ```deleting```, ```deleted```, ```restoring```, ```restored```, ```replicating```


### Create Observer

```bash
php artisan make:observer ProductObserver --model=Product
```

### Register Observer 

```App\Providers\EventServiceProvider```

```php
use App\Models\Product;
use App\Observers\ProductObserver;

/**
 * Register any events for your application.
 *
 * @return void
 */
public function boot()
{
    Product::observe(ProductObserver::class);
}
```

### Example #1

```php
<?php

namespace App\Observers;

use App\Models\Product;

class ProductObserver
{
    /**
     * Handle the Product "show" event.
     *
     * @param  \App\Models\Product  $Product
     * @return void
     */
    public function retrieved(Product $product)
    {
        $product->increment('views');
    }

    /**
     * Handle the Product "created" event.
     *
     * @param  \App\Models\Product  $Product
     * @return void
     */
    public function created(Product $product)
    {
        Log::info('The '. $product->name .' product was created by ' . auth()->user()->name);
    }

    /**
     * Handle the Product "updated" event.
     *
     * @param  \App\Models\Product  $Product
     * @return void
     */
    public function updated(Product $product)
    {
        Log::info('The ' . $product->name .' product was updated by ' . auth()->user()->name);
    }

    /**
     * Handle the Product "deleted" event.
     *
     * @param  \App\Models\Product  $Product
     * @return void
     */
    public function deleted(Product $product)
    {
        Log::warning('The ' . $product->name .' was soft deleted by ' . auth()->user()->name);
    }
	
	/**
     * Handle the product "restored" event.
     *
     * @param  Product  $product
     * @return void
     */
    public function restored(Product $product)
    {
        Log::info('The ' . $product->name .' was restored by ' . auth()->user()->name);
    }

    /**
     * Handle the Product "forceDeleted" event.
     *
     * @param  \App\Models\Product  $product
     * @return void
     */
    public function forceDeleted(Product $product)
    {
        Log::warning('The ' . $product->name .' was force deleted by ' . auth()->user()->name);
    }
}
```