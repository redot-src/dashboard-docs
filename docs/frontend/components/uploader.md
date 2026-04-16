---
title: Uploader Component
description: Async drag-and-drop upload field with previews and sortable items.
outline: deep
---

# Uploader Component

Component:

```blade
<x-uploader />
```

## Common Inputs

- `id`
- `name`
- `title`
- `value`
- `required`
- `hint`

## Behavior

- stores data in a hidden input
- renders uploader wrapper, empty state, and item list
- loads `redot-uploader.js` once
- relies on the `uploader` init for browser behavior
