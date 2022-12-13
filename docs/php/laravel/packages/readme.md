# Packages

[[TOC]]

## Development
- [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar)
- [Laravel N+1 Query Detector](https://github.com/beyondcode/laravel-query-detector)
- [Clockwork](https://github.com/itsgoingd/clockwork)
- [Livewire](https://laravel-livewire.com/)

## Authentication

- [Laravel UI](https://github.com/laravel/ui)
- [Laravel Fortify](https://github.com/laravel/fortify)
- [Laravel Jetstream](https://github.com/laravel/jetstream)

### Laravel Breeze
- [Laravel Breeze](https://github.com/laravel/breeze)

#### Installation

```bash
composer require laravel/breeze --dev

php artisan migrate

php artisan breeze:install

npm install
npm run dev
php artisan migrate
```

## Permissions
- [Laravel-Permission](https://github.com/spatie/laravel-permission)

## Charts
- [Laravel-Charts](https://github.com/LaravelDaily/laravel-charts)
- [Chartisan](https://github.com/Chartisan/Charts)

## Media
- [Laravel Media Library](https://github.com/spatie/laravel-medialibrary)


## Flash Alerts Notifications

- [spatie/laravel-flash](https://github.com/spatie/laravel-flash)

#### Installation

```bash
composer require spatie/laravel-flash
```

#### Usage

```php
class MyController
{
    public function store()
    {
        // …

        flash('My message');

        return back();
    }
}
```

```php
@if(flash()->message)
    <div>
        {{ flash()->message }}
    </div>
@endif
```

### Add Service Provider

```bash
php artisan make:provider FlashServiceProvider
```

```php
// FlashServiceProvider

public function boot()
{
	Flash::levels([
		'success' => 'alert-success',
		'warning' => 'alert-warning',
		'error' => 'alert-error',
	]);
}
```

```php
// View

@if (flash()->message)
    <div class="{{ flash()->class }}">
        {{ flash()->message }}
    </div>

    @if(flash()->level === 'error')
        This was an error.
    @endif
@endif
```


## Others
- [cviebrock/eloquent-sluggable](https://github.com/cviebrock/eloquent-sluggable) 
- [spatie/laravel-sluggable](https://github.com/spatie/laravel-sluggable)
- [SpartnerNL/Laravel-Excel](https://github.com/SpartnerNL/Laravel-Excel)
- [spatie/laravel-collection-macros](https://github.com/spatie/laravel-collection-macros)



## Links
- [drawSQL](https://drawsql.app/)
