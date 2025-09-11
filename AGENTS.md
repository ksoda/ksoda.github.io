# Coding Agent Guidelines

This project hosts a curriculum vitae site built with [Eleventy](https://www.11ty.dev/).

## Development
- Use **pnpm** for package management.
- Use the Nix flake dev shell (`nix develop`) which provides Node.js v24 and pnpm.
- TypeScript v7 must compile with `strict` settings via `@typescript/native-preview`.
- Run `pnpm lint` with Biome.
- Run `pnpm typecheck` to validate types.
- Run `pnpm build` to generate the static site into `_site`.
- Do not commit the `_site` output.

## Tasks
- [ ] Nix installation failed (command not found / 403). Ensure Nix is available to run development commands.
- [ ] Development environment currently uses Node 20; upgrade to Node.js v24 to satisfy engine requirements.
