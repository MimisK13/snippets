## Queries

```php
return view('welcome', [	
	'mostViewedProducts' => Product::select(['name', 'slug', 'views'])
		->orderBy('views', 'desc')
		->take(5)
		->get()
]);
```