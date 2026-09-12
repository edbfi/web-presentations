<script lang="ts">
  import type { StoryStep } from './story';
  let { step }: { step: StoryStep } = $props();
  const columns = [[292, 335], [430, 300], [430, 385], [568, 335]];
  const messages = [
    { y: 112, text: 'Vind penge i vores konkurrence', category: 'Reklame', color: 'var(--blue)' },
    { y: 246, text: 'Mødet er flyttet til klokken 10', category: 'Almindelig post', color: 'var(--green)' },
    { y: 380, text: 'Her er noterne fra vores møde', category: 'Almindelig post', color: 'var(--green)' },
  ];
</script>

<svg class="artwork" viewBox="0 0 860 690" role="img" aria-labelledby="art-title art-desc">
  <title id="art-title">{step.title}</title>
  <desc id="art-desc">Forenklet undervisningseksempel. De viste parametre og kategorier er illustrative, ikke en måling fra en virkelig model.</desc>
  <defs>
    <linearGradient id="model-material" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--model-highlight)"/><stop offset="1" stop-color="var(--model-surface)"/></linearGradient>
    <filter id="paper-shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="12" stdDeviation="13" flood-color="var(--ink)" flood-opacity=".055" />
    </filter>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1 8 5 1 9" fill="none" stroke="var(--blue)" stroke-width="1.4" /></marker>
    <marker id="arrow-orange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1 8 5 1 9" fill="none" stroke="var(--orange)" stroke-width="1.4" /></marker>
  </defs>

  <g data-layer="rule" data-part="rule">
    <path d="M130 88H708" class="dimension-line" />
    <text x="130" y="65" class="svg-caption">En besked</text>
    <g data-rule-card data-part="rule-card">
      <rect x="130" y="111" width="590" height="157" rx="6" fill="var(--card)" filter="url(#paper-shadow)" />
      <path d="M130 117a6 6 0 0 1 6-6h4v157h-4a6 6 0 0 1-6-6z" fill="var(--blue)" />
      <path d="M163 146h29v22h-29z m0 0 14.5 11 14.5-11" class="mail-icon" />
      {#if step.exception}
        <text x="165" y="206" class="svg-message">»Vi bør undgå udtrykket</text>
        <text x="165" y="243" class="svg-message">‘vind penge’ i vores brev.«</text>
      {:else}
        <text x="165" y="215" class="svg-message">»Vind penge i vores konkurrence«</text>
      {/if}
    </g>
    <g data-part="rule-engine">
    <path d="M425 269v62" stroke="var(--blue)" stroke-width="2" marker-end="url(#arrow-blue)" />
    <rect x="211" y="347" width="428" height="96" rx="48" fill="none" stroke="var(--ink)" stroke-width="2" />
    <text x="425" y="383" text-anchor="middle" class="svg-caption">Regel</text>
    <text x="425" y="416" text-anchor="middle" class="svg-label">Indeholder »vind penge«?</text>
    </g>
    <g data-part="rule-output">
    <path d="M425 444v64" stroke="var(--blue)" stroke-width="2" marker-end="url(#arrow-blue)" />
    <text x="443" y="481" class="svg-caption">Ja</text>
    <rect x="316" y="527" width="218" height="65" rx="4" fill="var(--focus-surface)" />
    <text x="425" y="568" text-anchor="middle" class="svg-label">Reklame</text>
    </g>
    <g data-rule-exception data-part="rule-exception" opacity="0">
      <path d="M557 561h35" stroke="var(--orange)" stroke-width="2" />
      <text x="607" y="554" class="svg-small">Men det er en</text>
      <text x="607" y="582" class="svg-small">kollegas besked.</text>
    </g>
  </g>

  <g data-layer="examples" data-part="examples" opacity="0" visibility="hidden">
    <text x="102" y="72" class="svg-caption">Besked</text>
    <text x="588" y="72" class="svg-caption" data-part="example-categories">Ønsket kategori</text>
    {#each messages as message, i}
      <g data-part={`example-${i}`}>
        <rect x="82" y={message.y} width="696" height="102" rx="5" fill="var(--card)" filter="url(#paper-shadow)" />
        <rect x="82" y={message.y} width="5" height="102" rx="2" fill={message.color} />
        <text x="106" y={message.y + 59} class="svg-example">{message.text}</text>
        <g data-part="example-categories">
          <path d={`M555 ${message.y + 20}v62`} stroke="var(--rule)" />
          <text x="587" y={message.y + 59} class="svg-category" fill={message.color}>{message.category}</text>
        </g>
      </g>
    {/each}
    <g data-part="examples-summary">
    <path d="M132 517v19h596v-19" fill="none" stroke="var(--blue)" stroke-width="1.5" />
    <text x="430" y="583" text-anchor="middle" class="svg-label">Eksempler at lære fra</text>
    <text x="430" y="624" text-anchor="middle" class="svg-caption">Besked + kategori = ét træningseksempel</text>
    </g>
  </g>

  <g data-layer="training" data-part="training" opacity="0" visibility="hidden">
    <g data-input data-part="input">
      <text x="150" y="48" class="svg-caption">Besked</text>
      <rect x="135" y="67" width="590" height="88" rx="5" fill="var(--card)" filter="url(#paper-shadow)" />
      <rect x="135" y="67" width="5" height="88" rx="2" fill="var(--blue)" />
      <text x="430" y="120" text-anchor="middle" class="svg-message">»Mødet er flyttet til klokken 10«</text>
      <path d="M430 156v48" stroke="var(--blue)" stroke-width="2" marker-end="url(#arrow-blue)" />
    </g>

    <g data-model data-part="model">
      <rect x="199" y="240" width="486" height="254" rx="15" fill="none" stroke="var(--model-line)" stroke-width="1" opacity=".45" />
      <rect x="211" y="252" width="486" height="254" rx="15" fill="none" stroke="var(--model-line)" stroke-width="1" opacity=".18" />
      <rect x="187" y="228" width="486" height="254" rx="15" fill="url(#model-material)" stroke="var(--model-line)" stroke-width="1.5" />
      <path d="M210 244h26m-26 0v26M650 244h-26m26 0v26M210 466h26m-26 0v-26M650 466h-26m26 0v-26" fill="none" stroke="var(--muted)" stroke-width="1.5" />
      <text x="218" y="271" class="svg-caption">Modellen</text>
      <g data-part="model-details">
      <g class="network-lines" fill="none" stroke="var(--network-line)" stroke-width="2">
        <path d="M292 335 430 300 568 335M292 335 430 385 568 335" />
        <path d="M430 300v85" />
      </g>
      <g data-influence data-part="influence" opacity="0">
        <path d="M567 335 432 302 294 335M567 335 432 383 294 335" fill="none" stroke="var(--orange)" stroke-width="3" />
        <circle cx="430" cy="300" r="22" fill="var(--focus-surface)" />
        <circle cx="430" cy="385" r="22" fill="var(--focus-surface)" />
      </g>
      {#each columns as [x, y]}
        <circle cx={x} cy={y} r="11" fill="var(--paper)" stroke="var(--ink)" stroke-width="2" />
      {/each}
      <g data-values>
        <rect x="327" y="282" width="70" height="33" rx="5" fill="var(--card)" />
        <text x="362" y="306" text-anchor="middle" class="svg-value">{step.adjusted ? '+0,29' : '+0,32'}</text>
        <rect x="466" y="364" width="70" height="33" rx="5" fill="var(--card)" />
        <text x="501" y="388" text-anchor="middle" class="svg-value">{step.adjusted ? '−0,16' : '−0,18'}</text>
      </g>
      <g data-slider>
        <text x="253" y="443" class="svg-small">Parameter</text>
        <path d="M384 436h213" stroke="var(--network-line)" stroke-width="5" stroke-linecap="round" />
        <path d="M384 436h98" stroke="var(--orange)" stroke-width="5" stroke-linecap="round" />
        <circle cx="482" cy="436" r="10" fill="none" stroke="var(--orange)" stroke-width="1.5" stroke-dasharray="3 3" />
        <circle data-knob cx="482" cy="436" r="11" fill="var(--orange)" stroke="var(--paper)" stroke-width="3" />
      </g>
      </g>
    </g>

    <g data-output data-part="output" opacity="0">
      <path d="M330 483v52" stroke="var(--blue)" stroke-width="2" marker-end="url(#arrow-blue)" />
      <text x="174" y="567" class="svg-caption">Modellens forslag</text>
      <rect x="155" y="585" width="248" height="62" rx="5" fill="var(--focus-surface)" />
      <text x="279" y="625" text-anchor="middle" class="svg-label">Reklame</text>
    </g>
    <g data-target data-part="target" opacity="0">
      <path d="M728 111h51v433h-141v29" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="5 6" />
      <text x="497" y="567" class="svg-caption">Træningsmål</text>
      <rect x="479" y="585" width="274" height="62" rx="5" fill="var(--goal-surface)" />
      <text x="616" y="625" text-anchor="middle" class="svg-label">Almindelig post</text>
      <path d="M421 604l32 23m-32 0 32-23" stroke="var(--orange)" stroke-width="2" />
    </g>
    <g data-feedback data-part="feedback" opacity="0">
      <path d="M435 659v14H91V355h76" fill="none" stroke="var(--orange)" stroke-width="2.5" marker-end="url(#arrow-orange)" />
      <rect x="55" y="409" width="73" height="51" rx="8" fill="var(--paper)" />
      <text x="91" y="432" text-anchor="middle" class="svg-small">Beregn</text>
      <text x="91" y="458" text-anchor="middle" class="svg-small">påvirkning</text>
    </g>
    <g data-update data-part="update" opacity="0">
      <rect x="285" y="170" width="290" height="42" rx="21" fill="var(--focus-surface)" />
      <text x="430" y="198" text-anchor="middle" class="svg-small">En lille parameterændring</text>
    </g>
  </g>

  <g data-layer="repeat" data-part="repeat" opacity="0" visibility="hidden">
    <path d="M220 181H650V531H220V181" fill="none" stroke="var(--network-line)" stroke-width="2" />
    {#each [{ x: 115, y: 131, title: 'Eksempel', sub: 'Besked og kategori' }, { x: 531, y: 131, title: 'Forslag', sub: 'Modellen beregner' }, { x: 531, y: 477, title: 'Sammenligning', sub: 'Beregn fejlen' }, { x: 115, y: 477, title: 'Justering', sub: 'Opdatér parametrene' }] as item, i}
      <g>
        <rect x={item.x} y={item.y} width="220" height="113" rx="7" fill={i === 3 ? 'var(--focus-surface)' : 'var(--card)'} filter="url(#paper-shadow)" />
        <text x={item.x + 110} y={item.y + 44} text-anchor="middle" class="svg-label">{item.title}</text>
        <text x={item.x + 110} y={item.y + 82} text-anchor="middle" class="svg-small">{item.sub}</text>
      </g>
    {/each}
    <path d="m420 173 10 8-10 8m222 160 8 10 8-10m-220 174-10 8 10 8m-226-174-8-10-8 10" fill="none" stroke="var(--blue)" stroke-width="2" />
    <text x="430" y="344" text-anchor="middle" class="svg-big">Gentag.</text>
    <text x="430" y="382" text-anchor="middle" class="svg-caption">På flere eksempler</text>
    <text x="430" y="661" text-anchor="middle" class="svg-caption">Én runde er ét lille skridt i træningen.</text>
  </g>

  <g data-layer="test" data-part="test" opacity="0" visibility="hidden">
    <text x="130" y="116" class="svg-caption">Brugt under træning</text>
    <rect x="131" y="159" width="258" height="175" rx="6" fill="var(--model-surface)" transform="rotate(-5 260 247)" />
    <rect x="137" y="156" width="258" height="175" rx="6" fill="var(--card)" transform="rotate(3 260 247)" />
    <rect x="130" y="155" width="258" height="175" rx="6" fill="var(--card)" stroke="var(--network-line)" />
    <text x="260" y="239" text-anchor="middle" class="svg-label">Kendte</text>
    <text x="260" y="273" text-anchor="middle" class="svg-label">beskeder</text>
    <text x="494" y="116" class="svg-caption">Holdt ude af træningen</text>
    <rect x="497" y="155" width="258" height="175" rx="6" fill="var(--card)" stroke="var(--orange)" stroke-width="2" />
    <text x="626" y="239" text-anchor="middle" class="svg-label">Nye</text>
    <text x="626" y="273" text-anchor="middle" class="svg-label">beskeder</text>
    <path d="M626 332v70H430v34" fill="none" stroke="var(--orange)" stroke-width="2" marker-end="url(#arrow-orange)" />
    <rect x="300" y="451" width="260" height="105" rx="12" fill="var(--model-surface)" stroke="var(--network-line)" />
    <text x="430" y="494" text-anchor="middle" class="svg-caption">Den trænede model</text>
    <text x="430" y="533" text-anchor="middle" class="svg-label">Kan mønstret bruges?</text>
    <text x="430" y="636" text-anchor="middle" class="svg-caption">Næste del af rejsen: generalisering</text>
  </g>
</svg>
