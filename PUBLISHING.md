# Publishing to npm

## Pre-publish Checklist

Before publishing this package to npm, ensure you have:

- [ ] Tested the package locally
- [ ] Updated version number in package.json
- [ ] Updated CHANGELOG.md with release notes
- [ ] Run all tests and they pass
- [ ] Built the package successfully
- [ ] Committed all changes to git

## Publishing Steps

### 1. Login to npm

```bash
npm login
```

### 2. Test the Package Locally (Optional)

You can test the package locally before publishing:

```bash
npm pack
```

This creates a `.tgz` file that you can install in another project to test:

```bash
npm install /path/to/adjanour-react-components-1.0.0.tgz
```

### 3. Publish to npm

For the first release:

```bash
npm publish --access public
```

For subsequent releases, just use:

```bash
npm publish
```

### 4. Create a Git Tag

After publishing, tag the release in git:

```bash
git tag v1.0.0
git push origin v1.0.0
```

### 5. Create a GitHub Release

Go to the GitHub repository and create a new release with the tag you just created.

## Version Bumping

For future releases, use npm's built-in version commands:

```bash
# Patch release (1.0.0 -> 1.0.1)
npm version patch

# Minor release (1.0.0 -> 1.1.0)
npm version minor

# Major release (1.0.0 -> 2.0.0)
npm version major
```

These commands will automatically:
- Update package.json
- Create a git commit
- Create a git tag

Then publish:

```bash
npm publish
git push && git push --tags
```

## Verify Publication

After publishing, verify the package:

1. Visit https://www.npmjs.com/package/@adjanour/react-components
2. Check that all files are included correctly
3. Test installing it in a new project:

```bash
npm install @adjanour/react-components
```

## Troubleshooting

### Package name already exists

If the package name is taken, you'll need to:
1. Update the `name` field in package.json
2. Update references in README.md

### Missing files in published package

Check `.npmignore` and ensure you're not excluding necessary files.

### TypeScript declarations not found

Ensure `tsup` is generating `.d.ts` files and they're included in the `files` array in package.json.
