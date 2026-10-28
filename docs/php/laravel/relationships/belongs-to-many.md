# Belongs to many

[[TOC]]

```bash 
php artisan make:migration create_event_venue_table
```

### Migrations

Example 1

```php
public function up()
{
	Schema::create('event_venue', function (Blueprint $table) {
		$table->unsignedBigInteger('event_id');
		$table->foreign('event_id', 'event_id_fk_7627458')->references('id')->on('events')->onDelete('cascade');
		$table->unsignedBigInteger('venue_id');
		$table->foreign('venue_id', 'venue_id_fk_7627458')->references('id')->on('venues')->onDelete('cascade');
	});
}
```

Example 2

```php
public function up()
{
	Schema::create('event_venue', function (Blueprint $table) {
            $table->foreignIdFor(Event::class)->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignIdFor(Venue::class)->constrained()->cascadeOnUpdate()->cascadeOnDelete();
	});
}
```

### Relationships

```php
// Event Model

public function venues(): BelongsToMany
{
	return $this->belongsToMany(Venue::class);
}
```

```php
// Venue Model

public function events(): BelongsToMany
{
	return $this->belongsToMany(Event::class);
}	
```

## Force create

Laravel 13.39.0 adds relationship-aware `forceCreate()` and `forceCreateQuietly()` to `BelongsToMany`.[1][2]

```php
$user = $team->users()->forceCreate(
    attributes: [
        'name' => 'Bob',
        'is_admin' => true,
    ],
    joining: [
        'role' => 'owner',
    ],
);
```

The method bypasses mass-assignment protection, saves the related model, and attaches it to the parent. Before this relation-specific method, the call could fall through to the Eloquent builder, create the model, and leave it unattached.[2]

Use the quiet variant when model events must not be dispatched:

```php
$user = $team->users()->forceCreateQuietly([
    'name' => 'Alice',
    'is_admin' => false,
]);
```

Use `forceCreate()` only with trusted attributes. For request data, prefer `create()` with an explicit `$fillable` or `$guarded` policy.

## Restore or create

`restoreOrCreate()` and `createOrRestore()` now preserve relationship constraints when restoring soft-deleted models or creating replacements.[1][3][4]

```php
$role = $user->roles()->restoreOrCreate(
    ['name' => 'editor'],
    ['label' => 'Editor'],
    ['assigned_by' => auth()->id()],
);
```

```php
$role = $user->roles()->createOrRestore(
    ['name' => 'editor'],
    ['label' => 'Editor'],
    ['assigned_by' => auth()->id()],
);
```

`restoreOrCreate()` looks for an existing record, including trashed records, before creating. `createOrRestore()` attempts creation first and restores the matching soft-deleted record after a unique-constraint conflict. On `BelongsToMany`, both methods ensure the resulting model is attached to the parent.[3]

The same restore/create behavior is available on has-one, has-many, has-one-through, and has-many-through relationships.[3][4]

## Sources

- [1] [Laravel Framework v13.39.0](https://github.com/laravel/framework/releases/tag/v13.39.0)
- [2] [Laravel Framework PR #62136](https://github.com/laravel/framework/pull/62136)
- [3] [Laravel Framework PR #62146](https://github.com/laravel/framework/pull/62146)
- [4] [Laravel Framework PR #62204](https://github.com/laravel/framework/pull/62204)
