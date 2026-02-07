# Contributing to ReactComponents

Thank you for your interest in contributing to ReactComponents! This document provides guidelines and instructions for contributing.

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/Adjanour/ReactComponents.git
   cd ReactComponents
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run tests**
   ```bash
   npm test
   ```

4. **Build the project**
   ```bash
   npm run build
   ```

## Development Workflow

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, maintainable code
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

3. **Run quality checks**
   ```bash
   npm run lint
   npm run typecheck
   npm test
   ```

4. **Commit your changes**
   - Use clear, descriptive commit messages
   - Follow conventional commits format if possible

5. **Submit a pull request**
   - Provide a clear description of the changes
   - Reference any related issues
   - Ensure all CI checks pass

## Code Style

- We use ESLint and Prettier for code formatting
- Run `npm run format` to auto-format your code
- Run `npm run lint:fix` to auto-fix linting issues
- Follow TypeScript best practices
- Write meaningful variable and function names

## Testing

- Write unit tests for all new features
- Ensure all tests pass before submitting PR
- Aim for high code coverage
- Use React Testing Library for component tests

## Documentation

- Update README.md if you change functionality
- Add JSDoc comments for public APIs
- Update CHANGELOG.md following Keep a Changelog format
- Provide usage examples for new features

## Questions?

Feel free to reach out to [adjanour@icloud.com](mailto:adjanour@icloud.com) if you have any questions.

## Code of Conduct

Be respectful and professional in all interactions. We're here to build great software together!
