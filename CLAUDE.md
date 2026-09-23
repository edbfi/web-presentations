# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Layout

- Each `presentations/<name>/` is a self-contained project with its own `package.json`, lockfile, assets and README. There is no root manifest, workspace or shared code: run installs, checks and builds from inside the presentation directory, and keep dependencies and assets local to it. Don't add a shared framework or workspace; copy what a new presentation needs into its own directory.
- Docs, UI text and content are Danish. Write new user-facing text and project docs in Danish; code identifiers stay English.

## Adding a presentation

1. Create `presentations/<name>/` with its own manifest, lockfile and a short `README.md`.
2. Add a job to `.github/workflows/ci.yml` modelled on the `presentation` job (the reusable `edbfi/automation/.github/workflows/bun.yml` takes `install-directory`, `working-directory` and `command`).
3. Add the new job id to the `required` job's `needs:` list and to its gate `required:` input. A job missing from `needs` is not enforced by `ci / required`.
4. List it under "Præsentationer" in the root `README.md`.

## Commits and PRs

- The PR policy (`.github/workflows/policy.yml`, reusable workflow in `edbfi/automation`) checks commit sign-off and the PR title: use `git commit -s` and a Conventional Commit title.
- License is `AGPL-3.0-only`; new `package.json` files carry `"license": "AGPL-3.0-only"`.
