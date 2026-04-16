---
title: Settings
description: Persisted settings model and starter-defined settings schema.
outline: deep
---

# Settings

## Settings Are Runtime Data

The dashboard persists settings in the database and reads them through:

```php
setting('key')
```

This makes settings dashboard-editable instead of only config-driven.

## Settings Schema

The built-in Redot config defines the settings schema.

Each setting can define:

- `default`
- `rules`

## Examples

The shipped schema includes:

- app logos
- localized app name
- enabled locales
- service worker and page-loader toggles
- analytics values
- Turnstile keys
- custom head and body snippets
- sidebar theme
- theme configuration

## Seeder Flow

`SettingSeeder` persists default settings into the database.

That makes the settings schema the source of truth for:

- which settings exist
- their initial values
- how the settings form validates them

## Special Request Handling

The runtime skips empty-string-to-null conversion for settings updates so form submissions do not accidentally mutate empty values into `null`.

## Practical Workflow

To add a new setting:

1. define the key and default in the Redot settings config
2. add validation rules if needed
3. expose the field in the settings UI
4. seed or backfill the setting value
