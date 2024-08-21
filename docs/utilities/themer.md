---
title: Themer
---

# Themer

Themer is a utility that allows users to switch between light and dark themes. It is a simple utility that can be used to change the theme of the application.

## Usage

You can include themer in your layout file by adding the following line:

```blade
@themer()
```

By default, themer script will look for the `themerKey` key in the window object to store the theme in local storage. You can change the key by passing the `themerKey` to the `@themer` directive.

```blade
@themer('key')
```

Currently, dashboard layout uses the `dashboard-theme` key to store the theme in local storage, while the website layout uses the `website-theme` key.