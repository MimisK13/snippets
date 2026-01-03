# @canany


Το @canany είναι Blade directive που χρησιμοποιείται για conditional rendering όταν ο χρήστης έχει **ΤΟΥΛΑΧΙΣΤΟΝ ΕΝΑ** από πολλά abilities.

Χρησιμοποιείται όταν ένα UI element πρέπει να εμφανίζεται αν ο χρήστης έχει **οποιοδήποτε** από τα επιτρεπόμενα permissions.

---

[[TOC]]

---

## Usage examples

### Model-based policy (multiple abilities)

```php
@canany(['update', 'publish'], $post)
    <button>Edit or Publish</button>
@endcanany
```

### Class-level abilities

```php
@canany(['create', 'import'], \App\Models\Post::class)
    <a href="{{ route('posts.create') }}">New Post</a>
@endcanany
```

### Gate-based abilities

```php
@canany(['access-admin', 'access-moderator'])
    <x-admin-panel />
@endcanany
```

### Wrapping components

```php
@canany(['viewAny', 'export'], \App\Models\Post::class)
    <livewire:posts-table />
@endcanany
```

### Combined UI logic

```php
@can('delete', $post)
    <button>Delete</button>
@endcan
```

```php
@canany(['restore', 'forceDelete'], $post)
    <button>Advanced actions</button>
@endcanany
```

💡 Το @canany επιστρέφει true αν **οποιοδήποτε** από τα abilities επιτρέπεται από το authorization system (policies / gates).  
Χρησιμοποιείται αποκλειστικά στο view layer.
