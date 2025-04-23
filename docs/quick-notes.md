# Quick Notes

[[TOC]]

## whereAttachedTo() - Laravel 12.x

[Original PR](https://github.com/laravel/framework/pull/55245)

### Before 

```php
$taggedPosts = Post::whereHas('tags', function ($query) use ($tags) {
    $query->whereKey($tags);
})->get();
```

### After

```php
$taggedPosts = Post::whereAttachedTo($tags)->get();
```
