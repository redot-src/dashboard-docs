---
title: Runtime Options
description: Feature flags, route prefixes, datatable defaults, and toast defaults that shape dashboard runtime behavior.
outline: deep
---

# Runtime Options

## Overview

The dashboard ships with built-in runtime options that influence:

- which route surfaces exist
- how URLs are structured
- what settings are available
- how datatables behave
- how toast notifications behave

This page collects the most important built-in options users and maintainers care about.

## Feature Flags

The built-in runtime config defines four feature surfaces.

| Key | Purpose | Default |
| --- | --- | --- |
| `features.website-api.enabled` | Enables the website API route group | `true` |
| `features.dashboard-api.enabled` | Enables the dashboard API route group | `true` |
| `features.dashboard-api.prefix` | Prefix used for dashboard API routes | `dashboard` |
| `features.website.enabled` | Enables website web routes | `true` |
| `features.dashboard.enabled` | Enables dashboard web routes | `true` |
| `features.dashboard.prefix` | Prefix used for dashboard web routes | `dashboard` |

## Routing Options

| Key | Purpose | Default |
| --- | --- | --- |
| `routing.append_locale_to_url` | Prefixes web URLs with `{locale}` | `true` |
| `routing.redirect_non_locale_urls` | Redirects non-localized web URLs when needed | `true` |

## Locale Definitions

Default locale definitions include:

| Code | Name | RTL |
| --- | --- | --- |
| `en` | `English` | `false` |
| `ar` | `العربية` | `true` |

## Settings Keys

The built-in settings schema includes these keys.

| Key | Default | Notes |
| --- | --- | --- |
| `app_logo_dark` | `assets/images/logo-dark.svg` | Used by `<x-logo>` in dark theme |
| `app_logo_light` | `assets/images/logo-light.svg` | Used by `<x-logo>` in light theme |
| `app_name` | localized array | Used in UI and meta title |
| `website_locales` | `['en', 'ar']` | Enabled website locales |
| `dashboard_locales` | `['en', 'ar']` | Enabled dashboard locales |
| `page_loader_enabled` | `false` | Enables `<x-page-loader>` in dashboard layout |
| `service_worker_enabled` | `true` | Enables service worker registration in production |
| `facebook_pixel_id` | `''` | Injects pixel component when present |
| `google_analytics_property_id` | `''` | Injects GA component when present |
| `cloudflare_turnstile_site_key` | `''` | Used by captcha component |
| `cloudflare_turnstile_secret_key` | `''` | Used by server-side captcha validation |
| `head_code` | `''` | Injected into website layout head |
| `body_code` | `''` | Injected into website layout scripts stack |
| `dashboard_sidebar_theme` | `inherit` | Sidebar theme setting |
| `theme` | `{ primary, base, font, radius }` | Used by themer runtime |

## Datatable Runtime Options

The built-in datatable config defines:

### Asset Endpoints

| Key | Purpose |
| --- | --- |
| `assets.css.file` | Source CSS file used for datatables |
| `assets.css.uri` | Public URI for datatable CSS |
| `assets.css.route` | Route name that serves datatable CSS |
| `assets.js.file` | Source JS file used for datatables |
| `assets.js.uri` | Public URI for datatable JS |
| `assets.js.route` | Route name that serves datatable JS |

### Export Options

| Key | Purpose | Default |
| --- | --- | --- |
| `export.xlsx.enabled` | XLSX export support | `true` |
| `export.csv.enabled` | CSV export support | `true` |
| `export.json.enabled` | JSON export support | `true` |
| `export.pdf.enabled` | PDF export support | `true` |
| `export.pdf.template` | Blade template for PDF export | `datatables::pdf.default` |
| `export.pdf.adapter` | PDF adapter class | `LaravelMpdf` |
| `export.pdf.options.format` | PDF format | `A4` |
| `export.pdf.options.orientation` | PDF orientation | `P` |

## Toast Runtime Options

The toast system exposes:

### CDN / Asset Paths

| Key | Default |
| --- | --- |
| `cdn.js` | `/vendor/toastify/toastify.min.js` |
| `cdn.css` | `/vendor/toastify/toastify.min.css` |

### Toast Types

Configured toastifiers include:

- `toast`
- `error`
- `success`
- `info`
- `warning`

Each toastifier ships with predefined color and border styles that follow Tabler theme variables.

### Default Toast Behavior

| Key | Default |
| --- | --- |
| `defaults.gravity` | `toastify-bottom` |
| `defaults.position` | `right` |
| `defaults.close` | `true` |

## Practical Guidance

Use runtime options for:

- enabling or disabling whole route surfaces
- changing dashboard or API URL prefixes
- defining platform-wide settings defaults
- changing default datatable export behavior
- tuning global toast behavior
