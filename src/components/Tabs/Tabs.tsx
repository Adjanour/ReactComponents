import { useState, useId, useCallback, type ReactNode } from 'react'

interface Tab {
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultIndex?: number
}

export function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
  const [active, setActive] = useState(defaultIndex)
  const id = useId()

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      let next = active
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        next = (active + 1) % tabs.length
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        next = (active - 1 + tabs.length) % tabs.length
      } else if (e.key === 'Home') {
        next = 0
      } else if (e.key === 'End') {
        next = tabs.length - 1
      } else {
        return
      }
      e.preventDefault()
      setActive(next)
      const tab = document.getElementById(`aw-tab-${id}-${next}`)
      tab?.focus()
    },
    [active, tabs.length, id]
  )

  if (tabs.length === 0) return null

  return (
    <div className="aw-tabs">
      <div
        className="aw-tablist"
        role="tablist"
        aria-label="Tabs"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={`aw-tab-${id}-${i}`}
            className={`aw-tab${i === active ? ' aw-tab-active' : ''}`}
            role="tab"
            aria-selected={i === active}
            aria-controls={`aw-panel-${id}-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={i}
          id={`aw-panel-${id}-${i}`}
          className="aw-tabpanel"
          role="tabpanel"
          aria-labelledby={`aw-tab-${id}-${i}`}
          hidden={i !== active}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}
