---
title: Make View
---

# Make View

Laravel already provides a way to create views using the `make` command. However, Redot Dashboard extends this functionality by providing a way to create views from a specific template.

## Usage

To create a view from a template, you can use the `make:view` command like this:

```bash
php artisan make:view views.dashboard.posts.edit --template=dashboard.edit
```

This command will create a view file at `resources/views/dashboard/posts/edit.blade.php` using the `dashboard.edit` template stored in `app\Console\Commands\stubs\view-template\dashboard\edit.stub`.

You can visit Laravel's [official documentation](https://laravel.com/docs/blade#components) to learn more about views.