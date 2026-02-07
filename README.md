# React Components

[![npm version](https://img.shields.io/npm/v/@adjanour/react-components.svg)](https://www.npmjs.com/package/@adjanour/react-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A collection of feature-rich, accessible React components built with TypeScript. Currently featuring the AccordionWithSearch component - a powerful accordion menu with built-in search functionality.

## Features

✨ **Modern & Type-Safe** - Built with TypeScript for excellent IDE support and type safety  
🎨 **Customizable** - Flexible props and styling options  
♿ **Accessible** - ARIA attributes and keyboard navigation support  
🔍 **Search Built-in** - Filter accordion items instantly  
📦 **Tree-shakeable** - Optimized bundle size with ESM support  
🧪 **Well-tested** - Comprehensive test coverage  

## Installation

```bash
npm install @adjanour/react-components
```

or with yarn:

```bash
yarn add @adjanour/react-components
```

or with pnpm:

```bash
pnpm add @adjanour/react-components
```

## Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "react": "^17.0.0 || ^18.0.0",
  "react-dom": "^17.0.0 || ^18.0.0",
  "react-router-dom": "^6.0.0"
}
```

For icons, you'll also need:
```bash
npm install @heroicons/react clsx
```

## Components

### AccordionWithSearch

A sophisticated accordion component with integrated search functionality, perfect for navigation menus and content organization.

#### Basic Usage

```tsx
import { AccordionWithSearch } from '@adjanour/react-components';

function App() {
  return (
    <div>
      <AccordionWithSearch />
    </div>
  );
}
```

#### Custom Items

```tsx
import { AccordionWithSearch, AccordionItemType } from '@adjanour/react-components';
import { HomeIcon, CogIcon } from '@heroicons/react/outline';

const customItems: AccordionItemType[] = [
  {
    title: 'Home',
    icon: <HomeIcon className="h-5 w-5" />,
    path: '/',
  },
  {
    title: 'Settings',
    icon: <CogIcon className="h-5 w-5" />,
    children: [
      {
        title: 'Profile',
        path: '/settings/profile',
      },
      {
        title: 'Account',
        path: '/settings/account',
      },
    ],
  },
];

function App() {
  return <AccordionWithSearch items={customItems} />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItemType[]` | `defaultAccordionItems` | Array of accordion items to display |
| `className` | `string` | `''` | Additional CSS classes for the accordion container |

#### AccordionItemType Interface

```typescript
interface AccordionItemType {
  title: string;
  icon?: ReactNode;
  path?: string;
  children?: AccordionItemType[];
}
```

## Styling

The components use Tailwind CSS utility classes. Make sure to include Tailwind CSS in your project or provide your own styles for these classes:

- `accordion`
- `accordion-item`
- `accordion-children`
- `accordion-child`
- `searchBar`
- `search-form`

### Example CSS

```css
.accordion {
  width: 100%;
  max-width: 300px;
}

.accordion-item {
  padding: 0.75rem 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.accordion-item:hover {
  background-color: #f3f4f6;
}

.accordion-children {
  padding-left: 1rem;
  background-color: #f9fafb;
}

.accordion-child {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.searchBar {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
}
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build the library
npm run build

# Lint code
npm run lint

# Format code
npm run format
```

## TypeScript Support

This package is written in TypeScript and includes type definitions out of the box. No need for `@types/*` packages!

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- React 17+ or React 18+

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for release history.

## License

MIT © [Adjanour](https://github.com/Adjanour)

## Support

If you encounter any issues or have questions:
- 📧 Email: adjanour@icloud.com
- 🐛 [Report a bug](https://github.com/Adjanour/ReactComponents/issues)
- 💡 [Request a feature](https://github.com/Adjanour/ReactComponents/issues)

---

<div align="center">
  Made with ❤️ by Africoda
</div>
