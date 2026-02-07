import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'clsx';
import { AccordionItemProps, AccordionChildProps } from './types';

const navigationActive = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? 'blue' : 'black',
  textDecoration: 'none',
  backgroundColor: isActive ? '#dbeafe' : '',
});

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export function AccordionItem({
  icon,
  title,
  children,
  path,
  searchTerm = '',
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const hasChildren = children && children.length > 0;

  const ItemContent = () => (
    <div className="accordion-item-content">
      <div className="title-theme flex flex-row items-center">
        {icon && <div className="icon">{icon}</div>}
        <div className="text-md ml-1">{title}</div>
      </div>
      {hasChildren && (
        <button
          className="expand-button"
          onClick={toggleAccordion}
          aria-label={isOpen ? 'Collapse' : 'Expand'}
          type="button"
        >
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      )}
    </div>
  );

  return (
    <>
      <div>
        {hasChildren ? (
          <button
            className={cn(
              'accordion-item',
              isOpen && 'active',
              isOpen && 'bg-blue-100 font-semibold rounded-md'
            )}
            onClick={toggleAccordion}
            aria-expanded={isOpen}
            type="button"
          >
            <ItemContent />
          </button>
        ) : (
          <NavLink to={path || ''} style={navigationActive}>
            <div className="accordion-item">
              <ItemContent />
            </div>
          </NavLink>
        )}
      </div>
      {isOpen && hasChildren && (
        <div className="accordion-children">
          {children
            ?.filter((child) =>
              child.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
            )
            .map((child) => (
              <AccordionChild key={child.title} child={child} />
            ))}
        </div>
      )}
    </>
  );
}

export function AccordionChild({ child }: AccordionChildProps) {
  return (
    <NavLink to={child.path || ''} style={navigationActive}>
      <div className="accordion-child">
        {child.icon && <div className="icon">{child.icon}</div>}
        <p className="text-md ml-1">{child.title}</p>
      </div>
    </NavLink>
  );
}
