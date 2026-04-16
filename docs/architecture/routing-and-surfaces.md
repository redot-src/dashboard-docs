---
title: Routing and Surfaces
description: How routes are grouped into website, dashboard, and API surfaces.
outline: deep
---

# Routing and Surfaces

## Route Files

The project provides these route files:

- `routes/website.php`
- `routes/dashboard.php`
- `routes/api/website.php`
- `routes/api/dashboard.php`
- `routes/global.php`

The built-in Redot bootstrap decides how they are composed into the final app.

## Surface Prefixes

By default:

- website API lives under `/api`
- dashboard API lives under `/api/dashboard`
- dashboard web lives under `/{locale}/dashboard`

The dashboard prefixes come from `config('redot.features.*.prefix')`.

## Locale Prefixing

When `config('redot.routing.append_locale_to_url')` is true:

- web routes are prefixed with `{locale}`
- the locale is constrained to a two-letter code

API routes are not locale-prefixed.

## Global Routes

`routes/global.php` contains shared endpoints used by both the website and dashboard UIs:

- TinyMCE upload
- async select search/fetch
- uploader endpoint

These are frontend integration routes rather than feature modules.

## Route Names

The naming convention is stable and important:

- `website.*`
- `dashboard.*`
- `api.website.*`
- `api.dashboard.*`

These names drive auth, redirect behavior, and permissions.

## Website Surface

The website surface includes:

- home
- health check
- shortened URL redirects
- static pages
- user profile
- user auth flows

## Dashboard Surface

The dashboard surface includes:

- resource modules
- profile
- settings
- languages and tokens
- impersonation
- admin auth flows
