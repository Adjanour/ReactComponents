# React Components

[![npm version](https://img.shields.io/npm/v/@adjanour/react-components)](https://www.npmjs.com/package/@adjanour/react-components)
[![CI](https://github.com/Adjanour/ReactComponents/actions/workflows/ci.yml/badge.svg)](https://github.com/Adjanour/ReactComponents/actions)
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue)](https://unlicense.org)

Accessible, framework-agnostic React components with built-in CSS, dark mode, and
**zero required peer dependencies** beyond React.

Components: `AccordionWithSearch`, `Breadcrumbs`, `CommandPalette`, `Tabs`, `Tooltip`, `SkipLink`, `TableOfContents`

[**Docs site**](https://adjanour.github.io/react-components/) &middot; [**Install**](#install) &middot; [**Components**](#components)

---

## Install

```bash
pnpm add @adjanour/react-components
```

Peer dependencies: `react` ^18 || ^19, `react-dom` ^18 || ^19.

---

## Quick start

```tsx
import { AccordionWithSearch } from '@adjanour/react-components'
import '@adjanour/react-components/accordion.css'

function Sidebar() {
  return <AccordionWithSearch />
}
```

---

## Components

### AccordionWithSearch

Searchable accordion navigation menu.

```tsx
import { AccordionWithSearch } from '@adjanour/react-components'
import '@adjanour/react-components/accordion.css'

// Default items
<AccordionWithSearch />

// With custom items and React Router
<AccordionWithSearch
  items={[
    { title: 'Dashboard', path: '/dashboard' },
    {
      title: 'Settings',
      children: [
        { title: 'Profile', path: '/settings/profile' },
        { title: 'Account', path: '/settings/account' },
      ],
    },
  ]}
  renderLink={(item, children) => (
    <NavLink to={item.path!}>{children}</NavLink>
  )}
/>
```

[Full docs →](https://adjanour.github.io/react-components/components/accordion-with-search)

---

### Breadcrumbs

Navigation breadcrumb trail with `aria-current` on the last item.

```tsx
import { Breadcrumbs } from '@adjanour/react-components'
import '@adjanour/react-components/breadcrumbs.css'

<Breadcrumbs
  items={[
    { title: 'Home', path: '/' },
    { title: 'Settings', path: '/settings' },
    { title: 'Profile' },
  ]}
/>
```

Custom separator: `<Breadcrumbs separator={<span>/</span>} />`.
[Full docs →](https://adjanour.github.io/react-components/components/breadcrumbs)

---

### CommandPalette

Cmd+K / Ctrl+K palette for keyboard navigation.

```tsx
import { CommandPalette } from '@adjanour/react-components'
import '@adjanour/react-components/command-palette.css'

<CommandPalette
  items={navItems}
  renderLink={(item, children) => (
    <NavLink to={item.path!}>{children}</NavLink>
  )}
/>
```

- **Arrow keys** to navigate, **Enter** to select, **Escape** to close
- Nested items are flattened to leaf nodes
- [Full docs →](https://adjanour.github.io/react-components/components/command-palette)

---

### Tabs

Accessible tabbed interface with keyboard navigation.

```tsx
import { Tabs } from '@adjanour/react-components'
import '@adjanour/react-components/tabs.css'

<Tabs
  tabs={[
    { label: 'Overview', content: <p>Overview</p> },
    { label: 'Usage', content: <p>Usage</p> },
  ]}
/>
```

[Full docs →](https://adjanour.github.io/react-components/components/tabs)

---

### Tooltip

Lightweight accessible tooltip. Hover or focus to show.

```tsx
import { Tooltip } from '@adjanour/react-components'
import '@adjanour/react-components/tooltip.css'

<Tooltip content="Helpful hint" position="top">
  <button>Hover me</button>
</Tooltip>
```

[Full docs →](https://adjanour.github.io/react-components/components/tooltip)

---

### SkipLink

Visually hidden skip link for keyboard accessibility.

```tsx
import { SkipLink } from '@adjanour/react-components'
import '@adjanour/react-components/skip-link.css'

<SkipLink href="#main-content">Skip to content</SkipLink>
```

[Full docs →](https://adjanour.github.io/react-components/components/skip-link)

---

### TableOfContents

Auto-highlighting table of contents with scroll spy.

```tsx
import { TableOfContents } from '@adjanour/react-components'
import '@adjanour/react-components/table-of-contents.css'

<TableOfContents headings={[
  { id: 'intro', label: 'Introduction', level: 2 },
  { id: 'usage', label: 'Usage', level: 2 },
]} />
```

[Full docs →](https://adjanour.github.io/react-components/components/table-of-contents)

---

## Styling

Import the CSS file for the component you use:

```tsx
import '@adjanour/react-components/accordion.css'
import '@adjanour/react-components/breadcrumbs.css'
import '@adjanour/react-components/command-palette.css'
import '@adjanour/react-components/tabs.css'
import '@adjanour/react-components/tooltip.css'
import '@adjanour/react-components/skip-link.css'
import '@adjanour/react-components/table-of-contents.css'
import '@adjanour/react-components/styles.css' // or all at once
```

All styles use `@layer aw-components` and CSS custom properties for easy theming:

```css
.my-nav {
  --aw-bg: #f8fafc;
  --aw-text: #0f172a;
  --aw-ring-color: #a78bfa;
}
```

Dark mode is automatic via `prefers-color-scheme: dark`.
[Full theming guide →](https://adjanour.github.io/react-components/guide/styling)

---

## Package

| Entry | Size |
|-------|------|
| ESM | 15.8 KB |
| CJS | 16.7 KB |
| CSS | 13.3 KB total |

- `"type": "module"` with dual ESM + CJS output
- Tree-shakeable - import only what you use
- Full TypeScript definitions included

---

## Development

```bash
pnpm install
pnpm dev          # watch build
pnpm test         # 57 tests (Vitest + Testing Library)
pnpm lint         # ESLint 9 flat config
pnpm typecheck    # TypeScript 5.9
pnpm build        # tsup
pnpm docs:dev     # VitePress docs site
pnpm docs:build   # build docs for deploy
```

---

## License

Unlicense - public domain. [Learn more](https://unlicense.org).
