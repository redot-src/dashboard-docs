---
title: Facebook Pixel Component
description: Conditional Facebook Pixel snippet injection.
outline: deep
---

# Facebook Pixel Component

Component:

```blade
<x-facebook-pixel />
```

## Purpose

Inject the Facebook Pixel snippet when a pixel id is configured.

## Behavior

- only renders when `setting('facebook_pixel_id')` is truthy
- injects the standard script and noscript pixel image
