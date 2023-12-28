import React, { useState } from 'react';
import AccordionItems from './AccordionItems';
import { Link } from 'react-router-dom';


function AccordionItem({ icon, title, children, path, searchTerm }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div>
      {children?.length > 0 ? (
        <button className="accordion-item" onClick={toggleAccordion} aria-expanded={isOpen}>
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
        <Link to={children?.length < 0  ? {path} : ''}>
      <button className="accordion-item" onClick={toggleAccordion} aria-expanded={isOpen}>
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
      </Link>
      )}
    </div>
    {/* {isOpen && (
        <div className="accordion-children">
          {children?.map((child, index) => (
            <Link to={child.path}>
            <div className="accordion-child" key={index}>
              {child.icon && <div className="icon">{child.icon}</div>}
              <p className="text-md" style={{marginLeft:'5px'}}>{child.title}</p>
            </div>
            </Link>
          ))}
        </div>
      )} */}
      {isOpen && (
        <div className="accordion-children">
        {children
      ?.filter((child) => child.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .map((child, index) => (
        <AccordionChild key={child.title} child={child} />
      ))}
      </div>
      )}
    </>
  );
}
function AccordionChild({ child }) {
  return (
    <Link to={child.path} key={child.title}>
      <div className="accordion-child">
        {child.icon && <div className="icon">{child.icon}</div>}
        <p className="text-md" style={{ marginLeft: '5px' }}>
          {child.title}
        </p>
      </div>
    </Link>
  );
}
function AccordionWithSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const hasItems = AccordionItems && AccordionItems.length > 0;

  // ... rest of the component
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredAccordionItems = AccordionItems.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  (item.children && item.children.some((child) => child.title.toLowerCase().includes(searchTerm.toLowerCase())))
);

  // ... rest of the component
  return (
    <div className="accordion">
      <SearchBar onSearch={handleSearch} />
      {/* ... rest of the component */}
      <hr />
      {hasItems && filteredAccordionItems.map((item) => (
        <AccordionItem key={item.title} icon={item.icon} title={item.title} children={item.children} path={item.path} searchTerm={searchTerm} />
      ))}
    </div>
  )
}
function SearchBar({ onSearch }) {
    return (
      <form className="search-form">
        <input className="searchBar" type="search" placeholder="Search..." onChange={onSearch} />
      </form>
    );
  }
export default AccordionWithSearch;  