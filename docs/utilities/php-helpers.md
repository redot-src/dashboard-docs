---
title: PHP Helpers
---

# PHP Helpers

Redot Dashboard offers a set of PHP helpers to make your life easier, and your code cleaner. These helpers are globally available in your application, and you can use them anywhere in your application.

## The `setting` Helper

The `setting` helper is used to get the value of a setting from the database. The helper accepts the setting key as the first argument and the default value as the second argument.

### Definition

Setting helper has the following signature:

```php
setting(string|null $key, mixed $default = null, bool $refresh = false): mixed
```

### Usage

To get the value of a setting, you can use the `setting` helper like this:

```php
setting('site_name', 'Redot Dashboard');
```

Settings are cached by default, but if you want to get the latest value from the database, you can pass `true` as the third argument.

```php
setting('site_name', 'Redot Dashboard', true);
```

What if you want to get all the settings? You can call the `setting` helper without any arguments.

```php
$settings = setting();
```

This will return an array of all the settings.

## The `route_allowed` Helper

`route_allowed` helper is used to check if the current user has access to a route. The helper accepts the route name as the only argument.

### Definition

`route_allowed` helper has the following signature:

```php
route_allowed(string $route): bool
```

### Usage

To check if the current user has access to a route, you can use the `route_allowed` helper like this:

```php
if (route_allowed('dashboard.posts.index')) {
    // User has access to the dashboard route
}
```

## The `hasshed_asset` Helper

As the name suggests, `hashed_asset` helper is used to get the asset link suffixed with the asset version. The helper accepts the asset path and a boolean `$secure` flag as arguments.

### Definition

`hashed_asset` helper has the following signature:

```php
hashed_asset(string $path, bool|null $secure = null): string
```

### Usage

To get the hashed asset link, you can use the `hashed_asset` helper like this:

```php
hashed_asset('assets/js/app.js');
```

If you want to get the secure asset link, you can pass `true` as the second argument.

```php
hashed_asset('assets/js/app.js', true);
```

## The `collect_ellipsis` Helper

There's a situation where you have a collection of items, and you want to display them with an ellipsis. The `collect_ellipsis` helper is used to collect the items with an ellipsis. The helper accepts the collection, the number of items to show, and the ellipsis text as arguments.

### Definition

`collect_ellipsis` helper has the following signature:

```php
collect_ellipsis(mixed $value = [], int $limit = 3, string $ellipsis = '...'): \Illuminate\Support\Collection
```

### Usage

To collect the items with an ellipsis, you can use the `collect_ellipsis` helper like this:

```php
$items = collect_ellipsis([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);

// Output: 1, 2, 3, 4, 5...
echo $items->implode(', ');
```