---
title: Countries Component
description: Country selector convenience wrapper.
outline: deep
---

# Countries Component

Component:

```blade
<x-countries />
```

## Purpose

Provide a preconfigured country select field.

## Behavior

- loads Tabler flag styles
- delegates rendering to `<x-select>`
- uses `App\Models\Country` as the query source
- sets `key="code"`
- sets `template="country"`
- enables `same-template` rendering
