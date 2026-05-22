# AccordionWithSearch

A searchable accordion navigation menu. Parent items expand to reveal children.
Search filters both top-level items and their children.

## Import

```tsx
import { AccordionWithSearch } from '@adjanour/react-components'
import '@adjanour/react-components/accordion.css'
```

## Default Usage

```tsx
<AccordionWithSearch />
```

Renders with built-in navigation items (Home, Task, Project, Team, Settings, etc.).

## Custom Items

```tsx
import { AccordionWithSearch } from '@adjanour/react-components'
import type { AccordionItemType } from '@adjanour/react-components'

const items: AccordionItemType[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    title: 'Projects',
    children: [
      { title: 'Active', path: '/projects/active' },
      { title: 'Archived', path: '/projects/archived' },
    ],
  },
]

export default () => <AccordionWithSearch items={items} />
```

## With Icons

```tsx
const items: AccordionItemType[] = [
  {
    title: 'Home',
    icon: <HomeIcon className="aw-item-icon" />,
    path: '/',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon className="aw-item-icon" />,
    children: [
      { title: 'Profile', path: '/settings/profile' },
    ],
  },
]
```

## With React Router

```tsx
import { NavLink } from 'react-router-dom'

<AccordionWithSearch
  renderLink={(item, children) => (
    <NavLink
      to={item.path!}
      className={({ isActive }) => isActive ? 'active' : ''}
    >
      {children}
    </NavLink>
  )}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItemType[]` | Built-in defaults | Menu items |
| `className` | `string` | `''` | Additional CSS class |
| `renderLink` | `(item, children) => ReactNode` | `<a>` | Custom link renderer |

### AccordionItemType

```ts
interface AccordionItemType {
  title: string
  icon?: ReactNode
  path?: string
  children?: AccordionItemType[]
}
```
