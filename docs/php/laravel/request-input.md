# Request Input

[[TOC]]

Laravel's typed input helpers normally use PHP casts. Laravel 13.40 adds `strict: true`, which returns a fallback when input is not valid for the requested type instead of coercing malformed data.[1][2][3]

Strict casting is intended for optional input where a fallback is correct. Required or business-critical input should still use validation.[1]

## Strict casting

The strict flag is available on `string()`, `str()`, `boolean()`, `integer()`, and `float()`.[1][3][4]

```php
$perPage = $request->integer(
    'per_page',
    25,
    strict: true,
);

$archived = $request->boolean(
    'archived',
    false,
    strict: true,
);

$maxPrice = $request->float(
    'max_price',
    100.0,
    strict: true,
);

$sort = $request->string(
    'sort',
    'created_at',
    strict: true,
);
```

Without strict mode, malformed values may be coerced:

```php
// ?per_page=abc123
$request->integer('per_page', 25); // 0
```

With strict mode, the invalid value uses the fallback:

```php
$request->integer('per_page', 25, strict: true); // 25
```

## Integers

Strict integers use PHP's integer validation rather than a plain cast.[3][4]

```php
$page = $request->integer('page', 1, strict: true);
```

Accepted examples:

```text
123
-5
+5
0
```

Invalid examples use the default:

```text
1.0
078
1e3
2_000
abc123
```

Booleans are not accepted as integers in strict mode.[3][4]

Use a nullable fallback when missing or invalid input must be distinguished from zero:

```php
$limit = $request->integer(
    'limit',
    null,
    strict: true,
);

if ($limit === null) {
    // Missing or invalid.
}
```

The runtime accepts a nullable default, although static analysis may report the documented integer return type.[1]

## Floats

Strict floats accept integer values, decimal values, and scientific notation. Text, separators, `NAN`, infinity, arrays, and booleans use the fallback.[1][3][4]

```php
$maxPrice = $request->float(
    'max_price',
    100.0,
    strict: true,
);
```

Accepted examples:

```text
123
1.23
-1.5
.6
1e3
```

Invalid examples:

```text
1,000
1.ab
NAN
INF
```

## Booleans

Strict booleans recognize explicit true and false representations.[1][3][4]

True values:

```text
1
true
on
yes
```

False values:

```text
0
false
off
no
```

Case and surrounding whitespace are ignored. Any other value uses the default.[1]

```php
$notify = $request->boolean(
    'notify',
    null,
    strict: true,
);

if ($notify === null) {
    // Missing or invalid, rather than valid false.
}
```

Avoid a `false` fallback when the application must distinguish invalid input from an explicit false value.

## Strings

In strict mode, strings, integers, floats, and `Stringable` objects are accepted. Arrays, booleans, and `null` use the fallback.[1][3][4]

```php
$sort = $request
    ->string('sort', 'created_at', strict: true)
    ->lower();
```

The result remains an `Illuminate\Support\Stringable` instance:

```php
$name = $request->str(
    'name',
    'guest',
    strict: true,
);
```

This prevents malformed array input such as `?name[]=value` from causing an array-to-string conversion error.[1][3]

## Lazy defaults

Defaults can be closures. Laravel evaluates the closure only when the value is missing or invalid.[1][3][4]

```php
$teamId = $request->integer(
    'team_id',
    fn () => $request->user()->current_team_id,
    strict: true,
);
```

Strict mode returns the default as provided; it does not cast the fallback to the requested type.[1][3]

Keep the fallback compatible with the code that consumes the result:

```php
$limit = $request->integer(
    'limit',
    fn (): int => config('pagination.default_limit'),
    strict: true,
);
```

## Validated input

The helpers come from `InteractsWithData`, so strict casting is not limited to `Request`. It is also available on classes that use the trait, including `ValidatedInput`, `Fluent`, URI query data, Blade component attributes, and Artisan command input.[1][3][4]

```php
$input = $request->safe();

$perPage = $input->integer(
    'per_page',
    25,
    strict: true,
);
```

```php
use Illuminate\Support\Uri;

$page = Uri::of($nextPageUrl)
    ->query()
    ->integer('page', 1, strict: true);
```

Validation determines whether input is acceptable. Strict casting determines whether an optional value can be safely converted or should fall back.

## Validation vs defaults

Use strict casting for optional filters and presentation choices:

```php
$perPage = $request->integer('per_page', 25, strict: true);
$archived = $request->boolean('archived', false, strict: true);
$sort = $request->string('sort', 'created_at', strict: true);
```

Use validation when bad input should produce an error:

```php
$validated = $request->validate([
    'quantity' => ['required', 'integer', 'min:1'],
    'price' => ['required', 'numeric', 'min:0'],
]);
```

Do not silently replace an invalid order quantity, payment amount, permission, or other business-critical value.[1]

## Good practices

- Use named arguments so `strict: true` is visible.
- Use nullable defaults when invalid input must be distinguishable from a valid zero or false value.
- Use lazy closures for defaults that require database, authentication, or configuration work.
- Validate required and business-critical values before casting them.
- Add tests for missing, valid, invalid, array, boolean, and boundary inputs.
- Keep pagination limits bounded after casting.

```php
$perPage = min(
    $request->integer('per_page', 25, strict: true),
    100,
);
```

## Bad practices

Do not use strict casting to conceal invalid required input:

```php
// Bad: malformed input silently becomes one item.
$quantity = $request->integer('quantity', 1, strict: true);
```

Do not assume strict mode sanitizes or authorizes input. It only validates whether the value can be represented by the requested primitive type.

Do not assume the fallback is cast:

```php
// Bad: the closure returns a string, not an integer.
$count = $request->integer(
    'count',
    fn () => '25',
    strict: true,
);
```

Do not use a non-null boolean fallback if invalid and false have different meanings.

## Version

- The `strict` flag for `string()`, `str()`, `boolean()`, `integer()`, and `float()` was introduced in Laravel Framework `v13.40.0`, PR `#62254`.[2][3]
- `array()` and `collect()` do not accept the strict flag.[3][4]

## Sources

- [1] [Laravel News — Strict request input](https://laravel-news.com/laravel-strict-request-input)
- [2] [Laravel Framework v13.40.0](https://github.com/laravel/framework/releases/tag/v13.40.0)
- [3] [Laravel Framework PR #62254](https://github.com/laravel/framework/pull/62254)
- [4] [Laravel 13.x — `InteractsWithData`](https://github.com/laravel/framework/blob/13.x/src/Illuminate/Support/Traits/InteractsWithData.php)
