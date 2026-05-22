import { render, screen } from '@testing-library/react'
import { TableOfContents } from './TableOfContents'

const headings = [
  { id: 'intro', label: 'Introduction', level: 2 },
  { id: 'usage', label: 'Usage', level: 2 },
  { id: 'api', label: 'API', level: 3 },
  { id: 'props', label: 'Props', level: 3 },
  { id: 'examples', label: 'Examples', level: 2 },
]

describe('TableOfContents', () => {
  it('renders all headings', () => {
    render(<TableOfContents headings={headings} />)
    expect(screen.getByText('Introduction')).toBeInTheDocument()
    expect(screen.getByText('Usage')).toBeInTheDocument()
    expect(screen.getByText('API')).toBeInTheDocument()
    expect(screen.getByText('Props')).toBeInTheDocument()
    expect(screen.getByText('Examples')).toBeInTheDocument()
  })

  it('renders links with hrefs', () => {
    render(<TableOfContents headings={headings} />)
    const link = screen.getByText('Introduction').closest('a')
    expect(link).toHaveAttribute('href', '#intro')
  })

  it('has nav with aria-label', () => {
    render(<TableOfContents headings={headings} />)
    expect(screen.getByLabelText('Table of contents')).toBeInTheDocument()
  })

  it('deeply nested headings have more indent', () => {
    const { container } = render(<TableOfContents headings={headings} />)
    const items = container.querySelectorAll('.aw-toc-item')
    const indentApi = items[2].getAttribute('style')
    const indentIntro = items[0].getAttribute('style')
    expect(indentApi).toContain('padding-left: 0.75rem')
    expect(indentIntro).toContain('padding-left: 0rem')
  })

  it('returns null for empty headings', () => {
    const { container } = render(<TableOfContents headings={[]} />)
    expect(container.innerHTML).toBe('')
  })

  it('uses custom renderLink', () => {
    render(
      <TableOfContents
        headings={[{ id: 'test', label: 'Test', level: 2 }]}
        renderLink={(h, children) => (
          <a href={`/page#${h.id}`} className="custom-toc-link">
            {children}
          </a>
        )}
      />
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/page#test')
    expect(link).toHaveClass('custom-toc-link')
  })

  it('shows "On this page" label', () => {
    render(<TableOfContents headings={headings} />)
    expect(screen.getByText('On this page')).toBeInTheDocument()
  })
})
