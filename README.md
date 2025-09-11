# Curriculum Vitae

This repository contains the source for a personal curriculum vitae site built with [Eleventy](https://www.11ty.dev/) and strict TypeScript.

## Development

### Enter the development shell
Use the Nix flake to get Node.js v24 and pnpm:
```bash
nix develop
```

### Install dependencies
```bash
pnpm install
```

### Lint
```bash
pnpm lint
```

### Type checking
```bash
pnpm typecheck
```

### Build the site
```bash
pnpm build
```

The generated site will be in the `_site` directory.
