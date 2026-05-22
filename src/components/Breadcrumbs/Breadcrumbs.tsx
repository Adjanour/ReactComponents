import { type ReactNode } from 'react'

interface Crumb {
  title: string
  path?: string
}

interface BreadcrumbsProps {
  items: Crumb[]
  separator?: ReactNode
  renderLink?: (item: Crumb, children: ReactNode) => ReactNode
}

const defaultSeparator = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="aw-bc-sep"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
)

function DefaultLink({ item, children }: { item: Crumb; children: ReactNode }) {
  if (!item.path) {
    return <span aria-current="page">{children}</span>
  }
  return <a href={item.path}>{children}</a>
}

export function Breadcrumbs({
  items,
  separator = defaultSeparator,
  renderLink,
}: BreadcrumbsProps) {
  if (items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="aw-breadcrumbs">
      <ol>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          const link = renderLink
            ? renderLink(item, item.title)
            : DefaultLink({ item, children: item.title })

          return (
            <li key={`${item.title}-${i}`}>
              {link}
              {!isLast && separator}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
