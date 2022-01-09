# Routes

[[TOC]]

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