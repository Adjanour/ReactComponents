import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { AccordionItem } from '../AccordionItem';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('AccordionItem', () => {
  it('renders title correctly', () => {
    renderWithRouter(<AccordionItem title="Test Item" />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('renders without children as a link', () => {
    renderWithRouter(<AccordionItem title="Test Item" path="/test" />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('renders with children as a button', () => {
    const children = [{ title: 'Child 1', path: '/child1' }];
    renderWithRouter(<AccordionItem title="Parent" children={children} />);
    const button = screen.getByRole('button', { name: /Parent/i });
    expect(button).toBeInTheDocument();
  });

  it('toggles accordion when clicked', async () => {
    const user = userEvent.setup();
    const children = [{ title: 'Child 1', path: '/child1' }];
    
    renderWithRouter(<AccordionItem title="Parent" children={children} />);
    
    const button = screen.getByRole('button', { name: /Parent/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    
    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    
    // Child should now be visible
    expect(screen.getByText('Child 1')).toBeInTheDocument();
  });

  it('shows expand/collapse icons for items with children', () => {
    const children = [{ title: 'Child 1', path: '/child1' }];
    renderWithRouter(<AccordionItem title="Parent" children={children} />);
    
    const expandButton = screen.getByRole('button', { name: /Expand/i });
    expect(expandButton).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    const icon = <span data-testid="test-icon">Icon</span>;
    renderWithRouter(<AccordionItem title="Test" icon={icon} path="/test" />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('filters children based on searchTerm', async () => {
    const user = userEvent.setup();
    const children = [
      { title: 'Apple', path: '/apple' },
      { title: 'Banana', path: '/banana' },
    ];
    
    renderWithRouter(
      <AccordionItem title="Fruits" children={children} searchTerm="" />
    );
    
    const button = screen.getByRole('button', { name: /Fruits/i });
    await user.click(button);
    
    // Both children should be visible with empty search
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });
});
