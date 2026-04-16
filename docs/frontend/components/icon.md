---
title: Icon Component
description: Minimal icon renderer for class-based or inline markup icons.
outline: deep
---

# Icon Component

Component:

```blade
<x-icon />
```

## Props

- `icon`

## Behavior

- when `icon` starts with `<`, it outputs the markup directly
- otherwise it renders an `<i>` tag with the icon classes
