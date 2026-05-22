import { render, screen } from '@testing-library/react'
import { Breadcrumbs } from './Breadcrumbs'

describe('Breadcrumbs', () => {
  it('renders items', () => {
    render(<Breadcrumbs items={[{ title: 'Home', path: '/' }]} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders all items with separator', () => {
    const items = [
      { title: 'Home', path: '/' },
      { title: 'Settings', path: '/settings' },
      { title: 'Profile' },
    ]
    const { container } = render(<Breadcrumbs items={items} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(container.querySelectorAll('.aw-bc-sep')).toHaveLength(2)
  })

  it('marks last item as current page', () => {
    const items = [
      { title: 'Home', path: '/' },
      { title: 'Profile' },
    ]
    render(<Breadcrumbs items={items} />)
    expect(screen.getByText('Profile')).toHaveAttribute('aria-current', 'page')
  })

  it('renders links for items with path', () => {
    render(<Breadcrumbs items={[{ title: 'Home', path: '/home' }]} />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/home')
  })

  it('returns null for empty items', () => {
    const { container } = render(<Breadcrumbs items={[]} />)
    expect(container.innerHTML).toBe('')
  })

  it('uses custom renderLink', () => {
    const items = [{ title: 'Custom', path: '/custom' }]
    render(
      <Breadcrumbs
        items={items}
        renderLink={(item, children) => (
          <a href={`/app${item.path}`} className="app-link">
            {children}
          </a>
        )}
      />
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/app/custom')
  })

  it('uses custom separator', () => {
    const items = [
      { title: 'A', path: '/a' },
      { title: 'B', path: '/b' },
    ]
    render(<Breadcrumbs items={items} separator={<span data-testid="custom-sep">/</span>} />)
    expect(screen.getAllByTestId('custom-sep')).toHaveLength(1)
  })

  it('renders nav with aria-label', () => {
    render(<Breadcrumbs items={[{ title: 'Home', path: '/' }]} />)
    expect(screen.getByLabelText('Breadcrumb')).toBeInTheDocument()
  })
})
