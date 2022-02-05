# Rules

[[TOC]]

## Accepted

## Accepted If

## Active URL

## after:date

### Example

```php
'start_date' => 'required|date|after:tomorrow'
```

```php
'finish_date' => 'required|date|after:start_date'
```

## After Or Equal (Date)



## Alpha

## Alpha Dash

## Alpha Numeric

## Array

## Bail

## Before (Date)

## Before Or Equal (Date)

## Between

## Boolean

## Confirmed

## Current Password

```php
'password' => 'current_password:api'
```

## Date

## Date Equals

## Date Format

## Declined

## Declined If

## Different

## Digits

## Digits Between

## Dimensions (Image Files)

## Distinct

## Email

```php
'email' => 'email:rfc,dns'
```

## Ends With

## Enum

## Exclude

## Exclude If

## Exclude Unless

## Exclude Without

## Exists (Database)

## File

## Filled

## Greater Than

## Greater Than Or Equal

## Image (File)

## In

## In Array

## Integer

## IP Address

## MAC Address

## JSON

## Less Than

## Less Than Or Equal

## Max

## MIME Types

## MIME Type By File Extension

## Min

## Multiple Of

## Not In

## Not Regex

## Nullable

## Numeric

## Password

## Present

## Prohibited

## Prohibited If

## Prohibited Unless

## Prohibits

## Regular Expression

## Required

## Required If

## Required Unless

## Required With

## Required With All

## Required Without

## Required Without All

## Same

## Size

## Sometimes

## Starts With

## String

## Timezone

## Unique (Database)


```php
'email' => 'unique:App\Models\User,email_address'
```

```php
'email' => 'unique:users,email_address'
```

### Forcing A Unique Rule To Ignore A Given ID:

```php
'email' => [
	'required',
	Rule::unique('users')->ignore($user->id),
],
```

```php
'title' => ['required', 'max:255', Rule::unique('posts')->ignore($this->post)],
'slug' => ['required', 'max:255', Rule::unique('posts')->ignore($this->post)],
```

#### Adding Additional Where Clauses:

```php
'email' => Rule::unique('users')->where(function ($query) {
    return $query->where('account_id', 1);
})
```

## URL

```php
'url' => [
	'required',
	'url'
],
```

## UUID
