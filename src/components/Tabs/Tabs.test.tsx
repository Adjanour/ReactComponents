import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tabs } from './Tabs'

const tabs = [
  { label: 'Tab One', content: <p>Content one</p> },
  { label: 'Tab Two', content: <p>Content two</p> },
  { label: 'Tab Three', content: <p>Content three</p> },
]

describe('Tabs', () => {
  it('renders all tab labels', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByText('Tab One')).toBeInTheDocument()
    expect(screen.getByText('Tab Two')).toBeInTheDocument()
    expect(screen.getByText('Tab Three')).toBeInTheDocument()
  })

  it('shows first tab panel by default', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByText('Content one')).toBeVisible()
    expect(screen.queryByText('Content two')).not.toBeVisible()
  })

  it('switches tab on click', async () => {
    const user = userEvent.setup()
    render(<Tabs tabs={tabs} />)
    await user.click(screen.getByText('Tab Two'))
    expect(screen.getByText('Content two')).toBeVisible()
    expect(screen.queryByText('Content one')).not.toBeVisible()
  })

  it('uses custom default index', () => {
    render(<Tabs tabs={tabs} defaultIndex={1} />)
    expect(screen.getByText('Content two')).toBeVisible()
  })

  it('navigates with arrow keys', async () => {
    const user = userEvent.setup()
    render(<Tabs tabs={tabs} />)
    const tabOne = screen.getByText('Tab One')
    tabOne.focus()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByText('Tab Two')).toHaveFocus()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByText('Tab Three')).toHaveFocus()
    await user.keyboard('{ArrowLeft}')
    expect(screen.getByText('Tab Two')).toHaveFocus()
  })

  it('navigates to first/last with Home/End', async () => {
    const user = userEvent.setup()
    render(<Tabs tabs={tabs} />)
    screen.getByText('Tab One').focus()
    await user.keyboard('{End}')
    expect(screen.getByText('Tab Three')).toHaveFocus()
    await user.keyboard('{Home}')
    expect(screen.getByText('Tab One')).toHaveFocus()
  })

  it('sets correct ARIA attributes', () => {
    const { container } = render(<Tabs tabs={tabs} />)
    const tablist = screen.getByRole('tablist')
    expect(tablist).toBeInTheDocument()

    const tabButtons = screen.getAllByRole('tab')
    expect(tabButtons).toHaveLength(3)
    expect(tabButtons[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabButtons[1]).toHaveAttribute('aria-selected', 'false')

    const panels = container.querySelectorAll('[role="tabpanel"]')
    expect(panels).toHaveLength(3)
    expect(panels[0]).not.toHaveAttribute('hidden')
    expect(panels[1]).toHaveAttribute('hidden')
  })

  it('returns null for empty tabs', () => {
    const { container } = render(<Tabs tabs={[]} />)
    expect(container.innerHTML).toBe('')
  })
})
