---
title: Form Component
description: Standardized form wrapper with CSRF, method spoofing, and form identifier.
outline: deep
---

# Form Component

Component:

```blade
<x-form />
```

## Purpose

Provide a consistent form shell for dashboard and website forms.

## Common Inputs

- `id`
- `action`
- `method`
- `formMethod`
- `enctype`
- `identifier`

## Behavior

- injects CSRF token
- adds method spoofing for `PUT`, `PATCH`, and `DELETE`
- writes a hidden `_form` identifier used by browser-side error handling
