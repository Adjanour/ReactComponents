# React Components

[![npm version](https://img.shields.io/npm/v/@adjanour/react-components)](https://www.npmjs.com/package/@adjanour/react-components)
[![CI](https://github.com/Adjanour/ReactComponents/actions/workflows/ci.yml/badge.svg)](https://github.com/Adjanour/ReactComponents/actions)
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue)](https://unlicense.org)

Accessible, framework-agnostic React components with built-in CSS, dark mode, and
**zero required peer dependencies** beyond React.

Components: `AccordionWithSearch`, `Breadcrumbs`, `CommandPalette`

[**Docs site**](https://adjanour.github.io/ReactComponents/) &middot; [**Install**](#install) &middot; [**Components**](#components)

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

[Full docs →](https://adjanour.github.io/ReactComponents/components/accordion-with-search)

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
[Full docs →](https://adjanour.github.io/ReactComponents/components/breadcrumbs)

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
- [Full docs →](https://adjanour.github.io/ReactComponents/components/command-palette)

---

## Styling

Import the CSS file for the component you use:

```tsx
import '@adjanour/react-components/accordion.css'
import '@adjanour/react-components/breadcrumbs.css'
import '@adjanour/react-components/command-palette.css'
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
[Full theming guide →](https://adjanour.github.io/ReactComponents/guide/styling)

---

## Package

| Entry | Size |
|-------|------|
| ESM | 11.4 KB |
| CJS | 12.0 KB |
| CSS | 4.5 KB total |

- `"type": "module"` with dual ESM + CJS output
- Tree-shakeable - import only what you use
- Full TypeScript definitions included

---

## Development

```bash
pnpm install
pnpm dev          # watch build
pnpm test         # 33 tests (Vitest + Testing Library)
pnpm lint         # ESLint 9 flat config
pnpm typecheck    # TypeScript 5.9
pnpm build        # tsup
pnpm docs:dev     # VitePress docs site
pnpm docs:build   # build docs for deploy
```

---

## License

Unlicense - public domain. [Learn more](https://unlicense.org).
