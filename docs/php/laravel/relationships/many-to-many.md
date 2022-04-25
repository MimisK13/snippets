# Many To Many (polymorphic)

[[TOC]]

```bash 
php artisan make:migration create_photoables_table --create=photoables
```

```php
public function up()
{
	Schema::create('photoables', function (Blueprint $table) {
		$table->bigInteger('photo_id');
		$table->bigInteger('photoable_id');
		$table->string('photoable_type');
	});
}
```

```php
// Photo Model

public function products() : MorphToMany
{
	return $this->morphedByMany(Product::class, 'photoable');
}

public function manufacturers(): MorphToMany
{
	return $this->morphedByMany(Manufacturer::class, 'photoable');
}
```

```php
// Manufacturer Model

public function photos(): morphToMany
{
	return $this->morphToMany(Photo::class, 'photoable');
}	
```

```php
// Product Model

public function photos(): morphToMany
{
	return $this->morphToMany(Photo::class, 'photoable');
}	
```

## Create & Attach


### Create

```php
$manufacturer = Manufacturer::create([
	'name' => 'Example Name 1'
]);

$manufacturer->photos()->create([
	'name' => 'Example Name 1 Photo'
]);
```

### Attach

```php
$product = Product::create([
	'name' => 'Arcs'
]);

$photo = Photo::create([
	'name' => 'Arcs'
]);

$product->photos()->attach($photo);
```
