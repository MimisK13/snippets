# Fluent Rule Builders

[[TOC]]

Laravel 13.36.0 adds fluent builders to `Illuminate\Validation\Rule` for the validation rules that previously required string syntax.[1][2] String rules remain supported, and both styles can be mixed in the same validation array.[1]

## Basic usage

```php
use Illuminate\Validation\Rule;

$request->validate([
    'email' => [
        Rule::requiredWithout('phone'),
        'email',
    ],
    'phone' => [
        Rule::requiredWithout('email'),
    ],
    'website' => [
        Rule::nullable(),
        Rule::url()->protocols(['https']),
    ],
    'device_id' => [
        Rule::uuid()->version(4),
    ],
    'tags.*' => [
        Rule::distinct()->ignoreCase(),
    ],
]);
```

Use the builder when it makes a rule easier to discover, compose, or parameterize. There is no requirement to rewrite every existing string rule.

## Rules without parameters

Parameterless builders return the rule name as a string, so they can be used directly in a rule array:

```php
use Illuminate\Validation\Rule;

$request->validate([
    'name' => [Rule::required(), 'string', 'max:255'],
    'notes' => [Rule::nullable(), 'string'],
    'is_active' => [Rule::boolean()],
]);
```

Examples include `accepted()`, `bail()`, `boolean()`, `filled()`, `json()`, `nullable()`, `present()`, `required()`, `sometimes()`, and `ulid()`.[1]

`Rule::boolean(true)` produces `boolean:strict`, which accepts only `true` and `false` rather than Laravel's normal boolean-like values.[1]

## Fields and values

Pass related fields or accepted values as method arguments instead of embedding them in a comma-separated string:

```php
use Illuminate\Validation\Rule;

$request->validate([
    'terms' => [
        Rule::acceptedIf('plan', 'Team, Annual'),
    ],
    'company_name' => [
        Rule::requiredIfAccepted('is_business'),
    ],
    'billing' => [
        Rule::required(),
        Rule::requiredArrayKeys('street', 'city', 'postcode'),
    ],
    'coupon_code' => [
        Rule::nullable(),
        Rule::prohibits('gift_card'),
    ],
]);
```

The builders preserve values containing commas, quotes, pipes, or backslashes without relying on string-rule parsing.[1] This is particularly useful when a validation value comes from configuration or a domain constant rather than a simple literal.

## Rules with options

Some builders expose a fluent API for their options:

```php
use Illuminate\Validation\Rule;

$request->validate([
    'website' => [
        Rule::url()->protocols(['https']),
    ],
    'address_ip' => [
        Rule::ip()->version(6),
    ],
    'identifier' => [
        Rule::uuid()->version('nil'),
    ],
    'password_confirmation' => [
        Rule::confirmed()->customField('repeat_password'),
    ],
    'current_password' => [
        Rule::currentPassword()->guard('admin'),
    ],
    'date' => [
        Rule::date()->equals(today()),
    ],
]);
```

The `ip()->version()` builder accepts `4` or `6`. The UUID builder also supports the documented `nil` and `max` variants; invalid versions should be rejected rather than silently converted.[1]

## Form Requests

```php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CheckoutRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'plan' => [
                Rule::required(),
                Rule::in(['starter', 'Team, Annual']),
            ],
            'terms' => [
                Rule::acceptedIf('plan', 'Team, Annual'),
            ],
            'company_name' => [
                Rule::requiredIfAccepted('is_business'),
            ],
            'website' => [
                Rule::nullable(),
                Rule::url()->protocols(['https']),
            ],
            'emails.*' => [
                Rule::distinct()->ignoreCase(),
                'email',
            ],
        ];
    }
}
```

## Good practice

Use builders for rules with multiple arguments or options, especially when values may contain delimiters:

```php
'plan' => [
    Rule::required(),
    Rule::in(['starter', 'Team, Annual']),
],
```

Keep the rule array readable and mix builders with simple strings when that is clearer:

```php
'username' => [
    Rule::required(),
    'string',
    'max:50',
    Rule::unique('users'),
],
```

Use named constants or enums for domain values instead of scattering magic strings through builders:

```php
'plan' => [
    Rule::in(Plan::values()),
],
```

## Bad practice

Do not keep manually constructing a parameterized string when its value may contain a comma:

```php
// Bad: the comma is interpreted as a parameter separator.
'terms' => 'accepted_if:plan,Team, Annual',
```

Prefer the parameterized builder:

```php
'terms' => [
    Rule::acceptedIf('plan', 'Team, Annual'),
],
```

Do not assume every builder is an object. Parameterless builders such as `Rule::required()` return a string and should be placed in a rule array like any other string rule.[1]

Do not remove string rules from an older application solely to adopt this feature. Use builders where they improve clarity, and check the application's minimum Laravel version before using them.

## Version

- Fluent builders for the remaining string-only validation rules introduced in Laravel Framework `v13.36.0`.[1][2]
- The implementation was contributed in `laravel/framework#61833`.[2]
- Existing string validation syntax remains supported.[1]

## Sources

- [1] [Laravel News — Fluent validation rule builders](https://laravel-news.com/laravel-validation-rule-builders)
- [2] [Laravel Framework PR #61833](https://github.com/laravel/framework/pull/61833)
- [3] [Laravel Framework v13.36.0](https://github.com/laravel/framework/releases/tag/v13.36.0)
- [4] [Laravel 13.x — Validation](https://laravel.com/docs/13.x/validation)
