---
title: Project Structure
description: How the dashboard project is organized for product code and built-in starter features.
outline: deep
---

# Project Structure

## Dashboard-Root Mental Model

Read the project from the dashboard root.

The important directories are:

- `app/`
- `bootstrap/`
- `config/`
- `database/`
- `public/`
- `resources/`
- `routes/`
- `tests/`

Built-in Redot features are already wired into this application and should be understood as platform capabilities of the dashboard.

## `app/`

Owns:

- models
- controllers
- providers
- Livewire datatables
- helpers
- jobs

## `routes/`

Defines:

- website routes
- dashboard routes
- website API routes
- dashboard API routes
- shared global integration routes

## `resources/`

Contains:

- layouts
- views
- components
- templates
- stub templates used by generators

## `public/assets/`

Contains the main browser-side asset system:

- CSS
- JS
- widget initializers
- custom plugins
- generated frontend dependency output

## `config/`

Contains both standard Laravel config and starter-specific runtime configuration used by built-in features.

## `database/`

Contains:

- migrations
- factories
- seeders
- seed data files

## `tests/`

The test layout mirrors the route surfaces:

- dashboard
- website
- dashboard API
- website API
- shared global endpoints
