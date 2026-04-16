---
title: Translatable Switcher Component
description: Dropdown locale switcher for translatable field tabs.
outline: deep
---

# Translatable Switcher Component

Component:

```blade
<x-translatable-switcher />
```

## Props

- `id`
- `locales`

## Defaults

- generated `id`
- locales from `config('app.locales')`

## Behavior

- renders a locale dropdown
- activates matching `[translatable-tab]` targets on click
