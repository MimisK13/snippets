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

### Model Relationships

```php
// Event Model

public function Venues(): BelongsToMany
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
