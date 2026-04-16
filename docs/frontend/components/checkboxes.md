---
title: Checkboxes Component
description: Inline or block checkbox group.
outline: deep
---

# Checkboxes Component

Component:

```blade
<x-checkboxes />
```

## Purpose

Render a group of checkbox inputs from an options map.

## Common Inputs

- `id`
- `name`
- `title`
- `value`
- `options`
- `disabled`
- `inline`
- `validation`
- `required`
- `hint`

## Behavior

- checks items that exist in the current `value` array
- disables any keys present in `disabled`
- applies the validation attribute only to the first checkbox for grouped validation
