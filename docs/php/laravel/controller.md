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

With validation logic

```php
public function store(Request $request)
{
	$validated = $request->validate([
		'name' => ['required', 'unique:products', 'max:255'],
		'slug' => ['required'],
	]);

	$validated = Product::create($request->all());

	return redirect()
		->route('product.create')
		->with('status', 'Product successfully added!');
}
```

Refactor: Validation with StoreRequest

```php
public function store(StoreProductRequest $request)
{
	Product::create($request->validated());

	return redirect()
		->route('product.create')
		->with('status', 'Product successfully added!');
}
```

- ProductStoreRequest

```php
/**
 * Determine if the user is authorized to make this request.
 *
 * @return bool
 */
public function authorize()
{
	return true;
}

/**
 * Get the validation rules that apply to the request.
 *
 * @return array
 */
public function rules()
{
	return [
		'name' => ['required', 'unique:manufacturers', 'max:255'],
		'url' => ['url'],		
	];
}
```

### Show

```php
public function show(Product $product)
{
	return view('product.show', [
		'product' => Product::findOrFail($product->id)
		// or
		'product' => $product
	]);
}
```

### Edit

```php
public function edit(Product $product)
{
	return view('product.edit', [
		'product' => $product
	]);
}
```

### Update

```php
public function update(Request $request, Product $product)
{
	$request->validate([
		'name' => [
			'required',
			'max:255',
			Rule::unique('products')->ignore($product->id)
		],
		'serial_number' => [
			'required',
			Rule::unique('products')->ignore($product->id),
		]
	]);

	$product->update($request->all());	
	
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
	
	return redirect()
		->route('products.index')
		->with('status', 'Product successfully deleted!');
}
```

## Middleware

```php
public function __construct()
{
	$this->middleware('auth');
}
```

```php
public function __construct()
{
	$this->middleware('auth')
		->only([
			'create',
			'destroy'
		]);
}
```

```php
public function __construct()
{
	$this->middleware('auth')
		->except([
			'index',
			'show'
		]);
}
```