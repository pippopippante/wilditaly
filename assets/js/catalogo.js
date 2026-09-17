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
      intro: "Pecorino stagionato 13 mesi, solo latte di pecora.",
      breve: "Pecorino stagionato 13 mesi, solo latte di pecora.",
      foto: "FOTO: pecorini a scalare",
      img: "assets/img/pecorino-13-mesi.jpg",
      inVetrina: 3
    },
    {
      slug: "tartufo",
      nav: "Tartufo",
      nome: "Tartufo e salse",
      titolo: "Tartufo e salse",
      intro: "Tartufo estivo in salsa e condimenti aromatizzati al tartufo.",
      breve: "Salsa tartufata e condimenti al tartufo.",
      breveLunga: "Tartufo estivo in salsa e condimenti aromatizzati al tartufo.",
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
      foto: "FOTO: bottiglie di Montefalco",
      img: "assets/img/grechetto-napolini-1.jpg",
      imgAlt: "Bottiglia di Grechetto Clara Vinea Napolini"
    },
    {
      slug: "dispensa",
      nav: "Dispensa",
      nome: "Dispensa",
      titolo: "Dispensa",
      intro: "Legumi umbri e zuppe da cuocere: la parte della bottega che riempie la credenza.",
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
      abbinamenti: ["degustazione-selvaggina", "sagrantino-montefalco"]
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
      abbinamenti: ["degustazione-selvaggina", "sagrantino-montefalco"]
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
      abbinamenti: ["degustazione-selvaggina", "sagrantino-montefalco"]
    },
    {
      slug: "sagrantino-montefalco",
      nome: "Sagrantino di Montefalco DOCG",
      categoria: "vini",
      occhiello: "VINI DI MONTEFALCO · UMBRIA",
      prezzo: 24,
      peso: "750 ml",
      ml: 750,
      foto: "FOTO: bottiglia",
      descrizione: "Tannino deciso, regge la dolcezza del cervo.",
      nota: "Tannino deciso, regge la dolcezza del cervo",
      galleria: ["FOTO 1: bottiglia", "FOTO 2: etichetta"],
      abbinamenti: ["salame-di-cervo", "degustazione-selvaggina"]
    },
    /* Napolini: dati letti a mano sull'etichetta (annata 2025). Prezzi ancora da
       confermare col cliente; l'elenco ingredienti completo è dietro il QR. */
    {
      slug: "grechetto-napolini",
      nome: "Clara Vinea · Grechetto Colli Martani DOC",
      denominazione: "Colli Martani Denominazione di Origine Controllata Grechetto, annata 2025, 13,5% vol",
      categoria: "vini",
      occhiello: "VINI DI MONTEFALCO · UMBRIA",
      prezzo: 14,
      peso: "750 ml",
      ml: 750,
      foto: "FOTO: bottiglia di Grechetto Napolini",
      img: "assets/img/grechetto-napolini-1.jpg",
      galleriaImg: ["assets/img/grechetto-napolini-1.jpg", "assets/img/grechetto-napolini-2.jpg"],
      descrizione:
        "Il bianco dei Colli Martani, da uve Grechetto, fatto dalla famiglia Napolini a Montefalco. Annata 2025, 13,5% vol.",
      nota: "Grechetto dei Colli Martani",
      ingredienti: "Uve Grechetto. Allergeni: contiene solfiti.",
      valori: "Per 100 ml: energia 302 kJ / 73 kcal",
      produttore: {
        testo:
          "Prodotto e imbottigliato all'origine dall'Az. Agr. Napolini di Scattini Tiziana, Montefalco (PG). Vignaioli Indipendenti."
      },
      abbinamenti: ["pecorino-13-mesi", "salame-di-cervo"]
    },
    {
      slug: "vigna-rosa-napolini",
      nome: "Vigna Rosa · Umbria IGT Rosato",
      denominazione: "Umbria Indicazione Geografica Tipica Rosato, annata 2025, 13,5% vol",
      categoria: "vini",
      occhiello: "VINI DI MONTEFALCO · UMBRIA",
      prezzo: 12,
      peso: "750 ml",
      ml: 750,
      foto: "FOTO: bottiglia di Vigna Rosa Napolini",
      img: "assets/img/vigna-rosa-napolini-1.jpg",
      galleriaImg: ["assets/img/vigna-rosa-napolini-1.jpg", "assets/img/vigna-rosa-napolini-2.jpg"],
      descrizione:
        "Il rosato della famiglia Napolini, vignaioli indipendenti di Montefalco. Umbria IGT, annata 2025, 13,5% vol",
      nota: "Rosato umbro",
      ingredienti: "Allergeni: contiene solfiti.",
      valori: "Per 100 ml: energia 333 kJ / 80 kcal",
      produttore: {
        testo:
          "Prodotto e imbottigliato all'origine dall'Az. Agr. Napolini di Scattini Tiziana, Montefalco (PG). Vignaioli Indipendenti."
      },
      abbinamenti: ["salame-spalmabile", "salame-di-capriolo"]
    },

    /* ------------------------------------------- dal vecchio sito (etichette) */
    {
      slug: "salame-ubriaco",
      nome: "Salame ubriaco",
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 10.9,
      peso: "350 g circa",
      grammi: 350,
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
      grammi: 450,
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
      grammi: 350,
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
        "Salume di antichissime origini, nato sulle montagne dell'Italia centrale: pasta a grana fine con al centro un lardello di grasso di maiale pepato. Stagionatura medio-lunga, per chi cerca sapori forti.",
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
      categoria: "salumi",
      occhiello: "SALUMI TRADIZIONALI",
      prezzo: 28,
      peso: "1 kg circa",
      grammi: 1000,
      foto: "FOTO: tascabile affettato",
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
      grammi: 1000,
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
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 6,
      peso: "130 g",
      grammi: 130,
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
      /* Bottiglia in foto e titolo del vecchio sito: 100 ml (una riga della
         pagina vecchia diceva 60 ml, da confermare). */
      nome: "Condimento aromatizzato al tartufo nero pregiato",
      denominazione:
        "Condimento aromatizzato al profumo del tartufo nero pregiato a base di olio extra vergine di oliva italiano",
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 7,
      peso: "100 ml",
      ml: 100,
      foto: "FOTO: bottiglietta di olio al tartufo nero",
      img: "assets/img/olio-tartufo-nero.jpg",
      descrizione:
        "Condimento a base di olio extra vergine di oliva italiano, aromatizzato al tartufo nero pregiato. Sapore dolce e fungoso: su bruschette, risotti, pasta o carne.",
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
      categoria: "tartufo",
      occhiello: "TARTUFO E SALSE",
      prezzo: 7,
      peso: "100 ml",
      ml: 100,
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
      grammi: 500,
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
      denominazione: "Zuppa rapida, legumi e cereali",
      categoria: "dispensa",
      occhiello: "DISPENSA",
      prezzo: 6.2,
      peso: "500 g",
      grammi: 500,
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
          prodotti: ["salame-di-cinghiale", "coglione-del-mulo", "pecorino-13-mesi"]
        },
        {
          titolo: "Per un aperitivo con gli amici",
          testo: "Uno da spalmare, uno da affettare e uno da versare.",
          prodotti: ["salame-spalmabile", "salame-ubriaco", "sagrantino-montefalco"]
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
          testo: "Il Sagrantino e quello che ci va accanto.",
          prodotti: ["sagrantino-montefalco", "box-umbria", "pecorino-13-mesi"]
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
            "salamella-di-maiale"
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
      img: "assets/img/pecorino-13-mesi.jpg",
      alt: "La forma di pecorino stagionato 13 mesi",
      prodotti: ["pecorino-13-mesi", "salsa-tartufata", "olio-tartufo-nero"]
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
      prodotti: ["sagrantino-montefalco", "grechetto-napolini", "vigna-rosa-napolini"]
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
    "pecorino-13-mesi": "Tredici mesi, solo latte di pecora: piccante e asciutto. Da tagliere, o grattugiato. Con il salame di cervo va a braccetto.",
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
