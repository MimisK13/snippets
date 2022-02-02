

## Examples

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
```

### Usage

```php
	$posts = Post::published()->deleted()->get();
```
