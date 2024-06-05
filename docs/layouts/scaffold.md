---
title: Scaffold Layout
---

# Scaffold Layout

Scaffold layout is the base layout for all pages. It includes the core plugins and stylesheets required for the site to function, also provides useful features that can be used in other layouts.

## Usage

To use the scaffold layout, extend it in the layout file:

```blade
<x-layouts::scaffold :title="$title" :direction="$direction">
    <!-- Page content -->
</x-layouts::scaffold>
```

## Properties

The scaffold layout has the following properties:

- **title**: The title of the page, default to `app_name` from the settings.
- **direction**: The direction of the text, either `ltr` or `rtl`.

## Features

The scaffold layout provides the following features:

### Service Worker registration

The scaffold layout registers a service worker to cache the assets and provide offline support. The service worker is disabled in development mode.

### Stacks

The scaffold layout provides a way to include stylesheets and scripts in the head and body of the page. The stacks are used to include the core stylesheets and scripts required for the site to function.

Stacks that are available in the scaffold layout:

- **styles**: Append stylesheets to the head of the page.
- **pre-content**: Append scripts immediately after the opening body tag.
- **templates**: Append templates to the body of the page.
- **scripts**: Append scripts to the body of the page.