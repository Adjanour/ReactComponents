import React, { ReactEventHandler, useState } from 'react';
import { AccordionItems } from './AccordionItems';
import {Link, NavLink} from 'react-router-dom';
import cn from 'clsx'
export type AccordionItemType = {
    title: string;
    icon?: React.ReactNode;
    path?: string;
    children?: AccordionItemType[];
  };

type AccordionItemProps = {
    icon?: React.ReactNode;
    title: string;
    path?: string;
    children?: AccordionItemType[];
    searchTerm?: string;
}
type AccordionChildProps = {
    child: AccordionItemType;
}

function AccordionItem({ icon, title, children, path, searchTerm }:AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div>
      {children ? (
        <button className={cn("accordion-item",isOpen ? 'active':"",isOpen ? "bg-blue-300 font-bold rounded-md":"")} onClick={toggleAccordion} aria-expanded={isOpen}>
        <div className='title-theme' style={{display:'flex',flexDirection:'row'}}>
        <div className="icon">{icon}</div>
        <div className="text-md" style={{marginLeft:'5px'}}>{title}</div>
        </div>
        <div>
            {children?.length > 0 && (
              <button className="expand-button" onClick={toggleAccordion}>
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            )}
          </div>
      </button>
      ):(
        <NavLink to={path ? path : ''} >
      <button className={cn("accordion-item",isOpen ? 'active':"")} onClick={toggleAccordion} aria-expanded={isOpen}>
        <div className='title-theme' style={{display:'flex',flexDirection:'row'}}>
        <div className="icon">{icon}</div>
        <div className="text-md" style={{marginLeft:'5px'}}>{title}</div>
        </div>
        <div>
            {children  && (
              <button className="expand-button" onClick={toggleAccordion}>
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            )}
          </div>
      </button>
      </NavLink>
      )}
    </div>
      {isOpen && (
        <div className="accordion-children">
        {children
      ?.filter((child) => child.title.toLowerCase().includes( searchTerm ? searchTerm.toLowerCase().trim(): ''))
      .map((child, index) => (
        <AccordionChild key={child.title} child={child} />
      ))}
      </div>
      )}
    </>
  );
}
function AccordionChild({ child }:AccordionChildProps) {
  return (
    <NavLink to={child.path ? child.path : ''} key={child.title}>
      <div className="accordion-child">
        {child.icon && <div className="icon">{child.icon}</div>}
        <p className="text-md" style={{ marginLeft: '5px' }}>
          {child.title}
        </p>
      </div>
    </NavLink>
  );
}
export function AccordionWithSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const hasItems = AccordionItems && AccordionItems.length > 0;

  // ... rest of the component
  const handleSearch = (event:any) => {
    setSearchTerm(event.target.value);
  };
  const filteredAccordionItems = AccordionItems.filter((item:AccordionItemType) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
  (item.children && item.children.some((child) => child.title.toLowerCase().includes(searchTerm.toLowerCase().trim())))
);

  // ... rest of the component
  return (
    <div className="accordion">
      <SearchBar onSearch={handleSearch} />
      {/* ... rest of the component */}
      <hr />
      {hasItems && filteredAccordionItems.map((item:AccordionItemType) => (
        <AccordionItem key={item.title} icon={item.icon} title={item.title} children={item.children} path={item.path} searchTerm={searchTerm} />
      ))}
    </div>
  )
}
function SearchBar({ onSearch }: { onSearch: ReactEventHandler<HTMLInputElement> }) {
    return (
      <form className="search-form">
        <input className="searchBar" type="search" placeholder="Search..." onChange={onSearch} />
      </form>
    );
  }
  