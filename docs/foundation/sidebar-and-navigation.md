---
title: Sidebar and Navigation
description: Sidebar item API, active-state behavior, and the built-in dashboard menu structure.
outline: deep
---

# Sidebar and Navigation

## Overview

The dashboard sidebar is driven by a built-in sidebar system and configured centrally in `app/sidebar.php`.

This makes the navigation tree predictable and easy to extend.

## Sidebar Item API

Each sidebar item supports:

| Method / Property | Purpose |
| --- | --- |
| `title(...)` | Display label |
| `icon(...)` | Icon class |
| `route(...)` | Route name and optional parameters |
| `url(...)` | Raw URL |
| `external(...)` | Marks item as external |
| `children(...)` | Nested child items |
| `hidden(...)` | Static boolean or closure |

Internally, items also track:

- `parent`
- `parameters`
- `active`

## Visibility Rules

A sidebar item can be removed from the final rendered menu when:

- the target route fails `route_allowed(...)`
- the item is marked hidden
- a hidden closure returns true
- all children of a dropdown were filtered out

## Active State Rules

An item becomes active when:

- the current route exactly matches the item route
- the current route matches the item route as a wildcard, replacing `.index` with `.*`

If a child item is active, its parent dropdown is marked active too.

## Built-In Sidebar Structure

### Dashboard

- `dashboard.index`

### Website Management

- `dashboard.users.index`
- `dashboard.static-pages.index`

### Utilities

- `dashboard.memos.index`
- `dashboard.qr-code.index`
- `dashboard.shortened-urls.index`
- `dashboard.impersonate-admins.create`
- `dashboard.impersonate-users.create`

### Settings

- `dashboard.profile.edit`
- `dashboard.roles.index`
- `dashboard.admins.index`
- `dashboard.settings.edit`
- `dashboard.languages.index`

## Practical Guidance

When adding a new module to navigation:

1. add the route first
2. decide whether the item should be permission-gated
3. add a sidebar item or child item in `app/sidebar.php`
4. use a hidden closure only when the module really depends on runtime state
