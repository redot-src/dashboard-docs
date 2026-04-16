---
title: Modules
description: Built-in dashboard modules, auth screens, and major feature inventory.
outline: deep
---

# Modules

## Overview

The dashboard already ships with a meaningful set of built-in modules and pages.

This page is the fastest way to understand what is available before building anything new.

## Dashboard Home

Main page:

- `dashboard.index`

Purpose:

- admin landing page

## Dashboard Auth Screens

Built-in views:

- login
- forgot password
- reset password
- magic link
- magic link code
- unlock

These live under `resources/views/dashboard/auth`.

## Website Auth Screens

The website surface ships auth views for:

- login
- register
- forgot password
- reset password
- magic link
- magic link code
- verify email

## Website Management Modules

### Users

Views:

- index
- create
- edit
- show

Features:

- datatable
- soft delete and restore
- impersonation
- email verification status

### Static Pages

Views:

- index
- create
- edit

Features:

- translatable title and content
- website-facing page rendering by slug

## Utility Modules

### Memos

Views:

- index
- create
- edit
- show

Features:

- admin-scoped memos
- icon support
- date support

### QR Code

Views:

- index

Purpose:

- QR generation utility page

### Shortened URLs

Views:

- index
- create
- edit
- analytics

Features:

- public redirect route
- click tracking
- tags
- analytics page

### Impersonation

Views:

- impersonate admins
- impersonate users

Purpose:

- assume another admin or user identity from the dashboard

## Settings Modules

### Profile

Views:

- edit

Purpose:

- current admin profile editing

### Roles

Views:

- index
- create
- edit

Purpose:

- role management using Spatie Permission

### Admins

Views:

- index
- create
- edit

Features:

- role assignment
- active flag
- impersonation

### Settings

Views:

- edit

Purpose:

- manage persisted application settings

### Languages

Views:

- index
- create
- edit

Related submodule:

- language tokens

### Language Tokens

Features:

- list tokens
- edit token values
- extract tokens
- publish tokens
- revert tokens
- translate token values

## Shared Global Feature Endpoints

These are not standalone modules, but users care about them because they power forms:

- TinyMCE image upload
- async select search and fetch
- uploader endpoint

## API Feature Areas

The dashboard API includes built-in endpoints for:

- auth
- home
- profile
- roles
- admin creation

The website API includes built-in auth and profile endpoints as well.

## Practical Guidance

Before adding a new module:

1. check if a close built-in module already exists
2. copy the existing module shape
3. reuse its controller, datatable, view, and route patterns
