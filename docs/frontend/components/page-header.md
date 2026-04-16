---
title: Page Header Component
description: Standard dashboard page heading with optional create action.
outline: deep
---

# Page Header Component

Component:

```blade
<x-page-header />
```

## Props

- `title`
- `pretitle`
- `create`

## Defaults

- `pretitle = 'Overview'`

## Behavior

- renders dashboard page title and pretitle
- shows a create button when `create` is present and `url_allowed(...)` passes
- supports extra header actions through the slot
