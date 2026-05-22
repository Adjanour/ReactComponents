import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'React Components',
  description: 'Accessible, framework-agnostic React components with built-in styling',
  base: '/ReactComponents/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/accordion-with-search' },
      { text: 'GitHub', link: 'https://github.com/Adjanour/ReactComponents' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Styling & Theming', link: '/guide/styling' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'AccordionWithSearch', link: '/components/accordion-with-search' },
          { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
          { text: 'CommandPalette', link: '/components/command-palette' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Adjanour/ReactComponents' },
    ],
    footer: {
      message: 'Released under the Unlicense. Free for any use.',
    },
  },
})
