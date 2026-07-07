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

**Bilder** (på plats sedan 7 juli, Marc valde ur tre varianter):
- Hero: `img/hero-beads.jpg` (vattenpärlor) i en **bågform** (`.hero-bild`,
  radie 300px upptill — samma formspråk som pillerknapparna), till höger om
  rubriken på desktop, under texten på mobil
- Bildband `img/reading.jpg` efter How I work, handavtrycken
  `img/handprints.jpg` överst i kontaktsektionen (vit bakgrund smälter in
  i guldet via `mix-blend-mode: multiply`)
- **Saknas: foto på Ingrid** — kompisen efterlyste det, Marc har inga bra
  bilder just nu. Läggs in när det finns (trolig plats: About me)
- Lärdom från skrotade försöket 6 juli: inga mörka overlays på foton, inga
  platta fullbreddsband — rundade former och ljus bakgrund
- OBS: `height: auto` krävs på img-klasserna, annars vinner höjd-attributet
  över CSS `aspect-ratio`
- Fler kandidater (Unsplash, ingen attribution krävs) ligger i
  `~/Desktop/stock bilder kids/`. Regler för nya bilder: komprimera med sips
  till 1400–1800 px jpeg ~75, inga synliga ansikten, stäm av med Marc innan
  push. Croppen i bågen styrs per bild med en `object-position`-klass.

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

## Teknik

- Ren HTML/CSS/JS — **inget byggsteg, inga ramverk, ingen npm**. Öppna
  `index.html` i webbläsaren för att se sidan.
- Färger och typsnitt styrs av CSS-variablerna längst upp i `css/style.css`.
- All text på sidan är på svenska.

## Struktur

- `index.html` — startsidan. Nya sidor läggs som egna html-filer i roten.
- `css/style.css` — all stil samlad i en fil.
- `js/main.js` — javascript, bara om det behövs.

## Arbetssätt (viktigt — vi är två!)

- Kör alltid `git pull` innan du börjar jobba.
- Commita och pusha när något är klart, med korta meddelanden på svenska.
- Jobbar vi samtidigt: ta olika filer/sidor, eller använd varsin branch.
- Fråga innan du gör om något den andra nyss byggt.
