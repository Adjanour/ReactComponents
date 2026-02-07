# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-07

### Added
- Complete TypeScript rewrite with full type safety
- Modern build tooling with tsup for ESM and CJS outputs
- Comprehensive test suite with Vitest and React Testing Library
- ESLint and Prettier configurations for code quality
- Proper npm package structure with correct exports
- AccordionWithSearch component with search functionality
- AccordionItem component with expand/collapse functionality
- Support for custom accordion items
- Accessibility improvements (ARIA attributes, keyboard navigation)
- Full documentation and usage examples

### Changed
- Migrated from JavaScript to TypeScript
- Improved component structure and modularity
- Enhanced search filtering logic
- Better prop typing and validation
- Modernized React patterns (removed inline styles where appropriate)

### Removed
- Duplicate JavaScript versions
- Commented-out code
- Unused utility files

### Fixed
- Event handler type safety issues
- Key prop warnings in lists
- Navigation logic bugs
- Inconsistent code style
