---
title: Permissions
description: Route-based permission model used by dashboard routes.
outline: deep
---

# Permissions

## Permission Strategy

The starter kit uses route names as permission keys.

That means authorization is tightly coupled to routing, not to a separate manually maintained permission map.

## RoutePermission Middleware

Dashboard routes use the custom `dashboard` middleware group, which includes `RoutePermission`.

A route participates in permission checks when:

- it has a route name
- it uses `RoutePermission`

## `route_allowed(...)`

The core helper `route_allowed($route, $guard = 'admins')`:

- checks guard authentication
- caches the result
- allows access when the permission does not exist
- otherwise delegates to Laravel gates

This is why route names and middleware placement matter so much.

## Permission Discovery

`php artisan permissions:sync` auto-discovers permissions from routes that:

- have a route name
- use `RoutePermission`
- respond to `GET` or `DELETE`

The command then creates missing permission records in Spatie Permission.

## Practical Consequence

If you add a dashboard route and expect it to be permission-controlled:

1. make sure it keeps `RoutePermission`
2. give it a stable route name
3. run `php artisan permissions:sync`

## Sidebar and Datatables

This same route-based model is used in the UI too.

Examples:

- sidebar item visibility can be derived from route access
- datatable row actions call `route_allowed(...)`

That keeps the permission model consistent across backend and frontend surfaces.
