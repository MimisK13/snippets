# Migrations

[[TOC]]

## Create a new migration file

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

### status

Show the status of each migration

```bash
php artisan migrate:status
```
