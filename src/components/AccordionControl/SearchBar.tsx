import { SearchBarProps } from './types';

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        className="searchBar"
        type="search"
        placeholder="Search..."
        onChange={onSearch}
        aria-label="Search accordion items"
      />
    </form>
  );
}
