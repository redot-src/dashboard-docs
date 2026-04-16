---
title: Assets and Init System
description: Static asset layout, generated init registry, and frontend boot behavior.
outline: deep
---

# Assets and Init System

## Static Asset Layout

Important files and directories:

- `public/assets/js/app.js`
- `public/assets/js/functions.js`
- `public/assets/inits/*.js`
- `public/assets/plugins/*.js`
- `public/assets/dist/*`

## Browser Boot File

`public/assets/js/app.js` is the main runtime entry.

It:

- initializes visibility handling
- observes DOM mutations
- re-runs widget initialization through `window.init()`
- configures AJAX CSRF headers
- centralizes session-expired handling
- wires custom validation into form submission

## Init Registry

Each file under `public/assets/inits` defines one widget initializer.

Examples include:

- Coloris
- icon picker
- repeater
- Sortable
- Tempus Dominus
- TinyMCE
- Tom Select
- uploader

## Generated Output

`php artisan dependencies:build` generates `public/assets/dist/init.js`, which registers these inits into `window.__inits`.

This is the lightweight replacement for a more typical module-bundler init flow.

## Dependency Freshness

The build command also writes `public/assets/dist/lock.json`.

The `EnsureDependenciesBuilt` middleware checks this lock file and triggers rebuilds when tracked sources changed.

## Theme Integration

The built-in theme system provides the `@themer` Blade directive, which injects:

- the localStorage key
- theme config from settings
- the theme runtime script

That theme state is reused by widgets like TinyMCE and Tempus Dominus.
