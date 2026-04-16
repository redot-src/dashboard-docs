---
title: Icon Picker Component
description: Font Awesome icon search and selection field.
outline: deep
---

# Icon Picker Component

Component:

```blade
<x-icon-picker />
```

## Purpose

Render an icon selector with preview and search modal behavior.

## Common Inputs

- `id`
- `name`
- `title`
- `value`
- `required`
- `hint`

## Behavior

- renders `init="icon-picker"`
- shows a live preview icon
- loads the Redot icon picker plugin once
- uses a template block for search, loading, and empty states
