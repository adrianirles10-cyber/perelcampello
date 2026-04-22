/* ============================================================
   Per El Campello — main.js v2
   ============================================================ */

const translations = {
  es: {
    nav_inicio:   'Inicio',
    nav_quienes:  'Quiénes somos',
    nav_pretende: 'Qué se pretende',
    nav_programa: 'Programa electoral',
    nav_blog:     'Blog',
    nav_prensa:   'Notas de prensa',
    nav_escritos: 'Escritos',
    nav_contacto: 'Contacto',

    hero_eyebrow:   'Partido independiente · El Campello',
    hero_tagline:   'Política municipal participativa e independiente',
    hero_slogan:    '"Todos somos necesarios, todos valemos y todos aportamos"',
    hero_subtitle:  'Un proyecto ciudadano por y para El Campello',
    hero_concejal:  '2 concejales en activo desde las elecciones de 2023',
    hero_cta_blog:  'Ver el blog',
    hero_cta_who:   'Quiénes somos',
    hero_latest_label: 'ÚLTIMO ESCRITO',
    hero_explore:   'Explorar el sitio',

    card_quienes_title:  'Quiénes somos',
    card_quienes_desc:   'Conoce al equipo y al concejal Paco Toni',
    card_pretende_title: 'Qué se pretende',
    card_pretende_desc:  'Nuestra visión de otra forma de hacer política',
    card_programa_title: 'Programa electoral',
    card_programa_desc:  'Las áreas de actuación para el municipio',
    card_blog_title:     'Blog',
    card_blog_desc:      'Escritos, reflexiones y noticias del partido',
    card_prensa_title:   'Notas de prensa',
    card_prensa_desc:    'Comunicados y noticias oficiales',
    card_escritos_title: 'Escritos',
    card_escritos_desc:  'Artículos y reflexiones sobre El Campello',
    card_read:           'Ver sección →',

    sections_title: 'Navega por el sitio',
    latest_title:   'Últimas entradas',
    latest_view_all: 'Ver todo →',

    blog_section_title: 'Blog',
    blog_section_sub:   'Escritos, reflexiones y noticias de Per El Campello',
    blog_all:           'Todos',
    blog_cat_escritos:  'Escritos',
    blog_cat_prensa:    'Notas de prensa',
    blog_empty:         'Próximamente se publicarán entradas en el blog.',

    page_quienes:  'Quiénes somos',
    page_pretende: 'Qué se pretende',
    page_programa: 'Programa electoral',
    page_prensa:   'Notas de prensa',
    page_escritos: 'Escritos',
    page_contacto: 'Contacto',

    back_to_list: '← Volver al listado',
    read_more:    'Leer más →',
    published:    'Publicado el',
    by:           'por',

    contact_title:            'Escríbenos',
    contact_lead:             'Para consultas, colaboraciones o contacto con prensa.',
    contact_name:             'Nombre',
    contact_email:            'Correo electrónico',
    contact_subject:          'Asunto',
    contact_message:          'Mensaje',
    contact_send:             'Enviar mensaje',
    contact_privacy:          'Acepto la política de privacidad',
    contact_subject_general:  'Consulta general',
    contact_subject_collab:   'Quiero colaborar',
    contact_subject_press:    'Prensa',
    contact_info_title:       'Contacto directo',
    contact_social_title:     'Redes sociales',

    footer_privacy: 'Política de privacidad',
    footer_cookies: 'Política de cookies',
    footer_info:    'Sitio de carácter informativo. No solicita el voto.',
    footer_copy:    '© 2026 Per El Campello. Todos los derechos reservados.',
    footer_nav:     'Navegación',
    footer_contact: 'Contacto',

    cookie_text:    'Usamos cookies técnicas para mejorar tu experiencia.',
    cookie_accept:  'Aceptar',
    cookie_decline: 'Rechazar',

    campaign_notice: 'Este sitio es de carácter informativo. No contiene solicitudes de voto.',

    prensa_empty: 'Próximamente se publicarán notas de prensa.',
    prensa_soon:  'Vuelve pronto.',

    logo_sub:     'Partido independiente',
    footer_brand: 'Partido político independiente nacido para mejorar la calidad de vida de quienes viven en El Campello.',

    translate_notice: 'Este artículo está en español.',
    translate_btn:    'Traducir con Google →',
  },

  val: {
    nav_inicio:   'Inici',
    nav_quienes:  'Qui som',
    nav_pretende: 'Què es pretén',
    nav_programa: 'Programa electoral',
    nav_blog:     'Blog',
    nav_prensa:   'Notes de premsa',
    nav_escritos: 'Escrits',
    nav_contacto: 'Contacte',

    hero_eyebrow:   'Partit independent · El Campello',
    hero_tagline:   'Política municipal participativa i independent',
    hero_slogan:    '"Tots som necessaris, tots valem i tots aportem"',
    hero_subtitle:  "Un projecte ciutadà per i per a El Campello",
    hero_concejal:  '2 regidors en actiu des de les eleccions de 2023',
    hero_cta_blog:  'Veure el blog',
    hero_cta_who:   'Qui som',
    hero_latest_label: 'ÚLTIM ESCRIT',
    hero_explore:   'Explorar el lloc',

    card_quienes_title:  'Qui som',
    card_quienes_desc:   "Coneix l'equip i el regidor Paco Toni",
    card_pretende_title: 'Què es pretén',
    card_pretende_desc:  "La nostra visió d'una altra manera de fer política",
    card_programa_title: 'Programa electoral',
    card_programa_desc:  "Les àrees d'actuació per al municipi",
    card_blog_title:     'Blog',
    card_blog_desc:      'Escrits, reflexions i notícies del partit',
    card_prensa_title:   'Notes de premsa',
    card_prensa_desc:    'Comunicats i notícies oficials',
    card_escritos_title: 'Escrits',
    card_escritos_desc:  'Articles i reflexions sobre El Campello',
    card_read:           'Veure secció →',

    sections_title: 'Navega pel lloc',
    latest_title:   'Últimes entrades',
    latest_view_all: 'Veure tot →',

    blog_section_title: 'Blog',
    blog_section_sub:   'Escrits, reflexions i notícies de Per El Campello',
    blog_all:           'Tots',
    blog_cat_escritos:  'Escrits',
    blog_cat_prensa:    'Notes de premsa',
    blog_empty:         'Pròximament es publicaran entrades al blog.',

    page_quienes:  'Qui som',
    page_pretende: 'Què es pretén',
    page_programa: 'Programa electoral',
    page_prensa:   'Notes de premsa',
    page_escritos: 'Escrits',
    page_contacto: 'Contacte',

    back_to_list: '← Tornar al llistat',
    read_more:    'Llegir més →',
    published:    'Publicat el',
    by:           'per',

    contact_title:            'Escriu-nos',
    contact_lead:             'Per a consultes, col·laboracions o contacte amb premsa.',
    contact_name:             'Nom',
    contact_email:            'Correu electrònic',
    contact_subject:          'Assumpte',
    contact_message:          'Missatge',
    contact_send:             'Enviar missatge',
    contact_privacy:          'Accepte la política de privacitat',
    contact_subject_general:  'Consulta general',
    contact_subject_collab:   'Vull col·laborar',
    contact_subject_press:    'Premsa',
    contact_info_title:       'Contacte directe',
    contact_social_title:     'Xarxes socials',

    footer_privacy: 'Política de privacitat',
    footer_cookies: 'Política de cookies',
    footer_info:    'Lloc de caràcter informatiu. No sol·licita el vot.',
    footer_copy:    '© 2026 Per El Campello. Tots els drets reservats.',
    footer_nav:     'Navegació',
    footer_contact: 'Contacte',

    cookie_text:    "Usem cookies tècniques per millorar la teua experiència.",
    cookie_accept:  'Acceptar',
    cookie_decline: 'Rebutjar',

    campaign_notice: 'Este lloc és de caràcter informatiu. No conté sol·licituds de vot.',

    prensa_empty: 'Pròximament es publicaran notes de premsa.',
    prensa_soon:  'Torna prompte.',

    logo_sub:     'Partit independent',
    footer_brand: 'Partit polític independent nascut per millorar la qualitat de vida de qui viu a El Campello.',

    translate_notice: 'Este article està en espanyol.',
    translate_btn:    'Traduir amb Google →',
  },

  en: {
    nav_inicio:   'Home',
    nav_quienes:  'Who we are',
    nav_pretende: 'Our goals',
    nav_programa: 'Electoral programme',
    nav_blog:     'Blog',
    nav_prensa:   'Press releases',
    nav_escritos: 'Articles',
    nav_contacto: 'Contact',

    hero_eyebrow:   'Independent party · El Campello',
    hero_tagline:   'Participatory and independent local politics',
    hero_slogan:    '"We are all necessary, we all matter and we all contribute"',
    hero_subtitle:  "A citizens' project for El Campello",
    hero_concejal:  '2 active councillors since the 2023 elections',
    hero_cta_blog:  'Read the blog',
    hero_cta_who:   'Who we are',
    hero_latest_label: 'LATEST POST',
    hero_explore:   'Explore the site',

    card_quienes_title:  'Who we are',
    card_quienes_desc:   'Meet the team and councillor Paco Toni',
    card_pretende_title: 'Our goals',
    card_pretende_desc:  'Our vision for a new way of doing politics',
    card_programa_title: 'Electoral programme',
    card_programa_desc:  'Municipal action areas',
    card_blog_title:     'Blog',
    card_blog_desc:      'Party writings, opinions and news',
    card_prensa_title:   'Press releases',
    card_prensa_desc:    'Official press releases and news',
    card_escritos_title: 'Articles',
    card_escritos_desc:  'Articles and reflections on El Campello',
    card_read:           'View section →',

    sections_title: 'Navigate the site',
    latest_title:   'Latest posts',
    latest_view_all: 'View all →',

    blog_section_title: 'Blog',
    blog_section_sub:   'Articles, opinions and news from Per El Campello',
    blog_all:           'All',
    blog_cat_escritos:  'Articles',
    blog_cat_prensa:    'Press releases',
    blog_empty:         'Blog posts will be published soon.',

    page_quienes:  'Who we are',
    page_pretende: 'Our goals',
    page_programa: 'Electoral programme',
    page_prensa:   'Press releases',
    page_escritos: 'Articles',
    page_contacto: 'Contact',

    back_to_list: '← Back to list',
    read_more:    'Read more →',
    published:    'Published on',
    by:           'by',

    contact_title:            'Contact us',
    contact_lead:             'For enquiries, collaboration or press contact.',
    contact_name:             'Name',
    contact_email:            'Email address',
    contact_subject:          'Subject',
    contact_message:          'Message',
    contact_send:             'Send message',
    contact_privacy:          'I accept the privacy policy',
    contact_subject_general:  'General enquiry',
    contact_subject_collab:   'I want to collaborate',
    contact_subject_press:    'Press',
    contact_info_title:       'Direct contact',
    contact_social_title:     'Social media',

    footer_privacy: 'Privacy policy',
    footer_cookies: 'Cookie policy',
    footer_info:    'Informational website. No vote solicitation.',
    footer_copy:    '© 2026 Per El Campello. All rights reserved.',
    footer_nav:     'Navigation',
    footer_contact: 'Contact',

    cookie_text:    'We use technical cookies to improve your experience.',
    cookie_accept:  'Accept',
    cookie_decline: 'Decline',

    campaign_notice: 'This site is for informational purposes only. It does not solicit votes.',

    prensa_empty: 'Press releases will be published soon.',
    prensa_soon:  'Come back soon.',

    logo_sub:     'Independent party',
    footer_brand: 'Independent political party born to improve the quality of life of those who live in El Campello.',

    translate_notice: 'This article is in Spanish.',
    translate_btn:    'Translate with Google →',
  }
};

/* ── Month names for date formatting ───────────────────────── */
const MONTHS = {
  es:  ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
  val: ['gener','febrer','març','abril','maig','juny','juliol','agost','setembre','octubre','novembre','desembre'],
  en:  ['January','February','March','April','May','June','July','August','September','October','November','December']
};

function formatPostDate(dateStr, lang) {
  const d = new Date(dateStr + 'T12:00:00');
  const month = MONTHS[lang][d.getMonth()];
  const day   = d.getDate();
  const year  = d.getFullYear();
  if (lang === 'en')  return `${month} ${day}, ${year}`;
  if (lang === 'val') {
    const prep = ['abril','agost','octubre'].includes(month) ? "d'" : 'de ';
    return `${day} ${prep}${month} de ${year}`;
  }
  return `${day} de ${month} de ${year}`;
}

/* ── Language ──────────────────────────────────────────────── */
function getLang() {
  return localStorage.getItem('pec_lang') || 'es';
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  localStorage.setItem('pec_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Google Translate banner on post pages
  const translateBar  = document.getElementById('postTranslate');
  const translateLink = document.getElementById('translateLink');
  if (translateBar && translateLink) {
    if (lang === 'es') {
      translateBar.classList.add('hidden');
    } else {
      translateBar.classList.remove('hidden');
      const tl  = lang === 'en' ? 'en' : 'ca';
      const url = encodeURIComponent(window.location.href.split('?')[0]);
      translateLink.href = `https://translate.google.com/translate?sl=es&tl=${tl}&u=${url}`;
    }
  }

  // Format dates rendered by Jekyll
  document.querySelectorAll('[data-date]').forEach(el => {
    el.textContent = formatPostDate(el.dataset.date, lang);
  });

  // Update hardcoded elements by class
  if (t.logo_sub)     document.querySelectorAll('.logo-sub').forEach(el => el.textContent = t.logo_sub);
  if (t.footer_brand) document.querySelectorAll('.footer-brand > p').forEach(el => el.textContent = t.footer_brand);

  document.documentElement.lang = lang === 'val' ? 'ca' : lang;
}

/* ── Mobile menu ───────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Cookie banner ─────────────────────────────────────────── */
function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  if (localStorage.getItem('pec_cookies')) { banner.classList.add('hidden'); return; }

  document.getElementById('cookieAccept')?.addEventListener('click', () => {
    localStorage.setItem('pec_cookies', 'accepted');
    banner.classList.add('hidden');
  });
  document.getElementById('cookieDecline')?.addEventListener('click', () => {
    localStorage.setItem('pec_cookies', 'declined');
    banner.classList.add('hidden');
  });
}

/* ── Active nav link ───────────────────────────────────────── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const hrefFile = href.split('/').pop();
    if (hrefFile === path || (path === '' && hrefFile === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ── Blog filter tabs ──────────────────────────────────────── */
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;
      document.querySelectorAll('.post-row[data-cat]').forEach(row => {
        row.style.display = (cat === 'all' || row.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
}

/* ── Init ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());
  initMobileMenu();
  initCookieBanner();
  setActiveNav();
  initFilterTabs();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});
