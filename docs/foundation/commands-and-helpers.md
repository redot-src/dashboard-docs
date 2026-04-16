---
title: Commands and Helpers
description: Built-in artisan commands, helpers, and shared runtime utilities.
outline: deep
---

# Commands and Helpers

## Shared Commands

The dashboard ships with several built-in platform commands.

### `dependencies:build`

Builds:

- frontend translation JS files
- generated init registry
- dependency lock metadata

### `permissions:sync`

Discovers permission-controlled routes and creates missing permission entries.

### `make:entity`

Scaffolds a resource slice including model, controller, views, datatable, and tests.

### `make:view`

Creates views from stub templates with placeholder replacement.

### `lint`

Runs Pint and optionally JS formatting through Prettier when `npm` is available.

## Useful Helpers

Important helpers include:

- `setting(...)`
- `app_name()`
- `route_allowed(...)`
- `url_allowed(...)`
- `throw_api_exception(...)`
- `hashed_asset(...)`
- `back_or_route(...)`
- `component(...)`

## Shared Traits

Important shared traits include:

- `RespondAsApi`
- `CanUploadFile`

These are used throughout the project for API responses and upload workflows.

## Why They Matter

These commands and helpers are part of the starter-kit contract.

Use them as the default workflow instead of recreating their behavior ad hoc.
