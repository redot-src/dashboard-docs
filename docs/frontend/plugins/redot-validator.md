---
title: RedotValidator
description: Browser-side validation engine used by forms and dynamic fields.
outline: deep
---

# RedotValidator

## Purpose

Provides browser-side validation support for form fields marked with validation metadata.

## What It Handles

- collecting validation rules
- computing error bags
- integrating with form submission flow
- cooperating with visibility changes

## Used By

- global form submission handling in `app.js`
- `appendErrorsToForm(...)`
- complex conditional form UIs
