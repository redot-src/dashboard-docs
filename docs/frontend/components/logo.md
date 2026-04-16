---
title: Logo Component
description: Theme-aware application logo renderer.
outline: deep
---

# Logo Component

Component:

```blade
<x-logo />
```

## Props

- `lazy`

## Default

- `lazy = true`

## Behavior

- renders dark and light logo images
- uses `setting('app_logo_dark')`
- uses `setting('app_logo_light')`
- applies theme visibility classes for light and dark modes
