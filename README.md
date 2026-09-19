# Web presentations

Selvstændige, interaktive webpræsentationer og webdokumentarer.

Hver mappe under `presentations/` er et komplet projekt med egen tech stack, dependencies, lockfil, assets og kørselsvejledning. Installation, udvikling og build foregår i den enkelte mappe. Repoet har ingen fælles runtime eller package-workspace.

## Præsentationer

- [Fra eksempler til sprogmodeller](presentations/fra-eksempler-til-sprogmodeller/): en oplægsholderstyret rejse fra maskinlæring til LLM’er. Svelte, TypeScript og GSAP. Under udvikling.

## Ny præsentation

Opret `presentations/<navn>/` med projektets egne filer og en kort README. Vælg stack efter behov; eksisterende præsentationer behøver ikke ændres. Tilføj projektets egne obligatoriske checks til `.github/workflows/ci.yml` og aggregatets `needs`-liste. Hver lockfil installeres frosset fra sin egen mappe.

## CI

Alle pull requests og pushes til `main` kører præsentationens typecheck, produktionsbuild og Chromium-test af opstart, frem/tilbage-navigation, URL-gendannelse og overblik. Testen kører med og uden reduceret bevægelse. `ci / required` kræver, at hele projektjobbet lykkes; den separate PR-policy kontrollerer commit-sign-off, titel, reviews og holds.

## Licens

Projektets egen kode er udgivet under [GNU AGPL version 3](LICENSE) (`AGPL-3.0-only`). Tredjepartsafhængigheder og eksternt kildemateriale beholder deres egne licenser.
