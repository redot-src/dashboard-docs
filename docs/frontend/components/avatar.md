---
title: Avatar Component
description: Simple avatar placeholder using an image or first letter.
outline: deep
---

# Avatar Component

Component:

```blade
<x-avatar />
```

## Purpose

Render an avatar-like element for a person.

## Common Inputs

- `name`
- `image`

## Behavior

- when `image` is present, the component leaves image rendering to applied classes or custom styling
- when `image` is absent, it renders the first character of `name`
