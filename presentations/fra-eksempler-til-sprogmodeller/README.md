# Fra eksempler til sprogmodeller

En lokal, oplægsholderstyret webdokumentar. Prototypen dækker de første dele af rejsen i [indholdsplanen](docs/indhold.md): fra håndskrevne regler til ét træningsskridt. Version 3 har 23 stop med særskilte introduktioner og trinvise demonstrationer. Den slutter med overgangen til generalisering. Resten af dokumentaren er endnu ikke implementeret.

## Kør lokalt

```sh
bun install --frozen-lockfile
bun run dev
```

Åbn den lokale adresse, Vite viser. Produktion:

```sh
bun run check
bun run build
bun run preview
```

Siden kræver en lokal HTTP-server; åbn ikke `dist/index.html` direkte som en fil. Efter installationen ligger alle nødvendige fonte og scripts lokalt. Kun kildelinks kræver internet.

## Browser-smoke

```sh
bun run check
bun run build
bun run smoke:install
bun run test:smoke
```

Playwright starter det byggede site lokalt og kontrollerer indlæsning samt oplægsholderens navigation med og uden reduceret bevægelse. Dependencies og lockfil forbliver i denne projektmappe.

## Styring

- Højre/ned eller Page Down: næste stop.
- Venstre/op eller Page Up: forrige stop.
- Home og End: første og sidste stop.
- Trackpad eller scrollbar: bevæg dig gennem de samme trin. Animationerne følger scrollpositionen.
- Overblik: spring direkte til et trin. Escape lukker dialogen.
- Fuld skærm: knappen øverst til højre, når browseren understøtter funktionen.
- URL-fragmentet gemmer det aktuelle trin og genskabes ved genindlæsning.
- Systemets indstilling for reduceret bevægelse viser trinene uden de glidende overgange.

## Indhold og kode

- `src/story.ts`: skærmtekster og rækkefølge.
- `src/Artwork.svelte`: den vedvarende SVG-figur og dens lag.
- `src/App.svelte`: scroll, animation, navigation og kilder.
- `src/style.css`: farver, typografi og layout.
- `docs/indhold.md`: læringsmål, designprincipper, videre forløb, talernoter og kilder.

Beskeder, forslag og parametertal er illustrative. Prototypen træner ikke et netværk og foretager ingen modelkald. Åbningen bruger et lokalt imagegen-motiv; diagrammerne er programmeret. Billedets oprindelse og prompt er gemt i indholdsplanen.

Stack: Bun, Vite, Svelte, TypeScript, GSAP/ScrollTrigger. TypeScript er på version 6 for kompatibilitet med den installerede svelte-check.

## Design og status

Introduktioner viser kort tekst og eventuelt et billede. Derefter forklarer en demonstration processen del for del med faste objektpositioner, korte labels og én forklaringslinje. Bevar den filmiske indigo/elfenben-identitet, Barlow-typografi og klar adskillelse mellem læsning og demonstration.

De 23 stop er tidligere gennemløbet frem og tilbage i browseren, inklusive reduceret bevægelse. Layout er kontrolleret ved 1280 × 720 og 1440 × 900. Endnu ikke afprøvet med publikum eller fysisk projektor. Næste indhold er generalisering og overgangen fra mærkede eksempler til tekst som træningsmateriale.

Licens: [AGPL-3.0-only](../../LICENSE).
