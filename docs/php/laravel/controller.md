# Controller

[[TOC]]

## Create
```
php artisan make:controller ProductController
```

## Methods

```index```, ```create```, ```store```, ```show```, ```edit```, ```destroy```

### Index

```php
public function index()
{
	return view('product.index', [
		'Products' => Product::all()
	]);
}
```

### Create

```php
public function create()
{
	return view('product.create');
}
```

### Store

```php
public function store(Request $request)
{
	// TODO: Form Request
	$validated = $request->validate([
		'name' => ['required', 'unique:products', 'max:255'],
		'slug' => ['required'],
	]);

	$validated = Product::create($request->all());

	return redirect()
		->route('product.create')
		->with('status', 'Product added!');
}
```

### Show

```php
public function show(Product $product)
{
	return view('product.show', [
		'product' => Product::find($product)
	]);
}
```

### Edit

```php
public function edit(Product $product)
{
	return view('product.edit', [
		'product' => Product::find($product)
	]);	
}
```

### Update

```php
public function update(Request $request, Product $product)
{
	
	
	return redirect()
		->route('products.index')
		->with('success', 'Product updated successfully');
}
```

### Destroy

```php
public function destroy(Product $product)
{
	$product->delete();
	
	return back()
		->with('success', 'Product deleted successfully');
}
```