---
title: UserAuditable
---

# UserAuditable

This trait provides a convenient way to keep track of the user who created, updated, and deleted a model. It automatically sets the `created_by`, `updated_by`, and `deleted_by` columns when a model is created, updated, or deleted.

## Usage

To use this trait, you need to add the following columns to your model's table:

- `created_by`: The ID of the user who created the model.
- `updated_by`: The ID of the user who last updated the model.
- `deleted_by`: The ID of the user who deleted the model.

You can create a migration to add these columns to your model's table:

```bash
php artisan make:migration add_user_auditable_columns_to_posts_table
```

Then, in the generated migration file, add the following code to the `up` method:

```php
Schema::table('posts', function (Blueprint $table) {
  $table->foreignId('created_by')->nullable()->constrained('admins');
  $table->foreignId('updated_by')->nullable()->constrained('admins');
  $table->foreignId('deleted_by')->nullable()->constrained('admins');
});
```

Then add the `UserAuditable` trait to your model:

```php
class Post extends Model
{
  use UserAuditable;
}
```

If you want to use a different guard name, you can override `getUserAuditableGuard` method in your model:

```php
class Post extends Model
{
  use UserAuditable;

  protected function getUserAuditableGuard()
  {
    return 'web';
  }
}
```

By default, the trait uses the default guard name specified in your `config/auth.php` file.

## Methods

Let's take a look at the methods provided by the `UserAuditable` trait:

### The `createdBy` method

The `createdBy` method is used to retrieve the user who created the model.

```php
$user = $post->createdBy;
```

### The `updatedBy` method

The `updatedBy` method is used to retrieve the user who last updated the model.

```php
$user = $post->updatedBy;
```

### The `deletedBy` method

The `deletedBy` method is used to retrieve the user who deleted the model.

```php
$user = $post->deletedBy;
```