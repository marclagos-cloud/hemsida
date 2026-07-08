# Hemsidan

Gemensamt hobbyprojekt: vi är två personer som bygger den här sidan från varsin
dator, båda med hjälp av Claude Code. Den här filen läses av bådas Claude —
skriv beslut och konventioner här så jobbar båda likadant.

## Vad sidan är

Hemsida för **Ingrid Shragges verksamhet**: individuellt beteendestöd
(ABA) för autistiska barn i Stockholmsområdet, samt föräldracoaching.
Varumärket är hennes eget namn. **All text på sidan är på engelska.**

**Fakta om Ingrid** (bekräftade av henne — hitta inte på mer):
BCBA. Master's in Education, spec. ABA, Vanderbilt University (där även
forskningsassistent i ABA-labb + multisensorisk neuroforskning med
autistiska personer). Doktorand i medicinsk vetenskap vid KIND (Center of
Neurodevelopmental Disorders), Karolinska Institutet, autismforskning.
2 år ABA-kliniker, ABA-skolor; arbetat i hem/skola/klinik. 4 år
autismforskning (små barn och äldre barn). Flytande engelska & svenska.
Pris: 1 250 kr/timme. Mejl: ingridshragge@gmail.com.
Telefon: +46 70 406 30 22.

**Ton — viktigast av allt: neurodiversitets-bejakande.** ABA har rykte om
sig att vara hårt; sidan ska visa motsatsen och får aldrig låta som att
barnet är ett problem som ska fixas. Regler:
- Skriv "autistic children" (identitet-först), aldrig "children suffering
  from autism" e.d.
- Aldrig ord som fix, normalize, treat, problem behaviors, compliance
- Målet formuleras som well-being, kommunikation, autonomi, lek, bra dagar
  — aldrig att göra barnet "mindre autistiskt" eller lära det maskera
- Ingrids hållning: "alongside the child", assent-based, följer barnets
  initiativ; ABA-kritiken bemöts öppet men kort, inuti "How I work" —
  **inte** som egen sektion som leder med kritiken (kompis-feedback 7 juli)
- I övrigt: varmt, lugnt, konkret. Ingen säljighet, inga överdrivna löften
- **Inga tankstreck (—) i copyn** — Marc tycker det ser AI-genererat ut
  (7 juli, hela sidan rensades). Skriv om med komma, kolon, punkt eller
  parentes i stället. Gäller även rubriker

**Mobilen först:** majoriteten av trafiken är mobil. Granska varje ändring
i 390px-vy innan den pushas — mobilanpassningarna ligger samlade i en
media query (`max-width: 44rem`) längst ned i `css/style.css`.

**Struktur & copy (efter kompis-feedback, 7 juli — Marc godkände):**
- **Få sektioner med substans** hellre än många tunna: Hero → About me →
  How I work (inkl. stegen) → förtroendeband → kontakt. Besökaren är ingen
  random — hen vill förstå hur Ingrid jobbar och vem hon är som person
- **Inte kommersiellt:** inga priser på sidan, fokus på introsamtalet.
  Undvik säljfraser ("Free, no strings attached", "No pressure" osv) —
  det räcker att nämna en gång att samtalet är gratis
- **Inga självcitat** — sidan är portfolio/CV-lik, Ingrid kan inte quota
  Ingrid
- ABA ska förklaras enkelt (vad det är, hur det ser ut i praktiken), inte
  bara försvaras

**Bilder** (läget 8 juli):
- **Heron är typografisk** (Marcs beslut 8/7): ingen bild, stor rubrik
  med guldsvep under kursiven (`.svep`, inbäddad SVG i css). Bildbandet
  efter How I work är slopat (`.aba-banner` fick topp-luft i stället).
  Skäl: stockbilder fastnade på 6-7 av 10; riktiga foton eller ren
  typografi är ribban. `hero-painting.jpg` och `rock-painting.jpg` är
  raderade (`v1/` har egna kopior, orörda)
- Detta är en "for now"-lösning: **nästa steg är riktiga foton på Ingrid**
  (lek med barn till heron + porträtt till About me), fotobrief på Marcs
  skrivbord (`fotobrief-ingrid.txt`)
- Kvar i bruk: handavtrycken `img/handprints.jpg` överst i
  kontaktsektionen (vit bakgrund smälter in i guldet via
  `mix-blend-mode: multiply`)
- **Bildprincip (7/7):** stockfoton på BARN läses som Ingrids klienter,
  mångfald är bra och önskvärd där. Men en person som kan läsas som VUXEN
  läses som Ingrid själv och måste likna henne (vit). Kritbilden byttes
  av det skälet (vuxenarm i bild)
- Favicon (`img/favicon.svg` + PNG-fallbacks) finns. OG-bilden
  (`img/og-image.jpg`) är typografisk i samma stil som heron och
  genereras från `_og-card.html` (rendera i 1200x630, skärmdumpa,
  sips till jpeg ~75). **Vid domänbyte:** uppdatera de absoluta
  `og:url`/`og:image`-URL:erna i `index.html`
- Lärdom från skrotade försöket 6 juli: inga mörka overlays på foton, inga
  platta fullbreddsband — rundade former och ljus bakgrund
- OBS: `height: auto` krävs på img-klasserna, annars vinner höjd-attributet
  över CSS `aspect-ratio`
- Fler kandidater (Unsplash, ingen attribution krävs) ligger i
  `~/Desktop/stock bilder kids/`. Regler för nya bilder: komprimera med sips
  till 1400–1800 px jpeg ~75, inga synliga ansikten, stäm av med Marc innan
  push. Croppen i bågen styrs per bild med en `object-position`-klass.

**Logga (beslut Marc 8/7): groddmärket.** En liten grodd (stjälk + två
blad i ljus teal och guld) står bredvid namnet i headern. Symboliken:
thrive, något som växer åt sitt eget håll. Puzzelbit/hjärta/hjärna är
medvetet bortvalda som symboler (klyschor; pusselbiten är avvisad av
neurodiversitetsrörelsen). Tekniskt: SVG:n ligger inline i `.logo`-länken
i båda html-filerna (klasserna `.logo`/`.logo-marke` i css). Favicon +
apple-touch-icon är omgjorda till grodd på mörk platta (`img/favicon.svg`
är källan; PNG-fallbackarna genererade från samma SVG). Ingrid har inte
sett märket ännu, hennes veto gäller.

**Designsystem:**
- Rubriker: Playfair Display 400 via Google Fonts — **aldrig fet**, gärna
  stor skala och kursiv betoning på enstaka ord
- Brödtext/UI: Public Sans 300
- Palett (egen — INTE Beata-pastellerna, inget brunt): bakgrund `#fbfaf7`,
  ink-text `#21353c`, djup teal `#274e53`, ljus teal `#d8e6e3`,
  guld `#f0e3c0`, himmelsblå `#dce4f0`
- Knappar: tunna outline-piller (1px, radius 300px), fylls teal vid hover
- Layout: asymmetri (stor rubrik vänster + färgblock höger), fullbreda
  färgsektioner, stora fristående citat
- Motion: fade/lyft vid scroll (0.6s ease, IntersectionObserver i main.js),
  respektera prefers-reduced-motion

Text markerad med `<mark class="platshallare">` är platshållare som ska
bytas mot riktigt innehåll. Just nu finns inga kvar — allt innehåll är
ifyllt med riktiga uppgifter.

## KI och bisyssloreglerna (viktigt för all copy som nämner KI)

Ingrids verksamhet är en **bisyssla** i förhållande till hennes
doktorandanställning vid KI. KI:s "Riktlinjer om bisysslor"
(Dnr 1-918/2020, https://medarbetare.ki.se/media/88885/download — lokal
kopia i `_underlag/`, medvetet utanför git eftersom repot är publikt)
säger bl.a.:

- Bisysslan ska hållas **klart åtskild** från KI:s verksamhet
- Man får **inte ge intryck av att KI medverkar i, auktoriserar eller
  garanterar** verksamheten
- **KI:s varumärke/kännetecken får inte användas i bisysslan** utan
  särskilt beslut; marknadsföring av bisysslan via KI är aldrig tillåten
- Doktoranders studie-/anställningstid får inte användas i bisysslan
- Risk för "förtroendeskada" om allmänheten kan uppfatta att utövaren
  får en särställning genom KI-kopplingen

**Praxis för sajten tills Ingrid stämt av med prefekt/HR:**
- Neutral, faktisk bio-mening i About me (att hon ÄR doktorand vid KIND/KI)
  bedöms som CV-fakta — okej att ha kvar, men inte mer än så
- Använd INTE KI:s namn som säljargument/kännetecken: inte i pelare,
  rubriker, delningsbilder, taglines e.d.
- Antyd aldrig att KI står bakom, rekommenderar eller kvalitetssäkrar
  verksamheten
- Ingrid bör anmäla/stämma av bisysslan med sin närmaste chef/prefekt
  (riktlinjerna: samråd vid osäkerhet) — status okänd, fråga henne

## Teknik

- Ren HTML/CSS/JS — **inget byggsteg, inga ramverk, ingen npm**. Öppna
  `index.html` i webbläsaren för att se sidan.
- **Cache-busting:** css/js länkas med versionsparameter
  (`css/style.css?v=2`). GitHub Pages cachar filer i 10 min, så ändrar du
  css/style.css eller js/main.js: **bumpa `?v=`-numret i ALLA html-filer**,
  annars kan besökare få ny HTML mot gammal CSS (trasig layout).
- Färger och typsnitt styrs av CSS-variablerna längst upp i `css/style.css`.
- **CSS-ordning:** mobilanpassningarna ligger i EN media query LÄNGST NED
  i `css/style.css`, och den ska förbli sist i filen. Nya sektioner läggs
  FÖRE den. Annars vinner desktop-reglerna på mobilen eftersom senare
  regler slår tidigare vid samma specificitet (hände 7/7: stegen fick
  desktop-padding och 20rem-kort som stack ut ur containern).
- All text på sidan är på engelska (se tonreglerna ovan).

## Struktur

- `index.html` — startsidan. Nya sidor läggs som egna html-filer i roten.
- `v1/` — **frusen ögonblicksbild av sajten 7 juli 2026** (Marc delade den
  med sin handledare för feedback). Rör den inte; tas bort när feedbacken
  är inhämtad. Har `noindex` så Google inte ser dubblettinnehåll.
- `what-is-aba.html` — "What is ABA?", FAQ-guide för föräldrar som inte
  vet vad ABA är (kompis-feedback). Nås via pillerknappen i How I work.
  OBS: gör konkreta ställningstaganden i Ingrids namn (t.ex. "I don't
  train eye contact") — Ingrid bör läsa igenom, väntar på hennes review.
- `css/style.css` — all stil samlad i en fil.
- `js/main.js` — javascript, bara om det behövs.
- `_og-card.html` — mall för delningsbilden `img/og-image.jpg` (ingår i
  repot men länkas inte från sajten). Se kommentaren i filen för hur
  bilden genereras om.

## Arbetssätt (viktigt — vi är två!)

- Kör alltid `git pull` innan du börjar jobba.
- Commita och pusha när något är klart, med korta meddelanden på svenska.
- Jobbar vi samtidigt: ta olika filer/sidor, eller använd varsin branch.
- Fråga innan du gör om något den andra nyss byggt.
