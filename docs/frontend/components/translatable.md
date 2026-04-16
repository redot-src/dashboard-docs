---
title: Translatable Component
description: Tabbed wrapper for locale-aware field inputs.
outline: deep
---

# Translatable Component

Component:

```blade
<x-translatable />
```

## Purpose

Render one field instance per locale inside tab panes.

## Expected Inputs

- `id`
- `component`
- `locales`
- `localesConfig`

## Behavior

- renders a dynamic component per locale
- passes locale-specific `name`, `value`, and `validation`
- shows locale tabs when more than one locale exists
