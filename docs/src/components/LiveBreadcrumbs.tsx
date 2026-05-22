import { Breadcrumbs } from '../../../src/components/Breadcrumbs'
import '../../../breadcrumbs.css'

const items = [
  { title: 'Home', path: '/' },
  { title: 'Projects', path: '/projects' },
  { title: 'Active' },
]

export function LiveBreadcrumbs() {
  return <Breadcrumbs items={items} />
}
