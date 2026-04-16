---
title: Rich Editor Component
description: TinyMCE-powered rich text field.
outline: deep
---

# Rich Editor Component

Component:

```blade
<x-rich-editor />
```

## Purpose

Render a textarea enhanced by TinyMCE.

## Common Inputs

- `id`
- `name`
- `title`
- `value`
- `validation`
- `required`
- `hint`

## Behavior

- delegates the base field rendering to `<x-textarea>`
- forces `init="tinymce"`
- loads TinyMCE once
