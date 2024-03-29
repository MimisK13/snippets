# Seeders

[[TOC]]

## Generate

```bash
php artisan make:seeder UserSeeder
```

## Writing Seeders

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('password'),
        ]);
    }
}
```

or

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('password'),
        ]);
    }
}
```

## Multiple

```php
	$users = collect([
		[
			'name' => 'admin',
			'email' => 'admin@admin.com',
			'password' => bcrypt('password'),
		],
		[
			'name' => 'guest',
			'email' => 'guest@guest.com',
			'password' => bcrypt('password'),
		]
	]);
	
	$users->each(function ($user){
		User::create([
			'name' => $user['name'],
			'email' => $user['email'],
			'password' => $user['password']
		]);
	});
```

or

```php
	$users = collect([
		[
			'name' => 'admin',
			'email' => 'admin@admin.com',
			'password' => bcrypt('password'),
		],
		[
			'name' => 'guest',
			'email' => 'guest@guest.com',
			'password' => bcrypt('password'),
		]
	]);
	
	$users->each(function ($user){
		User::insert($user);
	});
```

## Json

```php

	public function run(): void
	{
		$json = File::get(path: 'database/json/posts.json');
		$posts = collect(json_decode($json));
		
		
		$posts->each(function ($post){
			Post::create([
				'title' 		=> $post->title,			
				'slug' 			=> $post->slug,
				'excerpt' 		=> $post->excerpt,
				'description' 	=> $post->description,
				'is_published' 	=> $post->is_published,
				'min_to_read' 	=> $post->min_to_read
			]);
		});
	}
```

## Registering

```php
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class
        ]);
    }
}
```

## Running Seeders

```bash
php artisan db:seed

php artisan db:seed --class=UserSeeder
```

### On migrations

```bash
php artisan migrate:fresh --seed
```
