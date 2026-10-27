# Routes

[[TOC]]

```php
Route::resource('products', Product::class);
```

```php
Route::get('/products', [ProductController::class, 'index'])
	->name('product.index');

Route::get('/products/create', [ProductController::class, 'create'])
	->name('product.create');

Route::post('/products', [ProductController::class, 'store'])
	->name('product.store');

Route::get('/products/{product:slug}', [ProductController::class, 'show'])
	->name('product.show');
	
Route::get('/products/edit/{product:slug}', [ProductController::class, 'edit'])
    ->name('product.edit');	

Route::delete('/products/{product}', [ProductController::class, 'destroy'])
    ->middleware(['auth'])
	->name('product.delete');
```

```php
// URL prefix
Route::prefix('manufacturers')->group(function () {

	// Name Prefix 
    Route::name('manufacturers.')->group(function () {

		// Without Middleware
        Route::get('/', [ManufacturerController::class, 'index'])->name('index');
        Route::get('/show/{manufacturer:slug}', [ManufacturerController::class, 'show'])->name('show');

		// With Middleware
        Route::middleware(['auth'])->group(function () {
            Route::get('/create', [ManufacturerController::class, 'create'])->name('create');
            Route::post('/', [ManufacturerController::class, 'store'])->name('store');
            Route::get('/edit/{manufacturer:slug}', [ManufacturerController::class, 'edit'])->name('edit');
            Route::delete('/{manufacturer}', [ManufacturerController::class, 'destroy'])->name('delete');
        });
    });
});
```

## Laravel UI

```php
Auth::routes([
    'login'    => true,
    'logout'   => true,
    'register' => true,
    'reset'    => true, // for resetting passwords
    'confirm'  => false, // for additional password confirmations
    'verify'   => false, // for email verification
]);
```

## `Route::query()`

Laravel 13.35.0 adds `Route::query()` for the HTTP `QUERY` method. `QUERY` carries a request body for safe, cacheable queries that may need more filter data than a URL query string can comfortably hold.[1][2]

```php
use App\Http\Controllers\SearchProductsController;
use Illuminate\Support\Facades\Route;

Route::query('/products/search', SearchProductsController::class);
```

A `QUERY` route in the `web` middleware group still follows CSRF protection rules. Treat the body as input and validate it like any other request.

**Introduced in:** Laravel Framework `v13.35.0`, PR `laravel/framework#61797`.

## Sources

- [1] [Laravel News — Laravel 13.35](https://laravel-news.com/laravel-13-35-0)
- [2] [Laravel Framework PR #61797](https://github.com/laravel/framework/pull/61797)