import { useState, useId, type ReactNode } from 'react';
import type { AccordionItemType } from './types';

interface AccordionItemProps {
  item: AccordionItemType;
  searchTerm?: string;
  renderLink?: (item: AccordionItemType, children: ReactNode) => ReactNode;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="aw-chevron"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {open ? <path d="M18 15l-6-6-6 6" /> : <path d="M6 9l6 6 6-6" />}
    </svg>
  );
}

function ItemContent({ item }: { item: AccordionItemType }) {
  return (
    <>
      {item.icon && <span className="aw-item-icon">{item.icon}</span>}
      <span>{item.title}</span>
    </>
  );
}

export function AccordionItem({ item, searchTerm = '', renderLink }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const hasChildren = item.children && item.children.length > 0;

  const filteredChildren = hasChildren
    ? item.children!.filter((child) =>
        child.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : [];

  if (!hasChildren) {
    const content = (
      <span className="aw-item-inner">
        <ItemContent item={item} />
      </span>
    );
    if (renderLink) {
      return <div className="aw-item">{renderLink(item, content)}</div>;
    }
    return (
      <a href={item.path} className="aw-item" tabIndex={0}>
        {content}
      </a>
    );
  }

  return (
    <div className="aw-group">
      <button
        className="aw-item"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={`aw-panel-${id}`}
        type="button"
      >
        <span className="aw-item-inner">
          <ItemContent item={item} />
        </span>
        <ChevronIcon open={isOpen} />
      </button>
      {isOpen && filteredChildren.length > 0 && (
        <div id={`aw-panel-${id}`} role="region" className="aw-children">
          {filteredChildren.map((child) => (
            <AccordionChild key={child.title} child={child} renderLink={renderLink} />
          ))}
        </div>
      )}
    </div>
  );
}

function AccordionChild({
  child,
  renderLink,
}: {
  child: AccordionItemType;
  renderLink?: (item: AccordionItemType, children: ReactNode) => ReactNode;
}) {
  const content = (
    <span className="aw-item-inner">
      <ItemContent item={child} />
    </span>
  );

  if (renderLink) {
    return <div className="aw-item">{renderLink(child, content)}</div>;
  }

  return (
    <a href={child.path} className="aw-item" tabIndex={0}>
      {content}
    </a>
  );
}
