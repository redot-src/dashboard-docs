---
title: RespondAsApi
description: Standard JSON success and failure response helpers.
outline: deep
---

# RespondAsApi

## Purpose

Normalizes JSON response shape for API-oriented controllers and actions.

## Methods

### `respond(...)`

```php
respond(mixed $payload = [], string $message = 'OK', int $code = 200): JsonResponse
```

Response shape:

- `code`
- `success`
- `message`
- optional `payload`

### `fail(...)`

```php
fail(string $message = 'Bad Request', int $code = 400, mixed $payload = []): JsonResponse
```

Behavior:

- throws `HttpResponseException`
- returns the same normalized JSON shape with `success = false`

## Typical Usage

Used in:

- API controllers
- upload endpoints
- auth flows that return JSON
