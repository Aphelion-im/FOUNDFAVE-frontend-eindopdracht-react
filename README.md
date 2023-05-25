Datum laatste update: 26-5-2023

[![Netlify Status](https://api.netlify.com/api/v1/badges/b7b86c31-d394-4677-8e75-f6a7eac61048/deploy-status)](https://app.netlify.com/sites/foundfave/deploys)

<a target="_blank" href="https://github.com/Aphelion-im/FOUNDFAVE-frontend-eindopdracht-react">Github Repository FOUNDFAVE App</a>

# FOUNDFAVE React App - Eindopdracht Frontend NOVI Hogeschool

## Inleiding

Zit je steeds met je handen in het haar als je jouw favoriete Marvel karakters in een document moet copy-pasten om ze te bewaren? Treur niet langer! Met deze handige app kun je snel jouw Marvel karakters opzoeken en online bewaren.

**FOUNDFAVE** is dé online app om Marvel karakters op te zoeken en te bewaren.

Daarom is de slogan: *"Found your fave with FOUNDFAVE!"*

## Inhoud

- [Hoe ziet de FOUNDFAVE App er uit?](#hoe-ziet-de-foundfave-app-er-uit)
- [Live demo](#live-demo-foundfave-app)
- [Aan de examinator](#aan-de-examinator)
- [Benodigdheden](#benodigdheden)
- [Applicatie installeren en starten](#applicatie-installeren-en-starten)
- [De applicatie draaien](#de-applicatie-draaien)
- [Overige commando's](#overige-commandos)
- [Contact](#contact)

## Hoe ziet de FOUNDFAVE App er uit?

![FOUNDFAVE React App ](./src/screenshots/screenshot-app.jpg)

## Live demo FOUNDFAVE App

Een live demo van deze app is te vinden op:

<a target="_blank" href="https://foundfave.online">FOUNDFAVE App Live Demo</a>

---

## Aan de examinator

Beste examinator,

Bijgesloten in de root van dit project een .env.dist bestand met daarin de namen van de environment variabelen.

__Stappenplan:__
* Een .env bestand aanmaken en in de root plaatsen.
* De volgende variabelen in het .env bestand plaatsen en de bijhorende waarden. Neem de waarden over in onderstaande tabel:

| Variabele           | Waarde |
| ------------------- | ------ |
| VITE_APP_BASE_URL   | abc    |
| VITE_APP_PUBLIC_KEY | 4780bcc0dddcf771e505b68197ce5f56 |

__Voorbeeld .env bestand__:
```javascript
VITE_APP_BASE_URL='https://ditiseenapi.com'
VITE_APP_PUBLIC_KEY='1234567890abcdefgh'
```

### Netlify Opmerking
De environment variables zijn in de live demo geïntegreerd met de hosting van Netlify en zijn de API keys/environment variabelen niet zichtbaar voor het publiek.

## Benodigdheden
Welke software heb je nodig om deze app te draaien?

De volgende software en tools:

- [NodeJS](https://nodejs.org/en)
- Een terminal, zoals:
  - [HyperJS](https://hyper.is)
  - [Git Bash](https://git-scm.com/downloads)
- Code editors/IDE's, zoals:
  - [Visual Studio Code](https://code.visualstudio.com)
  - [WebStorm](https://www.jetbrains.com/webstorm/) of een andere equivalente editor, zoals Sublime Text, Brackets, etc.

## Applicatie installeren en starten

> Een stappenplan met daarin installatie instructies.

Deze app maakt gebruikt van [ViteJS](https://vitejs.dev).

NodeJS installeren. [NodeJS](https://nodejs.org/en)

### Het Github FOUNDFAVE app project clonen

Clonen met SSH:

```bash
git clone git@github.com:Aphelion-im/FOUNDFAVE-frontend-eindopdracht-react.git
```

Clonen met Https:

```bash
git clone https://github.com/Aphelion-im/FOUNDFAVE-frontend-eindopdracht-react.git
```

__NPM Dependecies installeren__

Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:


```bash
npm install
```

## De applicatie opstarten
Wanneer dit klaar is, kun je de applicatie starten met behulp van:
```bash
npm run dev
```

* In de terminal komt nu een webadres te staan waar de app komt te draaien. In het geval van ViteJS is dat: http://localhost:5173. Klik op deze link om de app in de browser te openen.

* Om de live server te stoppen druk je op de volgende toetsencombinatie: `CTRL + C`.

## Inloggen

De volgende gegevens om in te loggen zijn beschikbaar om de app te testen:
* Gebruikersnaam: Andre
* Wachtwoord: 123

## Overige commando's

> Welke andere npm commando’s er nog beschikbaar zijn in deze applicatie en waar deze voor dienen.

```bash
npm run build
```

```bash
npm run preview
```
Eject e.d.:
https://github.com/elwyn-de-neve/react-les-3-final/

## Contact

Mocht je nog vragen of opmerkingen hebben, stuur dan gerust een mail naar: andre.de.groot@novi-education.nl of stuur me een bericht via Teams.

Met vriendelijke groet,

André de Groot




