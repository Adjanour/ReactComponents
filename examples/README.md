# Examples

This directory contains example usage of the ReactComponents library.

## Basic Example

```tsx
import { AccordionWithSearch } from '@adjanour/react-components';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Navigation Menu</h1>
        <AccordionWithSearch />
      </div>
    </BrowserRouter>
  );
}

export default App;
```

## Custom Items Example

```tsx
import { AccordionWithSearch, AccordionItemType } from '@adjanour/react-components';
import { BrowserRouter } from 'react-router-dom';
import { 
  HomeIcon, 
  UserIcon, 
  CogIcon,
  DocumentIcon 
} from '@heroicons/react/outline';

const menuItems: AccordionItemType[] = [
  {
    title: 'Dashboard',
    icon: <HomeIcon className="h-5 w-5" />,
    path: '/dashboard',
  },
  {
    title: 'Users',
    icon: <UserIcon className="h-5 w-5" />,
    children: [
      { title: 'All Users', path: '/users' },
      { title: 'Add User', path: '/users/add' },
      { title: 'User Groups', path: '/users/groups' },
    ],
  },
  {
    title: 'Documents',
    icon: <DocumentIcon className="h-5 w-5" />,
    children: [
      { title: 'My Documents', path: '/documents/my' },
      { title: 'Shared', path: '/documents/shared' },
      { title: 'Archive', path: '/documents/archive' },
    ],
  },
  {
    title: 'Settings',
    icon: <CogIcon className="h-5 w-5" />,
    path: '/settings',
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <aside className="sidebar">
          <AccordionWithSearch items={menuItems} className="nav-menu" />
        </aside>
        <main className="content">
          {/* Your app content */}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

## With Custom Styling

```tsx
import { AccordionWithSearch } from '@adjanour/react-components';
import { BrowserRouter } from 'react-router-dom';
import './custom-accordion-styles.css';

function App() {
  return (
    <BrowserRouter>
      <AccordionWithSearch className="my-custom-accordion" />
    </BrowserRouter>
  );
}

export default App;
```

### custom-accordion-styles.css

```css
.my-custom-accordion {
  background: linear-gradient(to bottom, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 1rem;
}

.my-custom-accordion .accordion-item {
  color: white;
  font-weight: 600;
}

.my-custom-accordion .accordion-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.my-custom-accordion .searchBar {
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid #667eea;
}
```

## Running the Examples

To run these examples in your own project:

1. Install the package and peer dependencies:
   ```bash
   npm install @adjanour/react-components react react-dom react-router-dom @heroicons/react clsx
   ```

2. Copy the example code to your component file

3. Make sure your app is wrapped with `BrowserRouter` from `react-router-dom`

4. Add appropriate CSS styling for the classes used by the accordion
