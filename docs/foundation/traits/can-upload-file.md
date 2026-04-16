---
title: CanUploadFile
description: File upload and deletion helpers for controllers and services.
outline: deep
---

# CanUploadFile

## Purpose

Adds file upload and deletion helpers to a controller or service.

## Methods

### `uploadFile(...)`

```php
uploadFile(UploadedFile|array $file, string $path = '', bool $optimize = false): string|array
```

Behavior:

- stores files under `public/uploads/{path}`
- slugifies the base filename
- adds a random suffix
- supports arrays of uploaded files
- optionally auto-orients and optimizes images

Returns:

- URL string for one file
- array of URL strings for multiple files

### `deleteFile(...)`

```php
deleteFile(string|array $path): bool|array
```

Behavior:

- deletes one local file path or many

### `deleteFileFromUrl(...)`

```php
deleteFileFromUrl(string|array $url): bool|array
```

Behavior:

- converts stored URLs back into local paths and deletes them

## Typical Usage

Used by:

- uploader controller
- TinyMCE upload controller
- any custom file-management flow
