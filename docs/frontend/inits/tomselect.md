---
title: Tom Select Init
description: Initializes local or remote select boxes with binding-aware reload behavior.
outline: deep
---

# Tom Select Init

Initializer name:

- `tomselect`

Option prefixes:

- `select-*`
- `bind-*`

Default behavior:

- placeholder fallback
- dropdown parent set to `body`
- remote mode when `query` exists
- remove button plugin for `multiple` or `removable`
- custom HTML option rendering when available

Special behaviors:

- preload by id
- dependency bindings
- clear cached searches when bindings change
- disable on hidden state

Stores instance under:

- `tomselect`
