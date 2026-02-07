import { ReactNode } from 'react';

export interface AccordionItemType {
  title: string;
  icon?: ReactNode;
  path?: string;
  children?: AccordionItemType[];
}

export interface AccordionItemProps {
  icon?: ReactNode;
  title: string;
  path?: string;
  children?: AccordionItemType[];
  searchTerm?: string;
}

export interface AccordionChildProps {
  child: AccordionItemType;
}

export interface SearchBarProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AccordionWithSearchProps {
  items?: AccordionItemType[];
  className?: string;
}
