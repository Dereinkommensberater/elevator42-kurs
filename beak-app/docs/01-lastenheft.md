# Lastenheft – BEAK App („The Financial Survival Engine“)

| | |
|---|---|
| **Dokument** | Lastenheft (Auftraggeber-Sicht: *Was* und *Wofür*) |
| **Produkt** | BEAK Reports App (iOS, Android, Web) |
| **Version** | 0.1 – Entwurf |
| **Stand** | 25.09.2026 |
| **Quelle** | Pitch-Deck „Beak 1 Albert App & More 250926“ (Canva, 15 Folien) |
| **Status** | Zur Abstimmung |

---

## 1. Ausgangslage und Problem

Privatanleger in Krypto und Makro treffen Entscheidungen überwiegend emotional (FOMO, Panik). Die Informationslage ist überladen: Hype, Scams, „Krypto-Religion“, Finanzjargon und PDF-Berichte, die niemand liest. Gleichzeitig verlieren unerfahrene Anleger durch starre Stop-Loss-Strategien unnötig Kapital.

Das Deck beschreibt das so: Die „Momo-Herde“ kauft blind, die „Smart Money“-Eule wartet auf Fakten. **Niemand baut die Brücke zwischen beiden.**

## 2. Vision und Zielsetzung

BEAK ist ein Premium-Ökosystem für Krypto- und Makro-Analyse, das Komplexität in Bilder übersetzt („Science meets Netflix“) und daraus verständliche, konkrete Handlungssignale ableitet („Less Noise. Better Picks.“).

**Ziele (messbar):**

| ID | Ziel | Messgröße |
|---|---|---|
| Z1 | Tägliche Nutzung als Morgenroutine | ≥ 60 % DAU/MAU bei zahlenden Mitgliedern |
| Z2 | Hohe Bindung | Churn < 5 % pro Jahr (Deck-Ziel: „0 % Churn“) |
| Z3 | Verständlichkeit | ≥ 80 % der Nutzer bewerten Signale als „verstanden“ (In-App-Umfrage) |
| Z4 | Organisches Wachstum | ≥ 50 % Neukunden über Empfehlung/Partner/Events |
| Z5 | Wirtschaftlichkeit | Break-even bei 300 zahlenden Mitgliedern (100 × 100 € + 200 × 200 € / Monat) |

## 3. Zielgruppen und Rollen

| Rolle | Beschreibung |
|---|---|
| **Interessent** | Kennt BEAK aus Seminar, Empfehlung oder Social Media. Noch kein Abo. |
| **Mitglied (Einsteiger)** | Hat Abo, wenig Vorwissen. Braucht Academy Stufe 1, einfache Signale. |
| **Mitglied (Fortgeschritten)** | Handelt aktiv, will Signale, Hedging, Makro-Reports. „Macher, die keine Zeit haben.“ |
| **Partner (Affiliate)** | Empfiehlt BEAK, verdient Provision. |
| **Partner-Manager** | Führt ein Partner-Team, veranstaltet Offline-Seminare. |
| **Redaktion / Analyst** | Erstellt Daily Pulse, Reports, Signale, Academy-Inhalte. |
| **Community-Moderator** | Moderiert Community, verwaltet Punkte und Ränge. |
| **Administrator** | Nutzer, Abos, Preise, Provisionen, Rechte. |

Persona-Details stehen in [03-customer-journey.md](03-customer-journey.md).

## 4. Funktionale Anforderungen (Kundensicht)

Gegliedert nach der „5-Cylinder Engine“ aus dem Deck plus den tragenden Querschnittsfunktionen.

### LH-01 The Daily Pulse – „Der 3-Minuten-Marktkompass“
- Jeden Morgen eine kuratierte Zusammenfassung der 3–10 wichtigsten Themen der Nacht (Quellen u. a. CNBC, Glassnode, FT).
- Lesbar in ca. 3 Minuten, visuell im BEAK-Stil, mit Live-Charts.
- Crash-Warnungen als eigene, hervorgehobene Kategorie.
- Soll „der erste Screen am Morgen“ werden (Push zu einer vom Nutzer gewählten Uhrzeit).

### LH-02 Special & Market Reports – „Science meets Netflix“
- Tiefgehende Analysen als visuelle Geschichten statt PDF (Beispiel Jenga-Turm: Klumpenrisiko S&P 500).
- Formate: Scroll-Story, Video, Bildstrecke, Audio.
- Serien-Charakter (Staffeln/Folgen) wie bei Streaming-Diensten.

### LH-03 Actionable Signals – „Präzises Hedging & Trading“
- Konkrete, „mundgerechte“ Signale für **Kauf**, **Swap** und **Hedging**.
- Jedes Signal erklärt in einem Satz *warum* („Wer es nicht einfach erklären kann, hat es nicht verstanden“).
- Hedging statt klassischem Stop-Loss (Kursverteidigung): Absicherung greift, wenn der Kurs fällt.
- Historie und Trefferquote aller Signale transparent einsehbar.

### LH-04 The Academy – „From Zero to Hero“
- Drei Stufen, nacheinander freigeschaltet:
  1. Krypto-Basics (Sicherheit & Setup)
  2. Marktpsychologie („Die Physik der Panik“)
  3. Makroökonomie Mastery (Unabhängigkeit)
- Module für 2–3 Jahre Laufzeit ausgelegt; Lernfortschritt sichtbar.
- Abschluss je Stufe mit Quiz und Zertifikat.

### LH-05 School Community – „Gamification & Retention“
- Community mit Kanälen/Threads, Kommentaren zu Reports und Signalen.
- Punkte für tägliches Einloggen, Lernfortschritt, hilfreiche Beiträge.
- Ränge (z. B. Küken → Beobachter → Stratege → Experte → Legende) schalten exklusive Makro-Module frei.
- Streaks (Tage in Folge).

### LH-06 Goodwill – Charity-Voting
- 2 % der Einnahmen gehen an karitative Zwecke.
- Mitglieder stimmen quartalsweise über die Empfänger ab.

### LH-07 Mitgliedschaft & FOMO-Pricing
- Jahresabo, Zielpreis 500 €/Monat (6.000 €/Jahr).
- Frühe Preisstufen mit Preisgarantie auf Lebenszeit, solange das Abo läuft:
  - Die ersten 100: 100 €/Monat
  - Die nächsten 200: 200 €/Monat
  - Danach: 500 €/Monat
- Anzeige der verbleibenden Plätze je Stufe.
- Kündigung jederzeit einfach möglich (gesetzliche Pflicht, siehe Kap. 7).

### LH-08 Partner-Programm („Gorilla Sales Force“)
- Empfehlungslinks und -codes, Dashboard mit Klicks, Abschlüssen, Provision.
- Teamstruktur mit Partner-Managern, Overhead-Provision für Manager (5–10 %).
- Provision **nur auf echte Abo-Umsätze von Endkunden**, nicht auf Anwerbung von Partnern (siehe Kap. 7).

### LH-09 Events & Offline-Seminare
- Partner-Manager legen Seminare an (Ort, Datum, Kapazität).
- Interessenten melden sich an, erhalten Ticket (QR), Check-in vor Ort.
- Ablauf laut Deck: neutrales Seminar → „Physik der Panik“ live → Abschluss Jahresabo.

### LH-10 Konto, Profil, Einstellungen
- Registrierung/Login (E-Mail, Apple, Google), 2-Faktor-Authentifizierung.
- Profil mit Rang, Punkten, Zertifikaten.
- Benachrichtigungen steuerbar (Daily Pulse, Signale, Crash-Warnung, Community).
- Rechnungen, Zahlungsmittel, Kündigungsbutton.

### LH-11 Redaktions- und Admin-Backend
- Inhalte erstellen, planen, veröffentlichen (Pulse, Reports, Signale, Academy).
- Freigabeprozess (Vier-Augen-Prinzip für Signale).
- Nutzer-, Abo-, Partner- und Provisionsverwaltung, Auswertungen.

## 5. Nicht-funktionale Anforderungen

| ID | Bereich | Anforderung |
|---|---|---|
| NF-01 | Marke | „Ästhetik wie Red Bull, Präzision wie die Wall Street“. Klare, reduzierte Optik, kein Finanzjargon. Maskottchen: Pinguin mit orangefarbenem Schnabel. |
| NF-02 | Plattformen | iOS, Android, responsive Web-App. |
| NF-03 | Performance | Daily Pulse lädt in < 2 s; Signal-Push erreicht Nutzer in < 60 s nach Freigabe. |
| NF-04 | Verfügbarkeit | 99,5 % im Monat; 99,9 % im Zeitfenster 6–10 Uhr (Daily Pulse). |
| NF-05 | Sicherheit | 2FA, verschlüsselte Übertragung und Speicherung, keine Verwahrung von Kundengeldern oder Wallet-Schlüsseln. |
| NF-06 | Datenschutz | DSGVO-konform, Hosting in der EU. |
| NF-07 | Barrierefreiheit | WCAG 2.1 AA (BFSG seit 06/2025 für digitale Dienste relevant). |
| NF-08 | Sprache | Deutsch zum Start, Englisch vorbereitet. |
| NF-09 | Skalierung | Architektur für 100.000+ Mitglieder („Entworfen für Millionen“). |

## 6. Abgrenzung (nicht im Umfang)

- Kein eigener Broker, keine Order-Ausführung, keine Verwahrung von Krypto.
- Kein automatisches Trading im Namen der Kunden.
- Kein Merchandise-Shop in Version 1 (T-Shirt „Tick Tick Pick!“ ggf. später).

## 7. Rahmenbedingungen und Risiken (vor Entwicklung klären)

Diese Punkte betreffen das Geschäftsmodell direkt und sollten mit einer Fachkanzlei (Finanzaufsichtsrecht / Wettbewerbsrecht) geklärt werden, bevor gebaut wird.

| # | Thema | Warum relevant | Auswirkung auf die App |
|---|---|---|---|
| R1 | **Anlageberatung / Finanzanalyse** (KWG, WpHG, MiCAR) | Konkrete Kauf-/Swap-/Hedging-Signale können erlaubnispflichtig sein (BaFin), insbesondere wenn sie personalisiert wirken. | Signale als allgemeine, nicht personalisierte Analyse formulieren; Offenlegung von Interessenkonflikten; Disclaimer; ggf. Haftungsdach oder Lizenz. |
| R2 | **Progressive Kundenwerbung** (§ 16 Abs. 2 UWG) | Ein hierarchisches Netzwerk, das für das Anwerben neuer Partner zahlt, kann strafbar sein. | Provision ausschließlich auf Endkunden-Umsatz; keine Einstiegsgebühr für Partner; keine Provision für Rekrutierung. |
| R3 | **Fernunterrichtsschutzgesetz** (FernUSG) | Online-Kurse mit Lernerfolgskontrolle können ZFU-zulassungspflichtig sein (BGH 2025 zu Online-Coachings). | Academy rechtlich prüfen lassen; ggf. ZFU-Zulassung oder Ausgestaltung ohne Lernerfolgskontrolle. |
| R4 | **Kündigungsbutton** (§ 312k BGB) | Pflicht für Online-Abos in Deutschland. | Kündigung in 2 Klicks, ohne Hürden. Die „Loss Aversion“-Mechanik darf die Kündigung nicht erschweren. |
| R5 | **Dark Patterns** (DSA, UWG) | „Suchtmechanik“ und künstliche Verknappung sind rechtlich angreifbar. | Platz-Zähler müssen echte Zahlen zeigen; keine irreführenden Countdowns. |
| R6 | **Werbeaussagen** | Aussagen wie „50 % mehr Sicherheit“ müssen belegbar sein. | Performance-Angaben nur mit Belegen und Risikohinweis. |
| R7 | **App-Store-Richtlinien** | Apple/Google verlangen In-App-Kauf für digitale Abos (30 % bzw. 15 % Gebühr) oder Web-Kauf mit Einschränkungen. | Zahlungsweg früh entscheiden (siehe Pflichtenheft). |

## 8. Abnahmekriterien (Auswahl)

1. Ein neuer Nutzer kann sich registrieren, Preisstufe sehen, Abo abschließen und landet in < 3 Minuten im Daily Pulse.
2. Ein freigegebenes Signal erscheint in < 60 s als Push bei allen Mitgliedern mit aktivierter Signal-Benachrichtigung.
3. Academy Stufe 2 ist erst nach Abschluss von Stufe 1 zugänglich.
4. Punkte werden für tägliches Einloggen genau einmal pro Kalendertag gutgeschrieben.
5. Kündigung ist aus dem Profil in höchstens 2 Schritten möglich.
6. Partner sieht jeden durch seinen Link erzielten Abschluss innerhalb von 5 Minuten im Dashboard.

## 9. Offene Fragen an den Auftraggeber

1. Name final: „BEAK“, „BEAK Reports“ oder „Albert“ (Deck-Titel „Beak 1 Albert App“)?
2. Wer ist verantwortlicher Analyst für Signale (Qualifikation, Haftung)?
3. Monatliche oder nur jährliche Zahlung? Deck nennt beides.
4. Welche Assets decken Signale ab (nur Krypto, auch Gold/Devisen/Indizes, wie im Deck abgebildet)?
5. Wird die Community in der App gebaut oder über eine bestehende Plattform (z. B. Skool) angebunden?
6. Gibt es ein Budget und ein Zieldatum für den Launch?
