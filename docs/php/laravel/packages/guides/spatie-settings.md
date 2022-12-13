# Spatie/Settings

[[TOC]]

## Installation

Install package via composer:

```bash
composer require spatie/laravel-settings
```

Publish and run migrations:

```bash
php artisan vendor:publish --provider="Spatie\LaravelSettings\LaravelSettingsServiceProvider" --tag="migrations"
php artisan migrate
```

Publish config file:
```bash 
php artisan vendor:publish --provider="Spatie\LaravelSettings\LaravelSettingsServiceProvider" --tag="settings"
```

## Usage

Create migration

```bash
php artisan make:settings-migration CreateGeneralSettings
```

This command will create a new file in database/settings where you can add the properties and their default values:

```php
use Spatie\LaravelSettings\Migrations\SettingsMigration;

class CreateGeneralSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('general.site_name', 'Spatie');
        $this->migrator->add('general.site_active', true);
    }
}
```

We add the properties site_name and site_active here to the general group with values Spatie and true.

You should migrate your database to add the properties:

```bash 
php artisan migrate
```

Create Setting Class ```app\Settings\GeneralSettings```

```php
//app/settings/GeneralSettings.php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class GeneralSettings extends Settings
{
    public string $site_name;

    public static function group(): string
    {
        return 'general';
    }
}
```

Now, you will have to add this settings class to the settings.php config file in the settings array so it can be loaded by Laravel:

```php
//config/app.php

/*
 * Each settings class used in your application must be registered, you can
 * put them (manually) here.
 */
'settings' => [
    App\Settings\GeneralSettings::class
],
```


## Custom

Create ServicesProvider

```bash
php artisan make:provider SettingsProvider
```

- Register SettingsProvider

```php
//config/app.php

'providers' => [

    /*
     * Application Service Providers...
     */
    
    ...
    
    \App\Providers\SettingsProvider::class,
]
```

Share settings with Views globally

```php
\\ app\Providers\SettingsProvider

use View;
use App\Settings\GeneralSettings;

...

public function boot()
{
	$settings = resolve(GeneralSettings::class);

	View::share('settings', $settings);
}
```

Create Controller

```bash
php artisan make:controller Settings\GeneralSettingsController
```

```php
    public function index()
    {
        return view('admin.settings.index');
    }

    public function update(GeneralSettingsRequest $request, GeneralSettings $settings)
    {       
        $settings->site_name = $request->input('site_name');
        $settings->site_email = $request->input('site_email');
        $settings->site_active = $request->input('site_active');
        $settings->save();

        return redirect()->back();
    }
```
