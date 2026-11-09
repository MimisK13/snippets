# Middleware

[[TOC]]

Laravel 13.40 adds precise middleware insertion helpers. They place custom middleware immediately before or after an existing global or grouped middleware without copying Laravel's default stack.[1][2][3]

## Global stack

Use `insertBefore()` and `insertAfter()` inside `withMiddleware()` in `bootstrap/app.php`.[1][3]

```php
use App\Http\Middleware\BlockBannedIps;
use App\Http\Middleware\SanitizeInput;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Foundation\Http\Middleware\TrimStrings;
use Illuminate\Http\Middleware\TrustProxies;

->withMiddleware(function (Middleware $middleware): void {
    $middleware->insertAfter(
        TrustProxies::class,
        BlockBannedIps::class,
    );

    $middleware->insertBefore(
        TrimStrings::class,
        SanitizeInput::class,
    );
})
```

The first argument identifies an existing middleware. The second accepts one middleware class or an array.[3][5]

```php
$middleware->insertBefore(TrimStrings::class, [
    NormalizeUnicode::class,
    SanitizeInput::class,
]);
```

## Middleware groups

Use the group variants when ordering middleware inside `web`, `api`, or a custom group:[1][3]

```php
use App\Http\Middleware\SetLocaleFromSession;
use Illuminate\Session\Middleware\StartSession;

$middleware->insertAfterInGroup(
    'web',
    StartSession::class,
    SetLocaleFromSession::class,
);
```

Available methods:

```php
$middleware->insertBeforeInGroup(
    'web',
    SubstituteBindings::class,
    SetRouteBindingLocale::class,
);

$middleware->insertAfterInGroup(
    'api',
    SubstituteBindings::class,
    RecordResolvedModel::class,
);
```

The target must exist in the selected group. If it is missing, Laravel does not add the new middleware elsewhere.[4][5]

## Array replacements

`replace()` and `replaceInGroup()` also accept arrays in Laravel 13.40. The array replaces the original entry in the stack.[2][4][5]

```php
$middleware->replace(TrustProxies::class, [
    TrustProxies::class,
    BlockBannedIps::class,
]);

$middleware->replaceInGroup('web', StartSession::class, [
    StartSession::class,
    SetLocaleFromSession::class,
]);
```

The `web()` and `api()` helpers pass array replacements to `replaceInGroup()`:

```php
$middleware->web(replace: [
    StartSession::class => [
        StartSession::class,
        SetLocaleFromSession::class,
    ],
]);
```

Prefer the insertion helpers when the intent is ordering. Use array replacement when the original middleware must be replaced by several different entries.

## Session locale

Middleware that reads the session must run after `StartSession`. If it changes locale-dependent route-model binding, it must also run before `SubstituteBindings`.[1]

```php
use App\Http\Middleware\SetLocaleFromSession;
use App\Http\Middleware\ResolveLocalizedBindings;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;

->withMiddleware(function (Middleware $middleware): void {
    $middleware->insertAfterInGroup(
        'web',
        StartSession::class,
        SetLocaleFromSession::class,
    );

    // Optional guard when another middleware must immediately
    // precede route-model binding.
    $middleware->insertBeforeInGroup(
        'web',
        SubstituteBindings::class,
        ResolveLocalizedBindings::class,
    );
})
```

```php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class SetLocaleFromSession
{
    public function handle(Request $request, Closure $next): Response
    {
        if ($locale = $request->session()->get('locale')) {
            App::setLocale($locale);
        }

        return $next($request);
    }
}
```

## Client IP

Middleware that inspects `$request->ip()` should run after `TrustProxies`, otherwise it may receive a proxy or load-balancer address.[1]

```php
use App\Http\Middleware\BlockBannedIps;
use Illuminate\Http\Middleware\TrustProxies;

$middleware->insertAfter(
    TrustProxies::class,
    BlockBannedIps::class,
);
```

```php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BlockBannedIps
{
    public function handle(Request $request, Closure $next): Response
    {
        if (in_array($request->ip(), config('security.banned_ips'), true)) {
            abort(403);
        }

        return $next($request);
    }
}
```

Correctly configure trusted proxies before relying on the resolved client IP.

## Good practices

- Name the exact framework middleware that establishes the dependency.
- Use group insertion for middleware that depends on session, cookies, bindings, or CSRF state.
- Use global insertion only for concerns that truly apply to every request.
- Add a feature test that proves the required ordering through observable behavior.
- Recheck target middleware names when upgrading Laravel.
- Keep middleware focused; ordering should express a real dependency, not accidental coupling.

## Bad practices

Do not copy Laravel's entire default `web` or global stack just to insert one class. Copied stacks can miss framework changes and optional middleware added by configuration helpers.[1]

Do not use `prepend()` when the middleware depends on `TrustProxies` or `StartSession`:

```php
// Bad: the request IP may not have been resolved through trusted proxies.
$middleware->prepend(BlockBannedIps::class);
```

Do not silently target a middleware that may be absent from custom stacks. Test or document that prerequisite.

Do not use array replacement when `insertBefore()` or `insertAfter()` communicates the intent more clearly.

## Version

- Array support for `replace()` and `replaceInGroup()` introduced in Laravel Framework `v13.40.0`, PR `#62230`.[2][4]
- `insertBefore()`, `insertAfter()`, `insertBeforeInGroup()`, and `insertAfterInGroup()` introduced in Laravel Framework `v13.40.0`, PR `#62261`.[2][3]

## Sources

- [1] [Laravel News — Middleware insertion](https://laravel-news.com/laravel-middleware-insert-before-after)
- [2] [Laravel Framework v13.40.0](https://github.com/laravel/framework/releases/tag/v13.40.0)
- [3] [Laravel Framework PR #62261](https://github.com/laravel/framework/pull/62261)
- [4] [Laravel Framework PR #62230](https://github.com/laravel/framework/pull/62230)
- [5] [Laravel 13.x — Middleware configuration source](https://github.com/laravel/framework/blob/13.x/src/Illuminate/Foundation/Configuration/Middleware.php)
