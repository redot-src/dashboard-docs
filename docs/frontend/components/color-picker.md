---
title: Color Picker Component
description: Text input enhanced with the Coloris color picker.
outline: deep
---

# Color Picker Component

Component:

```blade
<x-color-picker />
```

## Purpose

Render a color field with Coloris initialization.

## Common Inputs

- `id`
- `name`
- `title`
- `value`
- `required`
- `hint`

## Behavior

- renders a text input with `init="coloris"`
- loads Coloris CSS and JS once
- applies standard form-control styling
