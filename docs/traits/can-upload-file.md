---
title: CanUploadFile
---

# CanUploadFile

Uploading files is a common task in web applications. This trait provides a useful methods to manage file uploads in your controllers.

## Usage

First, add the `CanUploadFile` trait to your controller:

```php
use App\Traits\CanUploadFile;

class PostController extends Controller
{
    use CanUploadFile;
}
```

Then, you can use the `uploadFile` method to upload a file:

```php
public function store(Request $request)
{
    $cover = $this->uploadFile($request->file('cover'), 'posts');

    // ...
}
```

Now, the file will be uploaded to the `public/uploads/posts` directory. The method will return the absolute path to the uploaded file.

## Methods

Let's take a look at the methods provided by the `CanUploadFile` trait:

### The `uploadFile` method

The `uploadFile` method is used to upload a file. It accepts the following parameters:

- `UploadedFile|array $file`: The file to upload, or an array of files.
- `string $directory`: The directory to upload the file to.

If you pass an array of files, the method will return an array of absolute paths to the uploaded files.

Also, this method will automatically create the directory if it doesn't exist and generate a unique filename for the uploaded file.

### The `deleteFile` method

As the name suggests, the `deleteFile` method is used to delete a file. the method accepts a `string|array $file` parameter, which can be a file path or an array of file paths that you want to delete.

```php
public function destroy($id)
{
    $this->deleteFile('uploads/posts/cover.jpg');
}
```

**Note:** The `deleteFile` method accepts both relative and absolute file paths, not a URL, if you want to delete a file by its URL, take a look at the next method.

### The `deleteFileFromUrl` method

The `deleteFileFromUrl` method is used to delete a file by its URL. It accepts a `string|array $url` parameter, which can be a URL or an array of URLs that you want to delete.

```php
public function destroy(Post $post)
{
    $this->deleteFileFromUrl($post->cover);

    // ...
}
```

This method will extract the file path from the URL and delete the file.
