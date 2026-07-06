# Hemsidan

Gemensamt hobbyprojekt: vi är två personer som bygger den här sidan från varsin
dator, båda med hjälp av Claude Code. Den här filen läses av bådas Claude —
skriv beslut och konventioner här så jobbar båda likadant.

## Vad sidan är

Hemsida för **Ingrid Shragges verksamhet**: individuell beteendeterapi
(ABA) för barn med autism i Stockholmsområdet, samt föräldracoaching.
Ingrid är certifierad beteendeanalytiker (BCBA). Varumärket är hennes
eget namn.

**Målgrupp och ton:** föräldrar till barn med autism. Allt på sidan ska
bygga **förtroende** — varmt, lugnt och konkret språk. Ingen säljighet,
ingen onödig fackjargong, inga överdrivna löften. Betona: individuell
anpassning efter barnet och familjen, vetenskapligt grundade metoder,
kostnadsfritt första samtal som lågtröskel-ingång.

Stilen är **varm & personlig** — mjuka färger, serif, ombonat.

Text markerad med `<mark class="platshallare">` (gul markering på sidan) är
platshållare som ska bytas mot riktigt innehåll — ta bort mark-taggen när
texten är riktig. Kvar att fylla i: Ingrids bakgrund/erfarenhet, priser
och upplägg, mejladress, telefonnummer.

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
