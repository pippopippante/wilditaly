# Wild Italy

Implementazione del documento di design `Wild Italy.dc.html` (progetto Claude Design
`5d883d42-fdf6-4457-9e95-25598407a515`), sulla **direzione 1a — bottega calda**
(legno, vinaccia, ottone), con il mobile del **turno 2** (schermate 2a / 2b).

Sito statico, senza build e senza dipendenze: si apre con qualsiasi server statico.

```bash
npx serve .        # oppure: python -m http.server
```

## Pagine

| File | Schermata del mockup |
|---|---|
| `index.html` | 1a (desktop) + 2a (mobile) — homepage |
| `categoria.html?c=<slug>` | 1c — categoria, template per tutti gli scaffali |
| `prodotto.html?p=<slug>` | 1d (desktop) + 2b (mobile) — scheda prodotto |
| `box.html` | 1e — box e degustazioni |
| `selezione.html?s=<slug>` | non nel mockup — `guida` (fatti guidare), `regalo` (idee regalo), `sotto-20`; dati in `selezioni` di `catalogo.js` |
| `info.html` | spedizioni / conservazione / resi / contatti |

`1b` (direzione editoriale) e `1f`/`1g` (mobile del turno 1) non sono implementate:
la prima è la direzione non scelta, le seconde sono superate da 2a/2b.

## Struttura

```
assets/css/wild.css     sistema di design (token, componenti, breakpoint)
assets/js/catalogo.js   dati: categorie, prodotti, box, dati della bottega
assets/js/wild.js       chrome condiviso + comportamenti
assets/img/             cartella per le foto definitive
design/                 copia del documento di design di partenza
```

`wild.js` costruisce da solo header, footer, menu, carrello, ricerca e barra di
navigazione mobile: le pagine contengono solo `<main>`. Ne consegue che per
aggiungere una pagina bastano lo scheletro HTML, `data-pagina="..."` sul `<body>`
e i due `<script>` in fondo.

## Breakpoint

- `< 1120px` — layout mobile/tablet: menu a scomparsa, ricerca dalla lente nell'header,
  barra di navigazione fissa in basso (5 voci, tap target 48–56 px).
- `>= 1120px` — layout desktop: navigazione orizzontale, griglie a 3–4 colonne.

Sulla scheda prodotto sotto i 1120 px l'intestazione diventa contestuale
(indietro · nome · condividi · carrello) e compare la barra di acquisto fissa,
come nella schermata 2b.

## Foto

Ogni slot foto è un elemento `.ph`: senza foto mostra la didascalia del mockup
(cosa deve andarci), con la foto la didascalia sparisce.

- **Pagine statiche**: basta inserire un `<img>` dentro lo slot, il CSS lo fa combaciare:

  ```html
  <div class="ph"><img src="assets/img/salame-cervo-1.jpg" alt="Salame al cervo affettato"></div>
  ```

- **Catalogo** (`catalogo.js`): `img` è la foto di card, carrello, ricerca e abbinamenti;
  `galleriaImg` è la galleria della scheda prodotto (se c'è, mostra solo le foto vere al posto
  dei segnaposto di `galleria`); senza `galleriaImg` la galleria usa la sola `img`. Il testo
  alternativo nasce dalla didascalia `foto`; per le categorie `imgAlt` la sostituisce quando la
  foto non corrisponde alla didascalia.

Foto vere in uso (dal vecchio sito Wix e dalla cartella `foto/`, copie web max 1600 px in `assets/img/`):
hero e "chi siamo" della home, tutti i prodotti tranne Sagrantino e box, tutte le categorie tranne vini.
Restano segnaposto: vetrina in via Porta Fuga, Sagrantino, tutti i box, categoria vini.
Pronte ma non usate: `home-*` (vecchia home) e `blog-*` (articoli sul tartufo).

Gli originali recuperati dal vecchio sito (35 foto) sono in `sito vecchio/foto_recuperate/`,
i dati dei prodotti (prezzi, ingredienti, valori nutrizionali) in `sito vecchio/prodotti_sito_vecchio.md`.

## Configurazione

Le due props del documento di design sono esposte come config globale. Dichiararla
**prima** di `wild.js`:

```html
<script>window.WILD_CONFIG = { mostraBarraAnnuncio: true, mostraBadgeArtigianale: false };</script>
```

Il badge "artigianale" è spento di default: i salumi li produce uno stabilimento autorizzato per conto
di Wild Italy, e la dicitura va confermata con la bottega prima di riaccenderlo.

## Dati prodotto e obblighi di legge

Le schede riportano i dati dell'etichetta, come chiede la vendita online di alimenti (Reg. UE 1169/2011,
art. 14):
- nome come in etichetta, con `denominazione` quando quella piena è più lunga;
- ingredienti con allergeni in maiuscolo, quantità netta (`peso`), conservazione, operatore responsabile
  (`produttore`), valori nutrizionali;
- prezzo al kg o al litro, calcolato da `grammi`/`ml`.

Fonti: le foto `-2` delle etichette e `sito vecchio/prodotti_sito_vecchio.md`. Niente frasi che l'etichetta
non conferma: provenienze, "artigianale", "affumicato", "magro", anno di fondazione. Niente prezzi barrati
inventati.

## Carrello

Client-side, salvato in `localStorage` (`wilditaly:carrello`). Gestisce quantità,
formati e totale. Il pulsante "Vai alla cassa" non è collegato: serve un backend.

## Cosa manca / da decidere con la bottega

Segnalato nel codice e in pagina con il riquadro `DA DEFINIRE`, nella stessa
convenzione usata dal mockup per le foto:

- **Tutti i prodotti** hanno prezzi, pesi, ingredienti e valori del vecchio sito e delle etichette:
  da riconfermare con la bottega prima di andare online.
- **Oli al tartufo**: 100 ml come sulla bottiglia in foto; una riga della pagina vecchia dice 60 ml.
- **Salame al cinghiale e tartufo**: denominazione in etichetta illeggibile nella foto.
- **Orari** del negozio (sono quelli del mockup), costi di spedizione, testo legale su resi e recesso,
  privacy e cookie.
- `vini` ha il solo Sagrantino citato nella 2b.
- **Box Regalo Oro**: nel mockup è una scheda in grigio senza prezzo, qui è marcato
  "in arrivo".
- Account, cassa e versione EN non sono collegati. Instagram e Facebook puntano alle pagine
  indicate nel vecchio sito.
