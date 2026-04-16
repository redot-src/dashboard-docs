---
title: Testing
description: Test layout and testing strategy for dashboard, website, and API surfaces.
outline: deep
---

# Testing

## Test Stack

The project uses:

- Pest
- Laravel testing helpers
- parallel execution

## Test Command

```bash
composer test
```

This runs:

```bash
php artisan test --parallel --processes=4
```

## Test Layout

Tests are grouped by surface:

- `tests/Feature/Dashboard`
- `tests/Feature/Website`
- `tests/Feature/Api/Dashboard`
- `tests/Feature/Api/Website`
- `tests/Feature/Global`

This mirrors the actual app architecture and route layout.

## What the Existing Suite Covers

The current suite covers:

- dashboard auth flows
- website auth flows
- profile flows
- settings
- roles and admins
- users
- languages and language tokens
- memos
- static pages
- shortened URLs
- impersonation
- uploads
- API auth and API profile flows

## Good Test Boundaries for New Features

- auth guard correctness
- permission enforcement
- CRUD happy paths
- soft-delete and restore behavior
- locale-aware route behavior
- API response shape when applicable

## Practical Rule

Test starter conventions, not only business logic.

If a module depends on:

- datatables
- route-based permissions
- translatable fields
- shared auth flow

then the tests should prove those integrations work together.
