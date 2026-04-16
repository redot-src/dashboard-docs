---
title: Date Picker Component
description: Date, datetime, or time input backed by Tempus Dominus.
outline: deep
---

# Date Picker Component

Component:

```blade
<x-date-picker />
```

## Purpose

Render a date-like field with a calendar icon and Tempus Dominus initialization.

## Common Inputs

- `id`
- `name`
- `title`
- `value`
- `required`
- `hint`

## Special Attributes

- `datetime`
- `only-time`

## Behavior

- renders `init="tempus-dominus"`
- loads Popper and Tempus Dominus assets once
- appends a calendar icon in the input group
