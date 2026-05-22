# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-05-22

### Added

- **Breadcrumbs component** — navigation breadcrumb trail with `aria-current`
- **CommandPalette component** — Cmd+K / Ctrl+K keyboard palette with search
- **Docs site** — Astro + MDX with live interactive React examples, auto-deployed to GitHub Pages
- **`renderLink` prop** — works with any router (React Router, Next.js, etc.)
- **Built-in CSS** — per-component stylesheets with `@layer aw-components`, dark mode, CSS custom properties
- **Breadcrumbs.css** — self-contained styling for the Breadcrumbs component
- **CommandPalette.css** — self-contained styling for the CommandPalette component
- **Interactive examples** — LiveAccordion, LiveBreadcrumbs, LiveCommandPalette components in docs
- **GH Actions docs deploy** — auto-builds and publishes docs site to GitHub Pages on push to main

### Changed

- **License: MIT → Unlicense** — public domain, no restrictions
- **Package manager: npm → pnpm** — faster installs, strict dependency isolation
- **ESLint 8 → ESLint 9 flat config** — modern `eslint.config.mjs`
- **TypeScript target: ES2020 → ES2022**
- **`"type": "module"`** — ESM-first package
- **CJS output: `.js` → `.cjs`** — correct module resolution
- **`tsup splitting: true`** — better tree-shaking
- **AccordionWithSearch API** — no longer depends on `react-router-dom`; uses `renderLink` prop
- **AccordionItem API** — accepts `item` prop instead of fragmented title/icon/path/children
- **SearchBar** — controlled `value` + `onChange` instead of raw DOM events
- **Removed `clsx` dependency** — replaced with string concatenation
- **Removed `@heroicons/react` from defaults** — text-only default items, inline SVG chevrons
- **Removed `react-router-dom` from peer deps** — framework-agnostic
- **React 17 → React 18/19** in peer deps
- **CI workflow** — pnpm, Node 20/22, simpler matrix
- **`@testing-library/jest-dom` → `/vitest` entry** — Vitest-native matchers
- **Published CSS files** — `accordion.css`, `breadcrumbs.css`, `command-palette.css`, `styles.css`
- **README** — full rewrite with inline examples for all components, Unlicense badge

### Removed

- `package-lock.json` → `pnpm-lock.yaml`
- `.eslintrc.json` → `eslint.config.mjs`
- VitePress docs → Astro + MDX
- `@heroicons/react` dev dependency
- `clsx` dev dependency
- `react-router-dom` peer dependency
- `examples/` old CSS and README

## [1.0.0] - 2026-02-07

### Added

- Complete TypeScript rewrite with full type safety
- Modern build tooling with tsup for ESM and CJS outputs
- Comprehensive test suite with Vitest and React Testing Library
- ESLint and Prettier configurations for code quality
- Proper npm package structure with correct exports
- AccordionWithSearch component with search functionality
- AccordionItem component with expand/collapse functionality
- Support for custom accordion items
- Accessibility improvements (ARIA attributes, keyboard navigation)
- Full documentation and usage examples

### Changed

- Migrated from JavaScript to TypeScript
- Improved component structure and modularity
- Enhanced search filtering logic
- Better prop typing and validation
- Modernized React patterns (removed inline styles where appropriate)

### Removed

- Duplicate JavaScript versions
- Commented-out code
- Unused utility files

### Fixed

- Event handler type safety issues
- Key prop warnings in lists
- Navigation logic bugs
- Inconsistent code style
