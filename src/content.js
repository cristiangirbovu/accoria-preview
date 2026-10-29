// Conținutul site-ului Accoria. Textele sunt scrise de AMPLIO din studiul SEO și din chestionarul de briefing.
// PROVIZORIU: cifrele de tarif și denumirile nivelurilor sunt fictive până la lista clientei; datele publice de contact se stabilesc la final.

const SITE = {
  nume: 'Accoria',
  descriptor: 'Contabilitate și consultanță fiscală',
  firma: 'SMART TEAM CONT S.R.L.',
  cui: 'RO34929542',
  regcom: 'J23/3013/2015',
  telefon: '0728 250 064',
  telefonTel: '+40728250064',
  whatsapp: '40728250064',
  email: 'contact@accoria.ro',
  localitate: 'Popești-Leordeni, jud. Ilfov',
  domeniu: 'https://accoria.ro',
};

// Meniul principal. Serviciile apar în meniul derulant și în subsol, în ordinea priorităților din chestionar.
const SERVICII = [
  { slug: 'contabilitate-srl', nume: 'Contabilitate SRL', scurt: 'Evidența lunară, declarațiile, bilanțul și un contabil care îți răspunde.', lung: 'Evidența lunară, declarațiile, bilanțul și un contabil care îți răspunde. Pentru SRL-uri cu sau fără angajați, din orice domeniu, cu documentele trimise electronic și situația firmei explicată la fiecare închidere de lună.' },
  { slug: 'contabilitate-magazin-online', nume: 'Contabilitate pentru magazine online', scurt: 'Pentru cine vinde pe eMAG, pe Shopify sau pe site propriu, în țară și în Uniunea Europeană.' },
  { slug: 'infiintare-firma', nume: 'Înființare firmă', scurt: 'Actele, rezervarea numelui și depunerea la Registrul Comerțului, cu abonamentul pregătit din prima zi.' },
  { slug: 'modificari-registrul-comertului', nume: 'Modificări la Registrul Comerțului', scurt: 'Sediu, administrator, coduri CAEN, cesiune, suspendare sau radiere.' },
  { slug: 'consultanta-fiscala', nume: 'Consultanță fiscală', scurt: 'Micro sau profit, dividende, TVA și cheltuieli deductibile, explicate înainte să decizi.' },
  { slug: 'analiza-cash-flow', nume: 'Analiză cash-flow', scurt: 'Încasări, plăți și scadențe puse în ordine, ca să vezi lunile grele din timp.' },
  { slug: 'salarizare', nume: 'Salarizare', scurt: 'State de plată, Revisal, concedii și declarația 112, la termen.' },
];

const NAV = [
  { eticheta: 'Servicii', slug: 'servicii', sub: SERVICII },
  { eticheta: 'Tarife', slug: 'tarife' },
  { eticheta: 'Despre', slug: 'despre' },
  { eticheta: 'Blog', slug: 'blog' },
  { eticheta: 'Contact', slug: 'contact' },
];

const ACASA = {
  title: 'Accoria: contabilitate și consultanță fiscală în București și Ilfov',
  description: 'Firmă de contabilitate pentru SRL-uri din București și Ilfov: evidență la zi, declarații depuse la termen, consultanță fiscală și salarizare. Cere o ofertă.',
  hero: {
    h1: 'Contabilitate și consultanță fiscală pentru SRL-uri din București și Ilfov',
    lead: 'Evidență la zi, declarații depuse la termen și răspunsuri clare înainte să iei o decizie.',
    btnPrimar: { text: 'Cere o ofertă', href: '#oferta' },
    btnSecundar: { text: 'Vezi tarifele', href: '#tarife' },
    repere: ['Membru CECCAR', 'Răspuns în scris în 2 zile lucrătoare', 'Un contabil dedicat firmei tale'],
  },
  cine: {
    titlu: 'Pentru cine lucrăm',
    segmente: [
      { nume: 'SRL-uri cu angajați', text: 'Contabilitate, salarizare și declarațiile lunare, într-un singur loc.' },
      { nume: 'Magazine online și fizice', text: 'e-Factura, casa de marcat, stocuri și OSS, pe înțelesul tău.' },
      { nume: 'Firme la început de drum', text: 'Înființare, primele obligații fiscale și un abonament pe măsura activității.' },
      { nume: 'ONG-uri și asociații', text: 'Evidență pe proiecte, raportări către finanțatori și sponsorizări.' },
    ],
  },
  servicii: {
    titlu: 'Ce facem pentru firma ta',
    text: 'Șapte servicii, un singur interlocutor. Alegi ce ai nevoie acum și adaugi restul pe parcurs.',
    detalii: 'Detalii',
    cta: { titlu: 'Nu știi de ce ai nevoie?', text: 'Spune-ne ce face firma ta. După o discuție scurtă îți spunem ce servicii au sens și cât costă.', btn: 'Cere o ofertă', href: '#oferta' },
  },
  nisa: {
    eticheta: 'Magazine online',
    titlu: 'Contabilitate pentru magazinul tău online',
    text: 'Vânzările online au reguli proprii: e-Factura pentru persoane fizice, OSS pentru clienții din Uniunea Europeană, casa de marcat și stocurile. Le ținem în ordine, ca tu să te ocupi de vânzări.',
    puncte: [
      'e-Factura pentru vânzările către persoane fizice',
      'OSS și TVA pentru livrările în Uniunea Europeană',
      'Casa de marcat și bonul fiscal la vânzările online',
      'Stocuri, inventar și retururi',
      'Rambursul prin curier și reconcilierea încasărilor',
    ],
    btn: { text: 'Vezi pagina pentru magazine online', slug: 'contabilitate-magazin-online' },
  },
  proces: {
    titlu: 'Cum lucrăm, lună de lună',
    pasi: [
      { nume: 'Preluăm documentele', text: 'Facturile, extrasele și actele ajung la noi prin e-mail, iar noi îți spunem din timp ce lipsește.' },
      { nume: 'Verificăm contabil și fiscal', text: 'Fiecare document este înregistrat și verificat înainte de închiderea lunii.' },
      { nume: 'Închidem luna și depunem', text: 'Declarațiile pleacă la termen, iar tu primești recipisele și sumele de plată.' },
      { nume: 'Îți arătăm situația firmei', text: 'Vezi unde ești cu încasările, plățile și taxele, pe înțelesul tău.' },
    ],
    promisiuniTitlu: 'Promisiunile noastre',
    promisiuni: [
      { nume: 'Răspuns în scris în 2 zile lucrătoare', text: 'La orice întrebare primești un răspuns scris, pe care să te poți baza.' },
      { nume: 'Un contabil dedicat', text: 'Aceeași persoană îți cunoaște firma, istoricul și termenele ei.' },
      { nume: 'Preluare fără declarații pierdute', text: 'Când vii de la alt contabil, verificăm ce s-a depus și ce lipsește, înainte să preluăm.' },
    ],
  },
  tarife: {
    titlu: 'Cât costă',
    text: 'Abonament lunar, cu preț stabilit de la început. Nivelul depinde de volumul de documente și de numărul de angajați.',
    nota: 'Prețurile sunt orientative. Oferta finală o primești după o discuție scurtă despre firma ta.',
    // PROVIZORIU: denumiri și cifre fictive până la lista de tarife a clientei
    niveluri: [
      { nume: 'Esențial', pret: '450', pentru: 'Pentru SRL-uri fără angajați sau cu volum mic de documente.', include: ['Evidență contabilă lunară', 'Declarațiile fiscale depuse la termen', 'Bilanț anual', 'Răspuns prin e-mail'] },
      { nume: 'Standard', pret: '750', recomandat: true, pentru: 'Pentru firme cu angajați și activitate curentă.', include: ['Tot ce este în Esențial', 'Salarizare și Revisal', 'Situația lunară a firmei', 'Consultanță fiscală de bază'] },
      { nume: 'Complet', pret: '1.200', pentru: 'Pentru magazine online și firme cu volum mare.', include: ['Tot ce este în Standard', 'e-Factura, OSS și stocuri', 'Analiză de cash-flow trimestrială', 'Contabil dedicat, cu răspuns prioritar'] },
    ],
    btn: { text: 'Cere o ofertă', href: '#oferta' },
  },
  schimbare: {
    titlu: 'Ai deja contabil?',
    text: 'Preluăm evidența fără declarații pierdute: verificăm ce s-a depus, ce lipsește și preluăm documentele direct de la contabilul anterior.',
    btn: { text: 'Cum preluăm evidența', slug: 'schimbare-contabil' },
  },
  despre: {
    titlu: 'Despre Accoria',
    paragrafe: [
      'Accoria este firma de contabilitate condusă de Adriana Simion, cu biroul în Popești-Leordeni. Lucrăm cu antreprenori din București și Ilfov care vor să înțeleagă cifrele firmei, nu doar să le depună.',
      'Vorbim pe limba ta, răspundem prompt și aducem experiența de antreprenor în fiecare discuție. Așa arată contabilitatea pe care o vrem și pentru firma noastră.',
    ],
    fapte: [
      { nume: 'Membru CECCAR', text: 'Corpul Experților Contabili și Contabililor Autorizați din România' },
      { nume: 'Din 2015', text: 'firmă înregistrată la Registrul Comerțului Ilfov' },
      { nume: 'Popești-Leordeni', text: 'biroul, la marginea de sud a Bucureștiului' },
    ],
    btn: { text: 'Mai multe despre noi', slug: 'despre' },
  },
  termene: {
    eticheta: 'Noiembrie 2026',
    titlu: 'Termenele lunii',
    randuri: [
      { data: '25 noiembrie', text: 'Declarațiile pentru octombrie: D100, D112, D300, D390. Tot atunci se plătesc impozitele și contribuțiile.' },
      { data: '30 noiembrie', text: 'D394 pentru octombrie și raportarea SAF-T (D406) pentru octombrie.' },
      { data: '25 ianuarie 2027', text: 'Impozitul pe veniturile microîntreprinderii pentru trimestrul al patrulea.' },
    ],
  },
  blog: {
    titlu: 'Din blog',
    articole: [
      { slug: 'saf-t-pentru-firmele-mici', cat: 'Calendar fiscal', titlu: 'SAF-T pentru firmele mici: ce se depune, până când și ce verifică ANAF', text: 'Cine are obligația, ce conține raportarea și cum o pregătești fără stres.' },
      { slug: 'e-factura-magazin-online-persoane-fizice', cat: 'Magazine online', titlu: 'e-Factura pentru magazinul online care vinde persoanelor fizice', text: 'Ce facturi intră în sistem, în cât timp și ce se întâmplă cu bonurile fiscale.' },
    ],
    btn: { text: 'Toate articolele', slug: 'blog' },
  },
  faq: {
    titlu: 'Întrebări frecvente',
    intrebari: [
      { q: 'Cât costă contabilitatea pentru un SRL?', a: 'Abonamentele pornesc de la 450 de lei pe lună și depind de volumul de documente și de numărul de angajați. Primești prețul exact după o discuție scurtă, înainte să semnezi.' },
      { q: 'Cum trecem de la contabilul actual la voi?', a: 'Ne spui unde ești, verificăm ce s-a depus și ce lipsește, apoi preluăm documentele direct de la contabilul anterior. Tu nu rămâi cu declarații nedepuse.' },
      { q: 'Ce se întâmplă când nu înțeleg o cifră?', a: 'Întrebi și primești explicația în scris, pe înțelesul tău. Nu trimitem doar sume și termene.' },
      { q: 'Preluați și o firmă cu declarații nedepuse?', a: 'Da. Întâi facem inventarul: ce lipsește, ce amenzi pot apărea și în ce ordine rezolvăm. Apoi depunem și aducem evidența la zi.' },
      { q: 'Lucrați cu firme din afara Bucureștiului?', a: 'Da. Biroul este în Popești-Leordeni, dar documentele circulă electronic, așa că lucrăm cu firme din toată țara.' },
    ],
  },
  oferta: {
    titlu: 'Cere o ofertă',
    text: 'Spune-ne ce face firma ta și câți angajați are. Revenim cu o propunere clară, în scris.',
    forme: ['SRL', 'ONG sau asociație', 'Firmă la început de drum', 'Altă formă'],
    servicii: ['Contabilitate lunară', 'Contabilitate pentru magazin online', 'Înființare firmă', 'Modificări la Registrul Comerțului', 'Consultanță fiscală', 'Salarizare', 'Schimbare contabil', 'Altceva'],
    consimtamant: 'Sunt de acord ca datele trimise să fie folosite pentru a răspunde cererii mele.',
    btn: 'Trimite cererea',
  },
};

const PAGINA404 = {
  title: 'Pagina nu a fost găsită',
  description: 'Adresa nu există sau pagina nu a fost publicată încă.',
  h1: 'Pagina nu a fost găsită',
  text: 'Adresa nu există sau pagina nu a fost publicată încă. Mergi la prima pagină sau scrie-ne și îți răspundem.',
};

const SUBSOL = {
  firma: [
    { eticheta: 'Despre', slug: 'despre' },
    { eticheta: 'Tarife', slug: 'tarife' },
    { eticheta: 'Blog', slug: 'blog' },
    { eticheta: 'Contact', slug: 'contact' },
    { eticheta: 'Contabilitate în Popești-Leordeni', slug: 'contabilitate-popesti-leordeni' },
  ],
  legal: [
    { eticheta: 'Politica de confidențialitate', slug: 'politica-de-confidentialitate' },
    { eticheta: 'Politica de cookie-uri', slug: 'politica-cookie-uri' },
    { eticheta: 'Termeni și condiții', slug: 'termeni-si-conditii' },
  ],
};

module.exports = { SITE, SERVICII, NAV, ACASA, SUBSOL, PAGINA404 };
