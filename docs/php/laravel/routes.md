# Routes

```php
Route::get('/products', [ProductController::class, 'index'])
	->name('product.index');

Route::get('/products/create', [ProductController::class, 'create'])
	->name('product.create');

Route::post('/products', [ProductController::class, 'store'])
	->name('product.store');

Route::get('/products/{id}', [ProductController::class, 'show'])
	->name('product.show');
```