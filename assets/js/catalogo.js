/* ==========================================================================
   Wild Italy — catalogo
   Codice di Emanuele Parmegiani.
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
      nome: "Salumi alla selvaggina",
      titolo: "Salumi alla selvaggina",
      intro:
        "Salami di suino con carne di cervo, capriolo o cinghiale, tartufo compreso. Caratteri diversi: si parte dal più dolce e si arriva al più deciso. Ogni scheda ti dice che sapore aspettarti.",
      breve: "Al cervo, al capriolo, al cinghiale.",
      breveLunga: "Salami al cervo, al capriolo e al cinghiale, uno anche col tartufo.",
      foto: "FOTO: salame al cervo affettato",
      img: "assets/img/salame-cervo-1.jpg",
      inVetrina: 1,
      helper: {
        occhiello: "NON SAI DA DOVE INIZIARE?",
        testo: "Prendi la degustazione: i tre salami insieme.",
        cta: "Vedi la degustazione",
        href: "prodotto.html?p=degustazione-selvaggina"
      }
    },
    {
      slug: "salumi",
      nav: "Salumi",
      nome: "Salumi tradizionali",
      titolo: "Salumi tradizionali",
      intro: "Il banco di sempre: salami, salamelle e tagli da tagliere.",
      foto: "FOTO: banco salumi tradizionali",
      img: "assets/img/prosciutto-tascabile-1.jpg",
      imgAlt: "Tascabile affettato sul tagliere"
    },
    {
      slug: "formaggi",
      nav: "Formaggi",
      nome: "Formaggi",
      titolo: "Formaggi",
      intro: "Pecorino stagionato 12 mesi, solo latte di pecora, e formaggio misto al tartufo di Bettona.",
      breve: "Pecorino stagionato e formaggio al tartufo.",
      foto: "FOTO: pecorini a scalare",
      img: "assets/img/pecorino-12-mesi.jpg",
      inVetrina: 3
    },
    {
      slug: "tartufo",
      nav: "Tartufo",
      nome: "Tartufo e salse",
      titolo: "Tartufo e salse",
      intro: "Tartufo estivo in salsa, nel sugo, nel purè e nel miele, e condimenti aromatizzati al tartufo.",
      breve: "Salse, sugo, purè, miele e condimenti al tartufo.",
      breveLunga: "Tartufo estivo in salsa, nel sugo, nel purè e nel miele, e condimenti aromatizzati al tartufo.",
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
      intro: "I vini della famiglia Napolini, vignaioli di Montefalco: il rosso, il bianco e il rosato che beviamo con i nostri salumi.",
      foto: "FOTO: bottiglie di Montefalco",
      img: "assets/img/grechetto-napolini-1.jpg",
      imgAlt: "Bottiglia di Grechetto Clara Vinea Napolini"
    },
    {
      slug: "dispensa",
      nav: "Dispensa",
      nome: "Dispensa",
      titolo: "Dispensa",
      intro: "Legumi umbri, farro, zuppe da cuocere e ciambelline al vino fatte a mano: la parte della bottega che riempie la credenza.",
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
    "Conservare lontano da fonti di calore. Spediamo in confezione sottovuoto; la consegna avviene normalmente in circa 48 ore.";

  const perWild = {
    testo:
      "Prodotto per conto di Wild Italy di Parmegiani Diego, Via Porta Fuga 26, 06049 Spoleto (PG), da stabilimento autorizzato IT 9-1949/L CE."
  };
  const fortunati = {
    testo: "Fortunati Stocchi S.r.l., Via Filippo da Campello 24, 06042 Campello sul Clitunno (PG)."
  };
  const marcheseGrillo = {
    testo: "Prodotto e confezionato dall'Azienda agricola Il Marchese del Grillo, Strada della Fontanella 18, Oriolo Romano (VT)."
  };

  /* ----------------------------------------------------------- prodotti */
  const prodotti = [
    {
      slug: "salame-di-cervo",
      nome: "Salame al cervo",
      categoria: "selvaggina",
      occhiello: "SELVAGGINA",
      prezzo: 12.9,
      peso: "350 g circa",
      grammi: 350,
      foto: "FOTO: salame al cervo",
      img: "assets/img/salame-cervo-1.jpg",
      galleriaImg: ["assets/img/salame-cervo-1.jpg", "assets/img/salame-cervo-2.jpg"],
      descrizione:
        "Compatto, magro e pulito al taglio, senza palline di pepe, cartilagini o pezzi di grasso evidenti. Al morso è morbido e uniforme. Il gusto parte dolce e delicato, poi lascia lentamente spazio a una piacevole nota affumicata. È un salame particolare ma mai aggressivo, facile da apprezzare anche per chi si avvicina per la prima volta ai salumi di selvaggina.",
      nota: "Il più dolce dei tre",
      notaBancone: "«Cervo: il più dolce dei tre.»",
      profilo: [
        { nome: "DOLCEZZA", valore: 3 },
        { nome: "PARTE GRASSA", valore: 1 },
        { nome: "SAPIDITÀ", valore: 2 }
      ],
      galleria: [
        "FOTO 1: salame intero su tagliere",
        "FOTO 2: affettato",
        "FOTO 3: dettaglio grana",
        "FOTO 4: confezione"
      ],
      ingredienti:
        "Carne di suino, carne di cervo (6,5% minimo), LATTE scremato in polvere, sale, saccarosio, destrosio, pepe, antiossidanti: E300, esaltatore di sapidità: E621, aglio, aromi, conservanti: E252, E250. Allergeni: latte; può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1758 kJ / 424 kcal · grassi 36,0 g (saturi 13,0 g) · carboidrati 3,3 g (zuccheri 2,9 g) · proteine 22,0 g · sale 3,76 g",
      conservazione: conservazioneSalumi,
      produttore: perWild,
      abbinamenti: ["degustazione-selvaggina", "napos-rosso"]
    },
    {
      slug: "salame-di-capriolo",
      nome: "Norcinetta al capriolo",
      denominazione: "Norcinetta al capriolo, salame stagionato",
      categoria: "selvaggina",
      occhiello: "SELVAGGINA",
      prezzo: 9.9,
      peso: "250 g circa",
      grammi: 250,
      foto: "FOTO: norcinetta al capriolo",
      img: "assets/img/salame-capriolo-1.jpg",
      galleriaImg: ["assets/img/salame-capriolo-1.jpg", "assets/img/salame-capriolo-2.jpg"],
      descrizione:
        "Dolciastro, morbido e piacevole al primo momento, ricorda il cervo ma con un carattere più vivace. Nel finale arriva una leggera nota di peperoncino che accende il gusto senza coprirlo, lasciando una sensazione più decisa e dinamica in bocca.",
      nota: "Vivace, con un pizzico di peperoncino",
      notaBancone: "«Capriolo: vivace, con un pizzico di peperoncino.»",
      profilo: [
        { nome: "DOLCEZZA", valore: 2 },
        { nome: "PARTE GRASSA", valore: 2 },
        { nome: "SAPIDITÀ", valore: 3 }
      ],
      galleria: ["FOTO 1: norcinetta al capriolo su tagliere", "FOTO 2: affettato", "FOTO 3: dettaglio grana"],
      ingredienti:
        "Carne di suino, carne di capriolo (10% minimo), LATTE scremato in polvere, sale, saccarosio, destrosio, aromi, pepe, peperoncino, antiossidanti: E300, E301, esaltatore di sapidità: E621, conservanti: E252, E250, correttore di pH: E262. Allergeni: latte; può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1758 kJ / 424 kcal · grassi 36,0 g (saturi 13,0 g) · carboidrati 3,3 g (zuccheri 2,9 g) · proteine 22,0 g · sale 3,76 g",
      conservazione: conservazioneSalumi,
      produttore: perWild,
      abbinamenti: ["degustazione-selvaggina", "napos-rosso"]
    },
    {
      slug: "salame-di-cinghiale",
      nome: "Salame al cinghiale",
      categoria: "selvaggina",
      occhiello: "SELVAGGINA",
      prezzo: 11.9,
      peso: "350 g circa",
      grammi: 350,
      foto: "FOTO: salame al cinghiale",
      img: "assets/img/salame-cinghiale-1.jpg",
      galleriaImg: ["assets/img/salame-cinghiale-1.jpg", "assets/img/salame-cinghiale-2.jpg"],
      descrizione:
        "Sapido, pieno e deciso fin dal primo morso. Il gusto del cinghiale è intenso, rustico e diretto, con una presenza che si sente subito e resta a lungo sul palato. È uno dei salami più saporiti della selezione, con un carattere forte ma equilibrato, pensato per chi cerca un gusto netto e riconoscibile.",
      nota: "Deciso e rustico, chiusura lunga e speziata",
      notaBancone: "«Cinghiale: deciso e rustico, chiusura lunga e speziata.»",
      profilo: [
        { nome: "DOLCEZZA", valore: 1 },
        { nome: "PARTE GRASSA", valore: 3 },
        { nome: "SAPIDITÀ", valore: 4 }
      ],
      galleria: ["FOTO 1: salame al cinghiale su tagliere", "FOTO 2: affettato", "FOTO 3: dettaglio grana"],
      ingredienti:
        "Carne di suino, carne di cinghiale (6,5% minimo), LATTE scremato in polvere, sale, saccarosio, destrosio, pepe, antiossidanti: E300, esaltatore di sapidità: E621, aglio, aromi, conservanti: E252, E250. Allergeni: latte; può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1758 kJ / 424 kcal · grassi 36,0 g (saturi 13,0 g) · carboidrati 3,3 g (zuccheri 2,9 g) · proteine 22,0 g · sale 3,76 g",
      conservazione: conservazioneSalumi,
      produttore: perWild,
      abbinamenti: ["degustazione-selvaggina", "napos-rosso"]
    },
    /* Napolini: dati letti a mano sulle etichette. Per ora in bottega ci sono questi tre
       vini, 9 € l'uno; l'elenco ingredienti completo è dietro il QR dell'etichetta. */
    {
      slug: "napos-rosso",
      nome: "Napo's · Umbria IGT Rosso",
      denominazione: "Umbria Indicazione Geografica Tipica Rosso, annata 2024, 14% vol",
      claim: "Sagrantino e Sangiovese, il carattere dell'Umbria in un rosso di famiglia.",
      categoria: "vini",
      occhiello: "VINI DI MONTEFALCO · UMBRIA",
      prezzo: 9,
      peso: "750 ml",
      ml: 750,
      foto: "FOTO: bottiglia di Napo's rosso",
      img: "assets/img/napos-napolini-1.jpg",
      galleriaImg: ["assets/img/napos-napolini-1.jpg", "assets/img/napos-napolini-2.jpg"],
      descrizione:
        "Un rosso umbro prodotto da un'azienda familiare, con un taglio di Sagrantino e Sangiovese, due vitigni che raccontano bene il carattere del territorio. Il Sangiovese porta freschezza, frutto e bevibilità; il Sagrantino aggiunge struttura, intensità e un carattere più deciso. Il risultato è un vino pieno, caldo e avvolgente, con un gusto ricco ma piacevole, pensato per accompagnare bene salumi, formaggi stagionati e piatti saporiti. È un vino che conserva il fascino delle produzioni di piccola scala: semplice, autentico e legato alla tradizione familiare umbra.",
      nota: "Sangiovese, merlot e sagrantino",
      ingredienti: "Uve sangiovese, merlot e sagrantino. Allergeni: contiene solfiti.",
      valori: "Per 100 ml: energia 318 kJ / 77 kcal",
      produttore: {
        testo:
          "Prodotto e imbottigliato all'origine dall'Az. Agr. Napolini di Scattini Tiziana, Montefalco (PG). Vignaioli Indipendenti."
      },
      abbinamenti: ["salame-di-cervo", "pecorino-12-mesi"]
    },
    {
      slug: "grechetto-napolini",
      nome: "Clara Vinea · Grechetto Colli Martani DOC",
      denominazione: "Colli Martani Denominazione di Origine Controllata Grechetto, annata 2025, 13,5% vol",
      claim: "Grechetto in purezza: secco, fresco e con il suo tipico finale mandorlato.",
      categoria: "vini",
      occhiello: "VINI DI MONTEFALCO · UMBRIA",
      prezzo: 9,
      peso: "750 ml",
      ml: 750,
      foto: "FOTO: bottiglia di Grechetto Napolini",
      img: "assets/img/grechetto-napolini-1.jpg",
      galleriaImg: ["assets/img/grechetto-napolini-1.jpg", "assets/img/grechetto-napolini-2.jpg"],
      descrizione:
        "Un bianco umbro ottenuto da sole uve Grechetto, vitigno tipico del territorio. Al palato è secco, fresco e deciso, con una buona struttura e un gusto pulito. La sua firma arriva nel finale, con la tipica nota mandorlata del Grechetto, leggermente amarognola e molto elegante, che lascia la bocca asciutta e invita al sorso successivo. È un vino semplice da bere ma con personalità, ideale per chi cerca un bianco non dolce, territoriale e riconoscibile.",
      nota: "Grechetto dei Colli Martani",
      ingredienti: "Uve Grechetto. Allergeni: contiene solfiti.",
      valori: "Per 100 ml: energia 302 kJ / 73 kcal",
      produttore: {
        testo:
          "Prodotto e imbottigliato all'origine dall'Az. Agr. Napolini di Scattini Tiziana, Montefalco (PG). Vignaioli Indipendenti."
      },
      abbinamenti: ["pecorino-12-mesi", "salame-di-cervo"]
    },
    {
      slug: "vigna-rosa-napolini",
      nome: "Vigna Rosa · Umbria IGT Rosato",
      denominazione: "Umbria Indicazione Geografica Tipica Rosato, annata 2025, 13,5% vol",
      claim: "Sangiovese e Sagrantino in versione rosé: fresco, beverino e da servire ben freddo.",
      categoria: "vini",
      occhiello: "VINI DI MONTEFALCO · UMBRIA",
      prezzo: 9,
      peso: "750 ml",
      ml: 750,
      foto: "FOTO: bottiglia di Vigna Rosa Napolini",
      img: "assets/img/vigna-rosa-napolini-1.jpg",
      galleriaImg: ["assets/img/vigna-rosa-napolini-1.jpg", "assets/img/vigna-rosa-napolini-2.jpg"],
      descrizione:
        "Un rosato fresco e piacevole, ottenuto da Sangiovese e Sagrantino. Il Sangiovese porta una parte più morbida e fruttata, mentre il Sagrantino aggiunge carattere e struttura. Al palato è beverino, fresco e scorrevole, con un gusto semplice ma deciso, pensato per essere servito ben freddo e bevuto con facilità. È il vino giusto per chi cerca qualcosa di leggero e versatile, ma con una personalità tipicamente umbra.",
      nota: "Rosato umbro",
      ingredienti: "Allergeni: contiene solfiti.",
      valori: "Per 100 ml: energia 333 kJ / 80 kcal",
      produttore: {
        testo:
          "Prodotto e imbottigliato all'origine dall'Az. Agr. Napolini di Scattini Tiziana, Montefalco (PG). Vignaioli Indipendenti."
      },
      abbinamenti: ["salame-spalmabile", "salame-di-capriolo"]
    },
    {
      /* dati dall'etichetta; prezzo indicativo, da confermare col cliente */
      slug: "sagrantino-passito-napolini",
      nome: "Montefalco Sagrantino Passito DOCG",
      denominazione: "Montefalco Sagrantino Passito Denominazione di Origine Controllata e Garantita, annata 2021, 13,5% vol",
      categoria: "vini",
      occhiello: "VINI DI MONTEFALCO · UMBRIA",
      prezzo: 22,
      peso: "500 ml",
      ml: 500,
      foto: "FOTO: bottiglia di Sagrantino Passito Napolini",
      img: "assets/img/sagrantino-passito-napolini-1.jpeg",
      galleriaImg: ["assets/img/sagrantino-passito-napolini-1.jpeg", "assets/img/sagrantino-passito-napolini-2.jpeg"],
      galleria: ["FOTO 1: bottiglia, fronte", "FOTO 2: retroetichetta"],
      descrizione:
        "Il Sagrantino passito della famiglia Napolini, vignaioli di Montefalco. DOCG, annata 2021, 13,5% vol, bottiglia da 50 cl.",
      nota: "Sagrantino passito",
      ingredienti: "Allergeni: contiene solfiti.",
      produttore: {
        testo:
          "Imbottigliato nella zona di produzione, Montefalco (PG), da Napolini di Scattini Tiziana, PG/7713."
      }
    },

    /* ------------------------------------------- dal vecchio sito (etichette) */
    {
      slug: "salame-ubriaco",
      nome: "Salame ubriaco",
      claim: "Rustico, intenso, generoso.",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 10.9,
      peso: "350 g circa",
      grammi: 350,
      foto: "FOTO: salame ubriaco al vino rosso",
      img: "assets/img/salame-ubriaco-1.jpg",
      galleriaImg: ["assets/img/salame-ubriaco-1.jpg", "assets/img/salame-ubriaco-2.jpg"],
      descrizione:
        "È il salame della tradizione appenninica per eccellenza, ispirato a quelli che un tempo si preparavano in casa con pochi ingredienti e tanto carattere: lardello tagliato al coltello, pepe in grani e vino rosso. La grana grossa regala una consistenza carnosa e succulenta; il lardello si scioglie lentamente in bocca, il pepe accende il gusto e il vino rosso lascia una nota calda e aromatica nel finale. È il più saporito dei nostri salami tradizionali, pensato per chi cerca un gusto deciso, autentico e persistente.",
      ingredienti:
        "Carne di suino, sale, saccarosio, destrosio, pepe, vino, finocchio, aglio, antiossidanti: E300, E301, esaltatore di sapidità: E621, correttore di pH: E262, conservanti: E252, E250. Allergeni: può contenere tracce di latte e di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1603 kJ / 387 kcal · grassi 32,2 g (saturi 11,3 g) · carboidrati 3,0 g (zuccheri 2,4 g) · proteine 21,3 g · sale 3,63 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      /* Il vecchio sito lo chiamava "Ciauscolo" (nome IGP): in etichetta è
         "Salame morbido spalmabile". */
      slug: "salame-spalmabile",
      nome: "Salame morbido spalmabile",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 12.9,
      peso: "450 g circa",
      grammi: 450,
      foto: "FOTO: salame morbido spalmabile",
      img: "assets/img/ciauscolo-1.jpg",
      galleriaImg: ["assets/img/ciauscolo-1.jpg", "assets/img/ciauscolo-2.jpg"],
      descrizione:
        "Una morbida macinatura di carne di maiale non stagionata, dalla consistenza cremosa e naturalmente spalmabile. È uno dei salumi più delicati della tradizione dell'Appennino: il gusto è dolce, rotondo e piacevole, senza note aggressive. La sua caratteristica più riconoscibile è la morbidezza: basta appoggiarlo sul pane perché si lasci spalmare facilmente, liberando tutta la sua parte aromatica. In bocca è vellutato e succulento, con una delicata nota speziata che arriva solo nel finale. Da spalmare sul pane e gustare lentamente: semplice, morbido e genuino, è uno di quei sapori della tradizione che conquistano proprio per la loro delicatezza.",
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
      claim: "Il carattere del fegato, reso più delicato dalla carne di maiale e da una stagionatura più intensa.",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 12.9,
      peso: "450 g circa",
      grammi: 450,
      foto: "FOTO: salamella di fegato",
      img: "assets/img/salamella-fegato-1.jpg",
      galleriaImg: ["assets/img/salamella-fegato-1.jpg", "assets/img/salamella-fegato-2.jpg"],
      descrizione:
        "Un salume tradizionale preparato con fegato di maiale mescolato ad altre parti della carne suina, per ottenere un gusto più morbido, equilibrato e meno intenso rispetto a un prodotto di solo fegato. La caratteristica forma a salamella favorisce una stagionatura più marcata, che asciuga lentamente il prodotto e concentra i sapori senza renderli aggressivi. Al palato è saporita ma armoniosa, con il carattere tipico del fegato ben presente, bilanciato però dalla carne di maiale che ne addolcisce il gusto e rende ogni fetta più piacevole.",
      ingredienti:
        "Carne di suino, fegato di suino (30%), cuore di suino, sale, saccarosio, destrosio, pepe, aglio, finocchio, peperoncino, antiossidanti: E300, E301, esaltatore di sapidità: E621, conservanti: E252, E250. Allergeni: può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1033 kJ / 243 kcal · grassi 16,9 g (saturi 5,9 g) · carboidrati 2,5 g (zuccheri 2,2 g) · proteine 21,5 g · sale 3,6 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      /* sul vecchio sito era "Salamella di maiale": l'etichetta dice Nursino, salame stagionato */
      slug: "nursino",
      nome: "Nursino",
      denominazione: "Nursino, salame stagionato",
      claim: "Magro, delicato, tradizionale: il salame di Norcia nella sua forma più semplice.",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 11.9,
      peso: "350 g circa",
      grammi: 350,
      foto: "FOTO: nursino",
      img: "assets/img/salamella-maiale.jpg",
      galleriaImg: ["assets/img/salamella-maiale.jpg", "assets/img/nursino-etichetta.jpeg"],
      galleria: ["FOTO 1: nursino", "FOTO 2: etichetta"],
      descrizione:
        "Il salame più tradizionale della nostra selezione, preparato con una macinatura di carne di maiale magra, senza cartilagini e senza parti grasse evidenti. La sua forza è proprio la semplicità: gusto pulito, delicato e armonioso, con una consistenza compatta e piacevole. Non cerca sapori estremi, ma il profilo classico del vero salame di Norcia. È il più delicato tra i nostri salami tradizionali, ideale per chi ama un gusto semplice, autentico e facilmente apprezzabile.",
      ingredienti:
        "Carne di suino, LATTE scremato in polvere, sale, saccarosio, destrosio, aromi, pepe, antiossidanti: E300, E301, esaltatore di sapidità: E621, aglio, conservanti: E252, E250. Allergeni: latte; tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1796 kJ / 434 kcal · grassi 37,5 g (saturi 13,4 g) · carboidrati 3,1 g (zuccheri 2,9 g) · proteine 20,8 g · sale 3,7 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      slug: "coglione-del-mulo",
      nome: "Coglioni di mulo",
      denominazione: "Coglioni di mulo, salame stagionato",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 9,
      peso: "300 g circa",
      grammi: 300,
      foto: "FOTO: coglioni di mulo",
      img: "assets/img/coglione-mulo-2.jpg",
      galleriaImg: ["assets/img/coglione-mulo-2.jpg", "assets/img/coglione-mulo-1.jpg"],
      descrizione:
        "Il nome incuriosisce, ma tranquilli: il mulo si è salvato. L'insaccato è prodotto esclusivamente con carne di maiale e prende questo nome soltanto dalla sua particolare forma. Ha una macinatura fine, compatta e magra, dal gusto pieno e deciso. A contrastarla c'è un lardello stagionato che attraversa tutto il salame: morbido e ricco, si scioglie lentamente in bocca e accompagna ogni fetta, creando un piacevole equilibrio tra la parte magra della carne e la dolcezza del grasso. Il risultato è un salume intenso, saporito e molto caratteristico, con una consistenza compatta e un finale più morbido e avvolgente.",
      ingredienti:
        "Carne di suino, lardo di suino, LATTE scremato in polvere, sale, saccarosio, destrosio, pepe, aglio, aromi, antiossidanti: E300, E301, esaltatore di sapidità: E621, conservanti: E252, E250, correttore di pH: E262. Allergeni: latte; può contenere tracce di solfiti. Budello non edibile. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 1637 kJ / 397 kcal · grassi 32,9 g (saturi 11,6 g) · carboidrati 2,8 g (zuccheri 2,5 g) · proteine 21,8 g · sale 3,7 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      /* Il vecchio sito lo chiamava "Prosciutto tascabile IGP Norcia": in etichetta
         è "Tascabile, prodotto a base di carne stagionato" (fatto con la spalla). */
      slug: "tascabile",
      nome: "Tascabile",
      denominazione: "Tascabile, prodotto a base di carne stagionato",
      claim: "Tutto il sapore del prosciutto di Norcia, stagionato come un salume.",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 28,
      peso: "1 kg circa",
      grammi: 1000,
      foto: "FOTO: tascabile affettato",
      img: "assets/img/prosciutto-tascabile-1.jpg",
      galleriaImg: ["assets/img/prosciutto-tascabile-1.jpg", "assets/img/prosciutto-tascabile-2.jpg"],
      descrizione:
        "Nasce da tranci magri di prosciutto di maiale, privati della parte grassa e insaccati nel budello naturale come un vero salume. La carne resta compatta e saporita, mentre pepe e peperoncino aggiungono una nota speziata e leggermente vivace. È proprio la stagionatura all'interno del budello a fare la differenza: concentra i profumi e rende il gusto del prosciutto di Norcia più intenso, profondo e persistente. Al taglio si presenta magro e compatto; in bocca è deciso, aromatico e pulito, con tutta la sapidità del prosciutto e un finale speziato che ne esalta il carattere.",
      ingredienti:
        "Carne di suino, sale, pepe, saccarosio, destrosio, finocchio, aglio, peperoncino, antiossidanti: E300, E301, conservanti: E252, E250. Allergeni: nessuno indicato in etichetta. Carne suina origine Italia.",
      valori:
        "Per 100 g: energia 985 kJ / 235 kcal · grassi 13,7 g (saturi 4,84 g) · carboidrati 0,1 g (zuccheri 0,1 g) · proteine 27,8 g · sale 5,04 g",
      conservazione: conservazioneSalumi,
      produttore: perWild
    },
    {
      slug: "pecorino-12-mesi",
      nome: "Pecorino stagionato 12 mesi",
      claim: "Dal pascolo di montagna, un gusto più ricco. Dodici mesi di stagionatura, per chi ama i sapori decisi.",
      denominazione: "Pecorino del Pastorello stagionato «Campagnolo di Amatrice»",
      categoria: "formaggi",
      occhiello: "FORMAGGI",
      prezzo: 37,
      peso: "1 kg circa",
      grammi: 1000,
      foto: "FOTO: pecorino stagionato 12 mesi",
      img: "assets/img/pecorino-12-mesi.jpg",
      galleriaImg: ["assets/img/pecorino-12-mesi.jpg", "assets/img/pecorino-12-mesi-etichetta.jpeg"],
      galleria: ["FOTO 1: pecorino stagionato 12 mesi", "FOTO 2: etichetta"],
      descrizione:
        "Un pecorino dal carattere deciso, prodotto con latte di pecora proveniente da pascoli di montagna, dove un'alimentazione più ricca e naturale regala al latte maggiore intensità e aromaticità. Dopo 12 mesi di stagionatura, il gusto diventa profondo, saporito e persistente. La pasta è compatta e leggermente friabile, con una grana tipica dei formaggi ben stagionati e un finale intenso che rimane a lungo in bocca. È il più saporito tra i nostri pecorini, perfetto per chi ama i gusti forti negli antipasti. Ottimo anche con il miele, che ne bilancia la sapidità, oppure da grattugiare per dare carattere ai piatti.",
      ingredienti:
        "LATTE ovino pastorizzato (origine UE), caglio, fermenti lattici, sale. Trattato in superficie con olio di semi di girasole e aceto di vino bianco. Crosta non edibile. Allergeni: latte.",
      valori:
        "Per 100 g: energia 1627 kJ / 388,8 kcal · grassi 30,00 g (saturi 20,40 g) · carboidrati 0,30 g (zuccheri 0,30 g) · proteine 29,10 g · sale 1,60 g",
      conservazione: "In luogo fresco e asciutto, al riparo dalla luce e da fonti di calore.",
      produttore: { testo: "F.lli Petrucci S.r.l., Via A. M. Ricci 111, 02100 Rieti (RI) — stabilimento IT 12 215 CE." }
    },
    {
      /* dati dall'etichetta; in etichetta "da vendere a peso": peso e prezzo indicativi,
         da confermare col cliente */
      slug: "formaggio-tartufo-mazzatosta",
      nome: "Formaggio misto al tartufo",
      denominazione: "Formaggio misto (vaccino - ovino) al tartufo",
      categoria: "formaggi",
      occhiello: "FORMAGGI · BETTONA",
      prezzo: 12,
      peso: "500 g circa",
      grammi: 500,
      foto: "FOTO: formaggio misto al tartufo",
      img: "assets/img/formaggio-tartufo-mazzatosta-1.jpeg",
      descrizione: "Formaggio di latte vaccino e ovino con tartufo estivo, dal Caseificio Mazzatosta di Bettona.",
      ingredienti:
        "LATTE vaccino, LATTE ovino, tartufo (Tuber aestivum Vitt.) (1%), fermenti lattici, caglio, lipasi di capretto, sale, aroma. Trattato in superficie con conservante: E235. Crosta non edibile. Origine del latte: Italia. Allergeni: latte.",
      valori:
        "Per 100 g: energia 1707 kJ / 402 kcal · grassi 32 g (saturi 19 g) · carboidrati 1,2 g (zuccheri 1,2 g) · proteine 27 g · sale 1,3 g",
      conservazione: "Conservare tra 0 e +4 °C.",
      produttore: { testo: "Caseificio Mazzatosta S.r.l., Via Sala 35, Passaggio di Bettona (PG) — stabilimento IT 10 12 CE." }
    },
    {
      slug: "salame-cinghiale-tartufo",
      nome: "Salame al cinghiale e tartufo",
      categoria: "selvaggina",
      occhiello: "SELVAGGINA",
      prezzo: 14.9,
      peso: "350 g circa",
      grammi: 350,
      foto: "FOTO: salame al cinghiale e tartufo",
      img: "assets/img/salame-cinghiale-tartufo-1.jpg",
      galleriaImg: ["assets/img/salame-cinghiale-tartufo-1.jpg", "assets/img/salame-cinghiale-tartufo-2.jpg"],
      descrizione:
        "Sapido e deciso fin dal primo assaggio, con il gusto del cinghiale che arriva subito pieno e intenso. La fetta è pulita, senza palline di pepe né lardello, con una consistenza compatta e uniforme. Nel finale emerge lentamente il tartufo, naturale e persistente, che resta sul palato senza coprire la carne. È uno dei salami più saporiti della selezione, ricco ma equilibrato.",
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
      claim: "Il profumo del tartufo, pronto da portare in tavola.",
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 6,
      peso: "130 g",
      grammi: 130,
      /* prezzo del vasetto da 80 g indicativo, da confermare col cliente */
      formati: [
        { nome: "Vasetto grande", peso: "130 g", prezzo: 6 },
        { nome: "Vasetto piccolo", peso: "80 g", prezzo: 4.5 }
      ],
      foto: "FOTO: barattolo di salsa tartufata",
      img: "assets/img/salsa-tartufata.jpg",
      galleriaImg: [
        "assets/img/salsa-tartufata.jpg",
        "assets/img/salsa-tartufata-130-1.jpg",
        "assets/img/salsa-tartufata-80-1.jpg",
        "assets/img/salsa-tartufata-130-3.jpg"
      ],
      galleria: [
        "FOTO 1: barattolo di salsa tartufata",
        "FOTO 2: vasetto da 130 g",
        "FOTO 3: vasetto da 80 g",
        "FOTO 4: etichetta con gli ingredienti"
      ],
      descrizione:
        "Una crema intensa e profumata, preparata con funghi champignon e tartufo estivo, pensata per portare in tavola il gusto del tartufo in modo semplice e immediato. La consistenza è morbida e avvolgente: il fungo dà corpo e rotondità, mentre il tartufo arriva con il suo profumo caratteristico, lasciando un gusto sapido, aromatico e persistente. È una delle salse più versatili della nostra selezione: ottima sulle bruschette, sulla pasta, sulle uova, sulla carne o per arricchire un risotto. Ne basta poca per dare subito più carattere al piatto.",
      ingredienti:
        "Funghi coltivati (Agaricus bisporus), olio extra vergine di oliva, tartufo estivo 5% (Tuber aestivum Vitt.), olive nere, carote, SEDANO, prezzemolo, preparato per brodo (esaltatore di sapidità: glutammato monosodico), cipolla disidratata, LATTOSIO, spezie, sale, aromi. Allergeni: sedano, latte (lattosio). Senza conservanti. Funghi e tartufi di origine UE.",
      valori:
        "Per 100 g: energia 382 kJ / 92 kcal · grassi 8,0 g (saturi 1,2 g) · carboidrati 1,2 g (zuccheri 0,5 g) · proteine 2,8 g · sale 2,4 g",
      conservazione: "In luogo fresco e asciutto. Dopo l'apertura conservare in frigorifero e consumare in breve tempo.",
      produttore: fortunati
    },
    {
      slug: "olio-tartufo-nero",
      /* Bottiglia in foto e titolo del vecchio sito: 100 ml (una riga della
         pagina vecchia diceva 60 ml, da confermare). */
      nome: "Condimento aromatizzato al tartufo nero pregiato",
      denominazione:
        "Condimento aromatizzato al profumo del tartufo nero pregiato a base di olio extra vergine di oliva italiano",
      claim: "Poche gocce a crudo, e il piatto prende subito il profumo del tartufo.",
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 7,
      peso: "100 ml",
      ml: 100,
      foto: "FOTO: bottiglietta di olio al tartufo nero",
      img: "assets/img/olio-tartufo-nero.jpg",
      descrizione:
        "Un condimento pensato per dare immediatamente profumo e carattere di tartufo ai piatti di tutti i giorni. Si usa in piccole quantità, preferibilmente a crudo e a fine preparazione, dopo l'olio extravergine o direttamente sul piatto caldo: bastano poche gocce per sprigionare l'aroma del tartufo senza coprire gli altri ingredienti. È estremamente versatile, perfetto su pasta, risotti, gnocchi, uova, frittate, patate, funghi, carne, pizza, focaccia e verdure. Ottimo anche su una semplice bruschetta.",
      ingredienti: "Olio extra vergine di oliva italiano 98%, aroma. Allergeni: nessuno indicato in etichetta.",
      valori: "Per 100 ml: energia 3447 kJ / 825 kcal · grassi 92 g (saturi 15 g) · carboidrati 0 g · proteine 0 g · sale 0 g",
      conservazione: "Conservare in luogo fresco e asciutto.",
      produttore: { testo: "Tartufi Alfonso Fortunati, Via Filippo da Campello 24, 06042 Campello sul Clitunno (PG)." }
    },
    {
      slug: "olio-tartufo-bianco",
      nome: "Condimento aromatizzato al tartufo bianco pregiato",
      denominazione:
        "Condimento aromatizzato al profumo del tartufo bianco pregiato a base di olio extra vergine di oliva italiano",
      claim: "Poche gocce, un profumo intenso: tutta l'eleganza del tartufo bianco.",
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 7,
      peso: "100 ml",
      ml: 100,
      foto: "FOTO: bottiglietta di olio al tartufo bianco",
      img: "assets/img/olio-tartufo-bianco.jpg",
      descrizione:
        "Un condimento dal profumo intenso, elegante e immediatamente riconoscibile, pensato per esaltare i piatti con la nota raffinata del tartufo bianco. Va utilizzato soprattutto a crudo e a fine preparazione, in piccole quantità: poche gocce sono sufficienti per sprigionare un aroma deciso e persistente, senza appesantire il piatto. È particolarmente indicato su tagliolini, risotti, uova, fondute, purè di patate, carpacci e bruschette, dove il suo profumo riesce a emergere con grande intensità. Il risultato è un condimento più fine e aromatico, ideale per chi cerca il carattere tipico del tartufo bianco e vuole dare a un piatto semplice una sensazione più ricercata.",
      ingredienti: "Olio extra vergine di oliva italiano 98%, aroma. Allergeni: nessuno indicato in etichetta.",
      valori: "Per 100 ml: energia 3447 kJ / 825 kcal · grassi 92 g (saturi 15 g) · carboidrati 0 g · proteine 0 g · sale 0 g",
      conservazione: "Lontano da fonti di calore e dalla luce diretta.",
      produttore: fortunati
    },
    {
      /* dati dall'etichetta; prezzo indicativo, da confermare col cliente */
      slug: "pure-tartufo-estivo",
      nome: "Purè di patate con tartufo estivo",
      denominazione: "Preparato per purè di patate al tartufo",
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 7.9,
      peso: "200 g",
      grammi: 200,
      foto: "FOTO: confezione di purè al tartufo",
      img: "assets/img/pure-tartufo-1.jpeg",
      galleriaImg: ["assets/img/pure-tartufo-1.jpeg", "assets/img/pure-tartufo-2.jpeg"],
      galleria: ["FOTO 1: confezione, fronte", "FOTO 2: confezione, retro con etichetta"],
      descrizione: "Preparato per purè di patate con tartufo estivo: 4 porzioni. Senza conservanti e glutammati aggiunti.",
      ingredienti:
        "Patate disidratate 98%, tartufo estivo (Tuber aestivum Vitt.) 1%, sale, emulsionante: mono e digliceridi degli acidi grassi, aroma.",
      valori:
        "Per 100 g: energia 1473 kJ / 347 kcal · grassi 0,5 g (saturi 0,1 g) · carboidrati 75,0 g (zuccheri 2,0 g) · proteine 7,5 g · sale 1,0 g",
      conservazione: "A temperatura ambiente, lontano da fonti di calore.",
      produttore: { testo: "Tartufi Alfonso Fortunati, Via Filippo da Campello 24, 06042 Campello sul Clitunno (PG)." }
    },
    {
      /* dati dall'etichetta; prezzo indicativo, da confermare col cliente */
      slug: "sugo-pomodoro-tartufo",
      nome: "Sugo di pomodoro e tartufo",
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 6.5,
      peso: "180 g",
      grammi: 180,
      foto: "FOTO: vasetto di sugo di pomodoro e tartufo",
      img: "assets/img/sugo-pomodoro-tartufo-1.jpeg",
      galleriaImg: [
        "assets/img/sugo-pomodoro-tartufo-1.jpeg",
        "assets/img/sugo-pomodoro-tartufo-2.jpeg",
        "assets/img/sugo-pomodoro-tartufo-3.jpeg"
      ],
      galleria: ["FOTO 1: vasetto, fronte", "FOTO 2: ingredienti e valori", "FOTO 3: produttore e peso"],
      descrizione: "Polpa di pomodoro italiano e tartufo estivo: pronto per condire la pasta. Senza conservanti.",
      ingredienti:
        "Polpa di pomodoro italiano 86%, olio extra vergine di oliva italiano, tartufo estivo (Tuber aestivum Vitt.) 5%, sale, aromi naturali, spezie, zucchero. Origine del pomodoro: Italia.",
      valori:
        "Per 100 g: energia 662 kJ / 158 kcal · grassi 6,4 g (saturi 1,0 g) · carboidrati 17,6 g (zuccheri 17,6 g) · proteine 3,7 g · sale 2,0 g",
      produttore: fortunati
    },
    {
      /* dati dall'etichetta; prezzo indicativo, da confermare col cliente */
      slug: "miele-tartufo",
      nome: "Miele e tartufo",
      denominazione: "Prodotto gastronomico: miele con tartufo estivo",
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 8.5,
      peso: "120 g",
      grammi: 120,
      foto: "FOTO: vasetto di miele e tartufo",
      img: "assets/img/miele-tartufo-1.jpeg",
      galleriaImg: ["assets/img/miele-tartufo-1.jpeg", "assets/img/miele-tartufo-3.jpeg", "assets/img/miele-tartufo-2.jpeg"],
      galleria: ["FOTO 1: vasetto, fronte", "FOTO 2: ingredienti e valori", "FOTO 3: produttore"],
      descrizione: "Miele con pezzetti di tartufo estivo, in vasetto da 120 g.",
      ingredienti: "Miele 98%, tartufi estivi (Tuber aestivum Vitt.) 1%, aroma. Origine del tartufo: UE.",
      valori:
        "Per 100 g: energia 1396,6 kJ / 328,6 kcal · grassi 0 g (saturi 0 g) · carboidrati 81 g (zuccheri 81 g) · proteine 0,5 g · sale 0 g",
      conservazione: "Al riparo dalla luce diretta e da fonti di calore.",
      produttore: fortunati
    },
    {
      slug: "lenticchie-umbre",
      nome: "Lenticchie umbre",
      claim: "Piccole nel chicco, ricche nel sapore: tutta la semplicità della tradizione umbra.",
      categoria: "dispensa",
      occhiello: "DISPENSA · UMBRIA",
      prezzo: 6.8,
      peso: "500 g",
      grammi: 500,
      foto: "FOTO: confezione di lenticchie umbre",
      img: "assets/img/lenticchie.jpg",
      descrizione:
        "Piccole, delicate e naturalmente saporite, le lenticchie umbre sono uno dei prodotti più semplici e autentici della nostra terra. La loro piccola pezzatura permette una cottura uniforme e mantiene il chicco piacevolmente compatto. Al palato hanno un gusto delicato ma pieno, con una nota leggermente terrosa e una consistenza morbida senza diventare farinosa. Sono perfette per i piatti della tradizione, dalle zuppe ai contorni, oppure insieme a salsiccia e zampone, dove assorbono il condimento senza perdere la propria consistenza. Sciacquare, cuocere in acqua 25–30 minuti e salare a fine cottura.",
      ingredienti: "Lenticchie secche umbre. Origine Italia, Umbria.",
      valori:
        "Per 100 g: energia 1470 kJ / 352 kcal · grassi 1,06 g (saturi 0,15 g) · carboidrati 63,4 g (zuccheri 2,03 g) · proteine 24,6 g · sale 0,01 g",
      produttore: fortunati
    },
    {
      slug: "zuppa-rapida",
      nome: "Zuppa rapida",
      denominazione: "Zuppa rapida, legumi e cereali",
      claim: "Tutto il calore di una zuppa tradizionale, pronta in soli 30 minuti.",
      categoria: "dispensa",
      occhiello: "DISPENSA",
      prezzo: 6.2,
      peso: "500 g",
      grammi: 500,
      foto: "FOTO: confezione di zuppa rapida di legumi",
      img: "assets/img/zuppa-rapida-1.jpeg",
      galleriaImg: ["assets/img/zuppa-rapida-1.jpeg", "assets/img/zuppa-rapida-2.jpeg"],
      galleria: ["FOTO 1: confezione, fronte", "FOTO 2: confezione, retro con etichetta"],
      descrizione:
        "Un mix rustico e nutriente di lenticchie, orzo perlato, fagioli azuki verdi e piselli, pensato per portare in tavola una zuppa ricca e completa senza lunghe preparazioni. Durante la cottura ogni ingrediente mantiene la propria consistenza: le lenticchie danno corpo, l'orzo rende la zuppa più morbida e cremosa, mentre fagioli e piselli aggiungono varietà di sapori e consistenze. È una zuppa dal gusto semplice, pieno e genuino, ideale nelle giornate più fresche e pronta in circa 30 minuti.",
      ingredienti:
        "Lenticchie, ORZO perlato, fagioli, azuki verdi, piselli. Allergeni: glutine (orzo); può contenere SOIA. Made in Italy.",
      valori:
        "Per 100 g: energia 1512 kJ / 357 kcal · grassi 0,9 g (saturi 0,2 g) · carboidrati 67,3 g (zuccheri 1,7 g) · proteine 14,5 g · sale 0,07 g",
      produttore: fortunati
    },
    {
      /* dati dall'etichetta; prezzo indicativo, da confermare col cliente */
      slug: "farro-umbro-perlato",
      nome: "Farro umbro perlato",
      categoria: "dispensa",
      occhiello: "DISPENSA · UMBRIA",
      prezzo: 6.5,
      peso: "500 g",
      grammi: 500,
      foto: "FOTO: confezione di farro umbro perlato",
      img: "assets/img/farro-umbro-1.jpeg",
      galleriaImg: ["assets/img/farro-umbro-1.jpeg", "assets/img/farro-umbro-2.jpeg"],
      galleria: ["FOTO 1: confezione, fronte", "FOTO 2: confezione, retro con etichetta"],
      descrizione:
        "Farro perlato umbro, cuoce in 20 minuti. Sul retro la ricetta del farro all'antica, con sedano, carota, cipolla, carne e pomodoro.",
      ingredienti: "Farro umbro perlato. Contiene glutine.",
      valori:
        "Per 100 g: energia 1389 kJ / 327 kcal · grassi 2,0 g (saturi 0,3 g) · carboidrati 63,7 g (zuccheri 1,9 g) · proteine 13,7 g · sale 0,02 g",
      produttore: fortunati
    },
    {
      /* dati dall'etichetta; prezzo indicativo, da confermare col cliente */
      slug: "fagioli-cannellini",
      nome: "Fagioli cannellini italiani",
      categoria: "dispensa",
      occhiello: "DISPENSA",
      prezzo: 6.8,
      peso: "500 g",
      grammi: 500,
      foto: "FOTO: confezione di fagioli cannellini",
      img: "assets/img/fagioli-cannellini-1.jpeg",
      galleriaImg: ["assets/img/fagioli-cannellini-1.jpeg", "assets/img/fagioli-cannellini-2.jpeg"],
      galleria: ["FOTO 1: confezione, fronte", "FOTO 2: confezione, retro con etichetta"],
      descrizione:
        "Cannellini italiani secchi. Vanno lasciati in ammollo 12 ore, poi lessati in acqua per circa 50 minuti, salando verso fine cottura. Sul retro la ricetta dei fagioli all'uccelletto.",
      ingredienti: "Fagioli cannellini. Prodotto in Italia.",
      valori:
        "Per 100 g: energia 1163 kJ / 274 kcal · grassi 0,8 g (saturi 0,1 g) · carboidrati 43,1 g (zuccheri 3 g) · proteine 23,6 g · sale 0,01 g",
      produttore: fortunati
    },

    /* ciambelline del Marchese del Grillo: dati dalle etichette, prezzi indicativi
       da confermare col cliente */
    {
      slug: "ciambelline-cereali",
      nome: "Ciambelline ai cereali",
      categoria: "dispensa",
      occhiello: "DISPENSA · CIAMBELLINE",
      prezzo: 5.5,
      peso: "200 g",
      grammi: 200,
      foto: "FOTO: sacchetto di ciambelline ai cereali",
      img: "assets/img/ciambelline-cereali-1.jpg",
      galleriaImg: [
        "assets/img/ciambelline-cereali-1.jpg",
        "assets/img/ciambelline-cereali-2.jpeg",
        "assets/img/ciambelline-cereali-3.jpeg"
      ],
      galleria: ["FOTO 1: sacchetto", "FOTO 2: etichetta, fronte", "FOTO 3: etichetta, retro"],
      descrizione: "Ciambelline al vino rosso fatte a mano, con farine di cereali, semi e fiocchi d'avena.",
      ingredienti:
        "CEREALI 61% (farina di GRANO TENERO tipo \"0\", farina di SEGALE, semi di SESAMO, semi di GIRASOLE, semi di LINO, farina di AVENA, farina di ORZO, sale, MAIS soffiato, estratto di malto d'ORZO, farina di GRANO TENERO maltato, farina di GRANO TENERO di tipo 1 macinata a pietra, agente di trattamento della farina (acido ascorbico, alfa amilasi)), fiocchi di AVENA, VINO rosso, zucchero, olio di semi di girasole altoleico, AGENTI LIEVITANTI [tartrato di potassio (45,8%), carbonato di sodio, amido di mais, aroma]. La farina, il vino e lo zucchero sono di origine italiana. Può contenere tracce di FRUTTA SECCA A GUSCIO, UOVA, LATTE. Titolo alcolometrico 1,4%.",
      valori:
        "Per 100 g: energia 1843 kJ / 441 kcal · grassi 17 g (saturi 2,3 g) · carboidrati 48 g (zuccheri 17 g) · fibre 0 g · proteine 8,9 g · sale 0,72 g",
      conservazione: "In luogo fresco e asciutto. Prodotto fatto a mano, soggetto a calo di peso.",
      produttore: marcheseGrillo
    },
    {
      slug: "ciambelline-cacao-menta",
      nome: "Ciambelline cacao e menta",
      categoria: "dispensa",
      occhiello: "DISPENSA · CIAMBELLINE",
      prezzo: 5.5,
      peso: "200 g",
      grammi: 200,
      foto: "FOTO: sacchetto di ciambelline cacao e menta",
      img: "assets/img/ciambelline-cacao-menta-1.jpeg",
      galleriaImg: ["assets/img/ciambelline-cacao-menta-1.jpeg", "assets/img/ciambelline-cacao-menta-2.jpeg"],
      galleria: ["FOTO 1: sacchetto", "FOTO 2: etichetta, retro"],
      descrizione: "Ciambelline al vino rosso fatte a mano, con cacao amaro e foglie di menta.",
      ingredienti:
        "Farina di GRANO TENERO tipo 1 macinata a pietra, VINO rosso, zucchero, olio di semi di girasole altoleico, cacao amaro (16%), AGENTI LIEVITANTI [tartrato di potassio (45,8%), carbonato di sodio, amido di mais, aroma], menta foglie (0,00025%), Mentha piperita oil. La farina e il vino sono di origine italiana. Può contenere tracce di FRUTTA SECCA, UOVA, LATTE. Titolo alcolometrico 1,7%.",
      valori:
        "Per 100 g: energia 1612 kJ / 385 kcal · grassi 17,00 g (saturi 2,30 g) · carboidrati 48,00 g (zuccheri 17,00 g) · fibre 0,00 g · proteine 7,00 g · sale 0,00 g",
      conservazione: "In luogo fresco e asciutto. Prodotto fatto a mano, soggetto a calo di peso.",
      produttore: marcheseGrillo
    },
    {
      slug: "ciambelline-frutti-bosco",
      nome: "Ciambelline ai frutti di bosco",
      categoria: "dispensa",
      occhiello: "DISPENSA · CIAMBELLINE",
      prezzo: 5.5,
      peso: "200 g",
      grammi: 200,
      foto: "FOTO: sacchetto di ciambelline ai frutti di bosco",
      img: "assets/img/ciambelline-frutti-bosco-1.jpeg",
      galleriaImg: ["assets/img/ciambelline-frutti-bosco-1.jpeg", "assets/img/ciambelline-frutti-bosco-2.jpeg"],
      galleria: ["FOTO 1: etichetta, fronte", "FOTO 2: etichetta, retro"],
      descrizione: "Ciambelline al vino rosso fatte a mano, con karkadè, uva passa, sambuco, mirtillo e ribes nero.",
      ingredienti:
        "Farina di GRANO TENERO tipo 1 macinata a pietra, VINO rosso (contiene SOLFITI), zucchero, olio di semi di girasole altoleico, frutti di bosco (karkadè fiori, uva passa, sambuco bacche, mirtillo frutti, ribes nero frutti 2,98%), aromi, AGENTI LIEVITANTI (tartrati di potassio 45,8%, carbonati di sodio, amido di mais, aroma). La farina e il vino sono di origine italiana. Può contenere tracce di FRUTTA SECCA, UOVA, LATTE.",
      valori:
        "Per 100 g: energia 1587 kJ / 379 kcal · grassi 14,21 g (saturi 1,59 g) · carboidrati 52,65 g (zuccheri 18,50 g) · fibre 1,58 g · proteine 6,05 g · sale 0,01 g",
      conservazione: "In luogo fresco e asciutto. Prodotto fatto a mano, soggetto a calo di peso.",
      produttore: marcheseGrillo
    },
    {
      slug: "ciambelline-sambuca-caffe",
      nome: "Ciambelline sambuca e caffè",
      categoria: "dispensa",
      occhiello: "DISPENSA · CIAMBELLINE",
      prezzo: 5.5,
      peso: "200 g",
      grammi: 200,
      foto: "FOTO: sacchetto di ciambelline sambuca e caffè",
      img: "assets/img/ciambelline-sambuca-caffe-1.jpeg",
      galleriaImg: ["assets/img/ciambelline-sambuca-caffe-1.jpeg", "assets/img/ciambelline-sambuca-caffe-2.jpeg"],
      galleria: ["FOTO 1: etichetta, fronte", "FOTO 2: etichetta, retro"],
      descrizione: "Ciambelline al vino rosso fatte a mano, con sambuca e caffè in polvere e in chicchi.",
      ingredienti:
        "Farina di GRANO TENERO tipo 1 macinata a pietra, zucchero, olio di semi di girasole altoleico, sambuca 0,1% (alcool, zuccheri, acqua e aromi naturali), VINO rosso, caffè polvere e chicchi, AGENTI LIEVITANTI [tartrato di potassio (45,8%), carbonato di sodio, amido di mais, aroma], Illicium verum fruit/seed oil. La farina e il vino sono di origine italiana. Può contenere tracce di FRUTTA SECCA A GUSCIO, UOVA, LATTE. Titolo alcolometrico 0,3%.",
      valori:
        "Per 100 g: energia 1692 kJ / 403 kcal · grassi 17 g (saturi 2,5 g) · carboidrati 56 g (zuccheri 22 g) · fibre 0 g · proteine 6,5 g · sale 0 g",
      conservazione: "In luogo fresco e asciutto. Prodotto fatto a mano, soggetto a calo di peso.",
      produttore: marcheseGrillo
    },
    {
      /* proteine: in etichetta il valore è coperto dall'occhiello, "6,5" da ricontrollare */
      slug: "snacks-anice",
      nome: "Snacks gusto dolce all'anice",
      categoria: "dispensa",
      occhiello: "DISPENSA",
      /* prezzo indicativo, da confermare col cliente */
      prezzo: 4.5,
      peso: "80 g",
      grammi: 80,
      foto: "FOTO: sacchetto di snacks all'anice",
      img: "assets/img/snacks-anice-1.jpeg",
      galleriaImg: ["assets/img/snacks-anice-1.jpeg", "assets/img/snacks-anice-2.jpeg"],
      galleria: ["FOTO 1: sacchetto", "FOTO 2: etichetta, retro"],
      descrizione: "Sfoglie dolci all'anice, prodotte artigianalmente.",
      ingredienti:
        "Zucchero, farina di GRANO TENERO tipo \"0\", UOVA, aromi. Può contenere tracce di FRUTTA SECCA A GUSCIO, LATTE.",
      valori:
        "Per 100 g: energia 1673 kJ / 394 kcal · grassi 23 g (saturi 0 g) · carboidrati 87 g (zuccheri 50 g) · proteine 6,5 g · sale 0 g",
      conservazione: "In luogo fresco e asciutto. Prodotto artigianalmente, soggetto a calo di peso.",
      produttore: {
        testo:
          "Prodotto e confezionato in Strada della Fontanella 18, Oriolo Romano (VT). Distribuito dall'Azienda agricola Il Marchese del Grillo."
      }
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
      foto: "FOTO: tre salami + pecorino",
      descrizione:
        "Il cervo accanto al capriolo e al cinghiale: è così che si capisce quanto è dolce. Con pecorino stagionato.",
      descrizioneBreve: "Cervo, capriolo, cinghiale + pecorino stagionato.",
      notaAbbinamento: "Accanto a capriolo e cinghiale si capisce quanto è dolce.",
      contenuto: [
        { t: "Salame al cervo, 350 g", n: "dolce" },
        { t: "Norcinetta al capriolo, 250 g", n: "vivace, peperoncino" },
        { t: "Salame al cinghiale, 350 g", n: "deciso, speziato" },
        { t: "Pecorino stagionato, 250 g" }
      ],
      galleria: ["FOTO 1: tre salami + pecorino", "FOTO 2: confezione aperta"],
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
      foto: "FOTO: box umbria confezionato",
      descrizione: "Salame spalmabile, pecorino stagionato, olio EVO, miele di acacia, Sagrantino.",
      descrizioneBreve: "Salame spalmabile, pecorino stagionato, olio EVO, miele di acacia, Sagrantino.",
      contenuto: [
        { t: "Salame morbido spalmabile, 450 g" },
        { t: "Pecorino stagionato, 300 g" },
        { t: "Salsa tartufata, 130 g" },
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
      foto: "FOTO: tagliere tartufo",
      descrizione: "Salsa tartufata, crema di pecorino al tartufo, salame al cinghiale e tartufo, condimento al tartufo.",
      descrizioneBreve: "Salsa tartufata, crema di pecorino al tartufo, salame al cinghiale e tartufo, condimento al tartufo.",
      contenuto: [
        { t: "Salsa tartufata" },
        { t: "Crema di pecorino al tartufo" },
        { t: "Salame al cinghiale e tartufo" },
        { t: "Condimento aromatizzato al tartufo" }
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
    { t: "Non so cosa scegliere", href: "guida.html" },
    { t: "Idea regalo", href: "selezione.html?s=regalo" },
    { t: "Primo assaggio", href: "prodotto.html?p=degustazione-selvaggina" },
    { t: "Sotto i 20 €", href: "selezione.html?s=sotto-20" }
  ];

  /* Pagine selezione.html?s=<slug>: ogni sezione ha un elenco di prodotti
     oppure una regola (`filtro`) applicata a tutto il catalogo tranne i box. */
  const selezioni = [
    {
      slug: "guida",
      occhiello: "FATTI GUIDARE",
      titolo: "Fatti guidare nella scelta",
      intro: "Dicci cosa ti piace e ti diciamo da dove partire, come faremmo al bancone.",
      sezioni: [
        {
          titolo: "Non hai mai assaggiato la selvaggina",
          testo: "Parti dal cervo, il più dolce dei tre. Con la degustazione li provi tutti insieme.",
          prodotti: ["salame-di-cervo", "degustazione-selvaggina"]
        },
        {
          titolo: "Ti piacciono i sapori decisi",
          testo: "Pepe, stagionature lunghe e tanto carattere.",
          prodotti: ["salame-di-cinghiale", "coglione-del-mulo", "pecorino-12-mesi"]
        },
        {
          titolo: "Per un aperitivo con gli amici",
          testo: "Uno da spalmare, uno da affettare e uno da versare.",
          prodotti: ["salame-spalmabile", "salame-ubriaco", "napos-rosso"]
        },
        {
          titolo: "Vuoi qualcosa da cucinare",
          testo: "Legumi umbri e un tocco di tartufo.",
          prodotti: ["lenticchie-umbre", "zuppa-rapida", "salsa-tartufata"]
        }
      ]
    },
    {
      slug: "regalo",
      occhiello: "IDEE REGALO",
      titolo: "Idee regalo",
      intro: "Pensa a chi lo riceve: ecco cosa sceglieremmo noi.",
      sezioni: [
        {
          titolo: "Per chi ama cucinare",
          testo: "Dalla nostra dispensa, per chi sta volentieri ai fornelli.",
          prodotti: ["lenticchie-umbre", "zuppa-rapida", "olio-tartufo-bianco", "salsa-tartufata"]
        },
        {
          titolo: "Per il buongustaio curioso",
          testo: "Sapori che al supermercato non si trovano.",
          prodotti: ["degustazione-selvaggina", "salame-di-capriolo", "coglione-del-mulo"]
        },
        {
          titolo: "Per chi ama il tartufo",
          testo: "Salumi, oli e salse col profumo del bosco.",
          prodotti: ["box-tartufo", "salame-cinghiale-tartufo", "olio-tartufo-nero"]
        },
        {
          titolo: "Per chi ama il vino",
          testo: "Il rosso di Montefalco e quello che ci va accanto.",
          prodotti: ["napos-rosso", "box-umbria", "pecorino-12-mesi"]
        }
      ]
    },
    {
      slug: "sotto-20",
      occhiello: "PICCOLA SPESA",
      titolo: "Sotto i 20 €",
      intro: "Tutto quello che in bottega costa meno di 20 €.",
      /* prima due salami, poi si alterna; quello che non è in `ordine` va in fondo, dal meno caro */
      sezioni: [
        {
          filtro: (p) => p.prezzo < 20,
          ordine: [
            "salame-di-cervo",
            "salame-di-cinghiale",
            "salsa-tartufata",
            "salame-ubriaco",
            "lenticchie-umbre",
            "salame-di-capriolo",
            "olio-tartufo-nero",
            "salame-spalmabile",
            "zuppa-rapida",
            "salame-cinghiale-tartufo",
            "olio-tartufo-bianco",
            "coglione-del-mulo",
            "salamella-di-fegato",
            "nursino"
          ]
        }
      ]
    }
  ];

  /* Pagina guida.html, "Fatti guidare": la visita guidata della bottega
     (design "Fatti guidare.dc.html", versione b). Nome, prezzo e peso dei prodotti
     vengono dal catalogo; qui ci sono solo il racconto e le note dette al bancone.
     Le posizioni in bottega (`dove`) sono del design: da confermare con la bottega. */
  const visita = [
    {
      label: "Il banco della selvaggina",
      breve: "Selvaggina",
      dove: "Entrando, subito a destra",
      titolo: "Si parte sempre da qui",
      testo: "Quelli per cui la gente torna, dal più dolce al più deciso.",
      img: "assets/img/bottega-bancone.jpg",
      alt: "Il bancone della bottega di Spoleto",
      prodotti: ["salame-di-cervo", "salame-di-capriolo", "salame-di-cinghiale", "salame-cinghiale-tartufo"]
    },
    {
      label: "I salumi tradizionali",
      breve: "Tradizionali",
      dove: "La parete dietro la bilancia",
      titolo: "Quelli di sempre",
      testo: "Il banco del maiale: niente selvaggina, quelli di sempre.",
      img: "assets/img/ciauscolo-1.jpg",
      alt: "Il salame morbido spalmabile, aperto",
      prodotti: ["salame-ubriaco", "salame-spalmabile", "coglione-del-mulo", "tascabile"]
    },
    {
      label: "Pecorino e tartufo",
      breve: "Pecorino",
      dove: "Vetrina refrigerata, in mezzo",
      titolo: "La parte che sorprende",
      testo: "Vetrina refrigerata e scaffale del tartufo, uno di fianco all'altro.",
      img: "assets/img/pecorino-12-mesi.jpg",
      alt: "La forma di pecorino stagionato 12 mesi",
      prodotti: ["pecorino-12-mesi", "salsa-tartufata", "olio-tartufo-nero"]
    },
    {
      label: "La dispensa",
      breve: "Dispensa",
      dove: "Scaffale di legno, a sinistra",
      titolo: "La roba che dura",
      testo: "Due cose che ti salvano la sera, mezz'ora di cottura.",
      img: "assets/img/lenticchie.jpg",
      alt: "Le lenticchie umbre nella confezione",
      prodotti: ["lenticchie-umbre", "zuppa-rapida"]
    },
    {
      label: "Gli scaffali dei vini",
      breve: "Vini",
      dove: "Ultima parete, verso la cassa",
      titolo: "Con cosa lo bevi",
      testo: "Montefalco è a mezz'ora da qui.",
      foto: "FOTO: bottiglie di Montefalco sullo scaffale",
      prodotti: ["napos-rosso", "grechetto-napolini", "vigna-rosa-napolini"]
    }
  ];

  /* nota che segue il peso nelle righe della visita (testi del cliente) */
  const noteVisita = {
    "salame-di-cervo":
      "Dolce e delicato, con un piacevole retrogusto affumicato. È il più morbido dei tre sapori ed è il nostro salame più venduto.",
    "salame-di-capriolo":
      "Dolciastro all'inizio, poi più vivace: una leggera nota di peperoncino arriva nel finale senza coprire il gusto della carne.",
    "salame-di-cinghiale": "Il più deciso: rustico, grana larga, e la chiusura resta lunga e speziata in bocca.",
    "salame-ubriaco": "Grana grossa e settimane a macerare nel vino rosso: da lì il nome e il colore scuro della fetta.",
    "salame-spalmabile": "Una settimana sola di stagionatura, e infatti si spalma sul pane invece di affettarsi.",
    "coglione-del-mulo": "Il lardello pepato resta intero nel cuore del salame. Stagionatura medio-lunga.",
    tascabile: "Dalla noce della spalla: il pezzo grosso del banco, da affettare piano.",
    "pecorino-12-mesi": "Dodici mesi, solo latte di pecora: piccante e asciutto. Da tagliere, o grattugiato. Con il salame di cervo va a braccetto.",
    "salsa-tartufata": "Tartufo estivo: sulla bruschetta è già una cena, oppure a condire la pasta.",
    "salame-cinghiale-tartufo":
      "Più saporito e deciso, con il carattere del cinghiale e un retrogusto naturale di tartufo che rimane piacevolmente in bocca.",
    "olio-tartufo-nero": "Un filo a crudo, mai in cottura: su bruschette, uova, risotti.",
    "lenticchie-umbre": "Piccole, quindi più delicate delle altre: 25–30 minuti senza ammollo e sono pronte.",
    "zuppa-rapida": "Legumi e cereali già insieme: mezz'ora e la cena d'inverno è risolta."
  };

  const bottega = {
    nome: "Wild Italy",
    sottotitolo: "BOTTEGA · SPOLETO",
    /* dati del footer del vecchio sito; gli orari sono ancora quelli del mockup */
    ragioneSociale: "Wild Italy di Parmegiani Diego",
    via: "Via Porta Fuga 26, 06049 Spoleto (PG)",
    orari: "Lun–Sab 8:30–13:30 · 16:00–20:00",
    tel: "+39 334 920 6466",
    telHref: "tel:+393349206466",
    email: "parmegianidiego@gmail.com",
    piva: "P.IVA 03718700549",
    mappa: "https://maps.app.goo.gl/MFsZsuGnCjkg5w8x6",
    instagram: "https://www.instagram.com/wilditalytartufi/",
    facebook: "https://www.facebook.com/Wild-Italy-tartufi-100391668390820/"
  };

  /* ------------------------------------------------------------ helper */
  const byCat = (slug) => prodotti.filter((p) => p.categoria === slug && !p.inArrivo);
  const get = (slug) => prodotti.find((p) => p.slug === slug) || null;
  const cat = (slug) => categorie.find((c) => c.slug === slug) || null;
  const sel = (slug) => selezioni.find((s) => s.slug === slug) || null;

  return { categorie, prodotti, scorciatoie, selezioni, visita, noteVisita, bottega, byCat, get, cat, sel };
})();
