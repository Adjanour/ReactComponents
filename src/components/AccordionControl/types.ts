import { type ReactNode } from 'react';

export interface AccordionItemType {
  title: string;
  icon?: ReactNode;
  path?: string;
  children?: AccordionItemType[];
}

export interface AccordionWithSearchProps {
  items?: AccordionItemType[];
  className?: string;
  renderLink?: (item: AccordionItemType, children: ReactNode) => ReactNode;
}
