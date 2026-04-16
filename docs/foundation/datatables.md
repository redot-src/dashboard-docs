---
title: Datatables
description: Built-in Livewire datatable system, column types, filter types, and row actions.
outline: deep
---

# Datatables

## Overview

The dashboard uses a built-in Livewire datatable system for admin listings.

A datatable class typically defines:

- `query()`
- `columns()`
- `actions()`
- `filters()`

It also inherits built-in support for:

- pagination
- search
- sorting
- URL state
- exports
- sticky headers
- fixed columns

## Base Datatable Features

The base datatable exposes important runtime properties such as:

| Property | Default | Purpose |
| --- | --- | --- |
| `perPageOptions` | `[5, 10, 25, 50, 100, 250, 500]` | Available page sizes |
| `perPage` | `10` | Current page size |
| `search` | `''` | Search term |
| `sortColumn` | `''` | Active sort column |
| `sortDirection` | `desc` | Active sort direction |
| `filtered` | `[]` | Filter state |
| `height` | `auto` | Table container height |
| `stickyHeader` | `true` | Sticky table header |
| `bordered` | `true` | Table border style |
| `exportable` | `true` | Enables exports |
| `allowedExports` | config-driven | Allowed export formats |
| `emptyMessage` | translation-driven | Empty state message |

## Built-In Column Types

### `TextColumn`

Useful for text, links, email, phone, and route-backed text.

Important options include:

- `prefix(...)`
- `suffix(...)`
- `email()`
- `phone()`
- `url(...)`
- `route(...)`
- `truncate(...)`
- `wordCount(...)`
- `pad(...)`
- `searchable()`
- `sortable()`
- `width(...)`
- `minWidth(...)`

### `DateColumn`

Supports:

- `datetime()`
- `date()`
- `time()`
- `relative()`
- `format(...)`

### `NumericColumn`

Supports:

- `precision(...)`

### `TernaryColumn`

Supports:

- `true(...)`
- `false(...)`

Displays yes/no style values and applies success/danger background classes.

### `StatusColumn`

Supports:

- `labels(...)`
- `classes(...)`

Useful when a stored state value maps to a display label and custom class list.

### `TagsColumn`

Supports:

- `limit(...)`
- `ellipsis(...)`

### `IconColumn`

Renders icon class values as HTML.

### `ColorColumn`

Renders a color swatch cell from the stored value.

## Shared Column Features

All columns inherit common options such as:

- `name(...)`
- `label(...)`
- `empty(...)`
- `width(...)`
- `maxWidth(...)`
- `minWidth(...)`
- `fixed(...)`
- `html(...)`
- `default(...)`
- `sortable(...)`
- `searchable(...)`
- `visible(...)`
- `exportable(...)`
- `getter(...)`

## Built-In Filter Types

### `StringFilter`

String operators:

- equals
- not equals
- contains
- not contains
- starts with
- not starts with
- ends with
- not ends with

### `NumberFilter`

Number operators:

- equals
- not equals
- greater than
- greater than or equals
- less than
- less than or equals

### `DateFilter`

Supports `from` and `to` date ranges.

### `SelectFilter`

Supports:

- `placeholder(...)`
- `options(...)`

### `TernaryFilter`

Supports:

- `queries(...)`
- `labels(...)`
- `placeholder(...)`
- `empty(...)`

### `TrashedFilter`

Global soft-delete filter supporting:

- without trashed
- with trashed
- only trashed

## Shared Filter Features

All filters inherit:

- `label(...)`
- `column(...)`
- `columns(...)`
- `or(...)`
- `query(...)`

## Row Actions

The built-in action system supports:

- `Action::view(...)`
- `Action::edit(...)`
- `Action::delete(...)`
- `Action::restore(...)`
- `Action::export(...)`
- `Action::make(...)`

Useful options include:

- `route(...)`
- `href(...)`
- `method(...)`
- `body(...)`
- `visible(...)`
- `hidden(...)`
- `condition(...)`
- `newTab()`
- `fancybox()`
- `confirmable(...)`

## Action Groups

Use `ActionGroup` or `Datatable::defaultActionGroup(...)` to group excess actions into a dropdown.

This is already used by several built-in modules.

## Built-In Datatable Modules

The project currently ships datatables for:

- admins
- users
- roles
- languages
- language tokens
- memos
- shortened URLs
- static pages

## Practical Pattern

When building a new datatable:

1. start with `query()`
2. pick the smallest correct column types
3. wire route-based action visibility
4. add filters that match user intent, not every field mechanically
