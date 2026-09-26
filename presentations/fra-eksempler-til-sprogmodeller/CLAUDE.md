# CLAUDE.md — presentations/fra-eksempler-til-sprogmodeller

## Commands (run from this directory)

- Install: `bun install --frozen-lockfile` (Bun 1.4.2, per `packageManager`).
- Typecheck: `bun run check` (svelte-check). It covers `src/` and `vite.config.ts` only; `smoke/` and `playwright.config.ts` are outside `tsconfig.json` `include`, so type errors there surface only when Playwright runs.
- Smoke tests serve the production build (`vite preview` on port 4177, `--strictPort`, `reuseExistingServer: false`). Always `bun run build` first, or they test a stale `dist/`; free port 4177 first or the web server fails to start.
  - All: `bun run test:smoke` (once: `bun run smoke:install`)
  - One file: `bun run test:smoke smoke/startup.spec.ts`
  - One case: `bun run test:smoke -g "preserves presenter navigation"`
  - One project: `bun run test:smoke --project=reduced-motion` (projects: `chromium`, `reduced-motion`)
- Full local check: `bun run check && bun run build && bun run smoke:install --with-deps && bun run test:smoke`.
- Keep `typescript` at `~6`; the installed svelte-check requires it (see `README.md`).

## How a step is wired

`src/story.ts` `steps` drives everything. `src/App.svelte` builds one GSAP timeline, with one time unit per step. For each consecutive pair of steps it fades every `[data-part]` in `src/Artwork.svelte` whose membership in `show` changed, and moves `[data-knob]` when `adjusted` flips.

- `show` is the complete set of visible parts for that step, not a delta. Build it by spreading the previous constant (`const input = [...parameters, 'input'];`).
- Nested parts need their ancestors in `show` too: `rule-card` sits inside `data-part="rule"`, so `show` lists both. A child without its parent stays invisible.
- A `show` name with no matching `data-part` does nothing and raises no error. Check both files match.
- `kind: 'intro'` renders the narrative text column with `show: []`. `kind: 'demo'` shows the artwork, with `title` as the caption. `paper: true` switches to the light palette (`.is-paper` in `src/style.css`).
- `id` becomes the URL hash, and deep links restore from it. Renaming an id breaks saved links, and renaming `en-regel` breaks the smoke test.

## Adding or reordering steps

1. Edit `steps` in `src/story.ts`, and add any new `data-part` groups to `src/Artwork.svelte`.
2. Update the hardcoded indices in `chapters` (`src/story.ts`). Also update the chapter-number expression `active < 10 ? '01' : '02'` in `src/App.svelte`, which assumes chapter 2 starts at index 10.
3. Update the stop count ("23 stop") in `README.md` and `docs/indhold.md` ("Appen implementerer nu 23 stop"), plus the overview dialog footnote in `src/App.svelte` if the covered scenes change.
4. `smoke/startup.spec.ts` asserts on the first two steps (`Hvordan lærer`, `#en-regel`) and on the Danish accessible names `Næste trin`, `Forrige trin`, `Overblik` and `Fremdrift`. Update it whenever these change.

## Invariants

- Keep presenter controls working in both directions: arrows, Page Up/Down, Home/End, scroll, the overview dialog and hash restore. Under `prefers-reduced-motion`, steps jump without tweening (`reduced` in `App.svelte`). Both modes are separate Playwright projects.
- Diagrams are programmed SVG in `Artwork.svelte`. Keep generated images for mood (`public/images/`) and record their origin and prompt in `docs/indhold.md`; don't generate charts or screenshots as evidence.
- Example messages and parameter values are illustrative, and the UI says so. Keep the disclaimers in `Artwork.svelte` `<desc>`, in `.diagram-note` and in the sources dialog.

## Reference

- `docs/indhold.md`: learning goals, current presentation form and design rules ("Gældende præsentationsform"), the planned 12 scenes, speaker notes and the source register (K1–K17, plus local observations L1–L2). Read the relevant scene and the design rules before writing new content or steps; cite sources by their K number.
