---
title: Helpers
description: Full helper inventory with parameters, return values, and usage examples.
outline: deep
---

# Helpers

## Overview

The dashboard ships with global helpers from:

- `src/helpers.php`
- `app/helpers.php`
- Toastify helper registration

This page lists the user-facing helpers that developers are likely to call directly.

## `setting(...)`

Purpose:

- fetch one persisted setting or all settings

Signature:

```php
setting(?string $key = null, mixed $default = null, bool $fresh = false): mixed
```

Parameters:

- `$key`: setting key or `null` for all settings
- `$default`: fallback value
- `$fresh`: bypass cached value when true

Returns:

- a single setting value
- or an array of all settings when `$key` is `null`

Example:

```php
$name = setting('app_name');
$all = setting();
```

## `app_name()`

Purpose:

- resolve the localized application name

Signature:

```php
app_name(): string
```

Returns:

- current-locale app name or `config('app.name')`

Example:

```php
$title = app_name();
```

## `app_url()`

Purpose:

- return the application base URL

Signature:

```php
app_url(): string
```

Example:

```php
$url = app_url();
```

## `route_from_url(...)`

Purpose:

- resolve a route name from a URL

Signature:

```php
route_from_url(string $url): ?string
```

Parameters:

- `$url`: full or app-relative URL

Returns:

- matched route name
- or `null` when no route matches

Example:

```php
$name = route_from_url(url('/en/dashboard/users'));
```

## `route_allowed(...)`

Purpose:

- check whether the current authenticated guard user can access a route-based permission

Signature:

```php
route_allowed(string $route, string $guard = 'admins'): bool
```

Parameters:

- `$route`: route name
- `$guard`: auth guard

Returns:

- `true` when the route is allowed
- `false` when unauthenticated or denied

Example:

```php
if (route_allowed('dashboard.users.edit')) {
    // ...
}
```

## `url_allowed(...)`

Purpose:

- check whether a URL is allowed for the current authenticated guard user

Signature:

```php
url_allowed(string $url, string $guard = 'admins'): bool
```

Parameters:

- `$url`: URL to inspect
- `$guard`: auth guard

Returns:

- `true` for external URLs
- otherwise the route-based permission result

Example:

```php
if (url_allowed(route('dashboard.users.index'))) {
    // ...
}
```

## `throw_api_exception(...)`

Purpose:

- normalize an exception into the standard Redot JSON error shape

Signature:

```php
throw_api_exception(Throwable $e): JsonResponse
```

Parameters:

- `$e`: any throwable

Returns:

- JSON response with `code`, `success`, `message`, and `payload`

Example:

```php
return throw_api_exception($e);
```

## `format_phone(...)`

Purpose:

- convert a phone number into E.164 format

Signature:

```php
format_phone(string $phone, string $country = 'EG'): string
```

Parameters:

- `$phone`: raw phone number
- `$country`: country code for parsing

Returns:

- formatted E.164 phone number

Example:

```php
$value = format_phone('01000000000', 'EG');
```

## `trigger_dependencies_build()`

Purpose:

- invalidate generated frontend dependency output so the next request rebuilds it

Signature:

```php
trigger_dependencies_build(): void
```

Example:

```php
trigger_dependencies_build();
```

## `hashed_asset(...)`

Purpose:

- generate an asset URL with a version hash based on file mtime

Signature:

```php
hashed_asset(string $path, ?bool $secure = null): string
```

Parameters:

- `$path`: public asset path
- `$secure`: force secure asset URL or let Laravel decide

Returns:

- asset URL with optional `?v=...` hash

Example:

```php
<link rel="stylesheet" href="{{ hashed_asset('assets/css/app.css') }}">
```

## `collect_ellipsis(...)`

Purpose:

- trim a collection-like value to a limit and append an ellipsis item

Signature:

```php
collect_ellipsis($value = [], int $limit = 3, ?string $ellipsis = '...'): Collection
```

Parameters:

- `$value`: array-like input
- `$limit`: number of items to keep
- `$ellipsis`: text appended when items were omitted

Returns:

- `Collection`

Example:

```php
$tags = collect_ellipsis(['one', 'two', 'three', 'four'], 3);
```

## `back_or_route(...)`

Purpose:

- redirect back when the previous URL is internal and valid, otherwise return a named route URL

Signature:

```php
back_or_route(string $route, mixed $parameters = [], bool $absolute = true): string
```

Parameters:

- `$route`: fallback route name
- `$parameters`: route parameters
- `$absolute`: whether to generate an absolute URL

Returns:

- previous app URL or fallback route URL

Example:

```php
return redirect(back_or_route('dashboard.index'));
```

## `switch_badge(...)`

Purpose:

- render a yes/no badge as HTML

Signature:

```php
switch_badge(mixed $value, ?string $true = null, ?string $false = null): string
```

Parameters:

- `$value`: truthy or falsy value
- `$true`: custom truthy label
- `$false`: custom falsy label

Returns:

- HTML string

Example:

```php
{!! switch_badge($user->active) !!}
```

## `component(...)`

Purpose:

- render a component by name or class

Signature:

```php
component(string $name, array $data = []): string|View
```

Parameters:

- `$name`: component alias or class name
- `$data`: component data

Returns:

- rendered component view or `View` instance

Example:

```php
$avatar = component('avatar', ['name' => $admin->name, 'image' => $admin->profile_picture]);
```

## `search_model(...)`

Purpose:

- apply a simple text search across columns and supported relations

Signature:

```php
search_model(Builder|QueryBuilder $query, array $columns = [], ?string $term = null): Builder|QueryBuilder
```

Parameters:

- `$query`: Eloquent or query builder
- `$columns`: columns to search
- `$term`: search term

Returns:

- modified builder

Example:

```php
$query = search_model(User::query(), ['first_name', 'last_name', 'role.name'], request('q'));
```

## `no_content()`

Purpose:

- render a standard “No content” HTML fragment

Signature:

```php
no_content(): string
```

Returns:

- HTML string

Example:

```php
{!! $page->content ?: no_content() !!}
```

## `is_image(...)`

Purpose:

- determine whether a file path points to an image MIME type

Signature:

```php
is_image(string $path): bool
```

Parameters:

- `$path`: absolute or readable local file path

Returns:

- `true` when MIME starts with `image/`

Example:

```php
if (is_image(public_path($path))) {
    // ...
}
```

## `static_page_url(...)`

Purpose:

- generate a website static-page URL from a slug

Signature:

```php
static_page_url(string $slug, array $parameters = [], bool $absolute = true): string
```

Parameters:

- `$slug`: static page slug
- `$parameters`: extra route parameters
- `$absolute`: whether to generate an absolute URL

Returns:

- website static page URL

Example:

```php
$url = static_page_url('privacy-policy');
```

## `current_admin()`

Purpose:

- return the current authenticated admin from web or API guard

Signature:

```php
current_admin(): ?Admin
```

Returns:

- current admin model or `null`

Example:

```php
$admin = current_admin();
```

## `current_user()`

Purpose:

- return the current authenticated user from web or API guard

Signature:

```php
current_user(): ?User
```

Returns:

- current user model or `null`

Example:

```php
$user = current_user();
```

## `toastify()`

Purpose:

- resolve the Toastify service instance

Signature:

```php
toastify(): Toastify
```

Returns:

- `Redot\Toastify\Toastify`

Example:

```php
toastify()->success('Saved successfully');
```
