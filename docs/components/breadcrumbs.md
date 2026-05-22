# Breadcrumbs

A navigation breadcrumb trail with automatic `aria-current` on the last item.

## Import

```tsx
import { Breadcrumbs } from '@adjanour/react-components'
import '@adjanour/react-components/breadcrumbs.css'
```

## Basic Usage

```tsx
const items = [
  { title: 'Home', path: '/' },
  { title: 'Settings', path: '/settings' },
  { title: 'Profile' },
]

export default () => <Breadcrumbs items={items} />
```

Last item without a `path` is rendered as plain text with `aria-current="page"`.

## With React Router

```tsx
<Breadcrumbs
  items={items}
  renderLink={(item, children) => (
    <Link to={item.path!}>{children}</Link>
  )}
/>
```

## Custom Separator

```tsx
<Breadcrumbs
  items={items}
  separator={<span>/</span>}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Crumb[]` | Required | Breadcrumb trail |
| `separator` | `ReactNode` | Chevron icon | Separator between items |
| `renderLink` | `(item, children) => ReactNode` | `<a>` | Custom link renderer |

```ts
interface Crumb {
  title: string
  path?: string
}
```
