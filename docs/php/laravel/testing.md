# Testing

[[TOC]]

## Create Test

```bash
php artisan make:test UserTest
```

## Running

Run all tests

```bash
php artisan test
```

Run specific test

```bash
php artisan test --filter="PostTest"
```

## Examples

### setup()

```php
private $user;

public function setUp(): void
{
	parent::setUp();

	$this->user = User::factory()->create([
		'email'     => 'admin@admin.com',
		'password'  => bcrypt('password')
	]);
}
```
