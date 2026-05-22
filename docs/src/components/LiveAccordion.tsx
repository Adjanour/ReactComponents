import { AccordionWithSearch } from '../../../src/components/AccordionControl'
import type { AccordionItemType } from '../../../src/components/AccordionControl/types'
import '../../../accordion.css'

const sampleItems: AccordionItemType[] = [
  { title: 'Dashboard', path: '/dashboard' },
  {
    title: 'Projects',
    children: [
      { title: 'Active', path: '/projects/active' },
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
  { title: 'Help', path: '/help' },
]

export function LiveAccordion() {
  return <AccordionWithSearch items={sampleItems} />
}
