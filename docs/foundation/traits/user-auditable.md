---
title: UserAuditable
description: Automatically manages created_by, updated_by, and deleted_by auditing fields.
outline: deep
---

# UserAuditable

## Purpose

Adds model event hooks that fill audit columns from the current authenticated user.

## Expected Columns

The trait is designed for models that may have:

- `created_by`
- `updated_by`
- `deleted_by`

If some columns do not exist, the trait safely skips those paths.

## Boot Behavior

`bootUserAuditable()` hooks into:

- `creating`
- `updating`
- `deleting`

Behavior:

- fills `created_by` when creating
- fills `updated_by` when updating
- fills `deleted_by` when deleting

## Guard Resolution

### `getUserAuditableGuard()`

Returns the default auth guard from config.

### `getUserAuditableProvider()`

Returns the model class associated with the current auditable guard.

## Relationships

The trait also provides:

- `createdBy()`
- `updatedBy()`
- `deletedBy()`

Each returns a `belongsTo` relation when the provider model can be resolved.
