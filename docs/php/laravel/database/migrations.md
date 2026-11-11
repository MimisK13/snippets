# Migrations

[[TOC]]

## Create a migration

```bash
php artisan make:migration create_products_table
```

## Commands

### fresh

Drop all tables and re-run all migrations

```bash
php artisan migrate:fresh
```

### install

Create the migration repository

```bash
php artisan migrate:install
```

### refresh

Reset and re-run all migrations

```bash
php artisan migrate:refresh
```

### reset

Rollback all database migrations

```bash
php artisan migrate:reset
```

### rollback

Rollback the last database migration

```bash
php artisan make:migration rollback
```

### Migration failure events

Laravel 13.42 adds `MigrationFailed`, which fires when a migration throws. It exposes the same `migration`, `method`, and `name` properties as the other migration events, plus `exception`. The exception is still thrown after the event fires.[1][2]

```php
use Illuminate\Database\Events\MigrationFailed;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;

Event::listen(function (MigrationFailed $event): void {
    Artisan::call('down');

    Log::channel('slack')->critical("Migration [{$event->name}] failed", [
        'exception' => $event->exception->getMessage(),
    ]);
});
```

On MySQL, schema changes such as `ALTER TABLE` are not rolled back when a later statement in the migration fails. Use the event to alert the team or take the application down before users reach the half-applied schema.[1]

## status

Show the status of each migration

```bash
php artisan migrate:status
```

## Sources

- [1] [Laravel News — Laravel 13.42.0](https://laravel-news.com/laravel-13-42-0)
- [2] [Laravel Framework PR #62342](https://github.com/laravel/framework/pull/62342)
