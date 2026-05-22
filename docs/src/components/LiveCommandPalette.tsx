import { CommandPalette } from '../../../src/components/CommandPalette'
import type { AccordionItemType } from '../../../src/components/AccordionControl/types'
import '../../../command-palette.css'

const items: AccordionItemType[] = [
  { title: 'Dashboard', path: '/dashboard' },
  { title: 'Analytics', path: '/analytics' },
  {
    title: 'Projects',
    children: [
      { title: 'Active Projects', path: '/projects/active' },
      { title: 'Archived', path: '/projects/archived' },
    ],
  },
  {
    title: 'Settings',
    children: [
      { title: 'Profile', path: '/settings/profile' },
      { title: 'Account', path: '/settings/account' },
    ],
  },
  { title: 'Help Center', path: '/help' },
]

export function LiveCommandPalette() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
        Press <kbd style={{ padding: '2px 6px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', fontFamily: 'inherit' }}>Cmd+K</kbd> or <kbd style={{ padding: '2px 6px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', fontFamily: 'inherit' }}>Ctrl+K</kbd> to open
      </p>
      <CommandPalette items={items} />
    </div>
  )
}
