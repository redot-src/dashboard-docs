---
title: Localization
description: Locale config, language seeding, token syncing, and frontend translation generation.
outline: deep
---

# Localization

## Locale Source

The starter kit ships with base locale definitions such as:

- `en`
- `ar`

Each locale includes:

- `code`
- `name`
- `is_rtl`

## Runtime Locale Resolution

During boot, the application tries to load locales from the `languages` table and falls back to the configured defaults when needed.

## Language Seeding

`LanguageSeeder`:

1. reads the configured locale definitions
2. creates language records
3. synchronizes language tokens for each language

## Translation Layers

The application uses two translation layers:

### Laravel Lang Files

- `lang/{locale}.json`
- `lang/{locale}/*.php`

### Language Tokens

Managed through dashboard language-token workflows.

## Language Token Operations

The dashboard includes routes for:

- listing tokens
- editing tokens
- extracting tokens
- translating tokens
- publishing tokens
- reverting tokens

## Frontend Translation Build

`php artisan dependencies:build` generates browser-ready translation files under:

- `public/assets/dist/translations/en.js`
- `public/assets/dist/translations/ar.js`

## Locale Routing

Locale-aware web routes use the configured locale system to keep generated URLs and route defaults consistent.
