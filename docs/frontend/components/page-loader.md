---
title: Page Loader Component
description: Full-page loading screen using the application logo and a spinner.
outline: deep
---

# Page Loader Component

Component:

```blade
<x-page-loader />
```

## Purpose

Render a startup loading overlay for dashboard pages.

## Behavior

- shows the logo
- shows a spinner
- fades out on `window.load`
- usually enabled through the `page_loader_enabled` setting
