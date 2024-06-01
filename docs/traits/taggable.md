---
title: Taggable
---

# Taggable

This trait offers taggable behavior to your models. It allows you to easily add, remove, and retrieve tags associated with a model.

## Usage

The only requirement to use this trait is to add a `tags` column to your model's table as a JSON column. You can do this by creating a migration:

```bash
php artisan make:migration add_tags_column_to_posts_table
```

Then, in the generated migration file, add the following code to the `up` method:

```php
Schema::table('posts', function (Blueprint $table) {
    $table->json('tags')->nullable();
});
```

Then add the `Taggable` trait to your model:

```php
class Post extends Model
{
  use Taggable;
}
```

If you want to use a different column name for tags, you can override the static `$tagsAttribute` property in your model:

```php
class Post extends Model
{
  use Taggable;

  protected static $tagsAttribute = 'labels';
}
```

## Methods

Let's take a look at the methods provided by the `Taggable` trait:

### The static `tags` method

The `tags` method is used to retrieve all tags associated with a model. It returns an array of tags.

```php
$tags = Post::tags();
```

### The `tagged` scope

Taggable trait provides a `tagged` scope that allows you to query models by tags. It accepts an array of tags as a parameter.

```php
$posts = Post::tagged(['laravel', 'php'])->get();
```

### The `attachTag` method

The `attachTag` method is used to attach a tag to a model. It accepts one or more tags as parameters.

```php
$post->attachTag('laravel');
$post->attachTag('laravel', 'php');
```

### The `detachTag` method

The `detachTag` method is used to detach a tag from a model. It accepts one or more tags as parameters.

```php
$post->detachTag('laravel');
$post->detachTag('laravel', 'php');
```

### The `syncTags` method

The `syncTags` method is used to sync tags with a model. It accepts an array of tags as a parameter.

```php
$post->syncTags(['laravel', 'php']);
```

Now the `$post` model will have the `laravel` and `php` tags only.