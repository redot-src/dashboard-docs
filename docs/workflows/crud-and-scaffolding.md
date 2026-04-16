---
title: CRUD and Scaffolding
description: Standard resource structure, datatable pattern, and Redot generators.
outline: deep
---

# CRUD and Scaffolding

## Default Resource Shape

Resource modules usually follow this structure:

- model in `app/Models`
- controller in `app/Http/Controllers/Dashboard`
- routes in `routes/dashboard.php`
- views in `resources/views/dashboard/{resource}`
- datatable in `app/Livewire/Datatables`
- tests in `tests/Feature/Dashboard`

## Controller Pattern

Resource controllers usually:

- extend `Redot\Http\Controllers\Controller`
- validate inline
- call models directly
- render Blade views
- use shared redirect helpers like `created(...)` and `updated(...)`

## Datatable Pattern

Index pages are typically backed by a Livewire datatable class defining:

- `query()`
- `columns()`
- `actions()`
- `filters()`

The shipped modules such as users, roles, and admins are the reference examples.

## Route-Based UI Visibility

Datatable actions often use `route_allowed(...)` for visibility.

This means the permission model is reused inside the UI layer, not just in middleware.

## Scaffolding Commands

### `php artisan make:entity`

Can scaffold:

- model
- factory
- migration
- seeder
- controller
- request
- views
- datatable
- test

### `php artisan make:view`

Uses custom stubs from `resources/stubs/view-templates`.

### `php artisan make:datatable`

Builds a Livewire datatable from the package tooling.

## Recommended Flow for a New Module

1. run `php artisan make:entity Post`
2. register resource routes
3. wire the module into `app/sidebar.php`
4. sync permissions if needed
5. add or refine tests

## Sidebar Integration

The dashboard sidebar is composed centrally in `app/sidebar.php` using `Sidebar::make(...)` and `Item::make(...)`.

That makes module discoverability a single-file change instead of a scattered view concern.
