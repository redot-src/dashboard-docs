---
title: Turnstile Init
description: Initializes Cloudflare Turnstile and writes the token into a hidden input.
outline: deep
---

# Turnstile Init

Initializer name:

- `turnstile`

Option prefix:

- `captcha-*`

Default options:

- `sitekey` from meta tag
- `theme` from current theme
- `language` from `<html lang>`
- `size = flexible`

Special behavior:

- writes the generated token into the hidden field inside the component

Stores instance under:

- `captcha`
