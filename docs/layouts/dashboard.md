---
title: Dashboard Layout
---

# Dashboard Layout

Dashboard layout extends the scaffold layout and provides a layout for the dashboard pages. It includes the core plugins and stylesheets required for the dashboard to function, also provides useful features that can be used in other layouts.

Dashboard layout provides an authentication-specific layout under `dashboard.auth` namespace. This layout is used for the authentication pages like login, register, forgot password, etc.

## Usage

To use the dashboard layout, extend it in the layout file:

```blade
<x-layouts::dashboard :title="$title">
    <!-- Page content -->
</x-layouts::dashboard>
```

## Features

The dashboard layout provides the sidebar and topbar components for the dashboard pages. It also includes the core plugins and stylesheets required for the dashboard to function.

### Sidebar

The sidebar component is used to display the navigation links for the dashboard pages. You can register the sidebar links in the `config/sidebar.php` file, like this:

```php
return [
  // ...

  [
    'route' => 'dashboard.index',
    'icon' => 'fa fa-home',
    'title' => 'Dashboard',
  ],
];
```

### Topbar

The topbar component is used to display the user profile, dark/light mode switch, and the logout button, etc.