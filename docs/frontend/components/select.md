---
title: Select Component
description: Local or Tom Select-enhanced select field.
outline: deep
---

# Select Component

Component:

```blade
<x-select />
```

## Common Inputs

- `id`
- `name`
- `title`
- `value`
- `options`
- `floating`
- `tom`
- `hint`

## Behavior

- renders plain `<select>` markup by default
- supports floating labels
- supports preselected values from the `value` array
- loads Tom Select assets when `tom` is enabled
- supports remote mode when `select-*` options provide a query configuration
