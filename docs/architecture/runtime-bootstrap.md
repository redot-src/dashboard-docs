---
title: Runtime Bootstrap
description: How the dashboard boot flow assembles routing, middleware, and exception handling.
outline: deep
---

# Runtime Bootstrap

## Bootstrap Entry

`bootstrap/app.php` is intentionally thin:

- it defines `$basePath`
- it loads the packaged Redot bootstrap

The result is that the dashboard runtime starts with a predefined application shape instead of a blank Laravel bootstrap.

## What the Built-In Bootstrap Configures

The core bootstrap configures:

- routing
- command loading
- middleware groups
- API exception rendering

## Middleware Changes

Core modifies the web middleware stack by:

- removing and then re-appending `SubstituteBindings`
- appending `Localization`
- appending `EnsureDependenciesBuilt`

It also defines a custom `dashboard` middleware group containing:

- `RoutePermission`
- `Locked`

## Exception Rendering

Core forces JSON exception responses when:

- the request expects JSON
- the request path matches `api/*`

This keeps API behavior consistent across dashboard and website API routes.

## Service Provider Boot Work

The main Redot service provider then adds higher-level runtime behavior such as:

- Blade setup
- paginator defaults
- locale resolution
- custom validation rules
- JSON cast handling
- production destructive command protection

## Design Implication

Changes to global runtime behavior usually belong in:

- the packaged Redot bootstrap layer
- the Redot service provider and its registered features
