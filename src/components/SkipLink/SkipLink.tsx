import { type ReactNode } from 'react'

interface SkipLinkProps {
  href?: string
  children?: ReactNode
}

export function SkipLink({
  href = '#main-content',
  children = 'Skip to content',
}: SkipLinkProps) {
  return (
    <a href={href} className="aw-skip-link">
      {children}
    </a>
  )
}
