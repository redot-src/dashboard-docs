---
title: Local Development
description: Daily commands and local development workflow.
outline: deep
---

# Local Development

## Composer Scripts

The project ships with a few important scripts:

### `composer dev`

Runs:

- `php artisan serve`
- `php artisan queue:listen --tries=1`
- `php artisan pail --timeout=0`

### `composer test`

Runs:

```bash
php artisan test --parallel --processes=4
```

### `composer lint`

Runs:

```bash
php artisan lint --with-js
```

### `composer setup`

Runs install, env/key setup, and migrations without seeding.

## Useful Artisan Commands

```bash
php artisan migrate --seed
php artisan permissions:sync
php artisan dependencies:build
```

## What Happens After `composer install`

The dashboard `composer.json` already handles:

- creating `.env` from `.env.example` when missing
- generating `APP_KEY`
- package discovery

## Daily Development Loop

1. run `composer dev`
2. make backend or frontend changes
3. rebuild dependencies with `php artisan dependencies:build` if needed
4. run `composer test`
5. run `composer lint`

## When to Rebuild Frontend Dependencies

Run `php artisan dependencies:build` after changing:

- `lang/*.json`
- `lang/{locale}/*.php`
- `public/assets/inits/*.js`

The middleware will also trigger rebuilds automatically for web requests when the lock file is stale.
