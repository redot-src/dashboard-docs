---
title: Alert Component
description: Dismissible alert banner with optional icon and description.
outline: deep
---

# Alert Component

Component:

```blade
<x-alert />
```

## Purpose

Render a standard alert block with optional icon, title, description, and dismiss button.

## Common Inputs

- `icon`
- `title`
- `description`
- `dismissible`

## Behavior

- renders the icon through `<x-icon>`
- renders `title` and `description` when both are provided
- falls back to the slot when no description exists
- shows a close button when `dismissible` is truthy
