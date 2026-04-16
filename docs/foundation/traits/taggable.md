---
title: Taggable
description: JSON-array tagging helpers for models with a tags attribute.
outline: deep
---

# Taggable

## Purpose

Adds lightweight JSON-array tagging behavior to a model.

## Static Configuration

Default tag attribute:

```php
protected static string $tagsAttribute = 'tags';
```

Override this property when the model stores tags in a different attribute.

## Methods

### `scopeTagged(...)`

```php
scopeTagged($query, array|string|null $tags)
```

Behavior:

- filters rows whose JSON tag array contains one or more tags

### `tags()`

```php
public static function tags(): array
```

Behavior:

- returns all distinct tags from all records
- result is formatted as key/value pairs

### `attachTag(...)`

```php
attachTag(string ...$tags): void
```

Behavior:

- merges new tags into the existing tag set

### `detachTag(...)`

```php
detachTag(string ...$tags): void
```

Behavior:

- removes one or more tags

### `syncTags(...)`

```php
syncTags(?array $tags): void
```

Behavior:

- overwrites the stored tag set and saves the model
