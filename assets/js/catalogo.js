/* ==========================================================================
   Wild Italy — catalogo
   Tutti i dati sono estratti dal documento di design "Wild Italy.dc.html".
   Ingredienti, valori nutrizionali e i prodotti fuori dal mockup vengono
   dalle etichette del vecchio sito (`sito vecchio/prodotti_sito_vecchio.md`).
   Dove manca un valore lo segnaliamo con `daDefinire` invece di inventarlo.
   ========================================================================== */

window.CATALOGO = (function () {
  "use strict";

  /* ----------------------------------------------------------- categorie */
  const categorie = [
    {
      slug: "selvaggina",
      nav: "Selvaggina",
      nome: "Salumi di selvaggina",
      titolo: "Salumi di selvaggina",
      intro:
        "Carni magre di bosco, stagionate lente. Tre caratteri diversi: si parte dal più dolce e si arriva al più deciso. Ogni scheda ti dice che sapore aspettarti.",
      breve: "Cervo, capriolo, cinghiale. Magri, stagionati lenti.",
      breveLunga: "Cervo, capriolo, cinghiale. Carni magre, stagionatura lenta, sale giusto.",
      foto: "FOTO: salame di cervo affettato",
      img: "assets/img/salame-cervo-1.jpg",
      inVetrina: 1,
      helper: {
        occhiello: "NON SAI DA DOVE INIZIARE?",
        testo: "Prendi la degustazione: i tre salami insieme, con le schede di assaggio.",
        cta: "Vedi la degustazione",
        href: "prodotto.html?p=degustazione-selvaggina"
      }
    },
    {
      slug: "salumi",
      nav: "Salumi",
      nome: "Salumi tradizionali",
      titolo: "Salumi tradizionali",
      intro: "Il banco di sempre: norcineria umbra, stagionature di cantina, tagli da tagliere.",
      foto: "FOTO: banco salumi tradizionali",
      img: "assets/img/prosciutto-tascabile-1.jpg",
      imgAlt: "Prosciutto tascabile affettato sul tagliere"
    },
    {
      slug: "formaggi",
      nav: "Formaggi",
      nome: "Formaggi",
      titolo: "Formaggi",
      intro: "Pecorini di fossa, stagionati in grotta, freschi di malga.",
      breve: "Pecorini di fossa, stagionati in grotta, freschi di malga.",
      foto: "FOTO: pecorini a scalare",
      img: "assets/img/pecorino-13-mesi.jpg",
      inVetrina: 3
    },
    {
      slug: "tartufo",
      nav: "Tartufo",
      nome: "Tartufo e salse",
      titolo: "Tartufo e salse",
      intro: "Nero pregiato di Norcia e Spoleto, in salsa, in crema, sui salumi.",
      breve: "Nero pregiato di Spoleto e Norcia.",
      breveLunga: "Nero pregiato di Norcia e Spoleto, in salsa, in crema, sui salumi.",
      foto: "FOTO: tartufo nero su tagliere",
      img: "assets/img/salsa-tartufata.jpg",
      imgAlt: "Barattolo di salsa tartufata",
      inVetrina: 2
    },
    {
      slug: "vini",
      nav: "Vini",
      nome: "Vini di Montefalco",
      titolo: "Vini di Montefalco",
      intro: "Sagrantino, Montefalco Rosso e bianchi di collina: quello che beviamo con i nostri salumi.",
      foto: "FOTO: bottiglie di Montefalco"
    },
    {
      slug: "dispensa",
      nav: "Dispensa",
      nome: "Dispensa",
      titolo: "Dispensa",
      intro: "Olio EVO, miele, legumi, sughi: la parte della bottega che riempie la credenza.",
      foto: "FOTO: scaffale dispensa",
      img: "assets/img/zuppa-rapida.jpg",
      imgAlt: "Confezione di zuppa rapida di legumi"
    },
    {
      slug: "box",
      nav: "Box & degustazioni",
      nome: "Confezioni regalo e degustazioni",
      titolo: "Box e degustazioni",
      intro:
        "Scegliamo noi per te: assortimenti pensati come li comporremmo al bancone, confezionati a mano in bottega.",
      foto: "FOTO: box umbria confezionato",
      pagina: "box.html",
      inNavEvidenza: true
    }
  ];

  /* --------------------------------------------------------- testi comuni */
  const conservazioneSalumi =
    "Conservare in luogo fresco e asciutto (8–14 °C) o in frigorifero nella parte bassa. Una volta aperto, avvolgere il taglio in carta oleata e consumare entro 15 giorni. Spediamo in confezione sottovuoto con imballo isotermico; ordini entro le 12:00 partono lo stesso giorno.";

  const perWild = { testo: "Prodotto per conto di Wild Italy da stabilimento autorizzato IT 9-1949/L CE." };
  const fortunati = {
    testo: "Fortunati Stocchi S.r.l., Via Filippo da Campello 24, 06042 Campello sul Clitunno (PG)."
  };

  /* ----------------------------------------------------------- prodotti */
  const prodotti = [
    {
      slug: "salame-di-cervo",
      nome: "Salame di Cervo",
      categoria: "selvaggina",
      occhiello: "SELVAGGINA · NORCINERIA DI SPOLETO",
      artigianale: true,
      prezzo: 14.5,
      peso: "280 g circa",
      grammi: 280,
      prezzoKg: 51.8,
      foto: "FOTO: salame di cervo",
      img: "assets/img/salame-cervo-1.jpg",
      galleriaImg: ["assets/img/salame-cervo-1.jpg", "assets/img/salame-cervo-2.jpg"],
      descrizione:
        "Carne di cervo selezionata, sale, pepe e una lenta stagionatura in cantina. Il più accessibile dei nostri salumi di selvaggina: piace anche a chi non ha mai provato la selvaggina.",
      nota: "Più dolce e leggermente affumicato",
      notaBancone: "«Cervo: più dolce e leggermente affumicato.»",
      profilo: [
        { nome: "DOLCEZZA", valore: 3 },
        { nome: "AFFUMICATO", valore: 2 },
        { nome: "SAPIDITÀ", valore: 2 }
      ],
      schede: { FORMATO: "Intero, 280 g circa", STAGIONATURA: "60 giorni", PRODUTTORE: "Norcineria di Spoleto" },
      galleria: [
        "FOTO 1: salame intero su tagliere",
        "FOTO 2: affettato",
        "FOTO 3: dettaglio grana",
        "FOTO 4: confezione"
      ],
      /* I formati oltre l'intero non hanno prezzo nel mockup: derivati dai
         51,80 €/kg dichiarati nella scheda 1d/2b. */
      formati: [
        { nome: "Intero", peso: "280 g", grammi: 280, prezzo: 14.5 },
        { nome: "Mezzo", peso: "140 g", grammi: 140, prezzo: 7.25 },
        { nome: "Affettato", peso: "100 g", grammi: 100, prezzo: 5.2 }
      ],
      ingredienti:
        "Carne di suino, carne di cervo (6,5% minimo), LATTE scremato in polvere, sale, saccarosio, destrosio, pepe, antiossidanti: E300, esaltatore di sapidità: E621, aglio, aromi, conservanti: E252, E250. Allergeni: latte; può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1758 kJ / 424 kcal · grassi 36,0 g (saturi 13,0 g) · carboidrati 3,3 g (zuccheri 2,9 g) · proteine 22,0 g · sale 3,76 g",
      conservazione: conservazioneSalumi,
      produttore: {
        daDefinire: true,
        testo:
          "Scheda del produttore da scrivere con la Norcineria di Spoleto (storia, allevamento, disciplinare)."
      },
      abbinamenti: ["degustazione-selvaggina", "sagrantino-montefalco"]
    },
    {
      slug: "salame-di-capriolo",
      nome: "Salame di Capriolo",
      categoria: "selvaggina",
      occhiello: "SELVAGGINA · NORCINERIA DI SPOLETO",
      artigianale: true,
      prezzo: 15.9,
      peso: "280 g circa",
      grammi: 280,
      prezzoKg: 56.8,
      foto: "FOTO: salame di capriolo",
      img: "assets/img/salame-capriolo-1.jpg",
      galleriaImg: ["assets/img/salame-capriolo-1.jpg", "assets/img/salame-capriolo-2.jpg"],
      descrizione:
        "Il più fine dei tre. Carne di capriolo, sale, pepe e stagionatura lenta: il bosco si sente nelle erbe, non nella selvatichezza.",
      nota: "Fine ed elegante, sentore di erbe di bosco",
      notaBancone: "«Capriolo: fine ed elegante, sentore di erbe di bosco.»",
      profilo: [
        { nome: "DOLCEZZA", valore: 2 },
        { nome: "AFFUMICATO", valore: 1 },
        { nome: "SAPIDITÀ", valore: 3 }
      ],
      galleria: ["FOTO 1: salame di capriolo su tagliere", "FOTO 2: affettato", "FOTO 3: dettaglio grana"],
      schede: { FORMATO: "Intero, 280 g circa", PRODUTTORE: "Norcineria di Spoleto" },
      ingredienti:
        "Carne di suino, carne di capriolo (10% minimo), LATTE scremato in polvere, sale, saccarosio, destrosio, aromi, pepe, peperoncino, antiossidanti: E300, E301, esaltatore di sapidità: E621, conservanti: E252, E250, correttore di pH: E262. Allergeni: latte; può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1758 kJ / 424 kcal · grassi 36,0 g (saturi 13,0 g) · carboidrati 3,3 g (zuccheri 2,9 g) · proteine 22,0 g · sale 3,76 g",
      conservazione: conservazioneSalumi,
      abbinamenti: ["degustazione-selvaggina", "sagrantino-montefalco"]
    },
    {
      slug: "salame-di-cinghiale",
      nome: "Salame di Cinghiale",
      categoria: "selvaggina",
      occhiello: "SELVAGGINA · NORCINERIA DI SPOLETO",
      artigianale: true,
      prezzo: 13.9,
      peso: "300 g circa",
      grammi: 300,
      prezzoKg: 46.3,
      foto: "FOTO: salame di cinghiale",
      img: "assets/img/salame-cinghiale-1.jpg",
      galleriaImg: ["assets/img/salame-cinghiale-1.jpg", "assets/img/salame-cinghiale-2.jpg"],
      descrizione:
        "Il carattere più deciso del banco: cinghiale, pepe in grani e una chiusura lunga e speziata. Da tagliere, con pane sciapo.",
      nota: "Deciso e rustico, chiusura lunga e speziata",
      notaBancone: "«Cinghiale: deciso e rustico, chiusura lunga e speziata.»",
      profilo: [
        { nome: "DOLCEZZA", valore: 1 },
        { nome: "AFFUMICATO", valore: 2 },
        { nome: "SAPIDITÀ", valore: 4 }
      ],
      galleria: ["FOTO 1: salame di cinghiale su tagliere", "FOTO 2: affettato", "FOTO 3: dettaglio grana"],
      schede: { FORMATO: "Intero, 300 g circa", PRODUTTORE: "Norcineria di Spoleto" },
      ingredienti:
        "Carne di suino, carne di cinghiale (6,5% minimo), LATTE scremato in polvere, sale, saccarosio, destrosio, pepe, antiossidanti: E300, esaltatore di sapidità: E621, aglio, aromi, conservanti: E252, E250. Allergeni: latte; può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1758 kJ / 424 kcal · grassi 36,0 g (saturi 13,0 g) · carboidrati 3,3 g (zuccheri 2,9 g) · proteine 22,0 g · sale 3,76 g",
      conservazione: conservazioneSalumi,
      abbinamenti: ["degustazione-selvaggina", "sagrantino-montefalco"]
    },
    {
      slug: "sagrantino-montefalco",
      nome: "Sagrantino di Montefalco DOCG",
      categoria: "vini",
      occhiello: "VINI DI MONTEFALCO · UMBRIA",
      prezzo: 24,
      peso: "750 ml",
      foto: "FOTO: bottiglia",
      descrizione: "Tannino deciso, regge la dolcezza del cervo.",
      nota: "Tannino deciso, regge la dolcezza del cervo",
      galleria: ["FOTO 1: bottiglia", "FOTO 2: etichetta"],
      abbinamenti: ["salame-di-cervo", "degustazione-selvaggina"]
    },

    /* ------------------------------------------- dal vecchio sito (etichette) */
    {
      slug: "salame-ubriaco",
      nome: "Salame ubriaco al vino rosso",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 10.9,
      peso: "350 g circa",
      foto: "FOTO: salame ubriaco al vino rosso",
      img: "assets/img/salame-ubriaco-1.jpg",
      galleriaImg: ["assets/img/salame-ubriaco-1.jpg", "assets/img/salame-ubriaco-2.jpg"],
      descrizione:
        "Impasto a grana grossa lasciato macerare per settimane nel vino rosso. La stagionatura attenua l'alcol e lascia i sentori di un generoso vino dell'Umbria.",
      ingredienti:
        "Carne di suino, sale, saccarosio, destrosio, pepe, vino, finocchio, aglio, antiossidanti: E300, E301, esaltatore di sapidità: E621, correttore di pH: E262, conservanti: E252, E250. Allergeni: può contenere tracce di latte e di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1603 kJ / 387 kcal · grassi 32,2 g (saturi 11,3 g) · carboidrati 3,0 g (zuccheri 2,4 g) · proteine 21,3 g · sale 3,63 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      slug: "ciauscolo",
      nome: "Ciauscolo",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 12.9,
      peso: "450 g circa",
      foto: "FOTO: ciauscolo",
      img: "assets/img/ciauscolo-1.jpg",
      galleriaImg: ["assets/img/ciauscolo-1.jpg", "assets/img/ciauscolo-2.jpg"],
      descrizione:
        "Il salame morbido da spalmare, dalla tradizione delle campagne marchigiane: tagli scelti della pancia del suino, stagionati appena una settimana. Sul pane, per tartine e crostini.",
      ingredienti:
        "Grasso di suino, carne di suino, sale, saccarosio, destrosio, pepe, peperoncino, aglio, antiossidanti: E300, E301, esaltatore di sapidità: E621, conservanti: E252, E250. Allergeni: può contenere tracce di LATTE e di SOLFITI. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1983 kJ / 481 kcal · grassi 47,9 g (saturi 17,4 g) · carboidrati 0,2 g (zuccheri 0,0 g) · proteine 12,3 g · sale 2,9 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      slug: "salamella-di-fegato",
      nome: "Salamella di fegato",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 12.9,
      peso: "450 g circa",
      foto: "FOTO: salamella di fegato",
      img: "assets/img/salamella-fegato-1.jpg",
      galleriaImg: ["assets/img/salamella-fegato-1.jpg", "assets/img/salamella-fegato-2.jpg"],
      descrizione:
        "Fegato di suino insieme ad altre parti del maiale. La forma a salamella permette una stagionatura veloce.",
      ingredienti:
        "Carne di suino, fegato di suino (30%), cuore di suino, sale, saccarosio, destrosio, pepe, aglio, finocchio, peperoncino, antiossidanti: E300, E301, esaltatore di sapidità: E621, conservanti: E252, E250. Allergeni: può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1033 kJ / 243 kcal · grassi 16,9 g (saturi 5,9 g) · carboidrati 2,5 g (zuccheri 2,2 g) · proteine 21,5 g · sale 3,6 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      slug: "salamella-di-maiale",
      nome: "Salamella di maiale",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 11.9,
      peso: "350 g circa",
      foto: "FOTO: salamella di maiale",
      img: "assets/img/salamella-maiale.jpg",
      descrizione:
        "Insaccato a salamella di buona stagionatura, macinatura fine e gusto dolce. Un classico per chi ama il salame.",
      ingredienti:
        "Carne di suino, LATTE scremato in polvere, sale, saccarosio, destrosio, aromi, pepe, antiossidanti: E300, E301, esaltatore di sapidità: E621, aglio, conservanti: E252, E250. Allergeni: latte; può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1796 kJ / 434 kcal · grassi 37,5 g (saturi 13,4 g) · carboidrati 3,1 g (zuccheri 2,9 g) · proteine 20,8 g · sale 3,7 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      slug: "coglione-del-mulo",
      nome: "Coglione del mulo",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 9,
      peso: "300 g circa",
      foto: "FOTO: coglione del mulo",
      img: "assets/img/coglione-mulo-2.jpg",
      galleriaImg: ["assets/img/coglione-mulo-2.jpg", "assets/img/coglione-mulo-1.jpg"],
      descrizione:
        "Salume di antichissime origini, nato sulle montagne dell'Italia centrale: pasta a grana fine con al centro un lardello di grasso di maiale pepato. Stagionatura medio-lunga, per chi cerca sapori forti.",
      ingredienti:
        "Carne di suino, lardo di suino, LATTE scremato in polvere, sale, saccarosio, destrosio, pepe, aglio, aromi, antiossidanti: E300, E301, esaltatore di sapidità: E621, conservanti: E252, E250, correttore di pH: E262. Allergeni: latte; può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1637 kJ / 397 kcal · grassi 32,9 g (saturi 11,6 g) · carboidrati 2,8 g (zuccheri 2,5 g) · proteine 21,8 g · sale 3,7 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      /* Il vecchio sito lo chiamava "IGP Norcia": tolto finché non è verificato,
         la descrizione dice che è fatto con la spalla. */
      slug: "prosciutto-tascabile",
      nome: "Prosciutto tascabile",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 28,
      peso: "1 kg circa",
      foto: "FOTO: prosciutto tascabile affettato",
      img: "assets/img/prosciutto-tascabile-1.jpg",
      galleriaImg: ["assets/img/prosciutto-tascabile-1.jpg", "assets/img/prosciutto-tascabile-2.jpg"],
      descrizione:
        "Ricavato dalla noce della spalla di suini pesanti adulti: la parte più magra, per chi vuole tutto il sapore senza eccessi.",
      ingredienti:
        "Carne di suino, sale, pepe, saccarosio, destrosio, finocchio, aglio, peperoncino, antiossidanti: E300, E301, conservanti: E252, E250. Allergeni: nessuno indicato in etichetta. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 985 kJ / 235 kcal · grassi 13,7 g (saturi 4,84 g) · carboidrati 0,1 g (zuccheri 0,1 g) · proteine 27,8 g · sale 5,04 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      slug: "pecorino-13-mesi",
      nome: "Pecorino stagionato 13 mesi",
      categoria: "formaggi",
      occhiello: "FORMAGGI",
      prezzo: 37,
      peso: "1 kg circa",
      foto: "FOTO: pecorino stagionato 13 mesi",
      img: "assets/img/pecorino-13-mesi.jpg",
      descrizione:
        "Pecorino Campagnolo di Amatrice, solo latte di pecora. Tredici mesi di stagionatura lo rendono piccante e dalla pasta secca: da grattugiare o per chi ama i sapori forti.",
      ingredienti:
        "LATTE di pecora, caglio, fermenti lattici, sale. Trattamento crosta: olio di semi di girasole e aceto di vino bianco. Crosta non edibile. Allergeni: latte.",
      valori:
        "Per 100 g: energia 1627 kJ / 389 kcal · grassi 30,0 g (saturi 20,4 g) · carboidrati 0,3 g (zuccheri 0,3 g) · proteine 29,1 g · sale 1,6 g",
      conservazione: "In luogo fresco e asciutto, al riparo dalla luce e da fonti di calore.",
      produttore: { testo: "Petrucchi S.r.l., Via A. M. Ricci 11, 02100 Rieti (RI) — stabilimento IT 12 215 CE." }
    },
    {
      slug: "salame-cinghiale-tartufo",
      nome: "Salame di cinghiale al tartufo",
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 14.9,
      peso: "350 g circa",
      foto: "FOTO: salame di cinghiale al tartufo",
      img: "assets/img/salame-cinghiale-tartufo-1.jpg",
      galleriaImg: ["assets/img/salame-cinghiale-tartufo-1.jpg", "assets/img/salame-cinghiale-tartufo-2.jpg"],
      descrizione:
        "Tartufo estivo aggiunto direttamente nella macinatura, con carne di cinghiale su una base di maiale selezionato. Prima il sapido del cinghiale, poi resta in bocca la fragranza del tartufo.",
      ingredienti:
        "Carne di suino, carne di cinghiale (6,5% minimo), tartufo estivo (Tuber aestivum Vitt.) 2% max, LATTE scremato in polvere, sale, saccarosio, destrosio, aromi, pepe, aglio, antiossidanti: E300, esaltatore di sapidità: E621, conservanti: E252, E250, correttore di pH: E262. Allergeni: latte; può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1636 kJ / 395 kcal · grassi 34,0 g (saturi 12,0 g) · carboidrati 1,1 g (zuccheri 0,8 g) · proteine 21,0 g · sale 3,7 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      slug: "salsa-tartufata",
      nome: "Salsa tartufata",
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 6,
      peso: "130 g",
      foto: "FOTO: barattolo di salsa tartufata",
      img: "assets/img/salsa-tartufata.jpg",
      descrizione: "Tartufo estivo e funghi champignon: sulle bruschette o per condire la pasta.",
      ingredienti:
        "Funghi coltivati (Agaricus bisporus), olio extra vergine di oliva, tartufo estivo 5% (Tuber aestivum Vitt.), olive nere, carote, SEDANO, prezzemolo, preparato per brodo (esaltatore di sapidità: glutammato monosodico), cipolla disidratata, LATTOSIO, spezie, sale, aromi. Allergeni: sedano, latte (lattosio). Senza conservanti. Funghi e tartufi di origine UE.",
      valori:
        "Per 100 g: energia 382 kJ / 92 kcal · grassi 8,0 g (saturi 1,2 g) · carboidrati 1,2 g (zuccheri 0,5 g) · proteine 2,8 g · sale 2,4 g",
      conservazione: "In luogo fresco e asciutto. Dopo l'apertura conservare in frigorifero e consumare in breve tempo.",
      produttore: fortunati
    },
    {
      slug: "olio-tartufo-nero",
      nome: "Olio al tartufo nero pregiato",
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 7,
      peso: "60 ml",
      foto: "FOTO: bottiglietta di olio al tartufo nero",
      img: "assets/img/olio-tartufo-nero.jpg",
      descrizione:
        "Condimento a base di olio extra vergine di oliva italiano, aromatizzato al tartufo nero pregiato. Sapore dolce e fungoso: su bruschette, risotti, pasta o carne.",
      ingredienti: "Olio extra vergine di oliva italiano 98%, aroma. Allergeni: nessuno indicato in etichetta.",
      valori: "Per 100 ml: energia 3447 kJ / 825 kcal · grassi 92 g (saturi 15 g) · carboidrati 0 g · proteine 0 g · sale 0 g",
      produttore: { testo: "Tartufi Alfonso Fortunati, Via Filippo da Campello 24, 06042 Campello sul Clitunno (PG)." }
    },
    {
      slug: "olio-tartufo-bianco",
      nome: "Olio al tartufo bianco pregiato",
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 7,
      peso: "60 ml",
      foto: "FOTO: bottiglietta di olio al tartufo bianco",
      img: "assets/img/olio-tartufo-bianco.jpg",
      descrizione: "Condimento a base di olio extra vergine di oliva italiano, aromatizzato al tartufo bianco pregiato.",
      ingredienti: "Olio extra vergine di oliva italiano 98%, aroma. Allergeni: nessuno indicato in etichetta.",
      valori: "Per 100 ml: energia 3447 kJ / 825 kcal · grassi 92 g (saturi 15 g) · carboidrati 0 g · proteine 0 g · sale 0 g",
      conservazione: "Lontano da fonti di calore e dalla luce diretta.",
      produttore: fortunati
    },
    {
      slug: "lenticchie-umbre",
      nome: "Lenticchie umbre",
      categoria: "dispensa",
      occhiello: "DISPENSA · UMBRIA",
      prezzo: 6.8,
      peso: "500 g",
      foto: "FOTO: confezione di lenticchie umbre",
      img: "assets/img/lenticchie.jpg",
      descrizione:
        "Lenticchie umbre selezionate: piccole, quindi più delicate e saporite. Ottime con salsiccia e zampone. Sciacquare, cuocere in acqua 25–30 minuti e salare a fine cottura.",
      ingredienti: "Lenticchie secche umbre. Origine Italia, Umbria.",
      valori:
        "Per 100 g: energia 1470 kJ / 352 kcal · grassi 1,06 g (saturi 0,15 g) · carboidrati 63,4 g (zuccheri 2,03 g) · proteine 24,6 g · sale 0,01 g",
      produttore: fortunati
    },
    {
      slug: "zuppa-rapida",
      nome: "Zuppa rapida",
      categoria: "dispensa",
      occhiello: "DISPENSA",
      prezzo: 6.2,
      peso: "500 g",
      foto: "FOTO: confezione di zuppa rapida di legumi",
      img: "assets/img/zuppa-rapida.jpg",
      descrizione: "Legumi misti e orzo per una zuppa invernale, pronta in circa 30 minuti di cottura.",
      ingredienti:
        "Lenticchie, ORZO perlato, fagioli, azuki verdi, piselli. Allergeni: glutine (orzo); può contenere SOIA. Made in Italy.",
      valori:
        "Per 100 g: energia 1512 kJ / 357 kcal · grassi 0,9 g (saturi 0,2 g) · carboidrati 67,3 g (zuccheri 1,7 g) · proteine 14,5 g · sale 0,07 g",
      produttore: fortunati
    },

    /* ------------------------------------------------------------- box */
    {
      slug: "degustazione-selvaggina",
      nome: "Degustazione salumi di selvaggina",
      categoria: "box",
      tipo: "box",
      etichetta: "IL PIÙ SCELTO",
      etichettaEstesa: "DEGUSTAZIONE GUIDATA",
      inEvidenza: true,
      occhiello: "BOX E DEGUSTAZIONI",
      prezzo: 49,
      prezzoPieno: 58.5,
      foto: "FOTO: tre salami + pecorino",
      descrizione:
        "Il cervo accanto al capriolo e al cinghiale: è così che si capisce quanto è dolce. Con pecorino stagionato e le tre schede di assaggio.",
      descrizioneBreve: "Cervo, capriolo, cinghiale + pecorino stagionato. Con schede di assaggio.",
      notaAbbinamento: "Accanto a capriolo e cinghiale si capisce quanto è dolce.",
      contenuto: [
        { t: "Salame di cervo, 280 g", n: "dolce, affumicato" },
        { t: "Salame di capriolo, 280 g", n: "fine, erbaceo" },
        { t: "Salame di cinghiale, 300 g", n: "deciso, speziato" },
        { t: "Pecorino stagionato, 250 g" },
        { t: "Tre schede di assaggio stampate" }
      ],
      galleria: ["FOTO 1: tre salami + pecorino", "FOTO 2: schede di assaggio", "FOTO 3: confezione aperta"],
      conservazione: conservazioneSalumi
    },
    {
      slug: "box-umbria",
      nome: "Box Umbria",
      categoria: "box",
      tipo: "box",
      etichetta: "IL REGALO CLASSICO",
      occhiello: "BOX E DEGUSTAZIONI",
      prezzo: 62,
      prezzoPieno: 74.5,
      foto: "FOTO: box umbria confezionato",
      descrizione: "Ciauscolo, pecorino di fossa, olio EVO, miele di acacia, Sagrantino.",
      descrizioneBreve: "Ciauscolo, pecorino di fossa, olio EVO, miele di acacia, Sagrantino.",
      contenuto: [
        { t: "Ciauscolo di Norcia, 400 g" },
        { t: "Pecorino di fossa, 300 g" },
        { t: "Salsa tartufata, 90 g" },
        { t: "Olio EVO umbro, 500 ml" },
        { t: "Miele di acacia, 250 g" },
        { t: "Sagrantino di Montefalco DOCG" }
      ],
      galleria: ["FOTO 1: box umbria aperto", "FOTO 2: confezione chiusa", "FOTO 3: dettaglio biglietto"],
      conservazione: conservazioneSalumi
    },
    {
      slug: "box-tartufo",
      nome: "Box Tartufo",
      categoria: "box",
      tipo: "box",
      occhiello: "BOX E DEGUSTAZIONI",
      prezzo: 58,
      prezzoPieno: 69,
      foto: "FOTO: tagliere tartufo",
      descrizione: "Salsa tartufata, crema di pecorino al tartufo, salame al tartufo, olio.",
      descrizioneBreve: "Salsa tartufata, crema di pecorino al tartufo, salame al tartufo, olio.",
      contenuto: [
        { t: "Salsa tartufata" },
        { t: "Crema di pecorino al tartufo" },
        { t: "Salame al tartufo" },
        { t: "Olio al tartufo" }
      ],
      galleria: ["FOTO 1: tagliere tartufo", "FOTO 2: box aperto"],
      conservazione: conservazioneSalumi
    },
    {
      slug: "box-regalo-oro",
      nome: "Box Regalo Oro",
      categoria: "box",
      tipo: "box",
      inArrivo: true,
      occhiello: "BOX E DEGUSTAZIONI",
      foto: "FOTO: box regalo oro",
      descrizione: "Contenuto e prezzo da definire con la bottega.",
      galleria: ["FOTO 1: box regalo oro"]
    }
  ];

  /* -------------------------------------------------------------- extra */
  const scorciatoie = [
    { t: "Non so cosa scegliere", href: "box.html" },
    { t: "Idea regalo", href: "box.html#regalo" },
    { t: "Primo assaggio", href: "prodotto.html?p=degustazione-selvaggina" },
    { t: "Sotto i 20 €", href: "categoria.html?c=selvaggina" }
  ];

  const bottega = {
    nome: "Wild Italy",
    sottotitolo: "BOTTEGA · SPOLETO",
    via: "Via Filitteria 12, Spoleto (PG)",
    orari: "Lun–Sab 8:30–13:30 · 16:00–20:00",
    tel: "+39 0743 000000",
    telHref: "tel:+390743000000",
    email: "ciao@wilditaly.it",
    piva: "P.IVA 00000000000",
    mappa: "https://www.openstreetmap.org/search?query=Via%20Filitteria%2012%20Spoleto"
  };

  /* ------------------------------------------------------------ helper */
  const byCat = (slug) => prodotti.filter((p) => p.categoria === slug && !p.inArrivo);
  const get = (slug) => prodotti.find((p) => p.slug === slug) || null;
  const cat = (slug) => categorie.find((c) => c.slug === slug) || null;

  return { categorie, prodotti, scorciatoie, bottega, byCat, get, cat };
})();
