# Publishing

## Pre-publish

- [ ] Version bumped in `package.json`
- [ ] `CHANGELOG.md` updated
- [ ] `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build` all pass
- [ ] Committed to git

## Publish

```bash
pnpm login
pnpm publish --access public
git tag v$(node -p "require('./package.json').version")
git push origin --tags
```

## Version bump

```bash
pnpm version patch  # 2.0.0 -> 2.0.1
pnpm version minor  # 2.0.0 -> 2.1.0
pnpm version major  # 2.0.0 -> 3.0.0
```

These create a git tag automatically. Then `pnpm publish && git push --tags`.
