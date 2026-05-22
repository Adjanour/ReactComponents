import '@testing-library/jest-dom/vitest'

Element.prototype.scrollIntoView = vi.fn()

vi.stubGlobal(
  'IntersectionObserver',
  vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))
)
