# Hemsidan

Vår gemensamma hemsida. Ren HTML/CSS/JS — inget att installera.
Live: https://marclagos-cloud.github.io/hemsida/

## Se sidan lokalt

Öppna `index.html` i webbläsaren. Klart.

## Ändra text på sidan (för dig som inte kodat förut)

1. Öppna `index.html` (startsidan) eller `what-is-aba.html` (ABA-guiden)
   i valfri textredigerare, t.ex. TextEdit.
2. Leta upp texten du vill ändra (Cmd+F och sök på några ord ur den).
3. Ändra bara det som står MELLAN tagparen, alltså mellan `<p>` och
   `</p>`, inte själva taggarna.
4. Spara, öppna filen i webbläsaren och kontrollera att det ser rätt ut.
5. Kör den dagliga rutinen nedan för att publicera (eller be Claude).

Enklast av allt: starta `claude` i mappen och skriv vad du vill ändra
i klartext, så gör Claude det åt dig. Regler och beslut om ton och
innehåll står i `CLAUDE.md`, den läser Claude själv.

## Komma igång på en ny dator

1. Installera [git](https://git-scm.com) och [Claude Code](https://claude.com/claude-code).
2. Klona repot:
   ```
   git clone https://github.com/ANVANDARNAMN/hemsida.git
   cd hemsida
   ```
3. Starta `claude` i mappen och börja bygga.

## Daglig rutin

```
git pull        # hämta det senaste innan du börjar
# ...jobba...
git add -A && git commit -m "vad du gjorde"
git push        # dela med den andra
```

Claude Code kan köra alla git-kommandon åt dig — säg bara till.
