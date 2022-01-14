# Installation

[[TOC]]

## Via Composer

```shell
composer require livewire/livewire
```

Include the JavaScript (on every page that will be using Livewire).

```php
...
    @livewireStyles
</head>
<body>
    ...
 
    @livewireScripts
</body>
</html>
```

## Create Component

```shell
php artisan make:livewire counter
```

## Include Component

```php
<head>
    ...
    @livewireStyles
</head>
<body>
    <livewire:counter /> 
 
    ...
 
    @livewireScripts
</body>
</html>
```