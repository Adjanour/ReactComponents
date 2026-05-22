import { render, screen } from '@testing-library/react'
import { SkipLink } from './SkipLink'

describe('SkipLink', () => {
  it('renders with default text and href', () => {
    render(<SkipLink />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#main-content')
    expect(link).toHaveTextContent('Skip to content')
  })

  it('uses custom href', () => {
    render(<SkipLink href="#footer">Skip to footer</SkipLink>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#footer')
    expect(link).toHaveTextContent('Skip to footer')
  })

  it('has skip-link class', () => {
    render(<SkipLink />)
    expect(screen.getByRole('link')).toHaveClass('aw-skip-link')
  })
})
