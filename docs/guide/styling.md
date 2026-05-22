# Styling & Theming

All styles are built with CSS custom properties and wrapped in
`@layer aw-components`, so you can override without specificity wars.

## Custom Properties

Override variables on `.aw-accordion`, `.aw-breadcrumbs`, or `.aw-cp-backdrop`:

```css
.my-nav {
  --aw-bg: #f8fafc;
  --aw-text: #0f172a;
  --aw-ring-color: #a78bfa;
  --aw-radius: 8px;
  max-width: 400px;
}
```

### Component Variables

**AccordionWithSearch**

| Variable | Default | Description |
|----------|---------|-------------|
| `--aw-bg` | `#fff` | Background |
| `--aw-text` | `#0f172a` | Text color |
| `--aw-text-muted` | `#64748b` | Muted text |
| `--aw-hover-bg` | `#f1f5f9` | Hover background |
| `--aw-border` | `#e2e8f0` | Border color |
| `--aw-radius` | `6px` | Border radius |
| `--aw-ring-color` | `#93c5fd` | Focus ring |
| `--aw-font` | `system-ui` | Font family |

**Breadcrumbs**

| Variable | Default | Description |
|----------|---------|-------------|
| `--aw-bc-link` | `#3b82f6` | Link color |
| `--aw-bc-link-hover` | `#2563eb` | Link hover color |
| `--aw-bc-current` | `#0f172a` | Current page color |
| `--aw-bc-sep-color` | `#94a3b8` | Separator color |
| `--aw-bc-gap` | `6px` | Spacing between items |

**CommandPalette**

| Variable | Default | Description |
|----------|---------|-------------|
| `--aw-cp-overlay` | `rgba(15,23,42,0.4)` | Backdrop color |
| `--aw-cp-bg` | `#fff` | Dialog background |
| `--aw-cp-radius` | `10px` | Dialog border radius |
| `--aw-cp-hover` | `#f1f5f9` | Item hover background |
| `--aw-cp-active-text` | `#1d4ed8` | Active item text |

## CSS Layers

All styles are in `@layer aw-components`. To override, use a higher-priority layer:

```css
@layer base {
  .aw-item {
    padding: 12px 16px;
  }
}

/* Or simply increase specificity */
.my-accordion .aw-item {
  font-size: 15px;
}
```

## Dark Mode

Dark mode is automatic via `prefers-color-scheme: dark`. To force a specific mode:

```css
/* Force dark */
.aw-accordion {
  --aw-bg: #1e293b;
  --aw-text: #f1f5f9;
  --aw-border: #475569;
}
```
