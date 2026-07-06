# Hemsidan

Gemensamt hobbyprojekt: vi är två personer som bygger den här sidan från varsin
dator, båda med hjälp av Claude Code. Den här filen läses av bådas Claude —
skriv beslut och konventioner här så jobbar båda likadant.

## Vad sidan är

Hemsida för hennes verksamhet inom **hälsa/välmående**. Stilen ska vara
**varm & personlig** — mjuka färger, serif, ombonat. Inte prestations- eller
säljigt tonläge.

**"Studio Balans" är ett platshållarnamn** tills det riktiga namnet är bestämt.
Text markerad med `<mark class="platshallare">` (gul markering på sidan) är
platshållare som ska bytas mot riktigt innehåll — ta bort mark-taggen när
texten är riktig.

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
