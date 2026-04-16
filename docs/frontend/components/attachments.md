---
title: Attachments Component
description: Read-only attachment list with image previews and download links.
outline: deep
---

# Attachments Component

Component:

```blade
<x-attachments />
```

## Purpose

Display previously uploaded files as a download list.

## Common Inputs

- `title`
- `id`
- `attachments`

## Attachment Item Shape

Each attachment item is expected to contain fields such as:

- `url`
- `type`
- `thumbnail`
- `name`
- `size`

## Behavior

- shows an image preview when the MIME type starts with `image/`
- falls back to a file icon for non-image files
- renders the file name and formatted file size
