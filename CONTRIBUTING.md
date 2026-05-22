# Contributing to ReactComponents

Thank you for your interest in contributing.

## Development Setup

```bash
git clone https://github.com/Adjanour/ReactComponents.git
cd ReactComponents
pnpm install
```

This project uses pnpm. If you don't have it installed:

```bash
npm install -g pnpm
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Watch mode build |
| `pnpm test` | Run tests (Vitest) |
| `pnpm lint` | Lint with ESLint 9 |
| `pnpm typecheck` | TypeScript type checking |
| `pnpm build` | Production build with tsup |
| `pnpm docs:dev` | Start the Astro docs site |
| `pnpm docs:build` | Build the docs site |

## Workflow

1. Create a branch: `git checkout -b feature/your-feature`
2. Make changes following the existing code style
3. Add tests for new features
4. Run quality checks: `pnpm lint && pnpm typecheck && pnpm test`
5. Commit with clear messages (conventional commits preferred)
6. Push and open a pull request

## Code Style

- ESLint and Prettier are configured
- Use `pnpm run lint:fix` to auto-fix issues
- Follow TypeScript best practices with strict types

## Testing

- Write unit tests for new features
- Use React Testing Library for component tests
- Ensure all tests pass before submitting a PR

## Documentation

- Update README.md if you change functionality
- Add JSDoc comments for public APIs
- Update CHANGELOG.md following Keep a Changelog format
- Provide usage examples for new features

## Questions?

Contact [adjanour@icloud.com](mailto:adjanour@icloud.com).

## Code of Conduct

Be respectful and professional in all interactions.
