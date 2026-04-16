---
title: Layouts
description: Layout catalog for dashboard, website, scaffold, PDF, and error rendering.
outline: deep
---

# Layouts

## Overview

The dashboard uses a layered layout system under `resources/layouts`.

The base idea is:

- `scaffold` handles the HTML shell and shared assets
- dashboard and website layouts compose around scaffold
- specialized layouts exist for auth, PDF, and error pages

## `layouts/scaffold.blade.php`

Purpose:

- master HTML shell for most rendered pages

Key responsibilities:

- sets language and direction
- defines meta tags and title
- registers service worker in production when enabled
- loads Tabler, Font Awesome, jQuery, Lodash, Fancybox, jquery-confirm
- loads `functions.js`, generated translations, generated init registry, and `app.js`
- exposes old input and validation errors to the browser
- renders shared Blade stacks:
  - `meta`
  - `styles`
  - `pre-content`
  - `templates`
  - `scripts`

## `layouts/dashboard/base.blade.php`

Purpose:

- standard dashboard page shell

Key responsibilities:

- enables dashboard theme key via `@themer('dashboard-theme')`
- loads `assets/css/dashboard.css`
- optionally shows page loader
- renders sidebar, navbar, footer, and status messages

## `layouts/website/base.blade.php`

Purpose:

- standard website page shell

Key responsibilities:

- enables website theme key via `@themer('website-theme')`
- loads `assets/css/website.css`
- injects `head_code` and `body_code`
- renders navbar and footer
- includes analytics and pixel components

## Auth Layouts

Files:

- `layouts/dashboard/auth.blade.php`
- `layouts/website/auth.blade.php`

Purpose:

- specialized auth wrappers for each surface

## `layouts/pdf.blade.php`

Purpose:

- printable and exported PDF shell

Key responsibilities:

- loads `assets/css/pdf.css`
- renders app logo
- defines footer with page number support

## `layouts/error.blade.php`

Purpose:

- standard error-state page shell

Explicit props:

- `error`
- `class`

Default behavior:

- shows empty-style error page
- renders a default back-to-home action unless overridden

## Partial Layouts

The layout system also includes partials for:

- dashboard navbar
- dashboard footer
- dashboard sidebar base
- dashboard sidebar dropdowns and items
- website navbar
- website footer

## Practical Guidance

Use:

- dashboard base for normal admin pages
- website base for normal public pages
- auth layouts for login and reset flows
- PDF layout for export templates
- error layout for custom error pages
