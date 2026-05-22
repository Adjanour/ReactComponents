import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AccordionWithSearch } from './AccordionWithSearch';
import type { AccordionItemType } from './types';

const mockItems: AccordionItemType[] = [
  { title: 'Home', path: '/' },
  {
    title: 'Projects',
    children: [
      { title: 'All Projects', path: '/projects/all' },
      { title: 'My Projects', path: '/projects/my' },
    ],
  },
];

describe('AccordionWithSearch', () => {
  it('renders without crashing', () => {
    render(<AccordionWithSearch items={mockItems} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('displays all items initially', () => {
    render(<AccordionWithSearch items={mockItems} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('filters items by search', async () => {
    const user = userEvent.setup();
    render(<AccordionWithSearch items={mockItems} />);

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'Home');

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Projects')).not.toBeInTheDocument();
  });

  it('shows empty state when no items match', async () => {
    const user = userEvent.setup();
    render(<AccordionWithSearch items={mockItems} />);

    await user.type(screen.getByPlaceholderText('Search...'), 'NonExistent');

    expect(screen.getByText('No items found')).toBeInTheDocument();
  });

  it('accepts custom className', () => {
    const { container } = render(<AccordionWithSearch items={mockItems} className="my-nav" />);
    const nav = container.querySelector('.aw-accordion');
    expect(nav).toHaveClass('my-nav');
  });

  it('renders without items prop (uses defaults)', () => {
    render(<AccordionWithSearch />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('uses renderLink for navigation items', () => {
    render(
      <AccordionWithSearch
        items={[{ title: 'Custom', path: '/custom' }]}
        renderLink={(item, children) => (
          <a href={`/app${item.path}`} className="app-link">
            {children}
          </a>
        )}
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/app/custom');
  });

  it('allows searching and expanding with user-event', async () => {
    const user = userEvent.setup();
    render(<AccordionWithSearch items={mockItems} />);

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'Pro');

    expect(screen.getByText('Projects')).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Projects/i });
    await user.click(button);
    expect(screen.getByText('All Projects')).toBeInTheDocument();
  });
});
