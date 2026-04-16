---
title: Quick Start
description: Install and run the Redot Dashboard starter kit locally.
outline: deep
---

# Quick Start

## Requirements

- PHP `8.3+`
- Composer
- MariaDB or MySQL
- Node.js if you want to use `composer dev` or JS linting

## Install

From the project root:

```bash
composer install
```

## First Configuration Pass

Set values in `.env` for:

- `APP_URL`
- `APP_ENV`
- `APP_DEBUG`
- `DB_*`
- mail settings if you want to test emails and auth flows

## First Run

```bash
php artisan migrate --seed
composer dev
```

## Seeded Defaults

The default seed flow creates:

- languages from `config('redot.locales')`
- countries from `database/seeders/data/countries.json`
- settings from `Setting::defaults()`
- a `super-admin` role with all permissions
- a default admin account
- a default set of static pages

## Default Admin Login

- email: `admin@email.com`
- password: `password`

## First URLs

By default the app uses locale-prefixed web routes:

- website home: `/en`
- dashboard home: `/en/dashboard`

API routes are not locale-prefixed:

- website API: `/api/...`
- dashboard API: `/api/dashboard/...`
