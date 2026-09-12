<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import Artwork from './Artwork.svelte';
  import { chapters, steps } from './story';

  let journey: HTMLDivElement;
  let art: HTMLDivElement;
  let menu: HTMLDialogElement;
  let sources: HTMLDialogElement;
  let active = $state(0);
  let progress = $state(0);
  let reduced = $state(false);
  let fullscreen = $state(false);
  let go = (_index: number) => {};
  let advance = (_direction: number) => {};
  const last = steps.length - 1;
  const current = $derived(steps[active]);
  const opening = $derived(active === 0);
  const introduction = $derived(current.kind === 'intro');

  function closeAndGo(index: number) {
    menu.close();
    go(index);
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch { /* The browser may not support fullscreen; the page still works normally. */ }
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced = media.matches;
    const updateMotion = () => { reduced = media.matches; draw(); };
    const updateFullscreen = () => { fullscreen = !!document.fullscreenElement; };
    const oldRestoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    let raw = 0;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    let navigation: gsap.core.Tween | undefined;
    let destination: number | undefined;
    const span = () => Math.max(1, journey.offsetHeight - window.innerHeight);
    const lookup = () => Math.max(0, steps.findIndex(step => `#${step.id}` === location.hash));
    const initial = lookup();

    const context = gsap.context(() => {}, art);
    let timeline: gsap.core.Timeline;
    context.add(() => {
      timeline = gsap.timeline({ paused: true });
      const select = gsap.utils.selector(art);
      timeline.to({}, { duration: last }, 0);
      timeline.set(select('[data-part]'), { autoAlpha: 0 }, 0);
      const parts = [...new Set(steps.flatMap(step => step.show))];
      for (let index = 1; index < steps.length; index++) {
        for (const part of parts) {
          const visible = steps[index].show.includes(part);
          if (visible !== steps[index - 1].show.includes(part)) {
            timeline.to(select(`[data-part="${part}"]`), {
              autoAlpha: visible ? 1 : 0, duration: .28, ease: 'power1.inOut',
            }, index - .28);
          }
        }
        if (Boolean(steps[index].adjusted) !== Boolean(steps[index - 1].adjusted)) {
          timeline.to(select('[data-knob]'), {
            x: steps[index].adjusted ? -24 : 0, duration: .28,
          }, index - .28);
        }
      }
    });

    function draw() {
      const next = Math.min(last, Math.floor(raw + .3 + .0001));
      active = next;
      progress = raw / last;
      timeline.time(reduced ? next : raw);
      const hash = `#${steps[next].id}`;
      if (location.hash !== hash) history.replaceState(null, '', hash);
    }

    const trigger = ScrollTrigger.create({
      trigger: journey,
      start: 'top top',
      end: () => `+=${span()}`,
      onUpdate: self => {
        if (window.innerWidth !== viewportWidth || window.innerHeight !== viewportHeight) return;
        raw = self.progress * last; draw();
      },
      onRefresh: self => {
        if (window.innerWidth !== viewportWidth || window.innerHeight !== viewportHeight) return;
        raw = self.progress * last; draw();
      },
    });

    const cancelNavigation = () => { navigation?.kill(); navigation = undefined; destination = undefined; };
    go = (index: number) => {
      cancelNavigation();
      const target = Math.max(0, Math.min(last, index));
      destination = target;
      const y = target / last * span();
      if (reduced) {
        window.scrollTo(0, y);
        ScrollTrigger.update();
        destination = undefined;
      } else {
        const position = { y: window.scrollY };
        navigation = gsap.to(position, {
          y, duration: .65, ease: 'power2.inOut',
          onUpdate: () => window.scrollTo(0, position.y),
          onComplete: () => { destination = undefined; navigation = undefined; },
        });
      }
    };
    advance = (direction: number) => {
      const base = destination ?? (direction > 0 ? Math.floor(raw + .015) : Math.ceil(raw - .015));
      go(base + direction);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey || menu.open || sources.open) return;
      const target = event.target as HTMLElement;
      if (target.isContentEditable || target.closest('input, textarea, select, a')) return;
      const direction = ['ArrowRight', 'ArrowDown', 'PageDown'].includes(event.key) ? 1 : ['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key) ? -1 : 0;
      if (direction) {
        event.preventDefault();
        if (!event.repeat) advance(direction);
      }
      if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); go(event.key === 'Home' ? 0 : last); }
    };
    const onHash = () => go(lookup());
    const onResize = () => {
      const target = destination ?? active;
      cancelNavigation();
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      ScrollTrigger.refresh();
      window.scrollTo(0, target / last * span());
      raw = target;
      draw();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('wheel', cancelNavigation, { passive: true });
    window.addEventListener('touchstart', cancelNavigation, { passive: true });
    window.addEventListener('pointerdown', cancelNavigation);
    window.addEventListener('hashchange', onHash);
    window.addEventListener('resize', onResize);
    document.addEventListener('fullscreenchange', updateFullscreen);
    media.addEventListener('change', updateMotion);

    window.scrollTo(0, initial / last * span());
    raw = initial;
    draw();
    ScrollTrigger.update();

    return () => {
      cancelNavigation();
      trigger.kill();
      context.revert();
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('wheel', cancelNavigation);
      window.removeEventListener('touchstart', cancelNavigation);
      window.removeEventListener('pointerdown', cancelNavigation);
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('fullscreenchange', updateFullscreen);
      media.removeEventListener('change', updateMotion);
      history.scrollRestoration = oldRestoration;
    };
  });
</script>

<svelte:head><title>{current.label} · Fra eksempler til sprogmodeller</title></svelte:head>

<div class="journey" bind:this={journey} style:height={`${100 + last * 115}svh`}>
  <div class="presentation" class:is-opening={opening} class:is-intro={introduction} class:is-demo={!introduction} class:is-paper={current.paper} data-step={current.id} data-kind={current.kind} style:--travel={progress}>
    <div class="cinema" aria-hidden="true"><div class="cinema-image"></div><div class="cinema-shade"></div></div>
    <div class="scene-atmosphere" aria-hidden="true"></div>
    <header class="header">
      <button class="identity" onclick={() => go(0)} aria-label="Til begyndelsen">
        <svg width="29" height="29" viewBox="0 0 32 32" aria-hidden="true"><path d="M3 10h26M3 23h26" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="4" fill="#D88A39"/><circle cx="22" cy="23" r="4" fill="#3C78A8"/></svg>
        <span>Fra eksempler<br />til sprogmodeller</span>
      </button>
      <div class="header-location">En fortælling om maskinlæring</div>
      <div class="header-controls">
        <button class="text-button" onclick={() => menu.showModal()} aria-haspopup="dialog"><span>Overblik</span><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" stroke-width="1.3"/></svg></button>
        <button class="icon-button fullscreen" onclick={toggleFullscreen} aria-label={fullscreen ? 'Afslut fuld skærm' : 'Vis på fuld skærm'} title={fullscreen ? 'Afslut fuld skærm' : 'Fuld skærm'}><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 8V3h5m4 0h5v5M3 12v5h5m4 0h5v-5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg></button>
      </div>
    </header>

    <main class="scene" aria-label="En model lærer">
      {#if introduction}
      <section class="narrative" aria-live="polite" aria-atomic="true">
        <div class="chapter-label"><span class="chapter-number">{opening ? '↳' : active < 10 ? '01' : '02'}</span>{current.chapter}</div>
        {#key active}
          <div class="copy">
            <h1>{current.title}</h1>
            <p class="explanation">{current.text}</p>
            <button class="begin-button" onclick={() => advance(1)}>{opening ? 'Begynd rejsen' : 'Se det trin for trin'} <span aria-hidden="true">↓</span></button>
          </div>
        {/key}
      </section>
      {:else}
        <div class="demo-chapter"><span>{current.chapter}</span><span>{current.label}</span></div>
        <h1 class="sr-only">{current.title}</h1>
      {/if}
      <div class="visual" bind:this={art} aria-hidden={introduction}>
        <div class="visual-orbit" aria-hidden="true"></div>
        <Artwork step={current} />
        <div class="diagram-note"><span class="example-symbol" aria-hidden="true">◇</span>Konstrueret eksempel · forenklet illustration</div>
      </div>
    </main>

    <div class="demo-caption" aria-live="polite" aria-atomic="true">{#if !introduction}<span aria-hidden="true"></span>{current.title}{/if}</div>
    <footer class="footer">
      <div class="chapter-navigation" aria-label="Kapitler">
        {#each chapters as chapter, i}
          <button class:chosen={active >= chapter.start && active <= chapter.end} onclick={() => go(chapter.start)} aria-current={active >= chapter.start && active <= chapter.end ? 'step' : undefined}><span>{i === 0 ? '↳' : String(i).padStart(2, '0')}</span>{chapter.title}</button>
        {/each}
      </div>
      <div class="transport">
        <span class="step-count"><strong>{String(active + 1).padStart(2, '0')}</strong><span>/ {steps.length}</span></span>
        <button class="arrow-button previous" onclick={() => advance(-1)} disabled={active === 0 && progress === 0} aria-label="Forrige trin"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="m14 5-7 7 7 7M7 12h14" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></button>
        <button class="arrow-button next" onclick={() => advance(1)} disabled={active === last} aria-label="Næste trin"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="m10 5 7 7-7 7M3 12h14" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></button>
      </div>
    </footer>
    <div class="bottom-line"><span>Scroll eller brug <kbd>←</kbd><kbd>→</kbd></span><button onclick={() => sources.showModal()} aria-haspopup="dialog">Om eksemplet og kilder</button></div>
    <nav class="scene-track" aria-label="Fortællingens trin">{#each steps as step, i}<button class:passed={i < active} class:current={i === active} onclick={() => go(i)} aria-label={step.label} aria-current={i === active ? 'step' : undefined}><span></span></button>{/each}</nav>
    <div class="progress-track" role="progressbar" aria-label="Fremdrift" aria-valuemin="1" aria-valuemax={steps.length} aria-valuenow={active + 1}><div style:transform={`scaleX(${progress})`}></div></div>
  </div>
</div>

<dialog bind:this={menu} class="overview-dialog" aria-labelledby="overview-title">
  <div class="dialog-top"><p>Rejsens første del</p><button class="icon-button" onclick={() => menu.close()} aria-label="Luk overblik">✕</button></div>
  <h2 id="overview-title">Fra regel til læring.</h2>
  <p class="dialog-intro">Vælg et trin, eller følg forløbet med piletasterne.</p>
  {#each chapters as chapter}
    <h3>{chapter.title}</h3>
    <div class="step-list">
      {#each steps.slice(chapter.start, chapter.end + 1) as step, i}
        {@const index = chapter.start + i}
        <button class:current={active === index} onclick={() => closeAndGo(index)} aria-current={active === index ? 'step' : undefined}><span>{String(index + 1).padStart(2, '0')}</span>{step.label}<span class="step-dot" aria-hidden="true"></span></button>
      {/each}
    </div>
  {/each}
  <p class="dialog-footnote">Prototype: scene 2–3 i den samlede fortælling. De næste dele handler om generalisering, tekst, sprogmodeller og faglig vurdering.</p>
</dialog>

<dialog bind:this={sources} class="sources-dialog" aria-labelledby="sources-title">
  <div class="dialog-top"><p>Fagligt grundlag</p><button class="icon-button" onclick={() => sources.close()} aria-label="Luk kilder">✕</button></div>
  <h2 id="sources-title">En lille model af læring.</h2>
  <p>Åbningens maskine er AI-genereret konceptkunst. Den tekniske forklaring begynder i de efterfølgende diagrammer.</p>
  <p>Beskederne, modellens forslag og de viste parametertal er konstruerede undervisningseksempler. Illustrationen viser princippet; den kører ikke et neuralt netværk.</p>
  <p>Skyderen gør justerbarhed synlig. En virkelig model har ikke én knap for hvert begreb. Træningsmålet kan selv være fejlmærket, og et enkelt skridt forbedrer ikke nødvendigvis alle eksempler.</p>
  <p>Beregningen af parameterpåvirkning og selve opdateringen vises hver for sig. Backpropagation beregner påvirkningen; en optimeringsmetode bruger den til at justere parametrene.</p>
  <h3>Kilder til mekanismen</h3>
  <a href="https://www.nature.com/articles/nature14539" target="_blank" rel="noreferrer">LeCun, Bengio & Hinton (2015). Deep learning.</a>
  <a href="https://www.nature.com/articles/323533a0" target="_blank" rel="noreferrer">Rumelhart, Hinton & Williams (1986). Learning representations by back-propagating errors.</a>
  <p class="dialog-footnote">Kilderne svarer til K2–K3 i det oprindelige storyboard. Der kræves kun internet, hvis du åbner en ekstern kilde.</p>
</dialog>
