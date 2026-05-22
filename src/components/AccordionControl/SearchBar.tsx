interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      className="aw-search"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search menu items"
    />
  );
}
