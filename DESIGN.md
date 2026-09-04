# Design och bilder

Läs före all styling och alla bildbyten. Färger och typsnitt styrs av CSS-variablerna längst upp i
`css/style.css`.

## Designsystem

- Rubriker: Playfair Display 400, aldrig fet. Gärna stor skala och kursiv betoning på enstaka ord.
- Brödtext och UI: Public Sans 300.
- Palett (egen, inte Beata-pastellerna, inget brunt): bakgrund `#fbfaf7`, ink-text `#21353c`, djup
  teal `#274e53`, ljus teal `#d8e6e3`, guld `#f0e3c0`, himmelsblå `#dce4f0`.
- `--dov` är medvetet mörkad till `#4d5f66` så den klarar WCAG AA (4,5:1) mot teal och himmel.
  Ljusa inte upp den utan att räkna kontrast först. Sajten ligger på Lighthouse 100 (a11y).
- Knappar: tunna outline-piller (1 px, radius 300 px), fylls teal vid hover.
- Layout: asymmetri (stor rubrik vänster, färgblock höger), fullbreda färgsektioner, stora
  fristående citat.
- Motion: fade och lyft vid scroll (0,6 s ease, IntersectionObserver i `js/main.js`), respektera
  prefers-reduced-motion.
- Lärdom från det skrotade försöket 6 juli 2026: inga mörka overlays på foton, inga platta
  fullbreddsband. Rundade former och ljus bakgrund.

## Bilder (läget 8 juli 2026)

- **Heron är typografisk** (Marcs beslut 8 juli 2026): ingen bild, stor rubrik med guldsvep under
  kursiven (`.svep`, inbäddad SVG i css). Bildbandet efter How I work är slopat (`.aba-banner` fick
  topp-luft i stället). Skäl: stockbilder fastnade på 6-7 av 10, riktiga foton eller ren typografi
  är ribban. `hero-painting.jpg` och `rock-painting.jpg` är raderade (finns i git-historiken).
- Detta är en "for now"-lösning. **Nästa steg är riktiga foton på Ingrid** (lek med barn till heron,
  porträtt till About me). Fotobrief på Marcs skrivbord (`fotobrief-ingrid.txt`).
- Kvar i bruk: handavtrycken `img/handprints.jpg` överst i kontaktsektionen (vit bakgrund smälter in
  i guldet via `mix-blend-mode: multiply`).
- **Bildprincip (7 juli 2026):** stockfoton på barn läses som Ingrids klienter, mångfald är bra och
  önskvärd där. En person som kan läsas som vuxen läses som Ingrid själv och måste likna henne
  (vit). Kritbilden byttes av det skälet (vuxenarm i bild).
- Nya bilder: kandidater (Unsplash, ingen attribution krävs) i `~/Desktop/stock bilder kids/`.
  Komprimera med sips till 1400-1800 px jpeg ~75, inga synliga ansikten, stäm av med Marc före
  push. Croppen i bågen styrs per bild med en `object-position`-klass.
- `height: auto` krävs på img-klasserna, annars vinner höjd-attributet över CSS `aspect-ratio`.

## Logga: groddmärket (beslut Marc 8 juli 2026)

En liten grodd (stjälk och två blad i ljus teal och guld) står bredvid namnet i headern.
Symboliken: thrive, något som växer åt sitt eget håll. Pusselbit, hjärta och hjärna är medvetet
bortvalda (klyschor, pusselbiten är avvisad av neurodiversitetsrörelsen). Tekniskt: SVG:n ligger
inline i `.logo`-länken i båda html-filerna (klasserna `.logo` och `.logo-marke` i css).
Favicon och apple-touch-icon är grodd på mörk platta (`img/favicon.svg` är källan, PNG-fallbackarna
genererade från samma SVG). **Ingrid har inte sett märket ännu, hennes veto gäller.**

## Delningsbild

OG-bilden (`img/og-image.jpg`) är typografisk med groddmärket överst och genereras från
`_og-card.html` (rendera i 1200x630, skärmdumpa, sips till jpeg ~75). Vid domänbyte: uppdatera de
absoluta `og:url` och `og:image` i `index.html` och `/hemsida/`-sökvägarna i `404.html`.
