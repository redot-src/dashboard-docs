---
title: Authentication
description: Built-in auth architecture, guard model, and app-level customization points.
outline: deep
---

# Authentication

## Auth Entry Point

The starter kit standardizes authentication through:

```php
RedotAuth::routes(...)
```

That means auth behavior is configured declaratively per surface instead of being rewritten for each route group.

## Guards

The application defines four guards:

- `admins`
- `admins-api`
- `users`
- `users-api`

Session guards are used for web surfaces.
Sanctum guards are used for API surfaces.

## Providers

The providers map to:

- `admins` -> `App\Models\Admin`
- `users` -> `App\Models\User`

## Surface Differences

### Website Auth

Website auth enables:

- login
- registration
- password reset
- magic link
- email verification

### Dashboard Auth

Dashboard auth disables:

- public registration
- email verification

It also scopes admin auth to active accounts.

### API Auth

API auth returns JSON and bearer tokens instead of redirects.

## Auth Context

The auth system resolves an `AuthContext` per surface containing:

- guard
- provider
- broker
- model
- whether the surface is API
- route name prefix
- configured views
- home route
- identifiers
- disabled features

That context is used by the route registrars and auth actions.

## App-Level Customization

The project customizes auth in `app/Providers/AppServiceProvider.php`.

For the `users` provider it overrides:

- registration validation rules
- user creation logic
- auth redirect behavior

This is the main extension point for app-specific auth behavior.

## Lock Screen

Lock-screen support is available for dashboard web auth when:

- the surface is web
- the unlock view exists
- the feature is enabled

## Magic Link

Magic-link expiration and throttle behavior are configured through `config/auth.php`.
