---
title: Google Analytics Component
description: Conditional GA snippet injection.
outline: deep
---

# Google Analytics Component

Component:

```blade
<x-google-analytics />
```

## Purpose

Inject Google Analytics when a property id is configured.

## Behavior

- only renders when `setting('google_analytics_property_id')` is truthy
- loads the GA script asynchronously
- configures `gtag` with the stored property id
