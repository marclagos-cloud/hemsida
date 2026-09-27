# Hemsidan

Gemensamt hobbyprojekt: två personer bygger sidan från varsin dator, båda med Claude Code. Den här
filen läses av bådas Claude. Skriv beslut och konventioner i repot så jobbar båda likadant.

Läs också, innan du rör respektive del:
- `TON.md`: ton, ordval, struktur och copy, KI-reglerna. Före all text.
- `DESIGN.md`: designsystem, bilder, logga, delningsbild. Före all styling.

## Vad sidan är

Hemsida för **Ingrid Shragges verksamhet**: individuellt beteendestöd (ABA) för autistiska barn i
Stockholmsområdet, samt föräldracoaching. Varumärket är hennes eget namn. **All text på sidan är
på engelska.** Sidan är neurodiversitets-bejakande, se `TON.md`.

**Fakta om Ingrid** (bekräftade av henne, hitta inte på mer): BCBA. Master's in Education, spec.
ABA, Vanderbilt University (där även forskningsassistent i ABA-labb och multisensorisk
neuroforskning med autistiska personer). Doktorand i medicinsk vetenskap vid KIND (Center of
Neurodevelopmental Disorders), Karolinska Institutet, autismforskning. 2 år ABA-kliniker och
ABA-skolor, arbetat i hem, skola och klinik. 4 år autismforskning (små och äldre barn). Flytande
engelska och svenska. Pris 1 250 kr/timme (står inte på sajten). Kontakt: ingridshragge@gmail.com,
+46 70 406 30 22 (samma som i sajtens kontaktsektion).

## Läge 2026-09-04

Live på GitHub Pages. Inget innehåll är platshållare sedan 8 juli 2026. Sajten jagar inte kunder
än: ingen SEO, inga strukturerade data, ingen analytics, ingen domän. Det spåret aktiveras när
Ingrid säger till (Marcs beslut 8 juli 2026). Väntar på Ingrid: riktiga foton, review av
`what-is-aba.html`, veto på groddmärket, avstämning av bisysslan med KI. Inget kodarbete sedan juli.

**Designutforskning 27 september 2026 (inget byggt på sajten än).** Ingrid gillar en varm
70-talsbild (sol över vågiga ränder i persika, orange, rosa, gult, oliv och grönt) och fyra
terapisajter som referens: wildberry.studio/website-design-therapists, sv.beataengellau.com,
oakandstonetherapy.com, shonaghwrightphillips.co.uk. Rityta med tre förslag på hero och logga:
https://claude.ai/artifact/SD6gVWQunYvR9fME8H6YRE (privat, Marcs konto).
- A Soluppgång: persikobotten, sol och vågränder, typsnittet Fraunces, logga sol över tre vågor.
  **Favoriten (Marc 27/9: "vi gillar den").**
- B Målningen: målad solnedgång i helbild, ljust textkort ovanpå (Shonagh-stil), Playfair.
- C Tavlan: text vänster med markerat kursivt ord (Wild Berry), inramad målning höger med
  förskjutet salviablock (Oak and Stone), band med arbetssätt längst ner.
- Rekommenderad logga (B och C): INGRID SHRAGGE i glesa versaler, solen och vågorna som märke,
  "CHILD & FAMILY SUPPORT" under.
- Inget beslut taget. Alla tre byter palett (A även typsnitt), då ska `DESIGN.md` skrivas om
  först. Groddmärket gäller tills vidare.

## Mobilen först

Majoriteten av trafiken är mobil. Granska varje ändring i 390 px-vy innan den pushas.
Mobilanpassningarna ligger samlade i en media query (`max-width: 44rem`) längst ned i `css/style.css`.

## Teknik

- Ren HTML, CSS och JS. Inget byggsteg, inga ramverk, ingen npm. Öppna `index.html` i webbläsaren.
- **Typsnitten är självhostade** (8 juli 2026, GDPR och prestanda): woff2-filer i `fonts/`,
  @font-face överst i style.css, preload-taggar i html-huvudena. Länka aldrig tillbaka Google Fonts.
  Nya vikter: ladda ner woff2 och lägg i `fonts/` (Public Sans-filen är variabel, täcker 300-600).
- **Cache-busting:** css och js länkas med versionsparameter (`css/style.css?v=2`). GitHub Pages
  cachar i 10 min. Ändrar du `css/style.css` eller `js/main.js`: bumpa `?v=` i alla html-filer,
  annars kan besökare få ny HTML mot gammal CSS.
- **CSS-ordning:** mobilanpassningarna ligger i en media query längst ned i `css/style.css` och ska
  förbli sist. Nya sektioner läggs före den, annars vinner desktop-reglerna på mobilen (hände
  7 juli 2026: stegen fick desktop-padding och 20rem-kort som stack ut).
- `404.html` är fristående med absoluta `/hemsida/`-sökvägar, byt vid domänbyte.
- Tillgänglighet och kontrast: se `DESIGN.md`.

## Struktur

- `index.html`: startsidan. Nya sidor läggs som egna html-filer i roten.
- `what-is-aba.html`: "What is ABA?", FAQ-guide för föräldrar som inte vet vad ABA är
  (kompisfeedback). Nås via pillerknappen i How I work.
- `css/style.css`: all stil i en fil. `js/main.js`: javascript, bara om det behövs.
- `_og-card.html`: mall för delningsbilden, ingår i repot men länkas inte från sajten.
- `_underlag/`: KI:s riktlinjer, gitignorerat.
- `v1/` togs bort 2 september 2026, finns i git-historiken.

## Arbetssätt (vi är två)

- Kör alltid `git pull` innan du börjar jobba.
- Committa och pusha när något är klart, med korta meddelanden på svenska.
- Jobbar vi samtidigt: ta olika filer eller sidor, eller använd varsin branch.
- Fråga innan du gör om något den andra nyss byggt.
- Inga tankstreck, inte i copy och inte i docs (se `TON.md`).
