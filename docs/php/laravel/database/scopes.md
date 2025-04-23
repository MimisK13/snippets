# Scopes

[[TOC]]

## Local Scopes

Local scopes allow you to encapsulate common query logic directly within your Laravel Eloquent models. 
By creating local scopes, you can easily apply specific constraints to your database queries, making your code more readable and maintainable.

### Examples:

Scope by Status: Implement a local scope to retrieve only active users from the database.

```php
// User.php (Eloquent Model)

public function scopeActive($query)
{
    return $query->where('status', 'active');
}

// Usage:
$activeUsers = User::active()->get();
```

Scope by Category: Create a scope to fetch products belonging to a specific category.

```php
// Product.php (Eloquent Model)

public function scopeByCategory($query, $categoryId)
{
    return $query->where('category_id', $categoryId);
}

// Usage:
$categoryProducts = Product::byCategory(1)->get();
```

Scope with Parameters: Develop a scope to filter results based on user-defined criteria like date ranges.

```php
// Post.php (Eloquent Model)

public function scopePublishedBetween($query, $startDate, $endDate)
{
    return $query->whereBetween('published_at', [$startDate, $endDate]);
}

// Usage:
$postsBetweenDates = Post::publishedBetween('2023-01-01', '2023-07-31')->get();
```

## Global Scopes

Global scopes are automatically applied to all queries on a specific Eloquent model. 
They are excellent tools for defining universal restrictions and ensuring consistency throughout your application.

### Examples:

Global Scope for Multi-Tenancy: Set up a global scope to retrieve data specific to a particular tenant in a multi-tenant application.

```php
// TenantScope.php (Global Scope)

protected static function booted()
{
    static::addGlobalScope('tenant', function (Builder $builder) {
        $builder->where('tenant_id', auth()->user()->tenant_id);
    });
}

// Usage:
$tenantPosts = Post::all(); // Automatically filtered for the authenticated user's tenant
```

Soft Deleting with Global Scope: Implement a global scope to automatically filter out soft-deleted records from all queries.

```php
// SoftDeletingScope.php (Global Scope)

protected static function booted()
{
    static::addGlobalScope('soft_delete', function (Builder $builder) {
        $builder->whereNull('deleted_at');
    });
}

// Usage:
$activePosts = Post::all(); // Excludes soft-deleted posts
```

## Dynamic Scopes

Dynamic scopes offer the ability to create versatile query constraints that accept parameters during runtime. This flexibility enhances the adaptability and power of your database queries.

### Example

Filtering Products by Price: Create a dynamic scope that allows users to filter products based on price ranges.

```php
// Product.php (Eloquent Model)

public function scopePriceRange($query, $minPrice, $maxPrice)
{
    return $query->whereBetween('price', [$minPrice, $maxPrice]);
}

// Usage:
$affordableProducts = Product::priceRange(10, 50)->get();
```

Sorting Records Dynamically: Implement a dynamic scope that enables users to sort records based on different criteria.

```php
// Post.php (Eloquent Model)

public function scopeSortBy($query, $column, $direction = 'asc')
{
    return $query->orderBy($column, $direction);
}

// Usage:
$sortedPosts = Post::sortBy('created_at', 'desc')->get();
```

## Utilizing Laravel Scope for Security

Laravel Scopes can play a pivotal role in enhancing the security of your application. 
By controlling data access and permissions, you can bolster your app’s protection against unauthorized access.

### Example

Securing User Profiles: Develop a scope that restricts access to user profiles, allowing only the profile owner or admin to view sensitive information.

```php
// UserProfile.php (Eloquent Model)

public function scopeAccessibleByUser($query, $userId)
{
    return $query->where(function ($query) use ($userId) {
        $query->where('user_id', $userId)->orWhere('is_public', true);
    });
}

// Usage:
$userProfile = UserProfile::accessibleByUser(auth()->user()->id)->get();
```

Permissions Management: Create a scope to manage user permissions and access rights to specific resources.

```php
// Resource.php (Eloquent Model)

public function scopeAccessibleByRole($query, $role)
{
    return $query->where('required_role', $role);
}

// Usage:
$accessibleResources = Resource::accessibleByRole('admin')->get();
```

## Best Practices for Laravel Scope Usage

To make the most of Laravel Scopes, it’s essential to follow best practices that ensure maintainable and efficient code.

### Example

Scope Reusability: Illustrate the benefits of reusable scopes and how they contribute to a cleaner codebase.

```php
// Post.php (Eloquent Model)

public function scopePublished($query)
{
    return $query->where('published', true);
}

public function scopeFeatured($query)
{
    return $query->where('featured', true);
}

// Usage:
$featuredPosts = Post::published()->featured()->get();
```

Avoiding Overly Complex Scopes: Demonstrate the importance of keeping scopes simple and focused to prevent potential issues.

```php
// Order.php (Eloquent Model)

public function scopeShippedWithinDays($query, $days)
{
    return $query->whereDate('shipped_at', '>=', now()->subDays($days));
}

// Usage:
$recentOrders = Order::shippedWithinDays(30)->get();
```

Testing Scopes: Show how to write unit tests for scopes to ensure their correctness and avoid regressions.

```php
// Tests\Feature\PostTest.php

public function testScopePublished()
{
    factory(Post::class)->create(['published' => true]);
    factory(Post::class)->create(['published' => false]);

    $publishedPosts = Post::published()->get();

    $this->assertCount(1, $publishedPosts);
}
```

Source: https://arjunamrutiya.medium.com/mastering-laravel-scope-a-comprehensive-guide-with-code-examples-daa54a4ee633

## Snippets

```php
public function scopePublished($query)
{
	return $query->where('published', true);
}

public function scopeUnpublished($query)
{
	return $query->where('published', false);
}

public function scopeDeleted($query)
{
	return $query->withTrashed();
}

public function scopeToday($query)
{
	return $query->whereDate('created_at', Carbon::today());
}

public function scopeYear($query)
{
	return $query->whereYear('created_at', Carbon::now()->format('Y'));
}

public function scopeAdmin($query)
{
	return $query->where('admin', 1);
}

public function scopeActive($query)
{
	return $query->where('status', 'active');
}

public function scopeByCategory($query, $categoryId)
{
    return $query->where('category_id', $categoryId);
}

public function scopePublishedBetween($query, $startDate, $endDate)
{
    return $query->whereBetween('published_at', [$startDate, $endDate]);
}
```

### Usage

```php
$posts = Post::published()->deleted()->get();

$activeUsers = User::active()->get();

$categoryProducts = Product::byCategory(1)->get();

$postsBetweenDates = Post::publishedBetween('2023-01-01', '2023-07-31')->get();
```

## New

### Before

```php
protected function scopePopular(Builder $query): void
{
    $query->where('votes', '>', 100);
}
```

### After v12.x

```php
use Illuminate\Database\Eloquent\Attributes\Scope;

#[Scope]
protected function popular(Builder $query): void
{
    $query->where('votes', '>', 100);
}
```
