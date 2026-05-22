import { useState } from 'react';
import { AccordionItem } from './AccordionItem';
import { SearchBar } from './SearchBar';
import { defaultAccordionItems } from './defaultItems';
import type { AccordionItemType, AccordionWithSearchProps } from './types';

export function AccordionWithSearch({
  items = defaultAccordionItems,
  className = '',
  renderLink,
}: AccordionWithSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(
    (item: AccordionItemType) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      (item.children &&
        item.children.some((child) =>
          child.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
        ))
  );

  return (
    <nav className={`aw-accordion${className ? ` ${className}` : ''}`}>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <hr className="aw-divider" />
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <AccordionItem
            key={item.title}
            item={item}
            searchTerm={searchTerm}
            renderLink={renderLink}
          />
        ))
      ) : (
        <p className="aw-empty">No items found</p>
      )}
    </nav>
  );
}
