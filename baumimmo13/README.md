# BaumImmo 13 GmbH – Coming-Soon-Website

Statischer Website-Entwurf für die **BaumImmo 13 GmbH** (1130 Wien) auf Basis
der handschriftlichen Vorgaben: Coming-Soon-Seite mit Leistungen, Kontakt,
Impressum, Datenschutzerklärung und Cookie-Hinweis (österreichisches Recht:
ECG, MedienG, UGB, DSGVO/DSG, TKG 2021).

## Struktur

```
baumimmo13/
├── index.html          # Startseite (Coming Soon, Leistungen, Über uns, Kontakt)
├── impressum.html      # Impressum / Offenlegung
├── datenschutz.html    # Datenschutzerklärung
└── assets/
    ├── css/style.css   # Design (Smaragdgrün/Gold, responsiv)
    ├── js/main.js      # Scroll-Animationen + Cookie-Hinweis
    └── fonts/          # Selbst gehostete Schriften (DSGVO-konform)
```

## Vor dem Livegang zu erledigen

1. **Firmenbuchnummer (FN) und UID** im Impressum ergänzen (Platzhalter
   `[wird ergänzt]`) – ohne diese Angaben ist das Impressum nicht
   ECG-/UGB-konform.
2. **Bilder lokal ablegen:** Die vier Leistungsbilder und das Hero-Bild sind
   aktuell direkt von der Higgsfield-CDN (CloudFront) eingebunden. Für den
   Produktivbetrieb die PNGs herunterladen, nach `assets/img/` legen und die
   URLs in `index.html` sowie `assets/css/style.css` (`.hero-bg`) ersetzen.
   Danach kann Abschnitt 4 der Datenschutzerklärung (CDN-Hinweis) gekürzt werden.
3. **Foto von Klaus Baumgartner** einsetzen: Platzhalter im Abschnitt
   „Über uns" (`.photo-placeholder`) durch ein `<img>` ersetzen.
4. **Domain:** Auf dem Zettel steht `www.baumimmo.…` – sobald die Domain
   feststeht, in den Meta-Tags (og:url, canonical) ergänzen.
5. **Fachgruppen-Zuordnung** (WKO) im Impressum prüfen/anpassen.

## Lokale Vorschau

```bash
cd baumimmo13
python3 -m http.server 8000
# → http://localhost:8000
```

## GitHub Pages

Für ein eigenes Repo: Inhalt dieses Ordners ins Repo-Root legen und in den
Repo-Einstellungen **Settings → Pages → Deploy from a branch → main / (root)**
aktivieren.

Bildnachweis: Alle Bilder KI-generiert (Higgsfield, Modell Nano Banana 2).
