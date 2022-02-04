# Factories

[[TOC]]

## Generate

```bash
php artisan make:factory PostFactory
```

## Examples

### Post
```php
public function definition()
{
	return [
		'title'         => $this->faker->unique()->sentence(),
		'slug'          => $this->faker->unique()->slug(),
		'body'          => $this->faker->paragraph(),
		'publish_at'    => now(),
		'user_id'       => User::factory()->create()
	];
}
```
