import { useState } from 'react';
import { AccordionItem } from './AccordionItem';
import { SearchBar } from './SearchBar';
import { defaultAccordionItems } from './defaultItems';
import { AccordionItemType, AccordionWithSearchProps } from './types';

export function AccordionWithSearch({
  items = defaultAccordionItems,
  className = '',
}: AccordionWithSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredAccordionItems = items.filter(
    (item: AccordionItemType) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      (item.children &&
        item.children.some((child) =>
          child.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
        ))
  );

  const hasItems = filteredAccordionItems.length > 0;

  return (
    <div className={`accordion ${className}`}>
      <SearchBar onSearch={handleSearch} />
      <hr />
      {hasItems &&
        filteredAccordionItems.map((item: AccordionItemType) => (
          <AccordionItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            path={item.path}
            searchTerm={searchTerm}
          >
            {item.children}
          </AccordionItem>
        ))}
      {!hasItems && <p className="no-results">No items found</p>}
    </div>
  );
}
