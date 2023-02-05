# Tinker

[[TOC]]

### Create User

```bash
User::create(["name"=> "admin","email"=>"admin@admin.com","password"=>bcrypt("123456")]);
```

```bash
App\Models\User::factory(10)->create();
```
