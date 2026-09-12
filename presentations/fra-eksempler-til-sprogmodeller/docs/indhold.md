# Indhold og videre udvikling

## Formål, læringsmål og fortælling

**Formål:** Give undervisere og lærere uden tekniske forkundskaber en brugbar forklaring på, hvordan machine learning fører frem til store sprogmodeller, og et fagligt grundlag for at undersøge deres svar.

**Læringsmål:** Efter oplægget kan deltagerne:

- forklare, at maskinlæring justerer en model ud fra eksempler, og at læring skal vurderes på nye opgaver;
- beskrive grundtræning på tekst, tokens, attention og tekstgenerering med egne ord;
- skelne mellem træning, eftertræning og den kontekst, modellen får under brug;
- forklare, hvorfor menneskers tekster kan formidle viden til modeller uden at garantere korrekte svar eller menneskelig forståelse;
- undersøge kønsstereotyper og politiske perspektiver uden at forveksle enkeltstående svar, systematisk bias og dokumenterede årsager;
- skelne mellem lærte mønstre og konkrete kilder hentet under brug.

**Foreslået fortælling:** Vi begynder med forskernes gamle spørgsmål: Kan en maskine forbedre sig gennem eksempler? En enkel sorteringsopgave gør læring konkret. Derefter erstatter vi de mærkede eksempler med tekst, som selv leverer træningsmål. Vi følger tekstbidder gennem en moderne sprogmodel og frem til et svar. Til sidst bruger vi mekanismen til at stille bedre spørgsmål til svarenes belæg og perspektiver: Hvad følger med fra teksterne, hvad formes af udviklernes valg, og hvad tilføres i den konkrete samtale?

## Gældende præsentationsform

En lang, manuelt styret webdokumentar til undervisere uden tekniske forkundskaber. Introducér begreber før de bruges. Vis først kort forklarende tekst, derefter en separat demonstration med én ny del pr. stop. Diagrammets eksisterende dele bliver på deres positioner. Piletaster, trackpad og scrollbar skal følge samme rejse, også baglæns.

Design: mørk indigo, elfenben, kobolt og rav; Barlow/Barlow Condensed. Lyse eksempelscener bryder rytmen. Billeder skaber stemning; programmerede diagrammer forklarer mekanismerne. Generer aldrig forskningsgrafer eller screenshots som dokumentation. Eksempeltal er illustrative. Skeln mellem konstruerede eksempler, lokale observationer og forskningsresultater.

Appen implementerer nu 23 stop om regler, eksempler og træning. Planen nedenfor beskriver hele det ønskede forløb og er ikke en liste over færdige funktioner. Tider er forslag, ikke en aftalt tidsramme. Henvisninger til slides er stabile referencer til de faglige noter længere nede, ikke et krav om slide-layout.

## Rejsens 12 scener

### 1. Kan en maskine lære af eksempler? — 2 minutter

**Udgangspunkt:** Publikum kan læse og kategorisere en almindelig besked.

**Trin:**

1. Beskeden »Mødet er flyttet til klokken 10« fylder scenen.
2. To kategorier vises: reklame og almindelig post. Publikum får et kort mundtligt spørgsmål.
3. Spørgsmålet udvides: Hvordan får vi en maskine til at gøre det på nye beskeder?
4. Et kort historisk indskud viser Rosenblatts perceptron og 1958 som baggrund for idéen om læring fra eksempler.

**Stop:** »Vi skal se, hvad der ændrer sig, når en model lærer.«

**Bro:** Vi har en opgave. Nu skal vi vælge, hvordan vi beskriver den for maskinen.

**Grundlag:** Slides 1–2, K1–K2. Historisk imagegen-illustration er valgfri og skal være tydeligt skematisk.

### 2. Fra en regel til mange eksempler — 3 minutter

**Trin:**

1. Vis reglen »Indeholder ‘vind penge’ → reklame«.
2. Vis et konstrueret tilfælde, hvor reglen ikke er tilstrækkelig.
3. Læg mærkede beskeder ved siden af reglen: Hvert eksempel består af en besked og en ønsket kategori.
4. Introducér modellen som en beregning, der kan tilpasses. Åbn rammen og vis få justerbare tal.

**Stop:** »Parametre er justerbare tal, som påvirker modellens forslag.«

**Bro:** Tallene kan ændres. Hvad skal fortælle os, hvordan de bør ændres?

**Grundlag:** Slides 3–4, K2–K3. Skyderne er en analogi; der findes ikke en separat knap for hvert menneskeligt begreb.

### 3. Ét træningsskridt, helt langsomt — 5 minutter

**Trin:**

1. Den kendte mødebesked føres ind i modellen.
2. Modellen giver et konstrueret forslag, som passer dårligt til træningsmålet.
3. Træningsmålet vises i et separat felt: almindelig post.
4. Sammenlign forslag og mål. Introducér »fejlmål« som et mål for, hvor dårligt forslaget passer til målet.
5. Fremhæv beregningen af, hvordan små parameterændringer påvirker fejlen. Navnet backpropagation kan nævnes mundtligt efter forklaringen.
6. Vis derefter selve den lille opdatering af parametrene. Beregning af påvirkning og opdatering er to forskellige trin.
7. Udvid til en kort række af flere eksempler og gentagelser.

**Stop:** »Eksempel → forslag → sammenligning → justering.« Publikum skal kunne fortælle, hvad der bliver ændret.

**Bro:** Bedre resultater på kendte beskeder er ikke nok. Vi må prøve nye.

**Grundlag:** Slides 5–6, K2–K3. Ingen garanti for, at hvert skridt forbedrer alle eksempler. En eventuel fejlkurve er tydeligt illustrativ, med navngivne akser, og bruges kun hvis den hjælper.

### 4. Har modellen lært noget, den kan bruge igen? — 3 minutter

**Trin:**

1. Læg træningsmaterialet til side, mens modellen bliver stående.
2. Vis en særskilt bunke nye testeksempler.
3. Sammenlign idéen om at huske kendte svar med at klare nye opgaver. Introducér generalisering og forklar overtilpasning uden en ekstra metafor.
4. Zoom ind på en forenklet model med flere beregningslag. Introducér deep learning som en del af machine learning.

**Stop:** »Vi vurderer læringen på nye eksempler.«

**Bro:** Hidtil havde hvert eksempel en kategori. Tekst giver mulighed for en anden slags træningsopgave.

**Grundlag:** Slides 7–8, K2–K4. Lagene får ikke labels som faste menneskelige specialafdelinger. AlexNet kan nævnes kort i talernoterne.

### 5. Teksten giver selv et træningsmål — 4 minutter

**Trin:**

1. Vis en menneskelig observation og en tekst, der beskriver den: tekster bærer information om verden, men kan også indeholde fejl og udeladelser.
2. Vis en kort sætning med en skjult fortsættelse. Lad publikum foreslå en fortsættelse.
3. Ændr den foregående tekst og vis, at andre fortsættelser bliver relevante.
4. Del sætningen i tekstbidder og introducér tokens. Brug en kontrolleret tokenisering i den endelige produktion eller mærk opdelingen som skematisk.
5. Afslør den næste token i tekstmaterialet: Her kommer træningsmålet fra.
6. Genbrug sammenligningen og justeringen fra scene 3, nu med næste token som mål. Vis derefter flere teksttyper.

**Stop:** »Teksten leverer både det, modellen ser, og den næste tekstbid, den trænes til at forudsige.«

**Bro:** Vi kender opgaven. Nu skal vi se, hvordan tekstbidderne kan indgå i en beregning.

**Grundlag:** Slides 9–13, K5–K6 og K10–K11. Tekstens faktiske fortsættelse er et træningsmål, ikke et sandhedsbevis. Opdeling af tekst er ikke i sig selv læring.

### 6. Fra tekstbidder til beregning og sammenhæng — 5 minutter

**Trin:**

1. Bevar de synlige tekstbidder og tilføj deres token-id'er som et lille ekstra lag.
2. Vis, at hvert id bruges til at finde en lært talrepræsentation. Forklar embedding som denne repræsentation; et id alene angiver ikke betydning.
3. Vis, at placeringen i teksten også indgår. Undlad tekniske formler.
4. Brug storyboardets sætning med nøglen, skuffen og »Den«. Fremhæv de tidligere tekststeder, beregningen kan kombinere information fra.
5. Introducér attention som vægtning og kombination af information fra tilgængelige positioner. Stregtykkelser er en forklaringsskitse, ikke målte attention-værdier.
6. Vis ét forenklet lag med attention og videre beregning, som ændrer repræsentationerne, og lad flere lag gentage bearbejdningen.
7. Saml resultatet i forslag til næste token med illustrative sandsynligheder. Eventuelle udeladte muligheder samles som »andre«.

**Stop:** »Modellen beregner forslag ud fra en bearbejdet repræsentation af den tilgængelige tekst.«

**Bro:** Der er flere mulige fortsættelser. Hvad sker der, når systemet vælger én?

**Grundlag:** Slide 14 og uddybning af broen fra 11 til 15, K5–K6. Vi viser en forenklet autoregressiv transformer. Ingen adgang til senere tokens i næste-token-eksemplet; ingen fremstilling af attention som bevidst opmærksomhed eller hele arkitekturen. De nye forklaringer om repræsentationer og position skal kildecheckes ved udarbejdelse af det endelige manuskript.

### 7. Et svar vokser frem — 3 minutter

**Trin:**

1. Vis de mulige næste tokens fra sidste scene.
2. Vælg én og føj den til den synlige tekst.
3. Udvid kontekstfeltet, så den nye token nu indgår i næste beregning.
4. Vis nye forslag, og gentag et par gange med manuelle stop.
5. Vis, at et andet valg kan give en anden fortsættelse. Den mest sandsynlige token vælges ikke nødvendigvis hver gang.

**Stop:** »Beregn → vælg → tilføj → beregn igen.« Modelparametrene står stille under denne sekvens.

**Bro:** At fortsætte tekst forklarer ikke alene, hvorfor en assistent følger instruktioner.

**Grundlag:** Slide 15, K5–K6. Forløbet er et forberedt undervisningseksempel uden live modelkald. Ingen skjulte tanketrin fremstilles som observeret modeladfærd.

### 8. Fra sprogmodel til assistent — 3 minutter

**Trin:**

1. Vis et eksempel på en instruktion og et ønsket svar.
2. Vend tydeligt tilbage til træning: parametrene kan opdateres igen.
3. Vis to svar og ét sæt vurderingskriterier. Forklar, at præferencer også kan bruges i eftertræning.
4. Markér menneskelige valg af eksempler og kriterier. Sæt navn på forskellen mellem grundtræning og eftertræning.

**Stop:** »Eftertræning er med til at forme, hvordan modellen svarer som assistent.«

**Bro:** Hvad ændrer vi så, når vi selv skriver i en samtale?

**Grundlag:** Slides 16–17, K7 og K9. Dette er eksempler på eftertræning, ikke en komplet eller universel opskrift for alle produkter. Ingen afstikker til belønningsmodellens fulde arkitektur i hovedruten.

### 9. Det, samtalen tilføjer — 3 minutter

**Trin:**

1. Vis den trænede model med uændrede parametre og et afgrænset kontekstfelt udenfor.
2. Tilføj brugerens besked, instruktioner og tidligere samtaletekst til konteksten.
3. Vis et ændret svar uden en animation af parameteropdatering.
4. Hent et synligt dokumentuddrag ind som et særskilt trin. Det bliver materiale i konteksten.
5. Sammenhold to rolige tilstande: ændring under træning og tilføjelse af kontekst under brug.

**Stop:** »Ny samtaletekst er normalt ny kontekst, ikke ny træning af parametrene.«

**Bro:** Et svar kan bygge på en kilde og stadig tilføje noget, kilden ikke siger.

**Grundlag:** Slides 18–19, K5 og K8. Skellet gælder den viste brugssituation; eventuel senere brug af samtaler til træning er et andet spørgsmål.

### 10. Fra flydende svar til belæg — 4 minutter

**Trin:**

1. Vis storyboardets korte museums-kildeeksempel i stor tekst.
2. Læg et forberedt svar ved siden af.
3. Forbind en konkret påstand med den passage, der støtter den.
4. Fremhæv en tilføjelse uden støtte i uddraget. Den mærkes »ikke belagt her«, ikke automatisk »forkert«.
5. Zoom ud til et tekstudvalg og vis, at udvælgelse og filtrering også påvirker, hvilket materiale der kommer med.

**Stop:** »Et overbevisende svar skal stadig undersøges på påstandsniveau.«

**Bro:** Vi skal også undersøge, hvem og hvilke perspektiver svaret gør synlige.

**Grundlag:** Slides 20–21, K8–K11. En filtreringsillustration er ikke en målt fordeling. Forskningsresultater afgrænses til det undersøgte datasæt.

### 11. Hvem får plads i svaret? — 5 minutter

**Trin:**

1. Vis autentiske uddrag fra professor- og assistent-skærmbillederne. Fremhæv kun den relevante profession og kønsbetegnelse.
2. Skeln mellem »det skete i disse svar« og en påstand om generel modeladfærd.
3. Vis én genbrugt promptskabelon og tomme observationsrækker: En mere systematisk undersøgelse kræver sammenlignelige gentagelser.
4. Flyt fokus fra køn til perspektiver. Brug storyboardets udtrykkeligt fiktive baseaftale med regering og lokal borgergruppe.
5. Tilføj spørgsmål om magt, interesser og manglende stemmer. Said og Parenti kan introduceres som afsæt for undersøgelsesspørgsmål, ikke som målinger af modellens træningsdata.
6. Vis tre adskilte felter: træningsdata, modelsvar og hentede kilder. Et observeret svar afgør ikke alene årsagen til en skævhed.

**Stop:** »Hvad observerer vi, hvad mangler vi, og hvad kan vi endnu ikke konkludere?«

**Bro:** Nu har vi både en forklaring på mekanismen og spørgsmål, der kan bruges i undervisningen.

**Grundlag:** Slides 22–25 og 27, K9–K10 og K12–K16 samt lokale observationer L1–L2. De politiske forskningsresultater omtales med deres afgrænsninger. Ingen nye måleresultater eller opdigtede fordelingsgrafer. Folkeret fra slide 26 bevares som et valgfrit sidespor om krav til regler, fakta og konkrete kilder; K17 videreføres, og der foretages ingen juridisk vurdering i hovedruten.

### 12. Tilbage til undervisningen — 2 minutter

**Trin:**

1. Vis en kort opsamling med de allerede kendte elementer: eksempler, justerede parametre, kontekst og svar.
2. Lad svaret blive stående, og tilføj tre spørgsmål ét ad gangen:
   - Hvad påstår svaret?
   - Hvad er belægget?
   - Hvilket perspektiv bør vi undersøge mere?
3. Hold en afsluttende scene, hvor deltagerne kan vælge en egen undervisningsopgave.

**Stop:** De tre spørgsmål bliver stående under samtalen.

**Grundlag:** Slide 28. Øvelser med nye modelsvar ligger efter oplægget som i det oprindelige materiale.

## Faglige noter

Bevarede pointer og talernoter fra indholdsarbejdet; sceneopdeling og skærmtekst tilpasses webformatet. Podcastomtaler er baggrund, ikke verificerede lydcitater.

### Slide 1 — Hvordan lærer en maskine? · 1 min.

**Central pointe:** Ordet »lære« skal forklares gennem en observerbar ændring i en opgave.

**Talernoter:** Vi bruger AI til forklaringer, idéer og tekster. Men hvad er der sket, før svaret dukker op? Vi undersøger først en lille opgave og bygger langsomt videre. Når vi siger, at en maskine lærer, mener vi her, at dens beregning tilpasses gennem træning. Det fortæller ikke i sig selv noget om menneskelig erfaring eller forståelse. Bed deltagerne tænke på en opgave, hvor eksempler er lettere at give end en fuldstændig regelbeskrivelse.

**Overgang:** »Det spørgsmål er langt ældre end nutidens chatbots.«

**Kilder og forbehold:** [K2]. Skyderen er en analogi for justerbarhed, ikke en fysisk del af modellen.

### Slide 2 — En gammel idé: lær af eksempler · 1½ min.

**Central pointe:** Lærende maskiner var et konkret forskningsprojekt længe før internettets tekstmængder.

**Talernoter:** Podcasten fortæller om Frank Rosenblatt og perceptronen. Hans artikel fra 1958 beskrev et tidligt lærende system med inspiration fra nervesystemer. Det interessante er idéen om at ændre forbindelser ud fra erfaring med data. Det var en begrænset model, ikke en lille udgave af en færdig chatbot. Idéen havde forløbere, og mange forskere bidrog senere. Vi følger nogle få tekniske skridt frem for én opfinders livshistorie.

**Overgang:** »Lad os se, hvad forskellen på at skrive regler og at give eksempler betyder.«

**Kilder og forbehold:** [K1]; podcast E02 cirka 00:35–02:51. Illustrationen rekonstruerer ikke en bestemt demonstration. Perceptronen beviste ikke menneskelig forståelse eller bevidsthed.

### Slide 3 — Machine learning: eksempler former modellen · 1½ min.

**Central pointe:** En maskinlæringsmodel tilpasses ved hjælp af data frem for alene håndskrevne beslutningsregler.

**Talernoter:** En regel kan være let at forstå, men fanger måske en almindelig besked om et lotteri og overser en reklame med andre ord. Vi kan i stedet give mange beskeder med deres ønskede kategorier og tilpasse en model til opgaven. Det kaldes maskinlæring, eller machine learning. Eksempler med tilhørende kategorier kaldes superviseret læring. Udviklerne programmerer stadig systemet og vælger opgave, data og mål; læring er ikke fravær af menneskelige valg. Regler og læring kan kombineres.

**Overgang:** »Men hvad er det inde i modellen, som kan ændres?«

**Kilder og forbehold:** [K2]. Klassifikationen er en pædagogisk konstruktion. Ikke al maskinlæring er superviseret eller et neuralt netværk.

### Slide 4 — Modellen har justerbare tal · 1½ min.

**Central pointe:** I et neuralt netværk ligger det lærte i mange parametre, som påvirker beregningen.

**Talernoter:** Vi vælger nu én familie af modeller: neurale netværk. De kombinerer mange små beregninger gennem forbindelser. Nogle af de justerbare tal kaldes vægte. Dæmperbilledet fra podcasten gør justerbarheden konkret: en ændring kan få information til at tælle anderledes. Der er ikke én knap for hvert begreb eller én forbindelse, som altid er god eller dårlig. Parametre kan også være negative. En model er ikke en facitbog med ét opslag for hver mulig besked.

**Overgang:** »For at justere tallene skal vi først måle, hvordan forslaget passer til opgaven.«

**Kilder og forbehold:** [K2, K3]; E02 cirka 02:20–02:51. Hjerneinspiration er historisk baggrund, ikke dokumentation for identiske læringsmekanismer.

### Slide 5 — Træning begynder med en sammenligning · 1½ min.

**Central pointe:** Et fejlmål sammenholder modellens forudsigelse med træningsmålet.

**Talernoter:** Her passer forslaget dårligt til den mærkede besked. I praksis kan modellen give sandsynligheder til flere kategorier. Træningsprogrammet beregner et fejlmål, som udtrykker, hvor dårligt forudsigelsen passer til målet. »Forkert« er derfor en forenkling af en matematisk sammenligning. Et menneske behøver ikke sidde og rette hvert forsøg live; kategorierne kan allerede være i datasættet. Hvis kategorien er forkert, kan træningen også føre i en uhensigtsmæssig retning.

**Overgang:** »Sammenligningen fortæller, at noget skal ændres. Næste trin er at beregne hvordan.«

**Kilder og forbehold:** [K2, K3]. Kategorien er træningsmålet; dens tilstedeværelse gør den ikke ufejlbarlig.

### Slide 6 — Fejlen bruges til små justeringer · 1½ min.

**Central pointe:** Træningsprogrammet beregner parameterændringer, som sigter mod mindre fejl.

**Talernoter:** Backpropagation beregner, hvordan små ændringer i parametrene påvirker fejlmålet. En optimeringsmetode bruger beregningen til at opdatere tallene. Publikum behøver ikke huske navnene; det afgørende er, at ændringerne styres af en matematisk sammenligning. Rumelhart, Hinton og Williams viste i 1986, hvordan denne tilgang kunne opbygge nyttige interne repræsentationer. Metoden havde forløbere. Et enkelt skridt gør ikke nødvendigvis modellen bedre til alle eksempler.

**Overgang:** »Hvis modellen bliver bedre til træningseksemplerne, hvordan ved vi så, om den kan bruge det på noget nyt?«

**Kilder og forbehold:** [K3]; E02 cirka 20:41–28:19. Podcastens billede af at skrue op for alle »gode« forbindelser bruges ikke som teknisk forklaring.

### Slide 7 — Læring skal også virke på nyt materiale · 1½ min.

**Central pointe:** Generalisering er at klare nye eksempler, ikke blot kendte træningsopgaver.

**Talernoter:** En elev kan lære svarene til en bestemt prøve uden at kunne løse nye opgaver. Den analogi hjælper med at forklare generalisering, men modellen lærer ikke nødvendigvis som eleven. Vi vurderer den på materiale, der er holdt ude af træningen. Hvis den kun har set én type reklamer, kan andre typer blive svære. Overtilpasning betyder, at modellen passer for tæt til træningsmaterialet og klarer sig dårligere på nyt. Et godt testresultat gælder den test; det er ikke en garanti i alle situationer.

**Overgang:** »Neurale netværk kan sættes sammen i flere lag. Det udvider, hvilke mønstre de kan lære.«

**Kilder og forbehold:** [K2, K4]. Gentagen tilpasning til samme test svækker dens uafhængighed. Skjulte kopier af testdata kan gøre evaluering misvisende.

### Slide 8 — Deep learning: flere lag af beregning · 1½ min.

**Central pointe:** Deep learning bruger neurale netværk med flere lag, som lærer repræsentationer.

**Talernoter:** Lagene omformer information trin for trin. De er ikke nødvendigvis små afdelinger med menneskeligt forståelige opgaver. Podcastens AlexNet-historie fra 2012 viser, at dybe netværk, data og GPU-beregninger sammen kunne give et markant gennembrud i billedgenkendelse. Eksemplet fortæller, hvorfor metoderne fik gennemslag; billedgenkendelse er ikke det samme som sprog. Flere lag og større skala er muligheder, ikke en garanti for kvalitet. Nu følger vi, hvad der sker, når materialet er tekst.

**Overgang:** »Tekst er et særligt rigt materiale, fordi mennesker allerede har beskrevet meget af verden.«

**Kilder og forbehold:** [K2, K4]; E03 cirka 31:02–40:47. AlexNet var et billedklassifikationssystem, ikke en tidlig LLM.

### Slide 9 — Tekster bærer spor af verden · 2 min.

**Central pointe:** Menneskers beskrivelser af verden gør tekst til et rigt, men ufuldstændigt og fejlbehæftet, træningsmateriale.

**Talernoter:** En person måler nedbør, en anden skriver en lærebog, en tredje fortæller om en regnvejrsdag. Mennesker har gjort et omfattende arbejde med at omsætte observationer og erfaringer til sprog. Modeller kan lære sproglige og faktuelle relationer fra disse spor. Det er den stærke pointe i podcastens E03. Men tekst er et udvalg af beskrivelser, ikke selve verden eller hele menneskehedens viden. Noget er mundtligt, utilgængeligt, skævt repræsenteret eller forkert. Mønstre lært fra teksten er ikke i sig selv dokumentation for menneskelig forståelse.

**Overgang:** »Hvordan gør man eksisterende tekst til en konkret træningsopgave?«

**Kilder og forbehold:** E03 cirka 25:48–27:39; [K5, K10, K11]. Dette er en parafrase og en didaktisk syntese, ikke et Hinton-citat. Data kan også omfatte kode og syntetisk tekst.

### Slide 10 — Sammenhængen ændrer fortsættelsen · 1 min.

**Central pointe:** Den tilgængelige tekst påvirker, hvilke fortsættelser der passer.

**Talernoter:** Lad publikum vælge en mulig fortsættelse. Flere svar er mulige; telefon kan også indgå i en god historie. Den foregående tekst kalder vi konteksten. Øvelsen viser forudsigelsesopgaven, ikke at vores hjerner og modellen bruger samme mekanisme. Vis ingen opdigtede sandsynligheder.

**Overgang:** »Vi har brugt ord. Modellen arbejder faktisk med mindre tekstbidder.«

**Kilder og forbehold:** [K5]. Kandidaterne er konstruerede; der er ikke gennemført en modelmåling.

### Slide 11 — Tokens er modellens tekstbidder · 1 min.

**Central pointe:** Tekst opdeles i tokens, der repræsenteres med tal.

**Talernoter:** Token er navnet på en enhed i modellens tekst. Den præcise opdeling afhænger af tokenizeren. Her er »regn« og »jakke« kun en illustration, ikke et tjek af en bestemt model. En token får en talrepræsentation, så netværket kan beregne med den. Vi behøver ikke se vektorerne for at følge næste trin.

**Overgang:** »Når teksten er opdelt, kan den selv levere et træningsmål.«

**Kilder og forbehold:** [K5, K6]. Ordgrænser er ikke nødvendigvis tokengrænser. Talrepræsentation er ikke det samme som et opslagsværk over betydninger.

### Slide 12 — Teksten leverer træningsmålet · 1½ min.

**Central pointe:** Ved næste-token-træning findes målet allerede i tekstmaterialet.

**Talernoter:** Tag en eksisterende sætning og skjul resten. Modellen får begyndelsen og skal forudsige næste token. Det efterfølgende tekststykke leverer målet. Her viser vi et helt ord for overskuelighed. »Entréen« kunne også passe; træningsmålet er, hvad der stod, ikke den eneste meningsfulde eller sande fortsættelse. Dermed kan mange opgaver laves uden særskilt menneskelig mærkning af hvert mål. Udvælgelse og bearbejdning af materialet kræver stadig arbejde og valg.

**Overgang:** »Så kan vi bruge den samme sammenligning og justering, som vi allerede kender.«

**Kilder og forbehold:** [K5]; E03 cirka 25:05–26:24. I næste-token-opgaven må fremtidig tekst ikke bruges som ledetråd. Dette forklarer autoregressiv grundtræning; andre sprogmodeller har andre mål.

### Slide 13 — Et enkelt mål kan give mange færdigheder · 1 min.

**Central pointe:** Gentagen træning på varieret tekst kan opbygge mønstre, der bruges i mange opgaver.

**Talernoter:** For at forudsige fortsættelser i forskellige tekster kan modellen få gavn af mønstre om syntaks, personer, årsager og faglige relationer. Det er derfor, næste-token-målet kan give mere end stavningshjælp. En stor sprogmodel, LLM, er en stor neural model til sprog. »Stor« har ingen enkelt grænse, som vi skal lære her. Færdighederne varierer, og memorering af tekst kan også forekomme; evnen til at kombinere mønstre er ikke en garanti for korrekt ræsonnement.

**Overgang:** »En vigtig del af moderne modeller er at forbinde information i den aktuelle tekst.«

**Kilder og forbehold:** [K5, K6]. Vi forklarer tekstbaserede, generative LLM’er. Moderne systemer kan også behandle billeder og lyd; det er uden for hovedforløbet.

### Slide 14 — Attention forbinder information i teksten · 2 min.

**Central pointe:** Attention lader beregningen vægte information fra forskellige steder i den tilgængelige kontekst.

**Talernoter:** For mennesker kan »den« henvise tilbage til nøglen, selvom skuffen også er en mulig referent. Attention kombinerer talrepræsentationer fra tekstens positioner med forskellige vægte. Det kan hjælpe modellen med relationer på tværs af teksten. Transformer-arkitekturen fra 2017 gjorde attention central og muliggjorde mere parallel træning. Vi viser en mulig forbindelse, ikke en måling af, hvad en bestemt model gør. Attention er matematisk vægtning, ikke bevidst opmærksomhed eller en fuldstændig forklaring af svarets årsag.

**Overgang:** »Når modellen er trænet, kan den bruge disse beregninger til at skrive videre.«

**Kilder og forbehold:** [K6]. Buerne er ikke målte attention-vægte. I den generative modeltype, vi forklarer, bruges tilgængelig tidligere tekst, ikke endnu uskrevne tokens. Transformer er mere end attention alene.

### Slide 15 — Svaret vokser én tekstbid ad gangen · 1½ min.

**Central pointe:** Den valgte token føjes til konteksten, før næste token beregnes.

**Talernoter:** Modellen beregner en fordeling over mulige næste tokens. En udvælgelsesmetode vælger én, og beregningen gentages med den udvidede tekst. Den vælger ikke nødvendigvis altid den mest sandsynlige. Det kan give variation mellem svar. Autofuldførelse er en nyttig analogi for dette trin, men opsummerer ikke hele modellens kapacitet. Vi taler nu om brugen af en trænet model, også kaldet inferens.

**Overgang:** »Men en tekstfortsætter er endnu ikke nødvendigvis en god assistent.«

**Kilder og forbehold:** [K5, K6]. Figuren er et overblik over generering; systemer kan derudover bruge værktøjer og ekstra beregning under besvarelsen.

### Slide 16 — Eftertræning viser ønsket adfærd · 1½ min.

**Central pointe:** Modellen kan trænes videre på instruktioner og eksempler på brugbare svar.

**Talernoter:** Grundtræning giver brede sprogmønstre. Eftertræning kan vise, hvordan en assistent skal følge instruktioner, forklare enkelt og håndtere usikkerhed. Et instruktion–svar-par er ét eksempel på sådant materiale. Udviklere vælger, hvilke svar der skal demonstrere den ønskede adfærd. Begge træningsfaser ændrer parametre. Den viste sætning er kun en enkel indledning til en forklaring af regn, ikke en komplet faglig forklaring.

**Overgang:** »Eksempler er én mulighed. Man kan også bruge vurderinger af alternative svar.«

**Kilder og forbehold:** [K7]. Eksemplet er ikke et offentliggjort træningspar. Konkrete eftertræningsforløb varierer.

### Slide 17 — Hvem bestemmer, hvad et bedre svar er? · 1½ min.

**Central pointe:** Vurderingskriterier er med til at forme modellens adfærd.

**Talernoter:** To svar kan være lige velformulerede, men kun det ene passer til en elevs spørgsmål. Mennesker kan sammenligne svar efter valgte kriterier. I klassisk RLHF bruges sådanne sammenligninger til en belønningsmodel, hvis signal bruges til videre træning af sprogmodellen. Vi udfolder ikke hele kæden på figuren. En belønning er et tal, ikke oplevet ros. Valg af bedømmere og kriterier har betydning. At dæmpe diskrimination er en bestemt adfærdsmålsætning; det er ikke et bevis på, at alle politiske fremstillinger bliver neutrale.

**Overgang:** »Det sker under træning. Hvad sker der så, når du selv skriver en ny besked?«

**Kilder og forbehold:** [K7, K9]. RLHF er én metode; andre bruger eksempelvis AI-feedback eller andre optimeringsmål. Præference og sandhed er ikke samme mål.

### Slide 18 — En samtale ændrer konteksten · 1½ min.

**Central pointe:** Ny tekst i samtalen er normalt ikke en parameteropdatering.

**Talernoter:** En ny instruktion kan ændre svaret, fordi den ligger i den tekst, modellen har til rådighed. Parametrene opdateres normalt ikke under den almindelige samtale. Det er forskellen på en ændret model og en ændret opgave. Gemte oplysninger i en app og eventuel senere brug af samtaler i træning er særskilte forhold. Vi kan derfor sige, at modellen tilpasser svaret til vores besked uden at hævde, at vi lige har trænet den om.

**Overgang:** »Konteksten kan også udvides med tekst fra dokumenter eller søgning.«

**Kilder og forbehold:** [K5]. Ingen generel påstand om bestemte produkters datalagring eller træningspolitik.

### Slide 19 — Søgning er et ekstra trin · 1½ min.

**Central pointe:** Kilder kan hentes ind i konteksten, men opslag er ikke en nødvendig del af hvert modelsvar.

**Talernoter:** En model kan formulere et svar med sine lærte parametre og den aktuelle prompt. I en app med søgning kan et særskilt værktøj finde dokumenter og tilføre uddrag. Modellen skriver så med disse uddrag i konteksten. Det kaldes ofte retrieval-augmented generation, forkortet RAG, når generering kombineres med hentet materiale. At modellen nævner en bog eller forfatter viser ikke i sig selv, at den har slået bogen op eller brugt den som træningskilde.

**Overgang:** »Selv med et dokument foran sig kan modellen tilføje noget, dokumentet ikke siger.«

**Kilder og forbehold:** [K8]. Kildeadgang kan forbedre grundlaget; det garanterer hverken korrekt kildevalg eller korrekt gengivelse.

### Slide 20 — Plausibelt er ikke det samme som belagt · 1½ min.

**Central pointe:** Et flydende svar kan indeholde tilføjelser uden støtte i kilden.

**Talernoter:** Bed publikum finde tilføjelsen. Rundvisningen er mulig, men kilden siger det ikke. Vi ved derfor ikke, om den fandt sted. Dette er en måde at forstå hallucinationer eller uunderbyggede tilføjelser på. Fejl skyldes ikke kun gammel viden; noget kan også blive udfyldt eller forvekslet i den aktuelle opgave. TruthfulQA viste, at de undersøgte modeller kunne gengive menneskelige misforståelser. Et godt sprog er ikke nok til at afgøre, om indholdet holder.

**Overgang:** »Et svar kan også være faktuelt muligt og alligevel give et systematisk skævt billede.«

**Kilder og forbehold:** [K11]. Museums-eksemplet er konstrueret, ikke et målt output. »Ikke belagt« betyder ikke nødvendigvis »falsk«.

### Slide 21 — Dataudvælgelse kan skævvride materialet · 1½ min.

**Central pointe:** Hvilke tekster der kommer med eller sorteres fra, kan påvirke repræsentationen af mennesker og perspektiver.

**Talernoter:** Bias betyder her systematiske skævheder i repræsentation eller behandling. Det kan begynde før modellen trænes. Dodge og kolleger fandt, at en bestemt ordlistefiltrering af C4 uforholdsmæssigt fjernede tekst fra og om minoriteter. Selv et filter, der skal forbedre materialet, kan derfor ændre, hvilke stemmer der er til stede. Datasammensætning fortæller ikke alene, hvordan et bestemt svar bliver; eftertræning og brugssituationen spiller også ind.

**Overgang:** »I vores lokale materiale kan vi se en konkret rollefordeling, som er værd at undersøge.«

**Kilder og forbehold:** [K9, K10]. C4-resultatet gælder det undersøgte datasæt og filter; det dokumenterer ikke fravær af Said, Parenti eller bestemte bevægelser i andre modeller.

### Slide 22 — Køn blev tilføjet i svaret · 2 min.

**Central pointe:** De lokale skærmbilleder viser kønnet rollefordeling, selvom de synlige prompts ikke angiver køn.

**Talernoter:** Første billede viser en historie om en professor med »han« og »hans«. Næste billede viser en assistent ved navn Sofie og pronomenet »hun«. Køn udledes her af pronomenet, ikke navnet alene. Assistenten løser faktisk et problem ved at have en ekstra kopi; vi bør også undersøge kompetence og handlekraft. Skærmbillederne fremstår som en fortsættelse af samme historie og er ikke to uafhængige forsøg. Modelversion, fuld tidligere kontekst og indstillinger fremgår ikke. Observationen kan starte en undersøgelse, men viser hverken hyppighed eller årsag.

**Overgang:** »Hvad skal vi gøre, før vi kalder det et systematisk mønster?«

**Kilder og forbehold:** [L1, L2]. De originale billeder er belægget. En redigerbar kondensering på slidet skal mærkes som sammenfatning; de to citerede pronominer kan kontrolleres direkte. Filnavnenes dato er ikke en verificeret kørselsdato.

### Slide 23 — Test en hypotese med samme skabelon · 1½ min.

**Central pointe:** Systematisk bias kræver sammenlignelig dokumentation, ikke et udvalgt enkeltstående svar.

**Talernoter:** Hypotesen kan være, at professorer oftere får mandlige pronominer, mens assistenter eller frisører oftere får kvindelige. Det er endnu ikke et resultat. Brug samme fulde promptskabelon i nye samtaler og registrér køn, handlekraft og egenskaber. WinoBias-forskningen fra 2018 fandt stereotypefordele i tre daværende systemers kobling af pronominer til professioner. Det er dokumenteret bias, men i en anden opgave end fri historieskrivning og ikke i alle nutidige chatbots. Vis en tom observationsskabelon, indtil et forsøg er gennemført.

**Overgang:** »Den samme omhu er nødvendig, når vi undersøger politiske perspektiver.«

**Kilder og forbehold:** [K12]. Den lokale professionshypotese er ikke testet her. En lille undersøgelse kan pege på et mønster uden at fastslå en universel modelegenskab.

### Slide 24 — Politiske svar repræsenterer ikke alle lige godt · 2 min.

**Central pointe:** Studier viser ujævn overensstemmelse mellem bestemte modellers svar og forskellige befolkningsgruppers holdninger.

**Talernoter:** OpinionQA sammenlignede modelsvar med amerikanske spørgeskemasvar. I undersøgelsen lå visse eftertrænede OpenAI-modeller nærmere liberale, veluddannede og velstående grupper; mønstret var ikke ens på tværs af emner og modeller. »Liberal« er her en amerikansk kategori, ikke et dansk partimærkat. GlobalOpinionQA undersøgte én eftertrænet model på tværs af lande og fandt større lighed med nogle befolkningers svar end andres. Oversættelse løste ikke nødvendigvis forskellen. Det er mål for repræsentation i bestemte opgaver, ikke en fuldstændig politisk personlighedstest eller en sandhedsskala.

**Overgang:** »Spørgeskemaer fanger heller ikke alle kritiske traditioner eller lokale erfaringer.«

**Kilder og forbehold:** [K13, K14]. Studierne er fra 2023, K14 i revideret 2024-version. De dokumenterer ikke alle modeller i 2026. De fastslår heller ikke, at en bestemt træningskilde alene skabte et bestemt output.

### Slide 25 — Undersøg også de perspektiver, der mangler · 2½ min.

**Central pointe:** Et svar kan virke neutralt, fordi nogle spørgsmål og stemmer slet ikke kommer med.

**Talernoter:** Edward Saids *Orientalism* undersøger forholdet mellem magt og vestlige fremstillinger af »Orienten«. Michael Parentis mediekritik spørger blandt andet, hvilke interesser og officielle antagelser nyhedsfremstillinger tager for givet. Vi bruger deres værker som navngivne kritiske perspektiver, ikke som dokumentation for konkrete LLM-resultater.

Som øvelse: Bed om en analyse af en tekst om en protest mod en udenlandsk militærbase. Undersøg, om teksten rummer statens begrundelser, lokale beboeres erfaringer og antiimperialistisk kritik af magt og afhængighed. Tilfør derefter et konkret uddrag fra en berørt græsrodsbevægelse og se, hvad der ændrer sig. En bevægelse taler ikke automatisk for alle lokale. Vi har ikke belæg for generelt at hævde, at Said, Parenti eller antiimperialisme er fraværende i træningsdata. Spørgsmålet er undersøgbart: Hvilke perspektiver kommer frem i det afgrænsede svar, og hvordan gengives de?

**Overgang:** »Nogle vurderinger handler også om konkrete retsregler, som vi skal læse i relevante kilder.«

**Kilder og forbehold:** [K15, K16]. Undervisningscasen er konstrueret. Manglende omtale i ét kort svar beviser ikke underrepræsentation i træningsdata. Kritiske perspektiver skal også efterprøves, og faktuel dokumentation vejer mere end blot at fordele taletid ligeligt.

### Slide 26 — Folkeret kræver konkrete kilder · 1½ min.

**Central pointe:** Retlig vurdering skal forankres i relevante regler og dokumenterede forhold, ikke blot modellens ordvalg.

**Talernoter:** Hvis vi undersøger en fremstilling af en væbnet konflikt, er folkeret ikke bare endnu en aktørs præference. Den humanitære folkeret indeholder blandt andet regler om at skelne mellem civile og militære mål, proportionalitet og forholdsregler ved angreb. ICRC giver adgang til forklaringer og regelgrundlag. Spørg, om svaret identificerer den relevante regel og de nødvendige oplysninger. Regler om magtanvendelse og regler for krigsførelse er forskellige spørgsmål. Et kort hypotetisk scenarie giver sjældent grundlag for en endelig juridisk dom.

**Overgang:** »Nu kan vi skelne mellem tre steder, hvor en skæv fremstilling kan undersøges.«

**Kilder og forbehold:** [K17]. Ingen konkret hændelse eller parts lovlighed afgøres her. Folkeretslige kilder kontrolleres efter retskildetype, anvendelighed og dato; ICRC er ikke en domstol.

### Slide 27 — Skeln mellem data, svar og søgekilder · 1 min.

**Central pointe:** En observeret skævhed afslører ikke automatisk, hvor i systemet den opstod.

**Talernoter:** Træningsdata kan være skævt sammensat. Svaret er den konkrete adfærd, vi kan læse, formet af parametre, eftertræning og instruktioner. Søgekilder er et separat udvalg hentet under brug. En manglende græsrodsstemme kan derfor skyldes flere forhold, som svaret alene ikke skiller ad. Notér observationen, opstillede forklaringer og det, der stadig er ukendt. Bed ikke modellen om at gætte sin egen dataproveniens og behandl svaret som dokumentation.

**Overgang:** »Den sondring kan omsættes til én enkel vane i undervisningen.«

**Kilder og forbehold:** [K8–K10]. Dette er en didaktisk sondring, ikke en fuldstændig årsagsmodel. Åbne vægte alene afslører heller ikke svarets datakilde.

### Slide 28 — Brug svaret som begyndelsen på en undersøgelse · 1 min.

**Central pointe:** Faglig brug kræver, at elever forbinder påstande med belæg og vurderer perspektiver.

**Talernoter:** Bed hver deltager vælge én undervisningsopgave, hvor spørgsmålene kan bruges. En elev kan aflevere et kort modelsvar med én kontrolleret påstand, én ubelagt tilføjelse eller usikkerhed og én begrundet perspektivundersøgelse. Målet er ikke at erklære hele svaret godt eller dårligt. Vi kan nu forklare både, hvordan en sprogmodel lærer mønstre, og hvorfor svaret stadig kræver faglig vurdering. Åbn derefter for spørgsmål.

**Overgang:** »Hvilken af jeres egne opgaver vil I prøve det på?«

**Kilder og forbehold:** Didaktisk forslag på grundlag af [K8–K17], ikke en dokumenteret effektundersøgelse af denne undervisningsaktivitet.

## Kilderegister

K-numrene er arbejdsreferencer til storyboardet. Links fører til original forskning, en primær tekst eller den ansvarlige institution. De er kontrolleret i forbindelse med denne leverance. Forskningsresultater fra ældre systemer bruges som dokumenterede eksempler, ikke som aktuelle produktmålinger.

**K1 — Tidlig lærende model.** Rosenblatt, F. (1958). *The perceptron: A probabilistic model for information storage and organization in the brain*. Psychological Review, 65(6), 386–408. [Originalartikel, PDF](https://homepages.math.uic.edu/~lreyzin/papers/rosenblatt58.pdf). Understøtter slide 2; ikke de biografiske scener.

**K2 — Maskinlæring og dybe netværk.** LeCun, Y., Bengio, Y., & Hinton, G. (2015). *Deep learning*. Nature, 521, 436–444. [Artikel og resumé](https://www.nature.com/articles/nature14539). Baggrund for lærte repræsentationer og flere beregningslag; slide 1, 3–5, 7–8. Mail-eksemplet og elevanalogien er egne didaktiske konstruktioner.

**K3 — Backpropagation og repræsentationer.** Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). *Learning representations by back-propagating errors*. Nature, 323, 533–536. [Original publikation](https://www.nature.com/articles/323533a0). Slide 4–6. Forfattere, år og hovedmekanisme er kontrolleret; ingen påstand om eneopfindelse.

**K4 — Skala og konkret billedgenkendelse.** Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). *ImageNet classification with deep convolutional neural networks*. [Originalartikel, PDF](https://papers.nips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf). Se især resumé og tabel 2. Slide 7–8 og podcastkontrollen.

**K5 — Stor autoregressiv sprogmodel og brug af kontekst.** Brown, T. B., et al. (2020). *Language models are few-shot learners*. [Forskningsartikel](https://arxiv.org/abs/2005.14165). GPT-3 undersøges uden parameteropdateringer under de beskrevne tekstbaserede opgaver. Baggrund for slide 9–13, 15 og 18; ikke dokumentation for de konstruerede danske sætningers outputs eller tokenisering.

**K6 — Transformer og attention.** Vaswani, A., et al. (2017). *Attention is all you need*. [Originalartikel med fuld tekst](https://arxiv.org/html/1706.03762v7). Se afsnit 3.2 om vægtet kombination og afsnit 3.1 om maskering. Slide 11, 13–15. Artiklen introducerede en arkitektur til blandt andet oversættelse; den er ikke i sig selv dokumentation for samtlige moderne LLM-arkitekturer.

**K7 — Eftertræning med demonstrationer og præferencer.** Ouyang, L., et al. (2022). *Training language models to follow instructions with human feedback*. [Forskningsartikel](https://arxiv.org/abs/2203.02155). Dokumenterer superviseret eftertræning med menneskeskrevne demonstrationer efterfulgt af præferencebaseret træning; slide 16–17. Supplerende: Bai, Y., et al. (2022). *Training a helpful and harmless assistant with reinforcement learning from human feedback*. [Forskningsartikel](https://arxiv.org/abs/2204.05862). Dokumenterer præferencemodellering og RLHF; slide 17. Konkrete tilgange, ikke et universelt produktforløb.

**K8 — Hentede kilder som ekstra grundlag.** Lewis, P., et al. (2020). *Retrieval-augmented generation for knowledge-intensive NLP tasks*. [Forskningsartikel](https://arxiv.org/abs/2005.11401). Slide 19 og 27. Skelner mellem parametrisk og hentet information. Nutidige søgeapps behøver ikke implementere præcis artiklens system.

**K9 — Flere kilder til bias.** Schwartz, R., et al. (2022). *Towards a standard for identifying and managing bias in artificial intelligence*. NIST SP 1270. [Rapport, PDF](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf). Skelner mellem statistiske, menneskelige og systemiske forhold. Slide 17, 21 og 27; ikke en modeltest af vores cases.

**K10 — Dokumenteret skævhed ved datafiltrering.** Dodge, J., et al. (2021). *Documenting large webtext corpora: A case study on the Colossal Clean Crawled Corpus*. EMNLP. [Artikel og resumé](https://aclanthology.org/2021.emnlp-main.98/). Slide 9 og 21. Den undersøgte ordlistefiltrering fjernede uforholdsmæssigt tekst fra og om minoriteter. Resultatet overføres ikke automatisk til andre datasæt.

**K11 — Fejlagtige svar og menneskelige misforståelser.** Lin, S., Hilton, J., & Evans, O. (2022). *TruthfulQA: Measuring how models mimic human falsehoods*. ACL. [Artikel og resumé](https://aclanthology.org/2022.acl-long.229/). Slide 9 og 20. Benchmarken omfattede daværende GPT-3, GPT-Neo/J, GPT-2 og en T5-baseret model. Den er ikke en aktuel fejlprocent for LLM’er som helhed.

**K12 — Dokumenteret kønsbias i en afgrænset sprogopgave.** Zhao, J., Wang, T., Yatskar, M., Ordonez, V., & Chang, K.-W. (2018). *Gender bias in coreference resolution: Evaluation and debiasing methods*. NAACL. [Artikel og resumé](https://aclanthology.org/N18-2003/). Slide 23. Tre daværende systemer præsterede bedre på stereotype end på kontrasterende køns-/professionskoblinger. Opgaven var referentbestemmelse, ikke fri historieskrivning.

**K13 — Politiske og demografiske holdningsmønstre.** Santurkar, S., et al. (2023). *Whose opinions do language models reflect?* ICML. [Publikation](https://proceedings.mlr.press/v202/santurkar23a.html), [fuld artikel](https://proceedings.mlr.press/v202/santurkar23a/santurkar23a.pdf). Se afsnit 4–5 og begrænsningerne. Slide 24. Amerikansk spørgeskemagrundlag og konkrete ældre modeller; forskellige grupper og emner gav forskellige mønstre.

**K14 — Global repræsentation.** Durmus, E., et al. (2023; revideret 2024). *Towards measuring the representation of subjective global opinions in language models*. [Version 2](https://arxiv.org/abs/2306.16388v2). Slide 24. Undersøger én model trænet med Constitutional AI. Standardprompt, landeprompt og oversættelse er forskellige betingelser. Målingen gælder holdningslighed, ikke sandhed eller tilstedeværelsen af bestemte politiske bøger i træningsdata.

**K15 — Magt og repræsentation.** Said, E. W. (1978; udgave med forord 2003). *Orientalism*. [Primær tekst, PDF](https://www.eaford.org/site/assets/files/1631/said_edward1977_orientalism.pdf). Se indledningen, især den trykte side 3. Filnavnet anfører 1977, men bogens kolofon angiver første udgivelse i 1978. Slide 25. En kritisk analyse af repræsentation, ikke empirisk LLM-forskning.

**K16 — Medier, interesser og udeladelser.** Parenti, M. (uden dato på den benyttede arkivside). *Monopoly media manipulation*. [Forfatterens tekst i Michael Parenti Political Archive](https://www.michael-parenti.org/article-monopoly-media-manipulation). Se især afsnittene om antagelser, videreformidling af officielle synspunkter og udeladelse af konfliktens indhold. Supplerende primær tekst: [Imperialism 101](https://www.michael-parenti.org/article-imperialism-101). Slide 25. Bruges til at formulere undersøgelsesspørgsmål; teksternes konkrete historiske påstande overtages ikke ukontrolleret, og de dokumenterer ikke nutidige LLM-resultater.

**K17 — Humanitær folkeret og civilbeskyttelse.** International Committee of the Red Cross. *Conduct of hostilities: Challenges in today’s armed conflicts*. [Institutionel forklaring](https://www.icrc.org/en/document/conduct-hostilities-challenges-todays-armed-conflicts). Slide 26. Understøtter omtalen af skelnen, proportionalitet og forholdsregler; er ikke en afgørelse af en konkret sag.

**L1–L2 — Lokale observationer.** [Professor](references/professor.png) og [assistent](references/assistent.png). Slide 22. De synlige uddrag er visuelt kontrolleret. Udbyder, modelversion, præcis kørselsdato og fuld forhistorie er ikke verificeret. Der er ikke udført nye modeltests i denne leverance.


## Åbningsmotiv til webdokumentaren

Genereret 13. september 2026 med det indbyggede imagegen-værktøj. Ingen CLI eller API-nøgle blev brugt, og et bestemt modelnavn blev ikke valgt. Én generation, ingen efterredigering.

Projektfil: [learning-apparatus.png](../public/images/learning-apparatus.png).

Brug: fuldskærmsmotiv i åbningen med scrollstyret beskæring og HTML-tekst ovenpå. Konceptuel illustration, ikke en fysisk rekonstruktion eller et fagligt arkitekturdiagram.

### Den anvendte prompt

Use case: stylized-concept. Asset type: full-bleed cinematic opening artwork for a Danish educational interactive web documentary about how a machine learns from examples. Create one exquisite high-end 3D editorial still, widescreen 16:9. A tangible abstract learning apparatus occupies the RIGHT TWO THIRDS of the frame: dozens of thin translucent cobalt-blue glass cards and a few warm ivory paper cards suspended in exact parallel layers, flowing diagonally into a dense architectural assembly of precision-machined dark graphite frames, fine copper connections and luminous amber edge details. One warm ivory card entering from the foreground is brightly lit, evoking one example entering a complex calculation. Strong beautiful architectural composition, diagonal perspective, macro material detail, soft volumetric side lighting and deep shadows, subtle grain, luxurious scientific museum installation photographed on a medium format camera. Very dark midnight indigo background #101726; the LEFT THIRD is almost empty shadow with generous negative space for large white website title added in code. Palette restrained cobalt #3964E8, graphite, ivory #F5F2EA and amber #F2AE65. Impressive and mysterious but physically believable as a sculptural educational metaphor. No text, no letters, no digits, no logos, no watermark, no robot, no face, no brain, no human, no circuitboard stock-photo aesthetic, no purple gradient. This is conceptual art, not a real historical machine or a scientific diagram.
