# Redot Dashboard Docs

This directory now contains a VitePress documentation site for the Redot Dashboard starter kit.

## Structure

- `docs/`: VitePress source files
- `docs/.vitepress/config.mts`: site config, nav, sidebar, and TOC behavior
- `package.json`: docs scripts and VitePress dependency

## Run

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
```

## Site Entry

The documentation homepage is [docs/index.md](/home/abdelrhman/projects/docs/docs/index.md).

## Documentation Convention

The docs are written from the perspective of someone working inside the dashboard project root.

- commands are run from the dashboard root
- file paths are dashboard-root relative
- built-in starter features are documented as part of the dashboard itself
