# Getting Started

## Installation

```bash
pnpm add @adjanour/react-components
```

Peer dependencies (install these if you don't have them):

```bash
pnpm add react react-dom
```

## Quick Start

```tsx
import { AccordionWithSearch } from '@adjanour/react-components'
import '@adjanour/react-components/accordion.css'

function App() {
  return <AccordionWithSearch />
}
```

## Usage with a Router

```tsx
import { AccordionWithSearch } from '@adjanour/react-components'
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <AccordionWithSearch
      renderLink={(item, children) => (
        <NavLink to={item.path!}>{children}</NavLink>
      )}
    />
  )
}
```

## Usage with Next.js

```tsx
'use client'
import Link from 'next/link'
import { AccordionWithSearch } from '@adjanour/react-components'
import '@adjanour/react-components/accordion.css'

export default function Sidebar() {
  return (
    <AccordionWithSearch
      renderLink={(item, children) => (
        <Link href={item.path!}>{children}</Link>
      )}
    />
  )
}
```

## Importing CSS

Each component ships with its own stylesheet:

| Component | CSS file |
|-----------|----------|
| AccordionWithSearch | `@adjanour/react-components/accordion.css` |
| Breadcrumbs | `@adjanour/react-components/breadcrumbs.css` |
| CommandPalette | `@adjanour/react-components/command-palette.css` |
| All components | `@adjanour/react-components/styles.css` |

## License

This project is **Unlicensed** — public domain. Do whatever you want with it.
No attribution required, no restrictions.
