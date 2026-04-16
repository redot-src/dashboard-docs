---
title: Remote Selects
description: Tom Select integration, encrypted query descriptors, preload behavior, and bound select dependencies.
---

# Remote Selects

## Route Surface

Remote selects use two shared global endpoints:

- `GET /tomselect/search`
- `GET /tomselect/fetch`

They are registered in `routes/global.php` as:

- `global.select.search`
- `global.select.fetch`

## Component Entry Point

The `<x-select>` component switches into remote mode when a `query` is provided.

In that mode it adds:

- `init="tomselect"`
- `select-query`
- `select-query-route`
- `select-fetch-route`
- `select-search-field`
- `select-preload-values`

## Encrypted Query Descriptor

`<x-select>` does not expose raw query details directly in the HTML.

Instead it builds an encrypted descriptor containing:

- `key`
- `text`
- `template`
- SQL generated from the query builder
- query bindings
- model class
- search term placeholder
- loaded columns
- appended fields

That payload is sent as the `data` query parameter to the search and fetch endpoints.

## Search Flow

`public/assets/inits/tomselect.js` handles the browser side.

For remote selects it:

- preloads on focus
- sends the typed term to the search endpoint
- passes the encrypted query payload
- includes optional limit values
- sends bound field parameters
- maps API items into `__value`, `__text`, and optional `__html`

## Server Response Shape

`SelectController` resolves remote items into a normalized payload.

Each option can contain:

- `__value`
- `__text`
- `__html`
- appended model fields requested by the select configuration

`__html` is rendered from the configured select template when one is present.

## Preloading Existing Values

When `select-preload-values` is present, the init makes a second request to `GET /tomselect/fetch`.

That request loads existing selected records by id so the field can render cleanly on:

- edit pages
- validation redirects
- pages where the remote list is too large to preload normally

## Bound Selects

Remote selects can depend on other fields through `bind-*` attributes.

When a bound source field changes, the init:

- clears the current selection
- clears loaded options
- updates the bound value
- resets Tom Select cached searches

This is the pattern to use for dependent selects like:

- city by country
- category by section
- user list by role or tenant

## Remote Rendering

The init supports:

- plain text option rendering
- remote HTML templates through `__html`
- same-template rendering for dropdown items and selected items
- remove button support for multiple and removable selects

## Practical Rule

Use remote selects when:

- the options come from a model query
- the dataset is too large for inline `<option>` output
- the visible label depends on a Blade template
- the select depends on another field's current value

Keep plain static selects for short option lists that do not need async loading.
