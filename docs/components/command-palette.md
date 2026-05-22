# CommandPalette

A Cmd+K / Ctrl+K command palette for keyboard-quick navigation.
Opens a searchable dialog over the page.

## Import

```tsx
import { CommandPalette } from '@adjanour/react-components'
import '@adjanour/react-components/command-palette.css'
```

## Basic Usage

```tsx
const items = [
  { title: 'Home', path: '/' },
  {
    title: 'Settings',
    children: [
      { title: 'Profile', path: '/settings/profile' },
      { title: 'Account', path: '/settings/account' },
    ],
  },
]

export default () => <CommandPalette items={items} />
```

Press **Cmd+K** (Mac) or **Ctrl+K** (Windows/Linux) to open.

## With React Router

```tsx
<CommandPalette
  items={navItems}
  renderLink={(item, children) => (
    <NavLink to={item.path!}>{children}</NavLink>
  )}
/>
```

## Custom Messages

```tsx
<CommandPalette
  items={items}
  placeholder="Type to search..."
  emptyMessage="No matching pages"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItemType[]` | Required | Items (nested children flattened) |
| `renderLink` | `(item, children) => ReactNode` | `<a>` | Custom link renderer |
| `placeholder` | `string` | `'Search...'` | Input placeholder |
| `emptyMessage` | `string` | `'No results found'` | Empty state |

## Behavior

- Opens on **Cmd+K** or **Ctrl+K**
- **Arrow keys** to navigate, **Enter** to select
- **Escape** to close, **Tab** is trapped inside dialog
- **Click outside** to close
- Nested items are flattened automatically to leaf nodes
- Active item scrolls into view
