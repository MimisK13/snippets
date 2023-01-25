# Scopes

[[TOC]]

## Trait

```php
namespace App\Traits;

trait RecentRecords {

    public function scopeRecent($query)
    {
        return $query->where($this->getTable() . '.created_at', '>', now()->subDays(7));
    }
}
```

## Models

### Post Model

```php
use App\Traits\RecentRecords;

class Post extends Model
{
    use RecentRecords;   
    
   // ...
}
```

### Comment Model

```php
use App\Traits\RecentRecords;

class Comment extends Model
{
    use RecentRecords;   
    
   // ...
}
```

## Controllers

### Post Controller

```php
class PostController extends Controller
{
    public function index()
    {
        $posts = Post::recent()->get();
        
        return view('posts', compact('posts'));
    }
}
```

### Comment Controller

```php
class CommentController extends Controller
{
    public function index()
    {
        $comments = Comment::recent()->get();
        
        return view('comments', compact('comments'));
    }
}
```
