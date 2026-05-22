# React Components

Accessible, framework-agnostic React components with built-in CSS,
dark mode, and zero required runtime dependencies beyond React.

<div style="display:flex;gap:8px;flex-wrap:wrap;margin:1.5rem 0">
  <a href="/ReactComponents/guide/getting-started" class="btn-primary">Get Started</a>
  <a href="/ReactComponents/components/accordion-with-search" class="btn-secondary">View Components</a>
</div>

## Features

- **Zero runtime deps** — no required peer dependencies beyond React + React DOM
- **Any router** — `renderLink` prop works with React Router, Next.js, TanStack Router
- **Built-in CSS** — self-contained stylesheets with dark mode
- **Accessible** — WAI-ARIA patterns throughout
- **Lightweight** — ~11 KB gzip
- **TypeScript** — full types included
- **Unlicense** — free for any use, no restrictions

## Quick Install

```bash
pnpm add @adjanour/react-components
```

```tsx
import { AccordionWithSearch } from '@adjanour/react-components'
import '@adjanour/react-components/accordion.css'

export default () => <AccordionWithSearch />
```

<style>
.btn-primary, .btn-secondary {
  display: inline-block;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.15s, transform 0.1s;
}
.btn-primary {
  background: #3b82f6;
  color: #fff;
}
.btn-primary:hover {
  background: #2563eb;
}
.btn-secondary {
  background: #f1f5f9;
  color: #0f172a;
}
.btn-secondary:hover {
  background: #e2e8f0;
}
</style>
