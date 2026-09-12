# Wild Italy — dati recuperati dal sito vecchio (Wix)

Fonte: https://parmegianidiego.wixsite.com/wilditaly — pagine prodotto lette il 12/09/2026.
Le foto originali sono in `foto_recuperate/` con i nomi indicati sotto.

Da qui vengono ingredienti, allergeni e valori nutrizionali di `assets/js/catalogo.js` e i 13 prodotti
fuori dal mockup (inseriti il 12/09/2026). Prezzi, pesi e testi dei tre salumi di selvaggina restano
quelli del mockup.
Lotti e date di scadenza non sono riportati perché cambiano a ogni produzione.

---

## Da controllare prima di andare online

1. **Salame di cervo, ingredienti nel sito nuovo sbagliati.** `catalogo.js` (scheda `salame-di-cervo`)
   dice *"Carne di cervo (70%) … Senza glutine, senza lattosio"*. L'etichetta vera dice
   **carne di cervo 6,5% minimo** e **contiene LATTE scremato in polvere** (allergene).
   Mostrare "senza lattosio" su un prodotto col latte è un problema serio.
2. **Prezzi e pesi diversi dal mockup:**

   | prodotto | sito vecchio | mockup / sito nuovo |
   |---|---|---|
   | Salame di cervo | 350 g — 12,90 € | 280 g — 14,50 € |
   | Salame di capriolo | 250 g — 9,90 € | 280 g — 15,90 € |
   | Salame di cinghiale | 350 g — 11,90 € | 300 g — 13,90 € |

3. **Salame cinghiale e tartufo:** la descrizione parla di *"tartufo nero pregiato di Norcia"*, ma
   in etichetta c'è *tartufo estivo (Tuber aestivum)* — sono due tartufi diversi.
4. **Oli al tartufo:** il nome dice 100 ml, l'etichetta dice *quantità netta 60 ml*.
5. **Zuppa rapida:** contiene orzo perlato (cereale con glutine), che andrebbe evidenziato come allergene.
6. **Prosciutto tascabile "IGP Norcia":** la descrizione dice che è ricavato *dalla noce della spalla*;
   da verificare che la dicitura IGP sia corretta per questo prodotto.
7. Il mockup chiama il ciauscolo "di Norcia", il sito vecchio lo descrive come *tipico delle campagne marchigiane*.

Già sistemato nel catalogo nuovo: 1 (ingredienti e allergeni del cervo), 3 (descrizione con tartufo estivo),
4 (indicati 60 ml), 5 (orzo evidenziato come glutine), 6 (dicitura IGP tolta). Resta da confermare con la bottega.

**Risposte a voci "DA DEFINIRE" del README:** gli ingredienti di capriolo e cinghiale sono sotto;
i salumi sono prodotti *da stabilimento autorizzato IT 9-1949/L CE, per conto di Wild Italy*.

---

## Salumi di selvaggina

### Salame al cervo 350 g — 12,90 €
- Pagina vecchia: `pagina-prodotto/salame-al-cervo-1`
- Foto: `salame-cervo-1.jpg`, `salame-cervo-2.jpg`
- Descrizione: Il salame di cervo è un prodotto sicuramente destinato ad una nicchia di «gourmet» e di appassionati. Al gusto pieno, sapido di un salame, la carne di cervo aggiunge un sapore più selvatico, intenso e forte. Proprio come l'immagine di questo possente animale. Ottimo non solo da gustare ma anche per chi voglia «far colpo» in tavola.
- Ingredienti: Carne di suino, carne di cervo (6,5% minimo), LATTE scremato in polvere, sale, saccarosio, destrosio, pepe, antiossidanti: E300, esaltatore di sapidità: E621, aglio, aromi, conservanti: E252, E250.
- Allergeni: latte, tracce di solfiti. Budello non edibile. Carne suina origine Italia.
- Conservazione: lontano da fonti di calore.
- Produttore: stabilimento autorizzato IT 9-1949/L CE, per conto di Wild Italy.
- Valori per 100 g: energia 1758 kJ / 424 kcal · grassi 36,0 g (saturi 13,0 g) · carboidrati 3,3 g (zuccheri 2,9 g) · proteine 22,0 g · sale 3,76 g

### Salame al capriolo 250 g — 9,90 €
- Pagina vecchia: `pagina-prodotto/salame-al-capriolo`
- Foto: `salame-capriolo-1.jpg`, `salame-capriolo-2.jpg`
- Descrizione: Il salame al capriolo rappresenta un'eccellenza di Norcia, il prodotto più prelibato difficile da reperire, dal gusto vivace viene accompagnato con l'aggiunta di un pizzico di peperoncino per esaltare il gusto finale. Per chi non lo conosce sarà una piacevole scoperta.
- Ingredienti: Carne di suino, carne di capriolo (10% minimo), LATTE scremato in polvere, sale, saccarosio, destrosio, aromi, pepe, peperoncino, antiossidanti: E300, E301, esaltatore di sapidità: E621, conservanti: E252, E250, correttore di pH: E262.
- Allergeni: latte, tracce di solfiti. Budello non edibile. Carne suina origine Italia.
- Produttore: stabilimento autorizzato IT 9-1949/L CE, per conto di Wild Italy.
- Valori per 100 g: 1758 kJ / 424 kcal · grassi 36,0 g (saturi 13,0 g) · carboidrati 3,3 g (zuccheri 2,9 g) · proteine 22,0 g · sale 3,76 g

### Salame al cinghiale 350 g — 11,90 €
- Pagina vecchia: `pagina-prodotto/salame-al-cinghiale`
- Foto: `salame-cinghiale-1.jpg`, `salame-cinghiale-2.jpg`
- Descrizione: Il salame di cinghiale è riservato a quei palati, ancora, capaci di riassaporare, con un morso, l'alta qualità della natura e della genuinità. Il cinghiale, infatti, è solo quello selvatico dei monti Sibillini con il suo sapore incomparabile e generoso.
- Ingredienti: Carne di suino, carne di cinghiale (6,5% minimo), LATTE scremato in polvere, sale, saccarosio, destrosio, pepe, antiossidanti: E300, esaltatore di sapidità: E621, aglio, aromi, conservanti: E252, E250.
- Allergeni: latte, tracce di solfiti. Budello non edibile. Carne suina origine Italia.
- Produttore: stabilimento autorizzato IT 9-1949/L CE, per conto di Wild Italy.
- Valori per 100 g: 1758 kJ / 424 kcal · grassi 36,0 g (saturi 13,0 g) · carboidrati 3,3 g (zuccheri 2,9 g) · proteine 22,0 g · sale 3,76 g

### Salame cinghiale e tartufo 350 g — 14,90 €
- Pagina vecchia: `pagina-prodotto/salame-al-cinghiale-e-tartufo`
- Foto: `salame-cinghiale-tartufo-1.jpg`, `salame-cinghiale-tartufo-2.jpg`
- Descrizione: Il tartufo nero pregiato di Norcia viene aggiunto direttamente nella macinatura caratterizzata da carne di cinghiale su una base di maiale selezionato. Si percepisce un primo gusto sapido caratteristico del cinghiale per poi rimanere con la fragranza del tartufo in bocca.
- Ingredienti: Carne di suino, carne di cinghiale (6,5% minimo), tartufo estivo (Tuber aestivum Vitt.) 2% max, LATTE scremato in polvere, sale, saccarosio, destrosio, aromi, pepe, aglio, antiossidanti: E300, esaltatore di sapidità: E621, conservanti: E252, E250, correttore di pH: E262.
- Allergeni: latte, tracce di solfiti. Budello non edibile. Carne suina origine Italia.
- Produttore: stabilimento autorizzato IT 9-1949/L CE, per conto di Wild Italy.
- Valori per 100 g: 1636 kJ / 395 kcal · grassi 34,0 g (saturi 12,0 g) · carboidrati 1,1 g (zuccheri 0,8 g) · proteine 21,0 g · sale 3,7 g

## Salumi tradizionali

### Salame ubriaco (al vino rosso) 350 g — 10,90 €
- Pagina vecchia: `pagina-prodotto/salame-al-vino-rosso`
- Foto: `salame-ubriaco.jpg`
- Descrizione: Le grandi doti dei Norcini riescono sempre a meravigliare. È il caso del gustosissimo salame al vino rosso il cui impasto a grana grossa viene fatto macerare in vino per settimane. La stagionatura attenuerà il gusto dell'alcool, lasciando, invece, i migliori sentori di un generoso vino dell'Umbria. Uno sfizio da provare assolutamente.
- Ingredienti: Carne di suino, sale, saccarosio, destrosio, pepe, vino, finocchio, aglio, antiossidanti: E300, E301, esaltatore di sapidità: E621, correttore di pH: E262, conservanti: E252, E250.
- Allergeni: tracce di latte, tracce di solfiti. Budello non edibile. Carne suina origine Italia.
- Produttore: stabilimento autorizzato IT 9-1949/L CE, per conto di Wild Italy.
- Valori per 100 g: 1603 kJ / 387 kcal · grassi 32,2 g (saturi 11,3 g) · carboidrati 3,0 g (zuccheri 2,4 g) · proteine 21,3 g · sale 3,63 g

### Ciauscolo, salame spalmabile 450 g — 12,90 €
- Pagina vecchia: `pagina-prodotto/salame-da-spalmare`
- Foto: `ciauscolo-1.jpg`, `ciauscolo-2.jpg`
- Descrizione: È un prodotto tipico della tradizione delle campagne marchigiane ed offre gusti estremamente particolari. È ottenuto da un impasto di vari tagli di carne (sapientemente scelti fra quelli della pancia del suino) e stagionato per appena una settimana. La sua morbidezza ne rende possibile l'utilizzo anche spalmato sul pane per tartine o crostini.
- Ingredienti: Grasso di suino, carne di suino, sale, saccarosio, destrosio, pepe, peperoncino, aglio, antiossidanti: E300, E301, esaltatore di sapidità: E621, conservanti: E252, E250.
- Allergeni: può contenere tracce di LATTE e di SOLFITI. Budello non edibile. Carne suina origine Italia.
- Produttore: stabilimento autorizzato IT 9-1949/L CE, per conto di Wild Italy.
- Valori per 100 g: 1983 kJ / 481 kcal · grassi 47,9 g (saturi 17,4 g) · carboidrati 0,2 g (zuccheri 0,0 g) · proteine 12,3 g · sale 2,9 g

### Salamella di fegato 450 g — 12,90 €
- Pagina vecchia: `pagina-prodotto/salamella-di-fegato-450g`
- Foto: `salamella-fegato-1.jpg` (è il tuo `foto/salame_non_identificato.jpeg`), `salamella-fegato-2.jpg`
- Descrizione: Carne di fegato mista ad altre parti del maiale. La forma a salamella permette una stagionatura veloce.
- Ingredienti: Carne di suino, fegato di suino (30%), cuore di suino, sale, saccarosio, destrosio, pepe, aglio, finocchio, peperoncino, antiossidanti: E300, E301, esaltatore di sapidità: E621, conservanti: E252, E250.
- Allergeni: tracce di solfiti. Budello non edibile. Carne suina origine Italia.
- Produttore: stabilimento autorizzato IT 9-1949/L CE, per conto di Wild Italy.
- Valori per 100 g: 1033 kJ / 243 kcal · grassi 16,9 g (saturi 5,9 g) · carboidrati 2,5 g (zuccheri 2,2 g) · proteine 21,5 g · sale 3,6 g

### Salamella di maiale 350 g — 11,90 €
- Pagina vecchia: `pagina-prodotto/salamella-di-maiale-430g`
- Foto: `salamella-maiale.jpg` (è il tuo `foto/salame_non_identificato_immgaino_base.jpeg`)
- Descrizione: Insaccato a salamella di ottima stagionatura, macinatura fine dal gusto dolce. Un classico per gli amanti del salame.
- Ingredienti: Carne di suino, LATTE scremato in polvere, sale, saccarosio, destrosio, aromi, pepe, antiossidanti: E300, E301, esaltatore di sapidità: E621, aglio, conservanti: E252, E250.
- Allergeni: latte, tracce di solfiti. Budello non edibile. Carne suina origine Italia.
- Produttore: stabilimento autorizzato IT 9-1949/L CE, per conto di Wild Italy.
- Valori per 100 g: 1796 kJ / 434 kcal · grassi 37,5 g (saturi 13,4 g) · carboidrati 3,1 g (zuccheri 2,9 g) · proteine 20,8 g · sale 3,7 g

### Coglione del mulo 300 g — 9,00 €
- Pagina vecchia: `pagina-prodotto/coglioni-di-mulo`
- Foto: `coglione-mulo-1.jpg`, `coglione-mulo-2.jpg`
- Descrizione: È senz'altro un prodotto di antichissime origini, apprezzato da chi cerca gusti e sapori forti e diversi. Nasce dalle montagne dell'Italia centrale e ancora oggi viene realizzato con pasta a grana fine al cui interno è deposto un lardello di grasso di maiale accuratamente pepato. La stagionatura medio lunga completa questo capolavoro del gusto. È derivato da carne di suino, proveniente da allevamenti di razze bianche incrociate e selezionate del territorio nazionale.
- Ingredienti: Carne di suino, lardo di suino, LATTE scremato in polvere, sale, saccarosio, destrosio, pepe, aglio, aromi, antiossidanti: E300, E301, esaltatore di sapidità: E621, conservanti: E252, E250, correttore di pH: E262.
- Allergeni: latte, tracce di solfiti. Budello non edibile. Carne suina origine Italia.
- Produttore: stabilimento autorizzato IT 9-1949/L CE, per conto di Wild Italy.
- Valori per 100 g: 1637 kJ / 397 kcal · grassi 32,9 g (saturi 11,6 g) · carboidrati 2,8 g (zuccheri 2,5 g) · proteine 21,8 g · sale 3,7 g

### Prosciutto tascabile IGP Norcia 1 kg — 28,00 €
- Pagina vecchia: `pagina-prodotto/prosciutto-tascabile-1kg`
- Foto: `prosciutto-tascabile-1.jpg`, `prosciutto-tascabile-2.jpg`
- Descrizione: Il tascabile è veramente il massimo del gusto e della prelibatezza. Ricavato dalla parte più magra del prosciutto è particolarmente adatto ad una alimentazione moderna e attenta, che riesce a conciliare al meglio sapore e soddisfazione con esigenze salutistiche. È derivato dalla noce della spalla di suini pesanti adulti, provenienti da allevamenti di razze bianche incrociate e selezionate del territorio nazionale.
- Ingredienti: Carne di suino, sale, pepe, saccarosio, destrosio, finocchio, aglio, peperoncino, antiossidanti: E300, E301, conservanti: E252, E250.
- Allergeni: nessuno indicato. Carne suina origine Italia.
- Produttore: stabilimento autorizzato IT 9-1949/L CE, per conto di Wild Italy.
- Valori per 100 g: 985 kJ / 235 kcal · grassi 13,7 g (saturi 4,84 g) · carboidrati 0,1 g (zuccheri 0,1 g) · proteine 27,8 g · sale 5,04 g

## Formaggi

### Pecorino stagionato 13 mesi 1 kg — 37,00 €
- Pagina vecchia: `pagina-prodotto/pecorino-extra-stagionato-13-mesi-100-latte-di-pecora`
- Foto: `pecorino-13-mesi.jpg`
- Descrizione: Pecorino stagionato Campagnolo di Amatrice. La sua stagionatura di 13 mesi esalta il latte di pecora che si percepisce come piccante, la sua consistenza è secca. Ottimo da grattugiare o per gli amanti dei gusti forti.
- Ingredienti: Latte di pecora, caglio, fermenti lattici, sale. Trattamento crosta: olio di semi di girasole e aceto di vino bianco. Crosta non edibile.
- Allergeni: latte.
- Conservazione: in luogo fresco e asciutto, al riparo dalla luce e da fonti di calore.
- Produttore: Petrucchi S.r.l., Via A. M. Ricci 11 – 02100 Rieti (RI), stabilimento IT 12 215 CE.
- Valori per 100 g: 1627 kJ / 388,8 kcal · grassi 30,0 g (saturi 20,4 g) · carboidrati 0,3 g (zuccheri 0,3 g) · proteine 29,1 g · sale 1,6 g

## Tartufo

### Salsa tartufata 130 g — 6,00 €
- Pagina vecchia: `pagina-prodotto/salsa-tartufata-130g`
- Foto: `salsa-tartufata.jpg`
- Descrizione: Tartufi estivi e funghi champignon, ottima per bruschette o come condimento per la pasta.
- Ingredienti: Funghi coltivati (Agaricus bisporus), olio extra vergine di oliva, tartufo estivo 5% (Tuber aestivum Vitt.), olive nere, carote, sedano, prezzemolo, preparato per brodo (esaltatore di sapidità: glutammato monosodico), cipolla disidratata, lattosio, spezie, sale, aromi.
- Allergeni: sedano, lattosio. Origine: funghi UE, tartufi UE. Senza conservanti.
- Conservazione: in luogo fresco e asciutto; dopo l'apertura in frigorifero, consumare in breve tempo.
- Produttore: Fortunati Stocchi S.r.l., Via Filippo da Campello 24, 06042 Campello sul Clitunno (PG) — tel. +39 0743 521124.
- Valori per 100 g: 382 kJ / 92 kcal · grassi 8,0 g (saturi 1,2 g) · carboidrati 1,2 g (zuccheri 0,5 g) · proteine 2,8 g · sale 2,4 g

### Olio al tartufo nero pregiato "100 ml" — 7,00 €
- Pagina vecchia: `pagina-prodotto/olio-al-tartufo-nero-pregiato-100ml`
- Foto: `olio-tartufo-nero.jpg`
- Descrizione: Condimento aromatizzato al profumo di tartufo nero pregiato, a base di olio extra vergine di oliva italiano. Ha il sapore dolciastro e fungoso del tartufo nero pregiato; ideale per bruschette, risotti, pasta o carne.
- Ingredienti: Olio extra vergine di oliva italiano 98%, aroma. Allergeni: nessuno indicato.
- Quantità netta in etichetta: **60 ml**.
- Produttore: Tartufi Alfonso Fortunati, Via Filippo da Campello 24, 06042 Campello sul Clitunno (PG).
- Valori per 100 ml: 3447 kJ / 825 kcal · grassi 92 g (saturi 15 g) · carboidrati 0 g · proteine 0 g · sale 0 g

### Olio al tartufo bianco pregiato "100 ml" — 7,00 €
- Pagina vecchia: `pagina-prodotto/olio-al-tartufo-bianco-pregiato-100ml`
- Foto: `olio-tartufo-bianco.jpg`
- Descrizione: Condimento aromatizzato al profumo di tartufo bianco pregiato, a base di olio extra vergine di oliva italiano.
- Ingredienti: Olio extra vergine di oliva italiano 98%, aroma. Allergeni: nessuno indicato.
- Quantità netta in etichetta: **60 ml**.
- Conservazione: lontano da fonti di calore e luce diretta.
- Produttore: Fortunati Stocchi S.r.l., Via Filippo da Campello 24, 06042 Campello sul Clitunno (PG).
- Valori per 100 ml: 3447 kJ / 825 kcal · grassi 92 g (saturi 15 g) · carboidrati 0 g · proteine 0 g · sale 0 g

## Dispensa (legumi)

### Lenticchie umbre 500 g — 6,80 €
- Pagina vecchia: `pagina-prodotto/lenticchie-umbre-250g`
- Foto: `lenticchie.jpg`
- Descrizione: Lenticchie umbre selezionate, sono piccole così più delicate e gustose. Ottime con salsiccia e zampone.
- Ingredienti: lenticchie secche umbre. Origine Italia – Umbria.
- Preparazione: sciacquare sotto acqua corrente, cuocere in acqua 25–30 minuti, salare a fine cottura.
- Produttore: confezionato da Fortunati Stocchi S.r.l., Campello sul Clitunno (PG).
- Valori per 100 g: 1470 kJ / 352 kcal · grassi 1,06 g (saturi 0,15 g) · carboidrati 63,4 g (zuccheri 2,03 g) · proteine 24,6 g · sale 0,01 g

### Zuppa rapida 500 g — 6,20 €
- Pagina vecchia: `pagina-prodotto/zuppa-rapida-250g`
- Foto: `zuppa-rapida.jpg`
- Descrizione: Legumi misti, un'ottima zuppa invernale.
- Ingredienti: Lenticchie, orzo perlato, fagioli, azuki verdi, piselli. Può contenere soia.
- Cottura: circa 30 minuti. Origine: Made in Italy.
- Produttore: confezionato da Fortunati Stocchi S.r.l., Campello sul Clitunno (PG).
- Valori per 100 g: 1512 kJ / 357 kcal · grassi 0,9 g (saturi 0,2 g) · carboidrati 67,3 g (zuccheri 1,7 g) · proteine 14,5 g · sale 0,07 g

---

## Blog (solo titoli e foto)

| articolo | pagina vecchia | foto |
|---|---|---|
| Il tartufo indietro nella storia | `post/il-tartufo-indietro-nella-storia` | `blog-tartufo-storia.jpg`, `blog-tartufo-storia-2.jpg` |
| Ricetta: Strangozzo al tartufo | `post/ricetta-strangozzo-al-tartufo` | `blog-strangozzo.jpg` |
| Tartufo nero pregiato Umbria | `post/untitled` | `blog-tartufo-nero-umbria*.jpeg` |
| Vellutata di patate al tartufo nero | `post/vellutata-di-patate-al-tartufo-nero` | `blog-vellutata.jpg` |

Il testo degli articoli non è stato copiato: si può recuperare dalle stesse pagine se serve.

## Altre foto

- `home-1.jpg`, `home-2.jpeg`, `home-3.jpeg`: foto della home vecchia.
- Scartate: due foto stock di Wix e i loghi di pagamento/corrieri (PayPal, VISA, Mastercard, GLS, BRT, UPS).
