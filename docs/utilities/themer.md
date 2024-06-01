---
title: Themer
---

# Themer

Themer is a utility that allows users to switch between light and dark themes. It is a simple utility that can be used to change the theme of the application.

## Usage

By default, themer is included in the `resources/layouts/scaffold.blade.php` file. You can include it in your layout file by adding the following line:

```blade
<script src="{{ hashed_asset('assets/js/themer.js') }}"></script>
```

By default, themer script will look for the `themerKey` key in the window object to store the theme in local storage. You can change the key by setting the `themerKey` variable before including the script.

```blade
<script>
    window.themerKey = 'new-key';
</script>
```

Currently, dashboard layout uses the `dashboard-theme` key to store the theme in local storage, while the website layout uses the `website-theme` key.