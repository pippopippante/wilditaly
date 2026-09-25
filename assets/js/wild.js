/* ==========================================================================
   Wild Italy — comportamento del sito
   Codice di Emanuele Parmegiani.
   Chrome condiviso (header, pannelli, footer, barra mobile), carrello,
   ricerca, caroselli, galleria, filtri, fisarmoniche.
   ========================================================================== */

(function () {
  "use strict";

  const C = window.CATALOGO;
  const WA = "https://wa.me/" + C.bottega.telHref.replace(/\D/g, "");
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));

  /* schede prodotto: le foto verticali (bottiglie) si vedono intere invece di essere tagliate */
  document.addEventListener(
    "load",
    (e) => {
      const img = e.target;
      if (img.tagName === "IMG" && img.closest(".prod .ph") && img.naturalHeight > img.naturalWidth * 1.1)
        img.parentNode.classList.add("ph--intera");
    },
    true
  );
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* ------------------------------------------------------ configurazione
     Corrisponde alle props di "Wild Italy.dc.html":
     mostraBarraAnnuncio, mostraBadgeArtigianale.                         */
  const CONFIG = Object.assign(
    { mostraBarraAnnuncio: true, mostraBadgeArtigianale: false },
    window.WILD_CONFIG || {}
  );

  /* ------------------------------------------------------------ formati */
  const euro = (n) =>
    Number(n).toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
  /* prezzo al kg o al litro (obbligatorio per gli alimenti), da `grammi` / `ml` del catalogo;
     `x` è il prodotto o il suo formato. Le box non hanno peso: niente prezzo al kg. */
  const alKg = (prezzo, x) =>
    x.grammi ? euro((prezzo * 1000) / x.grammi) + "/kg" : x.ml ? euro((prezzo * 1000) / x.ml) + "/l" : "";

  /* ------------------------------------------------------------- icone */
  const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
<symbol id="i-menu" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></symbol>
<symbol id="i-close" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></symbol>
<symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></symbol>
<symbol id="i-bag" viewBox="0 0 24 24"><path d="M4 7h16v14H4z"/><path d="M9 7V5.5a3 3 0 0 1 6 0V7"/></symbol>
<symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1.5C4 16.5 7.6 15 12 15s8 1.5 8 4.5V21"/></symbol>
<symbol id="i-shop" viewBox="0 0 24 24"><path d="M3 9l1.6-5h14.8L21 9"/><path d="M4.5 9v11h15V9"/><path d="M9.5 20v-6h5v6"/></symbol>
<symbol id="i-right" viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></symbol>
<symbol id="i-left" viewBox="0 0 24 24"><path d="M20 12H5M11 6l-6 6 6 6"/></symbol>
<symbol id="i-down" viewBox="0 0 24 24"><path d="M5 9l7 7 7-7"/></symbol>
<symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
<symbol id="i-minus" viewBox="0 0 24 24"><path d="M5 12h14"/></symbol>
<symbol id="i-share" viewBox="0 0 24 24"><path d="M12 16V4M7.5 8.5L12 4l4.5 4.5"/><path d="M5 14v6h14v-6"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24"><path d="M7 3h4l1.6 4.4-2.3 1.6a12 12 0 0 0 4.7 4.7l1.6-2.3L21 13v4a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5 5.2 2 2 0 0 1 7 3z"/></symbol>
</svg>`;
  const ico = (n, cls) => `<svg class="ico ${cls || ""}" aria-hidden="true"><use href="#i-${n}"></use></svg>`;

  /* ------------------------------------------------------- segnaposto foto */
  /* Con `src` lo slot mostra la foto vera; senza, la didascalia del mockup. */
  const altDa = (label) => String(label || "").replace(/^FOTO(?: \d+)?:\s*/, "");
  const ph = (label, cls, extra, src) =>
    src
      ? `<div class="ph ${cls || ""}" ${extra || ""}><img src="${esc(src)}" alt="${esc(altDa(label))}" loading="lazy"></div>`
      : `<div class="ph ${cls || ""}" ${extra || ""}><span class="ph__note">${esc(label || "")}</span></div>`;

  /* ------------------------------------------------------------ carrello */
  const KEY = "wilditaly:carrello";
  const Cart = {
    righe: [],
    carica() {
      try {
        const r = JSON.parse(localStorage.getItem(KEY));
        this.righe = Array.isArray(r) ? r.filter((x) => x && x.slug && C.get(x.slug)) : [];
      } catch (e) {
        this.righe = [];
      }
    },
    salva() {
      try {
        localStorage.setItem(KEY, JSON.stringify(this.righe));
      } catch (e) {
        /* storage non disponibile: il carrello resta in memoria */
      }
      render.carrello();
      render.add();
      if (render.guida) render.guida();
    },
    /* senza formato vale il primo: la card e la scheda aggiungono la stessa riga */
    formato: (slug, formato) => formato || (((C.get(slug) || {}).formati || [])[0] || {}).nome || null,
    id(slug, formato) {
      return slug + "::" + (this.formato(slug, formato) || "");
    },
    qta(slug, formato) {
      const id = this.id(slug, formato);
      const r = this.righe.find((x) => this.id(x.slug, x.formato) === id);
      return r ? r.qta : 0;
    },
    aggiungi(slug, formato, qta) {
      const p = C.get(slug);
      if (!p || p.inArrivo) return;
      const id = this.id(slug, formato);
      const r = this.righe.find((x) => this.id(x.slug, x.formato) === id);
      if (r) r.qta += qta || 1;
      else this.righe.push({ slug: slug, formato: this.formato(slug, formato), qta: qta || 1 });
      this.salva();
    },
    imposta(id, qta) {
      const i = this.righe.findIndex((x) => this.id(x.slug, x.formato) === id);
      if (i < 0) return;
      if (qta <= 0) this.righe.splice(i, 1);
      else this.righe[i].qta = qta;
      this.salva();
    },
    prezzoRiga(r) {
      const p = C.get(r.slug);
      if (!p) return 0;
      if (r.formato && p.formati) {
        const f = p.formati.find((x) => x.nome === r.formato);
        if (f) return f.prezzo;
      }
      return p.prezzo || 0;
    },
    totale() {
      return this.righe.reduce((s, r) => s + this.prezzoRiga(r) * r.qta, 0);
    },
    pezzi() {
      return this.righe.reduce((s, r) => s + r.qta, 0);
    }
  };

  /* --------------------------------------------------------------- toast */
  function toast(msg, azione) {
    const host = $(".toasts");
    if (!host) return;
    const el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    el.innerHTML =
      ico("check") +
      `<span>${esc(msg)}</span>` +
      (azione ? `<button class="link-arrow" data-toast-go>${esc(azione)}</button>` : "");
    host.appendChild(el);
    if (azione) el.querySelector("[data-toast-go]").addEventListener("click", () => openPanel("carrello"));
    setTimeout(() => {
      el.classList.add("is-out");
      setTimeout(() => el.remove(), 240);
    }, 3600);
  }

  /* -------------------------------------------------------- apri/chiudi */
  let aperto = null;
  let ultimoFocus = null;

  function openPanel(nome) {
    closePanel(true);
    const el = nome === "cerca" ? $(".search") : $('[data-panel="' + nome + '"]');
    if (!el) return;
    ultimoFocus = document.activeElement;
    el.classList.add("is-open");
    el.removeAttribute("aria-hidden");
    if (nome !== "cerca") $(".scrim").classList.add("is-open");
    document.body.classList.add("is-locked");
    /* col pannello aperto il resto della pagina è fuori portata: il Tab resta dentro */
    $$("body > *").forEach((x) => {
      if (x !== el && !x.matches(".scrim, .toasts, script")) x.inert = true;
    });
    aperto = el;
    const f = el.querySelector("input, button, a");
    if (f) setTimeout(() => f.focus(), 60);
  }

  function closePanel(silenzioso) {
    if (!aperto) return;
    aperto.classList.remove("is-open");
    aperto.setAttribute("aria-hidden", "true");
    aperto = null;
    $$("body > [inert]").forEach((x) => (x.inert = false));
    $(".scrim").classList.remove("is-open");
    document.body.classList.remove("is-locked");
    if (!silenzioso && ultimoFocus && ultimoFocus.focus) ultimoFocus.focus();
  }

  /* ------------------------------------------------------- chrome: header */
  function navHtml(dove) {
    const pag = document.body.dataset.cat || "";
    return C.categorie
      .map((c) => {
        const href = c.pagina || "categoria.html?c=" + c.slug;
        const cur = pag === c.slug ? ' aria-current="page"' : "";
        const cls = c.inNavEvidenza ? ' class="is-featured"' : "";
        const a = `<a href="${href}"${cur}${cls}>${esc(dove === "menu" ? c.nome : c.nav)}${
          dove === "menu" ? ico("right") : ""
        }</a>`;
        /* il catalogo completo sta subito dopo la dispensa */
        if (c.slug !== "dispensa") return a;
        const curCat = document.body.dataset.pagina === "catalogo" ? ' aria-current="page"' : "";
        return a + `<a href="catalogo.html"${curCat}>${dove === "menu" ? "Catalogo completo" + ico("right") : "Catalogo"}</a>`;
      })
      .join("");
  }

  /* Intestazione contestuale della scheda prodotto su mobile (schermata 2b):
     indietro · nome del prodotto · condividi · carrello. */
  function ctxBarHtml() {
    return `
  <div class="hdr__bar hdr__ctx">
    <button class="iconbtn" data-back aria-label="Torna indietro">${ico("left")}</button>
    <span class="hdr__ctx-t" data-ctx-title></span>
    <span style="display:flex">
      <button class="iconbtn" data-share aria-label="Condividi">${ico("share")}</button>
      <button class="iconbtn" data-open="carrello" aria-label="Apri il carrello">
        ${ico("bag")}<span class="badge" data-cart-badge hidden>0</span>
      </button>
    </span>
  </div>`;
  }

  function headerHtml() {
    const b = C.bottega;
    /* la barra annuncio si vede SOLO su telefono (vedi .announce in wild.css):
       l'ha chiesto l'utente, non rimetterla su tablet e PC */
    return `
${CONFIG.mostraBarraAnnuncio ? '<div class="announce">In tutta Italia, sottovuoto e a casa tua in circa 48 ore</div>' : ""}
<header class="hdr">
  ${document.body.dataset.pagina === "prodotto" ? ctxBarHtml() : ""}
  <div class="hdr__bar">
    <button class="iconbtn menu-toggle" data-open="menu" aria-label="Apri il menu">${ico("menu")}</button>
    <a class="brand" href="index.html">
      <svg class="brand__mark" viewBox="10.5 7.5 43 49" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="4"><path d="M32 10 51.05 21v22L32 54 12.95 43V21z"/><path d="M15 39 25.2 25.7l4.1 4.5-3.4 3.6 9.9-11.7L50 38.9" stroke-width="3.6"/></svg>
      <span class="brand__txt">
        <span class="brand__name">${esc(b.nome)}</span>
        <span class="brand__sub">${esc(b.sottotitolo)}</span>
      </span>
    </a>
    <nav class="hdr__nav" aria-label="Categorie">${navHtml("hdr")}</nav>
    <div class="hdr__side">
      <button class="iconbtn txtbtn" data-open="cerca" aria-label="Cerca">${ico("search")}<span class="sr-lg">Cerca</span></button>
      <button class="iconbtn txtbtn" data-account aria-label="Account">${ico("user")}<span class="sr-lg">Account</span></button>
      <button class="cart-pill" data-open="carrello">Carrello · <span data-cart-n>0</span></button>
      <button class="iconbtn cart-icon-btn" data-open="carrello" aria-label="Apri il carrello">
        ${ico("bag")}<span class="badge" data-cart-badge hidden>0</span>
      </button>
    </div>
  </div>
</header>`;
  }

  /* ------------------------------------------------------- chrome: footer */
  function footerHtml() {
    const b = C.bottega;
    const cats = C.categorie
      .filter((c) => !c.inNavEvidenza)
      .map((c) => `<a href="categoria.html?c=${c.slug}">${esc(c.nome)}</a>`)
      .join("");
    return `
<footer class="ftr">
  <div class="ftr__grid">
    <div>
      <img class="ftr__logo" src="assets/img/logo.jpeg" alt="${esc(b.nome)}" width="500" height="500" loading="lazy">
      <p class="ftr__addr">${esc(b.via)}<br><a href="${b.telHref}">${esc(b.tel)}</a><br><a href="mailto:${b.email}">${esc(b.email)}</a></p>
    </div>
    <div class="ftr__col">
      <div class="eyebrow" style="color:var(--sand-meta);margin-bottom:10px">BOTTEGA</div>
      <div class="ftr__links">
        <a href="guida.html">Fatti guidare</a>
        ${cats}
        <a href="catalogo.html">Catalogo completo</a>
      </div>
    </div>
    <div class="ftr__col">
      <div class="eyebrow" style="color:var(--sand-meta);margin-bottom:10px">SERVIZIO</div>
      <div class="ftr__links">
        <a href="info.html#spedizioni">Spedizioni</a>
        <a href="info.html#conservazione">Conservazione</a>
        <a href="info.html#resi">Resi</a>
        <a href="info.html#contatti">Contatti</a>
      </div>
    </div>
    <div>
      <div class="eyebrow" style="color:var(--sand-meta);margin-bottom:10px">NEWSLETTER</div>
      <p style="font-size:14px;line-height:1.7;margin:0">Stagionature nuove e consigli di abbinamento, una volta al mese.</p>
      <form class="nl" data-newsletter novalidate>
        <input type="email" name="email" placeholder="la tua email" aria-label="La tua email" required>
        <button type="submit">ISCRIVIMI</button>
      </form>
      <p class="nl__msg" data-nl-msg role="status"></p>
    </div>
  </div>
  <div class="ftr__bottom">
    <span>© <span data-anno></span> ${esc(b.ragioneSociale)} · ${esc(b.piva)}</span>
    <div class="ftr__social">
      <a href="${b.instagram}" target="_blank" rel="noopener">Instagram</a>
      <a href="${b.facebook}" target="_blank" rel="noopener">Facebook</a>
      <span class="lang" role="group" aria-label="Lingua">
        <button aria-pressed="true">IT</button>
        <button aria-pressed="false" data-soon="Versione inglese">EN</button>
      </span>
    </div>
  </div>
</footer>`;
  }

  /* ------------------------------------------------------ chrome: pannelli */
  function panelsHtml() {
    const b = C.bottega;
    return `
<div class="scrim" data-close></div>

<aside class="panel panel--left" data-panel="menu" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Menu">
  <div class="panel__head">
    <span class="panel__title">La bottega</span>
    <button class="iconbtn" data-close aria-label="Chiudi il menu">${ico("close")}</button>
  </div>
  <div class="panel__body">
    <nav class="menu-list" aria-label="Categorie">
      <a href="guida.html" class="is-featured">Fatti guidare${ico("right")}</a>
      ${navHtml("menu")}
    </nav>
    <div class="menu-extra">
      <a href="storia.html">La nostra storia</a>
      <a href="info.html#spedizioni">Spedizioni e consegne</a>
      <a href="info.html#conservazione">Conservazione</a>
      <a href="info.html#contatti">Contatti</a>
      <a href="${b.mappa}" target="_blank" rel="noopener">${esc(b.via)}</a>
    </div>
  </div>
</aside>

<aside class="panel panel--right" data-panel="carrello" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Carrello">
  <div class="panel__head">
    <span class="panel__title">Carrello</span>
    <button class="iconbtn" data-close aria-label="Chiudi il carrello">${ico("close")}</button>
  </div>
  <div class="panel__body" data-cart-body></div>
  <div class="panel__foot" data-cart-foot hidden>
    <div class="cart-tot">
      <span class="meta">Totale · IVA inclusa</span>
      <span class="cart-tot__v" data-cart-tot>0,00 €</span>
    </div>
    <p class="meta" style="margin-bottom:14px">Spedizione compresa: <span data-spedizione></span> · sottovuoto, in circa 48 ore.</p>
    <button class="btn btn--wine btn--block" data-soon="Cassa">Vai alla cassa</button>
  </div>
</aside>

<div class="search" data-panel="cerca" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Cerca nella bottega">
  <div class="search__head">
    ${ico("search")}
    <input class="search__input" type="search" data-search-input placeholder="Cerca: cervo, tartufo, vino…" aria-label="Cerca un prodotto">
    <button class="iconbtn" data-close aria-label="Chiudi la ricerca">${ico("close")}</button>
  </div>
  <div class="search__body">
    <div class="eyebrow">SCORCIATOIE</div>
    <div class="search__hint">
      ${C.scorciatoie.map((s) => `<a class="chip" href="${s.href}">${esc(s.t)}</a>`).join("")}
    </div>
    <div data-search-out></div>
  </div>
</div>

<nav class="tabbar" aria-label="Navigazione rapida">
  <a href="index.html" data-tab="home">${ico("shop")}<span>Bottega</span></a>
  <a href="guida.html" data-tab="guida">${ico("pin")}<span>Guida</span></a>
  <button data-open="cerca">${ico("search")}<span>Cerca</span></button>
  <button data-open="carrello">${ico("bag")}<span>Carrello</span><span class="badge" data-cart-badge hidden>0</span></button>
</nav>

<a class="wa" href="${WA}" target="_blank" rel="noopener" aria-label="Scrivici su WhatsApp">
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41z"/></svg>
</a>

<div class="toasts" aria-live="polite"></div>`;
  }

  /* ------------------------------------------------------------- render */
  const render = {
    /* riallinea ogni pulsante-contatore in pagina alla quantita nel carrello */
    add() {
      $$("[data-addq]").forEach((el) => {
        const n = Cart.qta(el.dataset.addq, el.dataset.f);
        el.classList.toggle("addq--on", n > 0);
        $(".addq__go", el).hidden = n > 0;
        const st = $(".addq__s", el);
        st.hidden = !n;
        if (n) $(".addq__n", st).textContent = n;
      });
    },
    carrello() {
      const n = Cart.pezzi();
      $$("[data-cart-n]").forEach((e) => (e.textContent = n));
      $$("[data-cart-badge]").forEach((e) => {
        e.textContent = n;
        e.hidden = n === 0;
      });

      const body = $("[data-cart-body]");
      if (!body) return;
      const foot = $("[data-cart-foot]");

      if (!Cart.righe.length) {
        body.innerHTML = `
<div class="cart-empty">
  <div class="h3">Il carrello è vuoto</div>
  <p class="body">Se non sai da dove partire, ti guidiamo noi.</p>
  <a class="btn btn--wineline btn--sm" href="guida.html" style="margin-top:18px">Fatti guidare</a>
</div>`;
        if (foot) foot.hidden = true;
        return;
      }

      body.innerHTML = Cart.righe
        .map((r) => {
          const p = C.get(r.slug);
          const id = Cart.id(r.slug, r.formato);
          return `
<div class="cart-line">
  ${ph("", "cart-line__ph ph--2", "", p.img)}
  <div class="cart-line__b">
    <a class="cart-line__name" href="prodotto.html?p=${p.slug}">${esc(p.nome)}</a>
    <div class="cart-line__var">${esc(r.formato || p.peso || "")}</div>
    <div class="cart-line__row">
      <span class="stepper stepper--sm">
        <button data-qta="${esc(id)}" data-d="-1" aria-label="Riduci la quantità">${ico("minus")}</button>
        <span class="stepper__n">${r.qta}</span>
        <button data-qta="${esc(id)}" data-d="1" aria-label="Aumenta la quantità">${ico("plus")}</button>
      </span>
      <span class="cart-line__price">${euro(Cart.prezzoRiga(r) * r.qta)}</span>
    </div>
    <div class="cart-line__row">
      <button class="link-del" data-rimuovi="${esc(id)}">Rimuovi</button>
    </div>
  </div>
</div>`;
        })
        .join("");

      if (foot) {
        foot.hidden = false;
        $("[data-cart-tot]").textContent = euro(Cart.totale() + C.bottega.spedizione);
      }
    }
  };

  /* --------------------------------------------------------- pulsante +/- */
  /* "Aggiungi al carrello" e il contatore - n + occupano la stessa scatola:
     al clic il pulsante cambia contenuto, mai misura (richiesta del cliente). */
  function addq(p, cls, label, formato) {
    const n = Cart.qta(p.slug, formato);
    const id = Cart.id(p.slug, formato);
    return `
<span class="addq btn ${cls}${n ? " addq--on" : ""}" data-addq="${p.slug}"${formato ? ` data-f="${esc(formato)}"` : ""}>
  <button type="button" class="addq__go" data-add="${p.slug}" aria-label="Aggiungi ${esc(p.nome)} al carrello"${n ? " hidden" : ""}>${label}</button>
  <span class="addq__s"${n ? "" : " hidden"}>
    <button type="button" data-qta="${id}" data-d="-1" aria-label="Uno in meno di ${esc(p.nome)}">${ico("minus")}</button>
    <span class="addq__n">${n || 1}</span>
    <button type="button" data-qta="${id}" data-d="1" aria-label="Uno in più di ${esc(p.nome)}">${ico("plus")}</button>
  </span>
</span>`;
  }

  /* --------------------------------------------------------- schede card */
  function prodCard(p) {
    const craft = p.artigianale && CONFIG.mostraBadgeArtigianale
      ? '<div class="badge-craft">PRODUZIONE ARTIGIANALE</div>'
      : "";
    const nota = p.nota
      ? `<div class="note"><div class="note__t">NOTA DI GUSTO</div><div class="note__q">${esc(p.nota)}</div></div>`
      : "";
    return `
<article class="prod">
  <a href="prodotto.html?p=${p.slug}" aria-label="${esc(p.nome)}">${ph(p.foto, "ph--2", "", p.img)}</a>
  <div class="prod__b">
    ${craft}
    <a class="prod__n" href="prodotto.html?p=${p.slug}">${esc(p.nome)}</a>
    ${nota}
    <div class="prod__price">
      <span class="price">${euro(p.prezzo)}</span>
      <span class="meta">${[p.peso, alKg(p.prezzo, p)].filter(Boolean).map(esc).join("<br>")}</span>
    </div>
    ${addq(p, "btn--dark btn--sm btn--block prod__cta", `Aggiungi<span class="prod__cta-x"> al carrello</span>`)}
  </div>
</article>`;
  }

  function boxCard(p, opz) {
    opz = opz || {};
    if (p.inArrivo) {
      return `
<article class="box-card box-card--soon" aria-label="${esc(p.nome)} — in arrivo">
  ${ph(p.foto, "", "", p.img)}
  <div class="box-card__b">
    <div class="box-card__n">${esc(p.nome)}</div>
    <p class="meta" style="margin-top:8px">In arrivo in bottega</p>
  </div>
</article>`;
    }
    const et = p.etichetta
      ? `<div class="eyebrow ${p.inEvidenza ? "eyebrow--wine" : "eyebrow--olive"}" style="margin-bottom:6px">${esc(p.etichetta)}</div>`
      : "";
    const testo = opz.testo && (p.descrizioneBreve || p.descrizione)
      ? `<p class="body" style="margin:8px 0 0;font-size:13px">${esc(p.descrizioneBreve || p.descrizione)}</p>`
      : "";
    const old = p.prezzoPieno ? `<span class="price--old">${euro(p.prezzoPieno)}</span>` : "";
    return `
<article class="box-card${p.inEvidenza && opz.evidenza ? " box-card--pick" : ""}">
  <a href="prodotto.html?p=${p.slug}" aria-label="${esc(p.nome)}">${ph(p.foto, "", "", p.img)}</a>
  <div class="box-card__b">
    ${et}
    <a class="box-card__n" href="prodotto.html?p=${p.slug}">${esc(p.nome)}</a>
    ${testo}
    <div class="pricerow" style="margin-top:auto;padding-top:14px">
      <span class="price">${euro(p.prezzo)}</span>${old}
    </div>
  </div>
</article>`;
  }

  /* ------------------------------------------------------------ caroselli */
  function initRail(rail) {
    const dots = rail.parentElement.querySelector(".dots");
    const nav = rail.parentElement.querySelector(".rail-nav");
    if (!dots && !nav) return;

    const voci = () => $$(":scope > *", rail);
    const padSx = () => parseFloat(getComputedStyle(rail).paddingLeft) || 0;
    const scorre = () => rail.scrollWidth > rail.clientWidth + 4;

    /* Le posizioni in cui il carosello si può davvero fermare, una per tacca.
       Le ultime schede non arrivano mai al bordo sinistro (il carosello finisce
       prima): condividono la posizione finale, così l'ultima tacca si accende. */
    function fermate() {
      const max = rail.scrollWidth - rail.clientWidth;
      const pos = [];
      voci().forEach((el) => {
        const p = Math.min(el.offsetLeft - rail.offsetLeft - padSx(), max);
        if (!pos.length || p - pos[pos.length - 1] > 4) pos.push(p);
      });
      return pos;
    }

    /* indice della fermata più vicina alla posizione attuale */
    function attiva() {
      const pos = fermate();
      let best = 0;
      pos.forEach((p, i) => {
        if (Math.abs(p - rail.scrollLeft) < Math.abs(pos[best] - rail.scrollLeft)) best = i;
      });
      return best;
    }

    function vaiA(i) {
      const pos = fermate();
      if (pos.length) rail.scrollTo({ left: pos[Math.max(0, Math.min(pos.length - 1, i))], behavior: "smooth" });
    }

    function costruisci() {
      if (!dots) return;
      const n = fermate().length;
      if (!scorre() || n < 2) {
        dots.innerHTML = "";
        dots.hidden = true;
        return;
      }
      dots.hidden = false;
      dots.innerHTML = Array.from({ length: n })
        .map(
          (_, i) =>
            `<button type="button" data-p="${i}" aria-label="Scorri alla posizione ${i + 1} di ${n}"${i === 0 ? ' aria-current="true"' : ""}></button>`
        )
        .join("");
    }

    function sync() {
      const i = attiva();
      if (dots) $$("button", dots).forEach((b, k) => b.setAttribute("aria-current", k === i ? "true" : "false"));
      if (nav) {
        const [prev, next] = $$("button", nav);
        if (prev) prev.disabled = rail.scrollLeft <= 4;
        if (next) next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
      }
    }

    if (dots)
      dots.addEventListener("click", (e) => {
        const b = e.target.closest("button[data-p]");
        if (b) vaiA(+b.dataset.p);
      });
    if (nav)
      nav.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (b) vaiA(attiva() + (b.dataset.dir === "prev" ? -1 : 1));
      });

    let t;
    rail.addEventListener("scroll", () => {
      clearTimeout(t);
      t = setTimeout(sync, 60);
    });
    window.addEventListener("resize", () => {
      costruisci();
      sync();
    });
    costruisci();
    sync();
  }

  /* ---------------------------------------------------------- fisarmoniche */
  function initAcc(root) {
    $$(".acc__t", root || document).forEach((b) => {
      if (b.dataset.on) return;
      b.dataset.on = "1";
      b.addEventListener("click", () => {
        const open = b.getAttribute("aria-expanded") === "true";
        b.setAttribute("aria-expanded", String(!open));
        const p = document.getElementById(b.getAttribute("aria-controls"));
        if (p) p.hidden = open;
      });
    });
  }

  /* --------------------------------------------------------------- ricerca */
  /* testo in cui cercano sia la ricerca dell'header sia il catalogo completo */
  const chiave = (p) =>
    [p.nome, p.descrizione, p.nota, p.categoria, (C.cat(p.categoria) || {}).nome]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

  function initSearch() {
    const input = $("[data-search-input]");
    const out = $("[data-search-out]");
    if (!input || !out) return;

    const indice = C.prodotti.map((p) => ({ p: p, k: chiave(p) }));

    function cerca() {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) {
        out.innerHTML = "";
        return;
      }
      const parole = q.split(/\s+/);
      const hit = indice.filter((r) => parole.every((w) => r.k.indexOf(w) > -1)).map((r) => r.p);
      if (!hit.length) {
        out.innerHTML = `
<div class="eyebrow" style="margin-top:28px">NESSUN RISULTATO</div>
<p class="lede" style="margin-top:10px">Non abbiamo trovato «${esc(input.value)}».<br>Prova con “cervo”, “tartufo” o “box”.</p>`;
        return;
      }
      out.innerHTML =
        `<div class="eyebrow" style="margin-top:28px">${hit.length} ${hit.length === 1 ? "RISULTATO" : "RISULTATI"}</div>` +
        `<div class="search__res">` +
        hit
          .map(
            (p) => `
<a class="res" href="prodotto.html?p=${p.slug}">
  ${ph("", "res__ph ph--2", "", p.img)}
  <span>
    <span class="res__n">${esc(p.nome)}</span>
    <span class="res__p">${p.inArrivo ? "In arrivo" : euro(p.prezzo)}</span>
  </span>
</a>`
          )
          .join("") +
        `</div>`;
    }

    input.addEventListener("input", cerca);
  }

  /* -------------------------------------------------------------- pagine */

  /* ---- home: riempie i mount dal catalogo */
  function mountHome() {
    /* specialità: prodotti veri; le categorie stanno una volta sola, negli scaffali qui sotto */
    const spec = $('[data-mount="specialita"]');
    if (spec) spec.innerHTML = C.bottega.specialita.map(C.get).filter(Boolean).map(prodCard).join("");

    const box = $('[data-mount="box-rail"]');
    if (box)
      box.innerHTML = C.byCat("box")
        .concat(C.prodotti.filter((p) => p.categoria === "box" && p.inArrivo))
        .map((p) => boxCard(p, { testo: true, evidenza: true }))
        .join("");

    const shelf = $('[data-mount="shelf"]');
    if (shelf)
      shelf.innerHTML =
        C.categorie
          .filter((c) => !c.inNavEvidenza)
          .map(
            (c) => `
<a class="shelf__i" href="categoria.html?c=${c.slug}">
  ${ph("", "ph--3", "", c.img)}<span>${esc(c.nome)}</span>
</a>`
          )
          .join("");

    /* recensioni: carosello, pallini e frecce li fa initRail; qui solo "Leggi di più",
       sotto i testi davvero tagliati (si misura a font caricati) */
    const rv = $("[data-revs]");
    if (rv) {
      rv.addEventListener("click", (e) => {
        const piu = e.target.closest(".rev__piu");
        if (!piu) return;
        const aperta = piu.closest(".rev").classList.toggle("is-aperta");
        piu.setAttribute("aria-expanded", aperta);
        piu.textContent = aperta ? "Nascondi" : "Leggi di più";
      });
      document.fonts.ready.then(() =>
        $$(".rev__t", rv).forEach((t) => {
          if (t.scrollHeight > t.clientHeight + 2)
            t.insertAdjacentHTML("afterend", '<button type="button" class="rev__piu" aria-expanded="false">Leggi di più</button>');
        })
      );
    }
  }

  /* ---- box: la schermata 1e come pagina */
  function mountBox() {
    const host = $('[data-mount="box-grid"]');
    if (!host) return;
    const lista = C.prodotti.filter((p) => p.categoria === "box");
    host.innerHTML = lista
      .map((p) => {
        if (p.inArrivo) return boxCard(p);
        const items = (p.contenuto || [])
          .map((c) => `<li><span>${esc(c.t)}${c.n ? ` <em>· ${esc(c.n)}</em>` : ""}</span></li>`)
          .join("");
        const risp = p.prezzoPieno ? p.prezzoPieno - p.prezzo : 0;
        return `
<article class="box-card">
  <a href="prodotto.html?p=${p.slug}" aria-label="${esc(p.nome)}">${ph(p.foto, "", "", p.img)}</a>
  <div class="box-card__b">
    ${p.etichetta ? `<div class="eyebrow eyebrow--wine" style="margin-bottom:8px">${esc(p.etichettaEstesa || p.etichetta)}</div>` : ""}
    <a class="box-card__n" href="prodotto.html?p=${p.slug}">${esc(p.nome)}</a>
    <ul class="speclist">${items}</ul>
    <div style="margin-top:auto;padding-top:24px">
      <div class="pricerow">
        <span class="price" style="font-size:34px">${euro(p.prezzo)}</span>
        ${p.prezzoPieno ? `<span class="price--old" style="font-size:14px">${euro(p.prezzoPieno)}</span>` : ""}
        ${risp > 0 ? `<span class="save">RISPARMI ${euro(risp)}</span>` : ""}
      </div>
      ${addq(p, "btn--dark btn--block addq--mt", "Aggiungi al carrello")}
    </div>
  </div>
</article>`;
      })
      .join("");
  }

  /* ---- indirizzo sbagliato (?c= o ?p= che non esiste): un titolo vero e due strade per ripartire */
  function nonTrovato(titolo, testo) {
    document.title = titolo + " · Wild Italy";
    const ctx = $("[data-ctx-title]");
    if (ctx) ctx.textContent = titolo;
    document.head.insertAdjacentHTML("beforeend", '<meta name="robots" content="noindex">');
    $("#main").innerHTML = `
<div class="wrap sec"><div class="empty">
  <h1 class="h3">${esc(titolo)}</h1>
  <p class="body measure" style="margin:0 auto">${esc(testo)} Nel catalogo completo trovi tutti i prodotti, con la ricerca.</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:20px">
    <a class="btn btn--wine btn--sm" href="catalogo.html">Catalogo completo</a>
    <a class="btn btn--wineline btn--sm" href="index.html">Torna alla bottega</a>
  </div>
</div></div>`;
  }

  /* ---- categoria */
  function mountCategoria() {
    const slug = new URLSearchParams(location.search).get("c") || "selvaggina";
    const c = C.cat(slug);
    if (c && c.pagina) {
      location.replace(c.pagina);
      return;
    }
    if (!c) {
      nonTrovato("Scaffale non trovato", "Questo scaffale non c'è, o ha cambiato nome.");
      return;
    }
    document.body.dataset.cat = slug;
    document.title = c.titolo + " · Wild Italy";

    $("[data-cat-crumb]").innerHTML = `<a href="index.html">Bottega</a> / ${esc(c.nome)}`;
    $("[data-cat-title]").textContent = c.titolo;
    $("[data-cat-intro]").textContent = c.intro;

    const helper = $("[data-cat-helper]");
    if (c.helper) {
      helper.innerHTML = `
<div class="eyebrow eyebrow--wine">${esc(c.helper.occhiello)}</div>
<p class="helper__q">${esc(c.helper.testo)}</p>
<a class="link-arrow" style="margin-top:16px" href="${c.helper.href}">${esc(c.helper.cta)} ${ico("right")}</a>`;
    } else {
      helper.remove();
    }

    const lista = C.byCat(slug);
    const griglia = $("[data-cat-grid]");

    if (!lista.length) {
      griglia.innerHTML = `
<div class="empty">
  <div class="h3">Questo scaffale non è ancora online</div>
  <p class="body measure" style="margin:0 auto">Stiamo fotografando e schedando i prodotti di ${esc(c.nome.toLowerCase())}.
  Intanto li trovi tutti in bottega, in via Porta Fuga.</p>
  <a class="btn btn--wineline btn--sm" style="margin-top:20px" href="categoria.html?c=selvaggina">Vedi i salumi alla selvaggina</a>
</div>`;
      return;
    }

    /* niente filtri né ordinamenti: per categoria i prodotti sono pochi */
    griglia.innerHTML = lista.map(prodCard).join("");
  }

  /* ---- catalogo completo: vista "listino" di "Catalogo completo.dc.html".
     Le righe si disegnano una volta sola; ricerca e filtri le nascondono soltanto. */
  function mountCatalogo() {
    const lista = $("[data-ls-lista]");
    const q = $("[data-ls-q]");
    const bottoni = $$("[data-ls-f]");
    /* allergeni dichiarati in etichetta, tracce comprese. Chi non ha ingredienti
       (le box) non passa mai un filtro: dentro ci sono salumi e pecorino. */
    const allergeni = { latte: /latte|lattosio/i, solfiti: /solfiti/i };
    const senza = (p, f) => !!p.ingredienti && !allergeni[f].test(p.ingredienti);

    const wa = WA + "?text=" + encodeURIComponent("Buongiorno, scrivo dal catalogo del sito: vorrei chiedere di ");
    $$("[data-ls-wa]").forEach((a) => (a.href = wa));
    $$("[data-ls-tel]").forEach((a) => {
      a.href = C.bottega.telHref;
      a.textContent = C.bottega.tel;
    });

    const riga = (p) => `
<a class="ls-riga" href="prodotto.html?p=${p.slug}" data-ls-riga="${p.slug}">
  ${ph("", "ls-riga__ph ph--2", "", p.img)}
  <span>
    <span class="ls-riga__n">${esc(p.nome)}</span>
    <span class="ls-riga__nota">${esc(p.nota || p.claim || p.descrizioneBreve || p.denominazione || p.descrizione || "")}</span>
  </span>
  <span class="ls-riga__p">
    <span class="ls-riga__prezzo">${euro(p.prezzo)}</span>
    <span class="ls-riga__peso">${esc(p.formati ? p.formati[0].peso : p.peso || "")}</span>
    <span class="ls-riga__peso">${alKg(p.prezzo, p.formati ? p.formati[0] : p)}</span>
  </span>
</a>`;

    lista.innerHTML = C.categorie
      .map((c) => {
        const ps = C.byCat(c.slug);
        return ps.length
          ? `
<section class="ls-sez" data-ls-sez>
  <div class="ls-sez__head"><h2 class="ls-sez__t">${esc(c.nome)}</h2><span class="ls-sez__n" data-ls-sez-n></span></div>
  <div class="ls-griglia">${ps.map(riga).join("")}</div>
</section>`
          : "";
      })
      .join("");

    const righe = $$("[data-ls-riga]", lista).map((el) => ({ el: el, p: C.get(el.dataset.lsRiga) }));

    function filtra() {
      const parole = q.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      const attivi = bottoni.filter((b) => b.getAttribute("aria-pressed") === "true").map((b) => b.dataset.lsF);
      let visibili = 0;
      righe.forEach((r) => {
        const k = chiave(r.p);
        const ok = parole.every((w) => k.indexOf(w) > -1) && attivi.every((f) => senza(r.p, f));
        r.el.hidden = !ok;
        if (ok) visibili++;
      });
      $$("[data-ls-sez]", lista).forEach((s) => {
        const n = $$("[data-ls-riga]:not([hidden])", s).length;
        s.hidden = !n;
        $("[data-ls-sez-n]", s).textContent = n;
      });
      $("[data-ls-n]").textContent =
        parole.length || attivi.length ? `${visibili} di ${righe.length} prodotti` : `${righe.length} prodotti`;
      $("[data-ls-vuoto]").hidden = visibili > 0;
    }

    q.addEventListener("input", filtra);
    bottoni.forEach((b) =>
      b.addEventListener("click", () => {
        b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true");
        filtra();
      })
    );
    $("[data-ls-azzera]").addEventListener("click", () => {
      q.value = "";
      bottoni.forEach((b) => b.setAttribute("aria-pressed", "false"));
      filtra();
      q.focus();
    });
    filtra();

    /* la barra di ricerca resta fissa sotto l'header (da tablet in su, vedi wild.css) */
    const hdr = $(".hdr");
    const alto = () => document.documentElement.style.setProperty("--hdr-h", hdr.offsetHeight + "px");
    alto();
    window.addEventListener("resize", alto);
  }

  /* ---- selezione: guida alla scelta, idee regalo, sotto i 20 € */
  function mountSelezione() {
    const s = C.sel(new URLSearchParams(location.search).get("s"));
    const host = $("[data-sel-sezioni]");
    /* posto nell'ordine scelto a mano (`ordine`); chi non c'è va in fondo */
    const pos = (z, p) => {
      const i = (z.ordine || []).indexOf(p.slug);
      return i < 0 ? 999 : i;
    };
    if (!s) {
      host.innerHTML = `
<div class="wrap"><div class="empty">
  <div class="h3">Selezione non trovata</div>
  <a class="btn btn--wineline btn--sm" style="margin-top:18px" href="index.html">Torna alla bottega</a>
</div></div>`;
      return;
    }
    document.title = s.titolo + " · Wild Italy";
    $("[data-sel-crumb]").innerHTML = `<a href="index.html">Bottega</a> / ${esc(s.titolo)}`;
    $("[data-sel-occhiello]").textContent = s.occhiello;
    $("[data-sel-title]").textContent = s.titolo;
    $("[data-sel-intro]").textContent = s.intro;

    /* Le sezioni scelte a mano sono caroselli su mobile (griglia su desktop);
       quelle a regola possono essere lunghe e restano griglia. */
    host.innerHTML = s.sezioni
      .map((z) => {
        const lista = z.prodotti
          ? z.prodotti.map(C.get).filter(Boolean)
          : C.prodotti
              .filter((p) => !p.inArrivo && p.tipo !== "box" && z.filtro(p))
              .sort((a, b) => pos(z, a) - pos(z, b) || a.prezzo - b.prezzo);
        const card = lista.map(prodCard).join("");
        return `
<section class="sec sec--tight">
  <div class="wrap">
    ${z.titolo ? `<h2 class="h2">${esc(z.titolo)}</h2>` : ""}
    ${z.testo ? `<p class="body measure" style="margin-top:8px">${esc(z.testo)}</p>` : ""}
    ${z.prodotti ? "" : `<div class="grid-3" style="margin-top:24px">${card}</div>`}
  </div>
  ${
    z.prodotti
      ? `<div class="rail rail--sel" style="margin-top:20px">${card}</div>
  <div class="dots" aria-label="${esc(z.titolo || s.titolo)}"></div>`
      : ""
  }
</section>`;
      })
      .join("");
  }

  /* ---- guida: la visita guidata fra gli scaffali ("Fatti guidare.dc.html", versione b).
     Il cesto è il carrello vero: si aggiunge e si toglie direttamente lì, così niente
     doppioni e il badge dell'header resta giusto. Ogni parte si ridisegna solo se è
     cambiata, così la foto della tappa non sfarfalla quando aggiungi un prodotto. */
  function mountGuida() {
    const host = $("[data-guida]");
    if (!host) return;
    const V = C.visita;
    const FINE = V.length;
    const tappaUrl = /^#tappa-(\d+)$/.exec(location.hash);
    let i = location.hash === "#fine" ? FINE : tappaUrl ? Math.max(0, Math.min(FINE, tappaUrl[1] - 1)) : 0;

    host.innerHTML = `
<aside class="gv-side" aria-label="Il percorso e il cesto" data-gv="side"></aside>
<div class="gv-stage">
  <div data-gv="hero"></div>
  <div class="gv-in" data-gv="in"></div>
</div>
<div class="gv-bar" data-gv="bar"></div>`;
    const parti = $$("[data-gv]", host).map((el) => ({ el: el, nome: el.dataset.gv, html: "" }));

    const qta = (slug) => Cart.qta(slug);
    const nn = (n) => "0" + n;

    /* "Nel cesto" oppure − n +: stesso riquadro .gv-ctl, stesse misure */
    function ctl(p) {
      const n = qta(p.slug);
      if (!n)
        return `<button type="button" class="gv-ctl" data-k="add:${p.slug}" aria-label="Metti nel cesto: ${esc(p.nome)}"><span class="gv-sm">Nel cesto</span><span class="gv-lg">Metti nel cesto</span></button>`;
      return `
<span class="gv-ctl gv-ctl--on">
  <button type="button" data-k="dec:${p.slug}" aria-label="Riduci la quantità di ${esc(p.nome)}">${ico("minus")}</button>
  <span class="gv-ctl__n">${n}</span>
  <button type="button" data-k="inc:${p.slug}" aria-label="Aumenta la quantità di ${esc(p.nome)}">${ico("plus")}</button>
</span>`;
    }

    const riga = (p, sotto, prezzo, azione) => `
<div class="gv-item">
  <div class="gv-item__b">
    <a class="gv-item__n" href="prodotto.html?p=${p.slug}">${esc(p.nome)}</a>
    <div class="gv-item__m">${sotto}</div>
  </div>
  <span class="gv-item__p">${prezzo}</span>
  ${azione}
</div>`;

    function disegna(nuovaTappa) {
      const fine = i >= FINE;
      const t = V[i];
      const presi = [];
      V.forEach((s) =>
        s.prodotti.forEach((slug) => {
          const n = qta(slug);
          if (n) presi.push({ p: C.get(slug), n: n, dove: s.label });
        })
      );
      const pezzi = presi.reduce((a, x) => a + x.n, 0);
      const totale = euro(presi.reduce((a, x) => a + x.p.prezzo * x.n, 0));
      const conta = pezzi === 1 ? "Un pezzo nel cesto" : pezzi + " pezzi nel cesto";
      const tappe = V.map((s, n) => ({
        n: n,
        num: nn(n + 1),
        label: s.label,
        pezzi: s.prodotti.reduce((a, slug) => a + qta(slug), 0)
      })).concat({ n: FINE, num: "—", label: "Il cesto e la cassa", pezzi: pezzi });
      const prossima = fine ? "" : i === FINE - 1 ? null : V[i + 1];

      const html = {};

      html.side = `
<div class="gv-k">Il percorso</div>
<ol class="gv-route">${tappe
        .map(
          (s) => `
  <li><button type="button" data-k="go:${s.n}"${s.n === i ? ' class="is-cur" aria-current="step"' : ""}>
    <span class="gv-route__n">${s.num}</span><span class="gv-route__l">${esc(s.label)}</span><span class="gv-route__b">${s.pezzi ? "· " + s.pezzi : ""}</span>
  </button></li>`
        )
        .join("")}
</ol>
<div class="gv-basket">
  <div class="gv-basket__t">Nel cesto</div>
  ${
    presi.length
      ? presi
          .map(
            (x) =>
              `<div class="gv-line"><span>${esc(x.p.nome)}${x.n > 1 ? " × " + x.n : ""}</span><span>${euro(x.p.prezzo * x.n)}</span></div>`
          )
          .join("") +
        `
  <div class="gv-tot"><span class="gv-k">Totale</span><span class="gv-tot__v">${totale}</span></div>
  <button type="button" class="btn btn--wine btn--block" data-open="carrello">Vai al carrello</button>`
      : `<p class="gv-basket__vuoto">Ancora vuoto. Aggiungi quello che ti va mentre giri: si paga tutto insieme alla fine.</p>`
  }
</div>`;

      const foto = fine
        ? { img: "assets/img/provvisorie/tagliere-bancone.jpg", alt: "Un tagliere di salumi e pecorino preparato al bancone" }
        : t;
      html.hero = `
<div class="gv-hero${foto.img ? "" : " gv-hero--noimg"}${fine ? " gv-hero--fine" : ""}">
  ${ph(foto.img ? foto.alt : foto.foto, "gv-hero__ph ph--2", "", foto.img)}
  <div class="gv-cap">
    <div class="gv-cap__k">${
      fine
        ? "<span>Fine del giro</span>"
        : `<span>Tappa ${nn(i + 1)} di ${nn(FINE)}</span><span class="gv-cap__dove">${esc(t.dove)}</span>`
    }</div>
    <h2 class="gv-cap__t" tabindex="-1" data-gv-t>${esc(
      fine ? (presi.length ? "Fatto: questo è il tuo cesto" : "Giro finito, cesto vuoto") : t.titolo
    )}</h2>
  </div>
</div>`;

      html.in = fine
        ? `
<p class="gv-text">${
            presi.length
              ? "Lo confezioniamo così come l'hai messo insieme: sottovuoto. Se vuoi cambiare qualcosa, si toglie qui."
              : "Capita, e non è un problema: a volte serve solo vedere com'è fatta la bottega. Rifai il giro quando vuoi, oppure guarda da dove partiremmo noi."
          }</p>
${
  presi.length
    ? `<div class="gv-k">Quello che hai preso</div>
<div class="gv-list">${presi
        .map((x) =>
          riga(
            x.p,
            `<span class="gv-item__dove">${esc(x.dove)}${x.n > 1 ? " · × " + x.n : ""}</span>`,
            euro(x.p.prezzo * x.n),
            `<button type="button" class="gv-togli" data-k="togli:${x.p.slug}" aria-label="Togli dal cesto: ${esc(x.p.nome)}">Togli</button>`
          )
        )
        .join("")}</div>
<div class="gv-totbox">
  <div><div class="gv-k">${conta}</div><div class="gv-totbox__v">${totale}</div></div>
  <div class="gv-totbox__go">
    <a class="gv-link gv-link--wine" href="${WA}" target="_blank" rel="noopener">Chiedi a noi →</a>
    <button type="button" class="btn btn--wine" data-open="carrello">Vai al carrello</button>
  </div>
</div>`
    : ""
}
<div class="gv-links">
  <button type="button" class="gv-link" data-k="go:0">Rifai il giro dall'inizio</button>
  <a class="gv-link gv-link--wine" href="selezione.html?s=guida">Preferisci che scegliamo noi? Ecco da dove partire →</a>
</div>`
        : `
<p class="gv-text">${esc(t.testo)}</p>
<div class="gv-k">Su questo scaffale</div>
<div class="gv-list">${t.prodotti
            .map(C.get)
            .filter(Boolean)
            .map((p) =>
              riga(p, esc([p.peso, alKg(p.prezzo, p), C.noteVisita[p.slug] || p.nota].filter(Boolean).join(" · ")), euro(p.prezzo), ctl(p))
            )
            .join("")}</div>
<div class="gv-nav">
  ${i > 0 ? `<button type="button" class="gv-link" data-k="go:${i - 1}">← Tappa precedente</button>` : ""}
  <button type="button" class="btn btn--dark" data-k="go:${i + 1}">${esc(
            prossima ? "Avanti: " + prossima.label : "Chiudi il giro e vedi il cesto"
          )} →</button>
</div>`;

      html.bar = `
<div class="gv-seg" role="group" aria-label="Tappe della visita">${tappe
        .map(
          (s) =>
            `<button type="button" data-k="go:${s.n}" aria-label="${esc(s.label)}"${
              s.n === i ? ' class="is-cur" aria-current="step"' : s.pezzi && s.n < FINE ? ' class="is-full"' : ""
            }><span></span></button>`
        )
        .join("")}</div>
<div class="gv-bar__row">
  <div class="gv-bar__c"><div class="gv-k">${
    pezzi ? pezzi + (pezzi === 1 ? " pezzo" : " pezzi") : "Cesto vuoto"
  }</div><div class="gv-bar__v">${totale}</div></div>
  ${
    fine
      ? `<button type="button" class="gv-bar__go gv-bar__go--wine" data-open="carrello">Al carrello</button>`
      : `<button type="button" class="gv-bar__go" data-k="go:${i + 1}">${esc(
          prossima ? "Avanti: " + prossima.breve : "Vedi il cesto"
        )} →</button>`
  }
</div>`;

      /* il fuoco resta sul controllo appena usato: "Nel cesto" diventa "+", e "−" a zero torna "Nel cesto" */
      const ae = document.activeElement;
      const k = ae && host.contains(ae) ? ae.dataset.k : null;
      parti.forEach((pt) => {
        if (pt.html !== html[pt.nome]) pt.el.innerHTML = pt.html = html[pt.nome];
      });
      if (nuovaTappa) {
        $("[data-gv-t]", host).focus({ preventScroll: true });
        return;
      }
      if (k && !host.contains(document.activeElement)) {
        const alt = k.indexOf("add:") === 0 ? "inc:" + k.slice(4) : "add:" + k.split(":")[1];
        const el = $('[data-k="' + k + '"]', host) || $('[data-k="' + alt + '"]', host);
        if (el) el.focus({ preventScroll: true });
      }
    }

    function vai(n) {
      i = Math.max(0, Math.min(FINE, n));
      history.replaceState(null, "", i >= FINE ? "#fine" : i ? "#tappa-" + (i + 1) : location.pathname + location.search);
      disegna(true);
      /* se la tappa è finita sotto l'header, torna al suo inizio */
      const hdr = $(".hdr");
      const su = host.getBoundingClientRect().top - (hdr ? hdr.offsetHeight : 0);
      if (su < 0) window.scrollBy(0, su);
    }

    host.addEventListener("click", (e) => {
      const b = e.target.closest("[data-k]");
      if (!b) return;
      const az = b.dataset.k.split(":")[0];
      const slug = b.dataset.k.split(":")[1];
      if (az === "go") vai(+slug);
      else if (az === "add") Cart.aggiungi(slug, null, 1);
      else Cart.imposta(Cart.id(slug), az === "inc" ? qta(slug) + 1 : az === "dec" ? qta(slug) - 1 : 0);
    });

    render.guida = () => disegna(false);
    disegna(false);
  }

  /* ---- prodotto */
  function mountProdotto() {
    const slug = new URLSearchParams(location.search).get("p") || "salame-di-cervo";
    const p = C.get(slug);
    const host = $("[data-pdp]");
    if (!p) {
      nonTrovato("Prodotto non trovato", "Forse il link è vecchio, o il prodotto non è più in bottega.");
      return;
    }
    const c = C.cat(p.categoria) || {};
    document.body.dataset.cat = p.categoria;
    document.title = p.nome + " · Wild Italy";
    const ctxT = $("[data-ctx-title]");
    if (ctxT) ctxT.textContent = p.nome;

    let formato = p.formati ? p.formati[0].nome : null;
    const prezzoCorrente = () => {
      if (!p.formati) return p.prezzo;
      return (p.formati.find((f) => f.nome === formato) || p.formati[0]).prezzo;
    };
    const pesoCorrente = () => {
      const f = p.formati ? p.formati.find((x) => x.nome === formato) || p.formati[0] : p;
      return [f.peso, alKg(f.prezzo, f)].filter(Boolean).join(" · ");
    };

    /* Con foto vere la galleria mostra solo quelle; altrimenti i segnaposto del mockup. */
    const galImg = p.galleriaImg && p.galleriaImg.length ? p.galleriaImg : p.img ? [p.img] : null;
    /* i vini misurati hanno in fondo alla galleria anche la bottiglia 3D */
    const tre = !!(galImg && p.modello3d);
    const gal = galImg ? galImg.map((_, i) => `${p.nome}, foto ${i + 1}`) : [p.foto];
    if (tre) gal.push(`${p.nome} in 3D`);
    const galPiu = gal.length > 1;
    const craft =
      p.artigianale && CONFIG.mostraBadgeArtigianale ? '<span class="gallery__tag">ARTIGIANALE</span>' : "";

    /* ------- pannelli informativi */
    const acc = [];
    if (p.ingredienti)
      acc.push({
        t: "Ingredienti",
        p: (p.denominazione ? `Denominazione: ${p.denominazione}. ` : "") + p.ingredienti,
        open: true
      });
    if (p.valori) acc.push({ t: "Valori nutrizionali", p: p.valori, open: false });
    if (p.conservazione) acc.push({ t: "Conservazione e spedizione", p: p.conservazione, open: true });
    if (p.produttore)
      acc.push({
        t: "Il produttore",
        p: p.produttore.testo,
        todo: p.produttore.daDefinire,
        open: false
      });
    if (p.contenuto)
      acc.unshift({
        t: "Cosa contiene",
        html: `<ul class="speclist" style="margin-top:0">${p.contenuto
          .map((x) => `<li><span>${esc(x.t)}${x.n ? ` <em>· ${esc(x.n)}</em>` : ""}</span></li>`)
          .join("")}</ul>`,
        open: true
      });

    const accHtml = acc
      .map((a, i) => {
        const id = "acc-" + i;
        const corpo = a.html
          ? a.html
          : a.todo
          ? `<div class="todo">DA DEFINIRE · ${esc(a.p)}</div>`
          : `${esc(a.p)}`;
        return `
<div class="acc__i">
  <button class="acc__t" aria-expanded="${a.open}" aria-controls="${id}">${esc(a.t)} ${ico("down")}</button>
  <div class="acc__p" id="${id}"${a.open ? "" : " hidden"}>${corpo}</div>
</div>`;
      })
      .join("");

    /* ------- profilo di gusto */
    const tasting = p.notaBancone
      ? `
<div class="tasting">
  <div class="eyebrow eyebrow--gold">LA NOTA DI GUSTO DEL BANCONE</div>
  <p class="quote" style="margin-top:10px">${esc(p.notaBancone)}</p>
  ${
    p.profilo
      ? `<div class="tasting__bars">${p.profilo
          .map(
            (t) => `
<div class="tbar">
  <span class="tbar__l">${esc(t.nome)}</span>
  <span class="stars" role="img" aria-label="${t.valore} su 5">${"★".repeat(t.valore)}<span class="stars__off">${"★".repeat(5 - t.valore)}</span></span>
</div>`
          )
          .join("")}</div>`
      : ""
  }
</div>`
      : "";

    /* ------- formati */
    const formati = p.formati
      ? `
<div style="margin-top:26px">
  <div class="eyebrow">FORMATO</div>
  <div class="formats" role="group" aria-label="Formato">
    ${p.formati
      .map(
        (f, i) =>
          `<button type="button" data-formato="${esc(f.nome)}" aria-pressed="${i === 0}">${esc(f.nome)}<small>${esc(f.peso)}</small></button>`
      )
      .join("")}
  </div>
</div>`
      : "";

    const old = p.prezzoPieno ? `<span class="price--old">${euro(p.prezzoPieno)}</span>` : "";
    host.innerHTML = `
<div class="wrap">
  <nav class="crumbs" aria-label="Percorso">
    <a href="index.html">Bottega</a> / <a href="${c.pagina || "categoria.html?c=" + p.categoria}">${esc(c.nome || "")}</a> / ${esc(p.nome)}
  </nav>
</div>

<div class="wrap sec sec--tight">
  <div class="pdp">
    <div class="gallery">
      <div class="ph ph--2 gallery__main${galImg ? " gallery__main--foto" : ""}" data-gal-main>
        ${
          galImg
            ? `<img src="${esc(galImg[0])}" alt="${esc(gal[0])}" data-gal-img><span class="gallery__lens" data-gal-lens hidden></span>`
            : `<span class="ph__note" data-gal-note>${esc(gal[0])}</span>`
        }
        ${tre ? '<div class="gallery__3d" data-gal-3d hidden><span class="meta gallery__hint">Trascina per girare la bottiglia</span></div>' : ""}
        ${craft}
        ${
          galPiu
            ? `<span class="gallery__count"><span data-gal-i>1</span> / ${gal.length}</span>
        <button type="button" class="zoom__nav zoom__nav--prev" data-gal-step="-1" aria-label="Foto precedente">‹</button>
        <button type="button" class="zoom__nav zoom__nav--next" data-gal-step="1" aria-label="Foto successiva">›</button>
        <div class="gallery__dots" data-gal-dots>
          ${gal.map((g, i) => `<button type="button" data-g="${i}" aria-label="${tre && i === galImg.length ? "Bottiglia in 3D" : `Foto ${i + 1}`}"${i === 0 ? ' aria-current="true"' : ""}></button>`).join("")}
        </div>`
            : ""
        }
      </div>
      <div class="gallery__thumbs" data-gal-thumbs${galPiu ? "" : " hidden"}>
        ${gal
          .map(
            (g, i) => `
<button type="button" class="ph ph--3" data-g="${i}" aria-label="Mostra: ${esc(g)}"${i === 0 ? ' aria-current="true"' : ""}>
  ${
    galImg
      ? galImg[i]
        ? `<img src="${esc(galImg[i])}" alt="" loading="lazy">`
        : `<img src="${esc(galImg[0])}" alt="" loading="lazy"><span class="gallery__3dtag">3D</span>`
      : `<span class="ph__note">${esc(g.replace(/^FOTO \d+:\s*/, ""))}</span>`
  }
</button>`
          )
          .join("")}
      </div>
      ${galImg ? `<div class="gallery__pane" data-gal-pane hidden></div>` : ""}
      ${
        galImg
          ? `<dialog class="zoom" data-zoom aria-label="Foto ingrandite">
        <div class="zoom__stage" data-zoom-stage><img src="${esc(galImg[0])}" alt="" draggable="false" data-zoom-img></div>
        <button type="button" class="zoom__x" data-zoom-close aria-label="Chiudi">×</button>
        ${
          gal.length > 1
            ? `<button type="button" class="zoom__nav zoom__nav--prev" data-zoom-step="-1" aria-label="Foto precedente">‹</button>
        <button type="button" class="zoom__nav zoom__nav--next" data-zoom-step="1" aria-label="Foto successiva">›</button>`
            : ""
        }
        <span class="gallery__count"><span data-zoom-i>1</span> / ${gal.length}</span>
      </dialog>`
          : ""
      }
    </div>

    <div>
      ${p.occhiello ? `<div class="eyebrow eyebrow--olive">${esc(p.occhiello)}</div>` : ""}
      <h1 class="h1" style="margin-top:8px">${esc(p.nome)}</h1>
      ${p.claim ? `<p class="pdp__claim">${esc(p.claim)}</p>` : ""}

      ${
        p.inArrivo
          ? '<p class="body body--lg" style="margin-top:16px">Questo box sta per entrare in bottega. Scrivici se vuoi essere avvisato.</p>'
          : `
      <div class="pdp__price">
        <span class="price" data-prezzo>${euro(prezzoCorrente())}</span>${old}
        <span class="meta" data-peso>${esc(pesoCorrente())}</span>
      </div>`
      }

      ${p.descrizione ? `<p class="body body--lg" style="margin-top:14px">${esc(p.descrizione)}</p>` : ""}
      ${tasting}
      ${p.inArrivo ? "" : formati}

      ${
        p.inArrivo
          ? `<a class="btn btn--wineline btn--block" style="margin-top:26px" href="info.html#contatti">Avvisami quando arriva</a>`
          : `
      <div class="buy" data-buy></div>
      <p class="buy__note">Spedizione sottovuoto · consegna in circa 48 ore</p>`
      }

      ${accHtml ? `<div class="acc">${accHtml}</div>` : ""}
    </div>
  </div>
</div>`;

    /* ------- abbinamenti */
    const abb = (p.abbinamenti || []).map(C.get).filter(Boolean);
    const abbHost = $("[data-pdp-abbinamenti]");
    if (abb.length && abbHost) {
      abbHost.hidden = false;
      $("[data-abb-rail]").innerHTML = abb
        .map(
          (a) => `
<article class="box-card">
  <a href="prodotto.html?p=${a.slug}" aria-label="${esc(a.nome)}">${ph(a.foto, "", "", a.img)}</a>
  <div class="box-card__b">
    <a class="box-card__n" href="prodotto.html?p=${a.slug}">${esc(a.nome)}</a>
    ${a.notaAbbinamento || a.nota ? `<p class="body" style="margin-top:6px;font-size:13px">${esc(a.notaAbbinamento || a.nota)}</p>` : ""}
    <div class="pricerow" style="margin-top:auto;padding-top:14px">
      <span class="price" style="font-size:22px">${euro(a.prezzo)}</span>
      ${a.prezzoPieno ? `<span class="price--old">${euro(a.prezzoPieno)}</span>` : ""}
      ${alKg(a.prezzo, a) ? `<span class="meta">${alKg(a.prezzo, a)}</span>` : ""}
    </div>
    ${addq(a, "btn--dark btn--sm btn--block addq--mt2", "Aggiungi")}
  </div>
</article>`
        )
        .join("");
    } else if (abbHost) {
      abbHost.remove();
    }

    /* ------- interazioni della scheda */
    const aggiorna = () => {
      const e = $("[data-prezzo]");
      if (e) e.textContent = euro(prezzoCorrente());
      const w = $("[data-peso]");
      if (w) w.textContent = pesoCorrente();
      /* stesso pulsante delle card: "Aggiungi", poi − n + del formato scelto */
      const b = $("[data-buy]", host);
      if (b) b.innerHTML = addq(p, "btn--wine btn--block", "Aggiungi al carrello", formato);
      const bb = $("[data-buybar]");
      if (bb) bb.innerHTML = addq(p, "btn--wine", "Aggiungi · " + euro(prezzoCorrente()), formato);
    };
    aggiorna();

    /* ------- foto a tutto schermo: frecce, tocco per ingrandire, pinch e trascinamento fatti qui.
       Il pinch nativo ingrandiva tutta la pagina e poi il riquadro scorrevole bloccava lo spostamento */
    let galCur = 0;
    const zoom = $("[data-zoom]", host);
    const zImg = zoom && $("[data-zoom-img]", zoom);
    const stage = zoom && $("[data-zoom-stage]", zoom);
    let zs = 1, zx = 0, zy = 0; /* scala e spostamento della foto */
    const zSet = (s, x, y) => {
      zs = Math.min(5, Math.max(1, s));
      const w = zImg.offsetWidth * zs, h = zImg.offsetHeight * zs;
      const bx = zImg.offsetLeft, by = zImg.offsetTop;
      const sw = stage.clientWidth, sh = stage.clientHeight;
      /* la foto non esce dai bordi: se è più piccola dello schermo resta al centro */
      zx = w <= sw ? (sw - w) / 2 - bx : Math.min(-bx, Math.max(sw - w - bx, x));
      zy = h <= sh ? (sh - h) / 2 - by : Math.min(-by, Math.max(sh - h - by, y));
      zImg.style.transform = zs > 1 ? `translate(${zx}px,${zy}px) scale(${zs})` : "";
      zoom.classList.toggle("is-zoom", zs > 1);
    };
    /* nuova scala tenendo fermo sotto il dito il punto (px, py) della foto, px/py relativi allo stage */
    const zAt = (ns, px, py, qx = px, qy = py) => {
      ns = Math.min(5, Math.max(1, ns));
      const bx = zImg.offsetLeft, by = zImg.offsetTop;
      zSet(ns, qx - bx - ((px - bx - zx) * ns) / zs, qy - by - ((py - by - zy) * ns) / zs);
    };
    const mostraZoom = (i) => {
      galCur = (i + gal.length) % gal.length;
      zs = 1;
      zImg.style.transform = "";
      zoom.classList.remove("is-zoom");
      /* ultima voce: la stessa bottiglia 3D della galleria, spostata qui a tutto schermo */
      const in3d = tre && galCur === galImg.length;
      zImg.hidden = in3d;
      if (in3d) stage.after(box3d);
      else zImg.src = galImg[galCur];
      if (tre) apri3d(in3d);
      $("[data-zoom-i]", zoom).textContent = galCur + 1;
    };
    const apriZoom = (i) => {
      if (!zoom) return;
      mostraZoom(i);
      zoom.showModal();
      document.body.classList.add("is-locked");
    };
    if (zoom) {
      zoom.addEventListener("close", () => {
        document.body.classList.remove("is-locked");
        /* la galleria riparte da dove si era arrivati a tutto schermo; la bottiglia 3D torna al suo posto */
        if (tre) $("[data-gal-lens]", host).after(box3d);
        if (vista3d) vista3d.reset(); /* ingrandita a tutto schermo, nella galleria la rotella non la rimpicciolirebbe */
        mostraGal(galCur);
      });
      /* uno o due dita (o il mouse): il centro sposta la foto, la distanza tra le dita la scala */
      const pts = new Map();
      let prev = null, mosso = false, due = false, x0 = 0, y0 = 0;
      const centro = () => {
        const v = [...pts.values()];
        const r = stage.getBoundingClientRect();
        return {
          x: v.reduce((t, p) => t + p.x, 0) / v.length - r.left,
          y: v.reduce((t, p) => t + p.y, 0) / v.length - r.top,
          d: v.length > 1 ? Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y) : 0
        };
      };
      stage.addEventListener("pointerdown", (e) => {
        if (!pts.size) [mosso, due, x0, y0] = [false, false, e.clientX, e.clientY];
        pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (pts.size > 1) mosso = due = true;
        prev = centro();
      });
      stage.addEventListener("pointermove", (e) => {
        if (!pts.has(e.pointerId)) return;
        pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (Math.hypot(e.clientX - x0, e.clientY - y0) > 8) mosso = true;
        const c = centro();
        if (zs > 1 || pts.size > 1) zAt(c.d && prev.d ? (zs * c.d) / prev.d : zs, prev.x, prev.y, c.x, c.y);
        prev = c;
      });
      const giu = (e) => {
        if (!pts.delete(e.pointerId)) return;
        if (pts.size) return (prev = centro());
        /* foto intera: scorrendo col dito si passa alla successiva, come nella galleria */
        const dx = e.clientX - x0;
        if (zs === 1 && !due && gal.length > 1 && Math.abs(dx) > 40) mostraZoom(galCur + (dx < 0 ? 1 : -1));
      };
      stage.addEventListener("pointerup", giu);
      stage.addEventListener("pointercancel", giu);
      zoom.addEventListener("gesturestart", (e) => e.preventDefault()); /* Safari iOS: niente zoom della pagina */

      zoom.addEventListener("click", (e) => {
        const step = e.target.closest("[data-zoom-step]");
        if (step) return mostraZoom(galCur + +step.dataset.zoomStep);
        if (e.target.closest("[data-zoom-close]")) return zoom.close();
        if (e.target.closest("[data-gal-3d]")) return; /* sulla bottiglia 3D il mouse la gira */
        if (mosso) return; /* fine di un trascinamento o di un pinch, non un tocco */
        if (!e.target.closest("[data-zoom-img]")) return zoom.close();
        /* tocco sulla foto: ingrandisce sul punto toccato, secondo tocco torna intera */
        const r = stage.getBoundingClientRect();
        if (zs > 1) zSet(1, 0, 0);
        else zAt(2.5, e.clientX - r.left, e.clientY - r.top);
      });
      zoom.addEventListener("keydown", (e) => {
        if (gal.length > 1 && (e.key === "ArrowLeft" || e.key === "ArrowRight"))
          mostraZoom(galCur + (e.key === "ArrowRight" ? 1 : -1));
      });
    }

    /* la bottiglia 3D si monta la prima volta che la si apre: three.js e le foto si scaricano solo allora */
    const box3d = $("[data-gal-3d]", host);
    let montata = false, vista3d = null, giu3d = null;
    if (box3d) box3d.addEventListener("pointerdown", (e) => (giu3d = [e.clientX, e.clientY]));
    const apri3d = (vedi) => {
      box3d.hidden = !vedi;
      if (!vedi || montata) return;
      montata = true;
      import(new URL("assets/js/bottiglia-3d.js", document.baseURI).href)
        .then((m) => (vista3d = m.monta(box3d, p.modello3d, { inPagina: true })))
        .catch(() => ($(".gallery__hint", box3d).textContent = "La bottiglia 3D non si è caricata, riprova più tardi"));
    };

    const mostraGal = (n) => {
      const i = (galCur = (n + gal.length) % gal.length);
      const img = $("[data-gal-img]");
      if (img) {
        const in3d = tre && i === galImg.length;
        img.hidden = in3d;
        if (!in3d) {
          img.src = galImg[i];
          img.alt = gal[i];
        }
        if (tre) apri3d(in3d);
      } else {
        $("[data-gal-note]").textContent = gal[i];
      }
      $("[data-gal-i]").textContent = i + 1;
      $$("[data-gal-dots] button", host).forEach((b, k) => b.setAttribute("aria-current", k === i ? "true" : "false"));
      $$("[data-gal-thumbs] button", host).forEach((b, k) => b.setAttribute("aria-current", k === i ? "true" : "false"));
    };

    /* ------- come Amazon: su PC la miniatura cambia foto al passaggio del mouse e sulla foto
       compare la lente con l'ingrandimento a fianco; su telefono si scorre col dito */
    const galMain = $("[data-gal-main]", host);
    const galImgEl = $("[data-gal-img]", host);
    if (galImgEl) {
      const lens = $("[data-gal-lens]", host);
      const pane = $("[data-gal-pane]", host);
      const ZOOM = 2.5;
      const puoLente = () => matchMedia("(hover:hover) and (min-width:1120px)").matches;
      const nascondi = () => (lens.hidden = pane.hidden = true);
      $("[data-gal-thumbs]", host).addEventListener("mouseover", (e) => {
        const t = e.target.closest("[data-g]");
        if (t && puoLente() && +t.dataset.g !== galCur) mostraGal(+t.dataset.g);
      });
      galMain.addEventListener("mousemove", (e) => {
        if (!puoLente() || e.target.closest("button") || galImgEl.hidden || !galImgEl.naturalWidth) return nascondi();
        /* riquadro reale della foto dentro il box (object-fit: contain) */
        const box = galMain.getBoundingClientRect();
        const s = Math.min(box.width / galImgEl.naturalWidth, box.height / galImgEl.naturalHeight);
        const rw = galImgEl.naturalWidth * s;
        const rh = galImgEl.naturalHeight * s;
        const ox = (box.width - rw) / 2;
        const oy = (box.height - rh) / 2;
        const x = e.clientX - box.left - ox;
        const y = e.clientY - box.top - oy;
        if (x < 0 || y < 0 || x > rw || y > rh) return nascondi();
        pane.hidden = lens.hidden = false;
        const lw = Math.min(rw, pane.clientWidth / ZOOM);
        const lh = Math.min(rh, pane.clientHeight / ZOOM);
        const lx = Math.max(0, Math.min(rw - lw, x - lw / 2));
        const ly = Math.max(0, Math.min(rh - lh, y - lh / 2));
        Object.assign(lens.style, { width: lw + "px", height: lh + "px", left: ox + lx + "px", top: oy + ly + "px" });
        Object.assign(pane.style, {
          backgroundImage: `url("${galImgEl.src}")`,
          backgroundSize: `${rw * ZOOM}px ${rh * ZOOM}px`,
          backgroundPosition: `${-lx * ZOOM}px ${-ly * ZOOM}px`
        });
      });
      galMain.addEventListener("mouseleave", nascondi);

      let x0 = null;
      /* sulla bottiglia 3D il dito la gira e non cambia foto */
      galMain.addEventListener("touchstart", (e) => (x0 = e.target.closest("[data-gal-3d]") ? null : e.touches[0].clientX), {
        passive: true
      });
      galMain.addEventListener("touchend", (e) => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        x0 = null;
        if (Math.abs(dx) > 40 && gal.length > 1) {
          mostraGal(galCur + (dx < 0 ? 1 : -1));
          e.preventDefault(); /* niente click: lo scorrimento non apre lo zoom */
        }
      });
    }

    host.addEventListener("click", (e) => {
      const f = e.target.closest("[data-formato]");
      if (f) {
        formato = f.dataset.formato;
        $$("[data-formato]", host).forEach((b) => b.setAttribute("aria-pressed", String(b === f)));
        aggiorna();
        return;
      }
      if (e.target.closest("[data-gal-img]")) return apriZoom(galCur);
      /* un clic sulla bottiglia 3D, senza trascinarla, la apre a tutto schermo come le foto */
      if (e.target.closest("[data-gal-3d]") && !zoom.open && giu3d && Math.hypot(e.clientX - giu3d[0], e.clientY - giu3d[1]) < 6)
        return apriZoom(galCur);
      const g = e.target.closest("[data-g], [data-gal-step]");
      if (g) return mostraGal(g.dataset.g ? +g.dataset.g : galCur + +g.dataset.galStep);
    });

    initAcc(host);

    /* ------- barra acquisto fissa su mobile (schermata 2b) */
    const buy = $("[data-buy]", host);
    const bar = $("[data-buybar]");
    if (buy && bar) {
      bar.hidden = false;
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(
          (ents) => bar.classList.toggle("is-on", !ents[0].isIntersecting),
          { rootMargin: "-120px 0px 0px 0px" }
        ).observe(buy);
      }
    } else if (bar) {
      bar.remove();
    }
  }

  /* ------------------------------------------------------------------ avvio */
  function init() {
    document.documentElement.dataset.annuncio = CONFIG.mostraBarraAnnuncio ? "on" : "off";
    document.documentElement.dataset.badgeArtigianale = CONFIG.mostraBadgeArtigianale ? "on" : "off";

    /* la categoria corrente serve già al primo disegno della navigazione */
    const pagina = document.body.dataset.pagina;
    const qs = new URLSearchParams(location.search);
    if (pagina === "categoria") document.body.dataset.cat = qs.get("c") || "selvaggina";
    if (pagina === "prodotto") {
      const pr = C.get(qs.get("p") || "salame-di-cervo");
      if (pr) document.body.dataset.cat = pr.categoria;
    }

    document.body.insertAdjacentHTML("afterbegin", SPRITE);
    /* le icone scritte a mano nell'HTML diventano <svg> ora che lo sprite esiste */
    $$("[data-ico]").forEach((el) => el.replaceWith(document.createRange().createContextualFragment(ico(el.dataset.ico))));

    const main = $("#main");
    main.insertAdjacentHTML("beforebegin", headerHtml());
    main.insertAdjacentHTML("afterend", footerHtml() + panelsHtml());
    document.body.classList.add("has-chrome");

    const tab = $('.tabbar [data-tab="' + pagina + '"]');
    if (tab) tab.setAttribute("aria-current", "page");

    Cart.carica();
    render.carrello();

    if (pagina === "home") mountHome();
    if (pagina === "box") mountBox();
    if (pagina === "categoria") mountCategoria();
    if (pagina === "prodotto") mountProdotto();
    if (pagina === "selezione") mountSelezione();
    if (pagina === "guida") mountGuida();
    if (pagina === "catalogo") mountCatalogo();

    $$(".rail").forEach(initRail);
    initAcc();
    initSearch();

    $$("[data-spedizione]").forEach((e) => (e.textContent = euro(C.bottega.spedizione)));

    const anno = $("[data-anno]");
    if (anno) anno.textContent = new Date().getFullYear();

    /* ---- delega globale */
    document.addEventListener("click", (e) => {
      const open = e.target.closest("[data-open]");
      if (open) {
        e.preventDefault();
        openPanel(open.dataset.open);
        return;
      }
      if (e.target.closest("[data-close]") || e.target.classList.contains("scrim")) {
        e.preventDefault();
        closePanel();
        return;
      }
      const add = e.target.closest("[data-add]");
      if (add) {
        const p = C.get(add.dataset.add);
        Cart.aggiungi(add.dataset.add, add.closest("[data-addq]").dataset.f, 1);
        toast(p.nome + " nel carrello", "Vedi");
        return;
      }
      const q = e.target.closest("[data-qta]");
      if (q && q.dataset.d) {
        const riga = Cart.righe.find((r) => Cart.id(r.slug, r.formato) === q.dataset.qta);
        if (riga) Cart.imposta(q.dataset.qta, riga.qta + +q.dataset.d);
        return;
      }
      const rm = e.target.closest("[data-rimuovi]");
      if (rm) {
        Cart.imposta(rm.dataset.rimuovi, 0);
        return;
      }
      const soon = e.target.closest("[data-soon]");
      if (soon) {
        e.preventDefault();
        toast(soon.dataset.soon + " — non ancora collegato in questo prototipo");
        return;
      }
      if (e.target.closest("[data-account]")) {
        e.preventDefault();
        toast("Area riservata — in arrivo");
        return;
      }
      if (e.target.closest("[data-back]")) {
        e.preventDefault();
        if (history.length > 1) history.back();
        else location.href = "index.html";
        return;
      }
      if (e.target.closest("[data-share]")) {
        e.preventDefault();
        const dati = { title: document.title, url: location.href };
        if (navigator.share) navigator.share(dati).catch(() => {});
        else if (navigator.clipboard)
          navigator.clipboard.writeText(location.href).then(() => toast("Link copiato"), () => {});
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closePanel();
    });

    /* ---- newsletter */
    const nl = $("[data-newsletter]");
    if (nl)
      nl.addEventListener("submit", (e) => {
        e.preventDefault();
        const v = nl.email.value.trim();
        const msg = $("[data-nl-msg]");
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
        msg.textContent = ok
          ? "Grazie — ti abbiamo aggiunto alla lista."
          : "Controlla l’indirizzo: sembra incompleto.";
        msg.style.color = ok ? "var(--brass-soft)" : "#E39A9A";
        if (ok) nl.reset();
      });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
