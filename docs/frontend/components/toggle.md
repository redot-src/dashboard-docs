---
title: Toggle Component
description: Switch-style boolean field.
outline: deep
---

# Toggle Component

Component:

```blade
<x-toggle />
```

## Common Inputs

- `id`
- `name`
- `title`
- `value`
- `on`
- `off`
- `required`
- `hint`

## Behavior

- renders a `form-switch`
- checks itself when `value` is truthy
- shows custom or default enabled/disabled labels
