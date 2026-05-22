import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('shows tooltip on hover', async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Help text">
        <button>Hover me</button>
      </Tooltip>
    )
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

    await user.hover(screen.getByRole('button'))
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
    expect(screen.getByText('Help text')).toBeInTheDocument()
  })

  it('hides tooltip on leave', async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Help text">
        <button>Hover me</button>
      </Tooltip>
    )
    await user.hover(screen.getByRole('button'))
    expect(screen.getByRole('tooltip')).toBeInTheDocument()

    await user.unhover(screen.getByRole('button'))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('shows tooltip on focus', async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Focus tooltip">
        <button>Focus me</button>
      </Tooltip>
    )
    await user.tab()
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it('uses aria-describedby', () => {
    render(
      <Tooltip content="Described">
        <button>Test</button>
      </Tooltip>
    )
    const wrapper = screen.getByText('Test').closest('span')
    expect(wrapper).toHaveAttribute('aria-describedby')
  })

  it('uses default position class', async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Top tooltip">
        <button>Top</button>
      </Tooltip>
    )
    await user.tab()
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveClass('aw-tooltip-top')
  })

  it('uses custom position class', async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Bottom tooltip" position="bottom">
        <button>Bottom</button>
      </Tooltip>
    )
    await user.tab()
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveClass('aw-tooltip-bottom')
  })
})
