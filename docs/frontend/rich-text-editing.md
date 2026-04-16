---
title: Rich Text Editing
description: TinyMCE initialization, image upload flow, language handling, and editor defaults.
---

# Rich Text Editing

## Component Entry Point

The rich editor is exposed through `<x-rich-editor>`.

That component renders:

- `<x-textarea>`
- `init="tinymce"`
- optional field title
- optional field hint

It also loads the TinyMCE vendor script once.

## Init Route and Upload Endpoint

The editor uploads embedded images to:

- `POST /tinymce/upload`

That route is registered in `routes/global.php` as `tinymce.upload`.

The endpoint is handled by `TinymceController`.

## Server Rules

`TinymceController` uses `CanUploadFile` and accepts:

- `file` as required
- image files only

Successful requests return:

- `location`

That matches the response shape TinyMCE expects for inserted image uploads.

## Browser Initialization

`public/assets/inits/tinymce.js` handles editor setup.

The init is responsible for:

- loading the editor on `init="tinymce"` fields
- switching language with the current app locale
- switching direction with the current page direction
- sending images to `/tinymce/upload`
- applying the configured toolbar and plugins

## Built-In Behavior

The dashboard TinyMCE setup already accounts for:

- LTR and RTL layouts
- translated UI where TinyMCE language assets exist
- table editing
- lists
- alignment controls
- code editing
- image insertion

## When To Use It

Use `<x-rich-editor>` when the field should store authored HTML content such as:

- page bodies
- article content
- legal or policy pages
- rich descriptions

Use plain `<x-textarea>` when the field should remain plain text.
