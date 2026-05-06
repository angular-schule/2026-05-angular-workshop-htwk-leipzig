<img src="https://assets.angular.schule/header-tagesworkshop-einstieg.png">

#### **mit Ferdinand Malcher**

<hr>

**Herzlich Willkommen zum Workshop – schön, dass du dabei bist!**  
In diesem Repository findest du während des Workshops den Quelltext unserer Beispielanwendung.


# ✅ Installation

> ⚠️ **Bitte führe die Vorbereitung rechtzeitig VOR dem Workshop aus, damit wir ohne Zeitverlust loslegen können.**


## Benötigte Software

1. **Node.js 20, 22 oder 24** (jeweils die aktuelle Nebenversionsnummer): [https://nodejs.org](https://nodejs.org)
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
3. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)
4. **Angular Language Service für VS Code:** [Angular Language Service (`Angular.ng-template`)](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
    - Installiere die Extension über den *Extensions Browser* direkt im Editor.


## Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die CLI auf dem System installieren:

```
npm install --location=global @angular/cli
```

⚠️ Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind.

```
node -v
# Erwartet:
# 20.19.x oder höher, 22.12.x oder höher, oder 24.0.x oder höher,
# aber nicht 21.x oder 23.x!

ng version
# Erwartet:
# Angular CLI : 21.x.x (!)
# Angular     : 21.x.x (!)
```


## Projekt installieren

Wir haben bereits ein Projekt vorbereitet, mit dem wir im Workshop arbeiten werden.
Bitte klone dieses Repo *oder* [lade den Code als ZIP herunter](https://github.com/angular-schule/2026-05-angular-workshop-htwk-leipzig/archive/refs/heads/main.zip).

Anschließend kannst Du das Angular-Projekt auf deinem Rechner installieren:

```bash
cd 2026-05-angular-workshop-htwk-leipzig
npm install
```

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte das `npm install` mit Geduld ab!

Anschließend kannst du das Projekt starten:

```bash
ng serve
```

Auf http://localhost:4200 sollte nun die Anwendung mit der Überschrift "Hello world" erscheinen.
Den laufenden Webserver kannst Du danach mit Strg + C beenden.

Wenn bei allen Teilnehmenden das Grundgerüst steht, können wir ohne Zeitverlust loslegen.
Sollte es zu einem Fehler kommen, melde dich einfach per Mail bei uns unter [team@angular.schule](mailto:team@angular.schule).  
Wir werden schnell eine Lösung finden.

## Projekt erforschen

Öffne den Projektordner `book-rating` in deinem Editor.
Nimm dir nun ein paar Minuten Zeit, um die Struktur des generierten Projekts zu untersuchen.
So hast du die wichtigsten Dateien schon einmal gesehen, bevor wir den Aufbau in der Schulung besprechen!



### Wir freuen uns schon! 🙂

<hr>

<img src="http://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; https://angular.schule | Stand: 06.05.2026



