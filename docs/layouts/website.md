---
title: Website Layout
---

# Website Layout

Website layout extends the scaffold layout and provides a layout for the website pages. It includes the core plugins and stylesheets required for the website to function, also provides useful features that can be used in other layouts.

Website layout provides an authentication-specific layout under `website.auth` namespace. This layout is used for the authentication pages like login, register, forgot password, etc.

## Usage

To use the website layout, extend it in the layout file:

```blade
<x-layouts::website :title="$title">
    <!-- Page content -->
</x-layouts::website>
```

## Features

The website layout provides the google analytics and facebook pixel scripts for the website pages. It also includes the core plugins and stylesheets required for the website to function.