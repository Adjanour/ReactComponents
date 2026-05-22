import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AccordionItem } from './AccordionItem';
import type { AccordionItemType } from './types';

describe('AccordionItem', () => {
  it('renders title', () => {
    const item: AccordionItemType = { title: 'Test Item', path: '/test' };
    render(<AccordionItem item={item} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('renders leaf items as links', () => {
    const item: AccordionItemType = { title: 'Test', path: '/test' };
    render(<AccordionItem item={item} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('renders items with children as buttons', () => {
    const item: AccordionItemType = {
      title: 'Parent',
      children: [{ title: 'Child 1', path: '/child1' }],
    };
    render(<AccordionItem item={item} />);
    expect(screen.getByRole('button', { name: /Parent/i })).toBeInTheDocument();
  });

  it('toggles accordion on click', async () => {
    const user = userEvent.setup();
    const item: AccordionItemType = {
      title: 'Parent',
      children: [{ title: 'Child 1', path: '/child1' }],
    };
    render(<AccordionItem item={item} />);

    const button = screen.getByRole('button', { name: /Parent/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Child 1')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    const item: AccordionItemType = {
      title: 'Test',
      path: '/test',
      icon: <span data-testid="icon">*</span>,
    };
    render(<AccordionItem item={item} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('filters children by searchTerm', async () => {
    const user = userEvent.setup();
    const item: AccordionItemType = {
      title: 'Fruits',
      children: [
        { title: 'Apple', path: '/apple' },
        { title: 'Banana', path: '/banana' },
      ],
    };
    render(<AccordionItem item={item} searchTerm="" />);

    await user.click(screen.getByRole('button', { name: /Fruits/i }));
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('uses renderLink for custom link rendering', () => {
    const item: AccordionItemType = { title: 'Custom', path: '/custom' };
    render(
      <AccordionItem
        item={item}
        renderLink={(i, children) => (
          <a href={`https://example.com${i.path}`} className="custom-link">
            {children}
          </a>
        )}
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-link');
    expect(link).toHaveAttribute('href', 'https://example.com/custom');
  });
});
