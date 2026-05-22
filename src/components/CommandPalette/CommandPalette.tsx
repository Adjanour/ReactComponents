import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import type { AccordionItemType } from '../AccordionControl/types'

interface CommandPaletteProps {
  items: AccordionItemType[]
  renderLink?: (item: AccordionItemType, children: ReactNode) => ReactNode
  placeholder?: string
  emptyMessage?: string
}

function flattenLeaves(
  items: AccordionItemType[]
): AccordionItemType[] {
  return items.flatMap((item) =>
    item.children ? flattenLeaves(item.children) : item
  )
}

function defaultRenderLink(item: AccordionItemType, children: ReactNode) {
  return <a href={item.path}>{children}</a>
}

export function CommandPalette({
  items,
  renderLink = defaultRenderLink,
  placeholder = 'Search...',
  emptyMessage = 'No results found',
}: CommandPaletteProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const allItems = flattenLeaves(items)

  const filtered = query.trim()
    ? allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase().trim())
      )
    : allItems

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActiveIndex(0)
  }, [])

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape' && open) {
        close()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, close])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
      setActiveIndex(0)
    }
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => (i + 1) % filtered.length)
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length)
    }
    if (e.key === 'Enter' && filtered[activeIndex]) {
      close()
    }
  }

  useEffect(() => {
    if (!open || !listRef.current) return
    const active = listRef.current.children[activeIndex] as HTMLElement | undefined
    active?.scrollIntoView?.({ block: 'nearest' })
  }, [activeIndex, open])

  const body = (
    <div
      className="aw-cp-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Tab') e.preventDefault()
      }}
      role="presentation"
    >
      <div
        className="aw-cp-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <input
          ref={inputRef}
          className="aw-cp-input"
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-activedescendant={
            filtered[activeIndex] ? `aw-cp-item-${activeIndex}` : undefined
          }
          role="combobox"
          aria-expanded="true"
          aria-controls="aw-cp-list"
          aria-autocomplete="list"
        />
        <div
          id="aw-cp-list"
          ref={listRef}
          className="aw-cp-list"
          role="listbox"
        >
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <div
                key={item.title}
                id={`aw-cp-item-${i}`}
                className={`aw-cp-item${i === activeIndex ? ' aw-cp-item-active' : ''}`}
                role="option"
                aria-selected={i === activeIndex}
                onMouseDown={(e) => {
                  e.preventDefault()
                  close()
                }}
                onMouseEnter={() => setActiveIndex(i)}
              >
                {renderLink(item, item.title)}
              </div>
            ))
          ) : (
            <div className="aw-cp-empty">{emptyMessage}</div>
          )}
        </div>
        <div className="aw-cp-hint">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  )

  return open ? createPortal(body, document.body) : null
}
