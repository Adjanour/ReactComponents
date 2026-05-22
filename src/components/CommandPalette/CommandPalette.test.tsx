import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CommandPalette } from './CommandPalette'
import type { AccordionItemType } from '../AccordionControl/types'

const items: AccordionItemType[] = [
  { title: 'Home', path: '/' },
  {
    title: 'Settings',
    children: [
      { title: 'Profile', path: '/settings/profile' },
      { title: 'Account', path: '/settings/account' },
    ],
  },
]

describe('CommandPalette', () => {
  it('is closed by default', () => {
    const { container } = render(<CommandPalette items={items} />)
    expect(container.innerHTML).toBe('')
  })

  it('opens on Cmd+K', () => {
    render(<CommandPalette items={items} />)
    fireEvent.keyDown(document, { key: 'k', metaKey: true })
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('opens on Ctrl+K', () => {
    render(<CommandPalette items={items} />)
    fireEvent.keyDown(document, { key: 'k', ctrlKey: true })
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes on Escape', async () => {
    const user = userEvent.setup()
    render(<CommandPalette items={items} />)
    fireEvent.keyDown(document, { key: 'k', metaKey: true })
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('displays flattened leaf items', () => {
    render(<CommandPalette items={items} />)
    fireEvent.keyDown(document, { key: 'k', metaKey: true })

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Account')).toBeInTheDocument()
  })

  it('filters items by search', async () => {
    const user = userEvent.setup()
    render(<CommandPalette items={items} />)
    fireEvent.keyDown(document, { key: 'k', metaKey: true })

    const input = screen.getByRole('combobox')
    await user.type(input, 'Prof')

    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.queryByText('Home')).not.toBeInTheDocument()
    expect(screen.queryByText('Account')).not.toBeInTheDocument()
  })

  it('shows empty message when no results', async () => {
    const user = userEvent.setup()
    render(
      <CommandPalette items={items} emptyMessage="Nothing here" />
    )
    fireEvent.keyDown(document, { key: 'k', metaKey: true })

    const input = screen.getByRole('combobox')
    await user.type(input, 'zzzzz')

    expect(screen.getByText('Nothing here')).toBeInTheDocument()
  })

  it('navigates with arrow keys', async () => {
    const user = userEvent.setup()
    render(<CommandPalette items={items} />)
    fireEvent.keyDown(document, { key: 'k', metaKey: true })

    const input = screen.getByRole('combobox')
    await user.type(input, '{ArrowDown}')

    const options = screen.getAllByRole('option')
    expect(options[1]).toHaveAttribute('aria-selected', 'true')

    await user.type(input, '{ArrowUp}')
    expect(options[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('renders links with renderLink', () => {
    render(
      <CommandPalette
        items={[{ title: 'Custom', path: '/custom' }]}
        renderLink={(item, children) => (
          <a href={`/app${item.path}`} className="app-link">
            {children}
          </a>
        )}
      />
    )
    fireEvent.keyDown(document, { key: 'k', metaKey: true })
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/app/custom')
  })

  it('closes on backdrop click', async () => {
    const user = userEvent.setup()
    render(<CommandPalette items={items} />)
    fireEvent.keyDown(document, { key: 'k', metaKey: true })
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    const backdrop = screen.getByRole('presentation')
    await user.click(backdrop)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
