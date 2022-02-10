# Testing Controller Methods

[[TOC]]

## setUp

```php

private $user;

public function setUp(): void
{
	parent::setUp();

	$this->user = factory(User::class)->create([
		'name'      => 'admin',
		'email'     => 'test@test.com',
		'password'  => bcrypt('password')
	]);

	factory(Role::class)->create(['id' => 1, 'title' => 'Admin']);
}
```

## index

```php
public function test_members_index()
{
	factory(Permission::class)->create(['id' => 1, 'title' => 'member_access']);
	Role::findOrFail(1)->permissions()->sync(1, 1);
	User::findOrFail(1)->roles()->sync(1);

	$response = $this->actingAs($this->user)->get(route('admin.members.index'));

	$response->assertSee('Μέλη');
}
```

## show

```php
public function test_members_show()
{
	factory(Permission::class)->create(['id' => 1, 'title' => 'member_show']);
	Role::findOrFail(1)->permissions()->sync(1, 1);
	User::findOrFail(1)->roles()->sync(1);

	$status = factory(Status::class)->create(['id'=> 1]);
	$city = factory(City::class)->create(['id' => 1]);
	$fund = factory(InsuranceFund::class)->create(['id' => 1]);

	$member = factory(Member::class)->make([
		'id'                => 1,
		'registration_no'   => 1,
		'registered_at'     => now(),
		'first_name'        => 'μαλακας',
		'last_name'         => 'malakas',
		'gender_id'         => '1',
		'email'             => 'mimisk88@malakas.gr',
		'father_name'       => 'arxi malakas',
		'born_at'           => now(),
		'card_id'           => 'AB012345678',
		'phone'             => '6945187364',
		'city_id'           => $city,
		'address'           => '',
		'address_no'        => '',
		'area'              => 'HARILAOU',
		'postal_code'       => '54249',
		'tax_number'        => 147437462,
		'insurance_fund_id' => $fund,
		'ssn_id'            => 12088802710,
		'status_id'         => $status,
	]);
	$member->save();

	// Go to Member Create Page
	$response = $this->actingAs($this->user)->get(route('admin.members.show', ['member' => 1]));

	$response->assertSee('Μέλη');
}
```

## edit

```php
public function test_member_edit()
{
	factory(Permission::class)->create(['id' => 1, 'title' => 'member_edit']);
	Role::findOrFail(1)->permissions()->sync(1, 1);
	User::findOrFail(1)->roles()->sync(1);

	$status = factory(Status::class)->create(['id'=> 1]);
	$city = factory(City::class)->create(['id' => 1]);
	$fund = factory(InsuranceFund::class)->create(['id' => 1]);

	$member = factory(Member::class)->make([
		'id'                => 1,
		'registration_no'   => 1,
		'registered_at'     => now(),
		'first_name'        => 'μαλακας',
		'last_name'         => 'malakas',
		'gender_id'         => '1',
		'email'             => 'mimisk88@malakas.gr',
		'father_name'       => 'arxi malakas',
		'born_at'           => now(),
		'card_id'           => 'AB012345678',
		'phone'             => '6945187364',
		'city_id'           => $city,
		'address'           => '',
		'address_no'        => '',
		'area'              => 'HARILAOU',
		'postal_code'       => '54249',
		'tax_number'        => 147437462,
		'insurance_fund_id' => $fund,
		'ssn_id'            => 12088802710,
		'status_id'         => $status,
	]);
	$member->save();

	//dd($member->id);

	// Go to Member Create Page
	$response = $this->actingAs($this->user)
		//->get(route('admin.members.edit', ['member' => $member->id]));
		->get(route('admin.members.edit', ['member' => $member]));

	//
	$response->assertSee('Επεξεργασία');

	$data = [
		'registration_no'   => 1,
		'registered_at'     => now(),
		'first_name'        => 'μαλακας',
		'last_name'         => 'malakas',
		'gender_id'         => '1',
		'email'             => 'mimisk88@malakas.gr',
		'father_name'       => 'arxi malakas',
		'born_at'           => now(),
		'card_id'           => 'AB012345678',
		'phone'             => '6945187364',
		'city_id'           => 1,
		'address'           => '1',
		'address_no'        => '1',
		'area'              => 'HARILAOU',
		'postal_code'       => '54249',
		'tax_number'        => 147437462,
		'insurance_fund_id' => 1,
		'ssn_id'            => 12088802710,
		'status_id'         => 1,
	];

	$response = $this->patch(route('admin.members.update', ['member' => $member]), $data);

	$response->assertRedirect(route('admin.members.edit', ['member' => $member]));
}
```

## store

```php
public function test_member_store()
{
	//dd(URL::current());

	factory(Permission::class)->create(['id' => 1, 'title' => 'member_create']);
	Role::findOrFail(1)->permissions()->sync(1, 1);
	User::findOrFail(1)->roles()->sync(1);

	// Go to Member Create Page
	$response = $this->actingAs($this->user)->get(route('admin.members.create'));

	//
	$response->assertSee('Εγγραφή Μέλους');

	$response = $this->actingAs($this->user)->call('POST', '/admin/members', [
			'registration_no'   => 1,
			'registered_at'     => now(),
			'first_name'        => 'μαλακας',
			'last_name'         => 'malakas',
			'gender_id'         => '1',
			'email'             => 'mimisk88@malakas.gr',
			'father_name'       => 'arxi malakas',
			'born_at'           => now(),
			'card_id'           => 'AB012345678',
			'phone'             => '6945187364',
			'city_id'           => factory(City::class)->create()->id,
			'address'           => '',
			'address_no'        => '',
			'area'              => 'HARILAOU',
			'postal_code'       => '54249',
			'tax_number'        => 147437462,
			'insurance_fund_id' => factory(InsuranceFund::class)->create()->id,
			'ssn_id'            => 12088802710,
			'status_id'         => factory(Status::class)->create()->id,
		]);

	$response->assertRedirect('/admin/members');
}
```

## destroy

```php
public function test_member_delete()
{
	factory(Permission::class)->create(['id' => 1, 'title' => 'member_delete']);

	Role::findOrFail(1)->permissions()->sync(1, 1);
	User::findOrFail(1)->roles()->sync(1);

	factory(Status::class)->create(['id'=> 1]); // Active Status
	factory(Status::class)->create(['id'=> 5]); // Deleted Status
	factory(City::class)->create(['id' => 1]);
	factory(InsuranceFund::class)->create(['id' => 1]);

	$member = factory(Member::class)->create([
		'id'                => 1,
		'registration_no'   => 1,
		'registered_at'     => now(),
		'first_name'        => 'μαλακας',
		'last_name'         => 'malakas',
		'gender_id'         => '1',
		'email'             => 'mimisk88@malakas.gr',
		'father_name'       => 'arxi malakas',
		'born_at'           => now(),
		'card_id'           => 'AB012345678',
		'phone'             => '6945187364',
		'city_id'           => factory(City::class)->create()->id,
		'address'           => '',
		'address_no'        => '',
		'area'              => 'HARILAOU',
		'postal_code'       => '54249',
		'tax_number'        => 147437462,
		'insurance_fund_id' => factory(InsuranceFund::class)->create()->id,
		'ssn_id'            => 12088802710,
		'status_id'         => factory(Status::class)->create()->id,
	]);

	// Go to Member Create Page
	$response = $this->actingAs($this->user)
		->delete(route('admin.members.destroy', ['member' => $member]));

	$response->assertRedirect();
}
```