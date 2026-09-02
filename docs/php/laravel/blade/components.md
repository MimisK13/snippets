# Components

[toc]

## Links

- https://jeffochoa.me/efficient-laravel-blade-components-reusability-customization
- https://jump24.co.uk/journal/laravel-blade-components/
- https://beyondco.de/blog/blade-components-for-your-layout
- https://tighten.com/insights/extensible-blade-components/
- https://dev.to/ericchapman/laravel-blade-components-5c9c

## Spinner

Save as `resources/views/components/spinner.blade.php`.

```php
@props(['size' => '4'])

<svg {{ $attributes->merge(['class' => 'animate-spin h-'.$size.' w-'.$size]) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
```

### Usage

```php
<x-spinner />

<x-spinner size="6" class="text-blue-500" />
```

## Chevron-down icon

Save as `resources/views/components/icons/chevron-down.blade.php`.

```php
@props([
    'size' => 6,
])

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-{{ $size }}">
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
```

### Usage

```php
<x-icons.chevron-down />

<x-icons.chevron-down size="8" class="text-gray-500" />
```

