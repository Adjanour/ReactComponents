import { useState, useEffect, type ReactNode } from 'react'

export interface TocHeading {
  id: string
  label: string
  level: number
}

interface TableOfContentsProps {
  headings: TocHeading[]
  renderLink?: (heading: TocHeading, children: ReactNode) => ReactNode
}

function DefaultLink({ heading, children }: { heading: TocHeading; children: ReactNode }) {
  return <a href={`#${heading.id}`}>{children}</a>
}

export function TableOfContents({
  headings,
  renderLink,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    )

    for (const h of headings) {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [headings])

  useEffect(() => {
    if (headings.length > 0 && !activeId) {
      setActiveId(headings[0].id)
    }
  }, [headings, activeId])

  if (headings.length === 0) return null

  const minLevel = Math.min(...headings.map((h) => h.level))

  return (
    <nav aria-label="Table of contents" className="aw-toc">
      <span className="aw-toc-label">On this page</span>
      <ul className="aw-toc-list">
        {headings.map((h) => {
          const indent = h.level - minLevel
          const link = renderLink
            ? renderLink(h, h.label)
            : DefaultLink({ heading: h, children: h.label })

          return (
            <li
              key={h.id}
              className={`aw-toc-item${h.id === activeId ? ' aw-toc-active' : ''}`}
              style={{ paddingLeft: `${indent * 0.75}rem` }}
            >
              {link}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
