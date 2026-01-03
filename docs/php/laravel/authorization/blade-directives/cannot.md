# @cannot

Το @cannot είναι Blade directive που χρησιμοποιείται για conditional rendering όταν ο χρήστης ΔΕΝ έχει ένα συγκεκριμένο ability.
Αποτελεί το λογικό αντίθετο του @can και είναι χρήσιμο για fallback UI, μηνύματα περιορισμών ή alternative actions.

---

[[TOC]]

---

## Usage examples

### Model-based policy

```php
@cannot('update', $post)
    <span>You cannot edit this post.</span>
@endcannot
```

### Class-level ability

```php
@cannot('create', \App\Models\Post::class)
    <p>You are not allowed to create posts.</p>
@endcannot
```

### Gate-based ability

```php
@cannot('access-admin')
    <x-alert type="warning">
        Admin access required
    </x-alert>
@endcannot
```

### Wrapping fallback components

```php
@cannot('viewAny', \App\Models\Post::class)
    <empty-state message="No access to posts" />
@endcannot
```

### Inverse UI logic

```php
@can('delete', $post)
    <button>Delete</button>
@endcan
```

```php
@cannot('delete', $post)
    <span>Deletion disabled</span>
@endcannot
```

💡 Το @cannot είναι απλώς το inverse του @can και βασίζεται στο ίδιο authorization system (policies / gates). Χρησιμοποιείται αποκλειστικά στο view layer.
