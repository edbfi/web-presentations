export type StoryStep = {
  id: string;
  chapter: string;
  label: string;
  kind: 'intro' | 'demo';
  title: string;
  text: string;
  show: string[];
  paper?: boolean;
  exception?: boolean;
  adjusted?: boolean;
};

const rule = ['rule', 'rule-card'];
const engine = [...rule, 'rule-engine'];
const result = [...engine, 'rule-output'];
const example = ['examples', 'example-0'];
const labelled = [...example, 'example-categories'];
const model = ['training', 'model'];
const parameters = [...model, 'model-details'];
const input = [...parameters, 'input'];
const prediction = [...input, 'output'];
const comparison = [...prediction, 'target'];

export const steps: StoryStep[] = [
  { id: 'begyndelsen', chapter: 'Før svaret', label: 'Begyndelsen', kind: 'intro',
    title: 'Hvordan lærer\nen maskine?',
    text: 'Før en maskine kan svare, må noget forandre sig. Vi følger ét eksempel helt ind i beregningen.', show: [] },
  { id: 'en-regel', chapter: 'Regler og eksempler', label: 'Idéen om en regel', kind: 'intro',
    title: 'Vi begynder\nmed en regel.',
    text: 'En besked skal sorteres. Vi skriver en regel: Indeholder den »vind penge«, skal den lægges i reklame. Lad os følge beskeden.', show: [] },
  { id: 'beskeden', chapter: 'Regler og eksempler', label: 'Beskeden', kind: 'demo',
    title: 'En besked, der skal sorteres.', text: '', show: rule },
  { id: 'reglen', chapter: 'Regler og eksempler', label: 'Reglen', kind: 'demo',
    title: 'Reglen leder efter ordene »vind penge«. ', text: '', show: engine },
  { id: 'sorteringen', chapter: 'Regler og eksempler', label: 'Sorteringen', kind: 'demo',
    title: 'Ordene er der. Beskeden bliver sorteret som reklame.', text: '', show: result },
  { id: 'undtagelsen', chapter: 'Regler og eksempler', label: 'Undtagelsen', kind: 'demo',
    title: 'Samme ord. Men nu rammer reglen en kollegas besked.', text: '', show: [...result, 'rule-exception'], exception: true },
  { id: 'eksempler', chapter: 'Regler og eksempler', label: 'Læring fra eksempler', kind: 'intro',
    title: 'Vis den\nforskellen.',
    text: 'I stedet for at beskrive hver regel kan vi give modellen eksempler. Hvert eksempel har en besked og en ønsket kategori. Mennesker vælger materialet og kategorierne.', show: [], paper: true },
  { id: 'et-eksempel', chapter: 'Regler og eksempler', label: 'Ét eksempel', kind: 'demo',
    title: 'Først en besked.', text: '', show: example, paper: true },
  { id: 'kategorien', chapter: 'Regler og eksempler', label: 'Den ønskede kategori', kind: 'demo',
    title: 'Den ønskede kategori følger med beskeden.', text: '', show: labelled, paper: true },
  { id: 'flere-eksempler', chapter: 'Regler og eksempler', label: 'Flere eksempler', kind: 'demo',
    title: 'Flere eksempler viser, hvordan beskederne skal sorteres.', text: '', show: [...labelled, 'example-1', 'example-2', 'examples-summary'], paper: true },
  { id: 'modellens-tal', chapter: 'En model lærer', label: 'Modellens tal', kind: 'intro',
    title: 'Læring ændrer\ntallene.',
    text: 'En model er en beregning med justerbare tal. Tallene påvirker dens forslag. Vi kalder dem parametre.', show: [] },
  { id: 'modellen', chapter: 'En model lærer', label: 'Modellen', kind: 'demo',
    title: 'Her er modellen. Vi åbner den i næste trin.', text: '', show: model },
  { id: 'parametre', chapter: 'En model lærer', label: 'Parametrene', kind: 'demo',
    title: 'Parametrene er tal, der påvirker beregningen.', text: '', show: parameters },
  { id: 'traeningsskridtet', chapter: 'En model lærer', label: 'Ét træningsskridt', kind: 'intro',
    title: 'Hvordan finder vi\nden næste justering?',
    text: 'Vi lader modellen prøve. Forslaget sammenlignes med et træningsmål. Derefter beregnes og udføres en lille justering. Nu tager vi det én del ad gangen.', show: [] },
  { id: 'klar-til-traening', chapter: 'En model lærer', label: 'Klar til at prøve', kind: 'demo',
    title: 'Modellen er klar. Tallene er endnu ikke ændret.', text: '', show: parameters },
  { id: 'input', chapter: 'En model lærer', label: 'Beskeden til modellen', kind: 'demo',
    title: 'Beskeden føres ind i modellen.', text: '', show: input },
  { id: 'forslag', chapter: 'En model lærer', label: 'Modellens forslag', kind: 'demo',
    title: 'Modellen foreslår reklame.', text: '', show: prediction },
  { id: 'sammenligning', chapter: 'En model lærer', label: 'Træningsmålet', kind: 'demo',
    title: 'Forslaget passer dårligt til træningsmålet. Et fejlmål beskriver forskellen.', text: '', show: comparison },
  { id: 'paavirkning', chapter: 'En model lærer', label: 'Beregn påvirkningen', kind: 'demo',
    title: 'Beregn, hvordan små parameterændringer påvirker fejlen.', text: '', show: [...comparison, 'feedback', 'influence'] },
  { id: 'justering', chapter: 'En model lærer', label: 'Justér parametrene', kind: 'demo',
    title: 'Brug beregningen til at justere parametrene lidt.', text: '', show: [...comparison, 'influence', 'update'], adjusted: true },
  { id: 'gentagelse', chapter: 'En model lærer', label: 'Gentag forløbet', kind: 'demo',
    title: 'Gentag på flere eksempler. Ét skridt forbedrer ikke nødvendigvis alle svar.', text: '', show: ['repeat'] },
  { id: 'nyt-materiale', chapter: 'En model lærer', label: 'Det næste spørgsmål', kind: 'intro',
    title: 'Virker det\npå noget nyt?',
    text: 'At klare kendte opgaver er ikke nok. Vi må vurdere modellen på beskeder, som den ikke er trænet på.', show: [] },
  { id: 'testen', chapter: 'En model lærer', label: 'Nye beskeder', kind: 'demo',
    title: 'Test på nyt materiale. Her fortsætter rejsen til generalisering.', text: '', show: ['test'] },
];

export const chapters = [
  { title: 'Begyndelsen', start: 0, end: 0 },
  { title: 'Regler og eksempler', start: 1, end: 9 },
  { title: 'En model lærer', start: 10, end: steps.length - 1 },
];
