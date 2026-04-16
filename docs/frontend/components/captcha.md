---
title: Captcha Component
description: Cloudflare Turnstile wrapper used in forms.
outline: deep
---

# Captcha Component

Component:

```blade
<x-captcha />
```

## Purpose

Render a Turnstile container and hidden field for captcha validation.

## Common Inputs

- `id`
- `name`
- `title`

## Behavior

- marks the field as required
- writes the site key into a meta tag from `setting('cloudflare_turnstile_site_key')`
- injects the Turnstile client script once
- uses a hidden input with `validation="required"`
