---
title: Repeater Component
description: Repeatable structured input list with insert, clear, and sortable support.
outline: deep
---

# Repeater Component

Component:

```blade
<x-repeater />
```

## Purpose

Render a JSON-backed repeatable field UI.

## Common Inputs

- `id`
- `name`
- `title`
- `value`
- `required`
- `hint`

## Slots

- default item template
- optional `wrapper`
- optional `empty`

## Behavior

- stores data in a hidden input
- renders `init="repeater"`
- provides insert and clear controls by default
- shows a default empty state when no custom empty slot exists
