# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Layout

- Each `presentations/<name>/` is a self-contained project with its own `package.json`, lockfile, assets and README. There is no root manifest, workspace or shared code: run installs, checks and builds from inside the presentation directory, and keep dependencies and assets local to it. Don't add a shared framework or workspace; copy what a new presentation needs into its own directory.
- Docs, UI text and content are Danish. Write new user-facing text and project docs in Danish; code identifiers stay English.

## Adding a presentation

1. Create `presentations/<name>/` with its own manifest, lockfile and a short `README.md`.
2. Run the presentation’s check and build scripts locally.
3. List it under "Præsentationer" in the root `README.md`.

## Commits and PRs

- License is `AGPL-3.0-only`; new `package.json` files carry `"license": "AGPL-3.0-only"`.

Use `git commit -s` and Conventional Commit titles.
