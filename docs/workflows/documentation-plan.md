---
title: Documentation Plan
description: Documentation scope and information architecture for this first VitePress pass.
outline: deep
---

# Documentation Plan

## Goal

Build a product-grade documentation site for the Redot Dashboard starter kit that works as:

- onboarding documentation
- implementation documentation
- long-term maintenance reference

## Current Direction

The docs are being expanded from high-level summaries into a much denser reference set.

That includes:

- dashboard-root documentation only
- one top navigation item
- one sidebar root with grouped related pages
- fewer page-to-page filler sections
- more direct reference material

## Information Architecture

The current documentation groups content into:

- Getting Started
- Architecture
- Foundation
- Frontend
- Reference
- Workflows

## Priority Areas

### Product Coverage

- setup and local development
- route surfaces and runtime behavior
- auth, settings, localization, datatables, and sidebar behavior
- frontend assets and browser-side behavior
- layouts and built-in modules

### Reference Coverage

- one page per frontend component
- one page per frontend plugin
- one page per frontend init
- one page per trait
- full helper inventory with parameters, return values, and usage examples

### Style Rules

- dashboard-first language only
- project-root relative paths only
- no `../core` or `../dashboard` framing
- no `Continue`, `Read Next`, or similar filler sections

## Still Worth Adding Later

- worked examples for building a full entity from scratch
- deployment and production operations
- API endpoint reference by route and payload shape
- screenshots or diagrams for layout, auth, and component behavior
