---
title: Uploads
description: Uploader component flow, browser behavior, encrypted upload config, and server-side storage handling.
---

# Uploads

## Route Surface

The uploader posts files to:

- `POST /uploader/upload`

This route is registered in `routes/global.php` as `global.uploader.upload`.

## Main Pieces

The upload system is built from:

- `<x-uploader>`
- `public/assets/plugins/redot-uploader.js`
- `public/assets/inits/uploader.js`
- `App\Http\Controllers\UploaderController`
- `Redot\Traits\CanUploadFile`

## Browser Behavior

`RedotUploader` handles the client-side behavior.

It supports:

- click-to-select
- drag and drop
- optional sorting
- auto upload
- multiple files
- size limits
- accept filtering
- empty-state handling
- form submission sync back into the hidden input

## Core Options

The uploader plugin ships with these defaults:

- `config: null`
- `endpoint: '/uploader/upload'`
- `sortable: true`
- `multiple: true`
- `accept: '*'`
- `verboseErrors: true`
- `autoUpload: true`
- `maxSize: 10 * 1024 * 1024`
- `confirmable: true`

## Encrypted Config Payload

The browser sends an encrypted `config` string with each upload request.

After decryption, the server can enforce:

- `accept`
- `directory`
- `optimize`
- `locale`
- `thumbnail`
- `serverValidation`

If the config cannot be decrypted, the upload is rejected.

## Server Validation

`UploaderController` validates:

- `file` is required and is a file
- `config` is required and is a string

Then it applies the decrypted rules:

- file type validation against `accept`
- optional Laravel validation from `serverValidation`
- locale switching for translated validation messages

## Upload Result

Successful uploads return a payload containing:

- `url`
- `path`
- `size`
- optional `thumbnail`

`thumbnail` is only added when:

- thumbnail generation is enabled
- the uploaded file is an image

## Storage Handling

`CanUploadFile` is the shared trait used by:

- `UploaderController`
- `TinymceController`
- profile update controllers
- settings update controllers

That keeps upload logic consistent across form uploads and editor image uploads.

## Practical Rule

Use the uploader system when:

- files must be uploaded before final form submit
- users need previews or sortable file lists
- the server must control destination and validation through encrypted config

Use plain file inputs only when you do not need async upload behavior.
