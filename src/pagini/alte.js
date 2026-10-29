// Tarife, Schimbare contabil, pagina locală, Despre, Contact, Mulțumim. Texte scrise de AMPLIO.
// PROVIZORIU: tarifele, denumirile nivelurilor și pragurile de documente sunt fictive până la lista clientei; adresa biroului se adaugă când e stabilită.

const TARIFE = {
  slug: 'tarife',
  title: 'Tarife contabilitate SRL: abonamente de la 450 lei pe lună | Accoria',
  description: 'Cât costă contabilitatea pentru un SRL: trei abonamente lunare cu prețuri de la, ce include fiecare și ce influențează prețul. Oferta finală, în scris.',
  h1: 'Tarife',
  lead: 'Trei abonamente lunare, cu preț stabilit de la început. Alegi nivelul după volumul de documente și numărul de angajați; prețul exact îl primești în scris, înainte să semnezi.',
  nota: 'Prețurile sunt orientative. Oferta finală o primești după o discuție scurtă despre firma ta.',
  niveluri: [
    { nume: 'Esențial', pret: '450', pentru: 'Pentru SRL-uri fără angajați sau cu volum mic de documente.', include: ['Înregistrarea documentelor lunare, până la 50 pe lună', 'Declarațiile fiscale lunare și trimestriale', 'Raportarea SAF-T', 'Balanța lunară', 'Bilanțul anual', 'Răspuns prin e-mail la întrebările curente', 'Avertizări înainte de termene'] },
    { nume: 'Standard', pret: '750', recomandat: true, pentru: 'Pentru firme cu angajați și activitate curentă.', include: ['Tot ce este în Esențial', 'Până la 150 de documente pe lună', 'Salarizare și Revisal', 'Situația lunară a firmei, explicată', 'Consultanță fiscală de bază', 'Contabil dedicat', 'Răspuns în scris în 2 zile lucrătoare'] },
    { nume: 'Complet', pret: '1.200', pentru: 'Pentru magazine online și firme cu volum mare.', include: ['Tot ce este în Standard', 'Volum mare de documente', 'e-Factura, casă de marcat, stocuri și OSS', 'Reconcilierea încasărilor: curier, card, platforme', 'Analiză de cash-flow trimestrială', 'Răspuns prioritar', 'Pregătirea pentru controale'] },
  ],
  factori: {
    titlu: 'Ce influențează prețul',
    text: 'Abonamentul se calculează după munca reală din firma ta, nu după cifra de afaceri.',
    carduri: [
      { nume: 'Numărul de documente', text: 'Facturi, bonuri, extrase și contracte într-o lună obișnuită.' },
      { nume: 'Numărul de angajați', text: 'Fiecare angajat înseamnă stat de plată, Revisal și declarații.' },
      { nume: 'TVA', text: 'Firmele plătitoare de TVA au declarații și verificări în plus.' },
      { nume: 'Vânzări online și stocuri', text: 'Platforme, curieri, procesatori de plăți și inventar.' },
      { nume: 'Conturi și valute', text: 'Mai multe conturi bancare sau încasări în valută cer reconcilieri în plus.' },
      { nume: 'Istoricul de recuperat', text: 'Declarații nedepuse sau evidență de refăcut, la preluare.' },
    ],
  },
  separat: {
    titlu: 'În afara abonamentului',
    text: 'Se ofertează separat, cu preț în scris, înainte de lucrare.',
    puncte: ['Înființarea unei firme', 'Modificări la Registrul Comerțului', 'Opinii fiscale scrise pentru decizii mari', 'Refacerea evidenței pentru perioade anterioare', 'Asistență la controale, peste ce include abonamentul'],
  },
  faq: [
    { q: 'Prețul se schimbă dacă firma crește?', a: 'Da, la trecerea într-un alt nivel, cu anunț în scris și din luna următoare. Nu schimbăm prețul fără să discutăm.' },
    { q: 'Există un contract?', a: 'Da, un contract de prestări servicii. Condițiile de durată și de încetare sunt în contract și le discutăm înainte de semnare.' },
    { q: 'Ce se întâmplă în prima lună?', a: 'Preluăm documentele și, dacă vii de la alt contabil, verificăm ce s-a depus până acum. Pornim evidența din luna în care semnăm.' },
  ],
  cta: { titlu: 'Cere oferta pentru firma ta', text: 'Spune-ne câte documente și câți angajați ai. Revenim cu prețul exact, în scris.' },
};

const SCHIMBARE = {
  slug: 'schimbare-contabil',
  title: 'Schimbare contabil: preluăm evidența fără declarații pierdute | Accoria',
  description: 'Cum schimbi contabilul fără să pierzi declarații: ce verificăm, ce documente preluăm și cum pornim. Pentru SRL-uri din București și Ilfov.',
  h1: 'Schimbare contabil',
  lead: 'Nu primești răspunsuri, ai declarații nedepuse sau vrei pe cineva care îți explică cifrele. Preluăm evidența ordonat, fără întreruperi.',
  intro: [
    'Schimbarea contabilului sperie mulți antreprenori: ce se întâmplă cu declarațiile din luna aceasta, cum iau documentele înapoi, cine răspunde pentru ce s-a depus până acum. Avem o procedură pentru fiecare pas.',
    'Primul lucru pe care îl facem este un inventar: ce s-a depus, ce lipsește, ce amenzi pot apărea și în ce ordine le rezolvăm. Abia apoi vorbim despre abonament.',
  ],
  documente: {
    titlu: 'Ce ai nevoie de la contabilul anterior',
    puncte: ['Balanța de verificare la zi', 'Registrul jurnal și cartea mare', 'Declarațiile depuse și recipisele', 'Fișele de cont pentru clienți și furnizori', 'Dosarele de personal și accesul la Revisal', 'Documentele originale ale firmei'],
  },
  semne: {
    titlu: 'Semne că e momentul',
    carduri: [
      { nume: 'Nu primești răspunsuri', text: 'Întrebările rămân fără răspuns zile întregi sau primești doar sume, fără explicații.' },
      { nume: 'Ai amenzi sau notificări', text: 'Declarații depuse târziu sau deloc, somații pe care le afli de la ANAF, nu de la contabil.' },
      { nume: 'Firma a crescut', text: 'Angajați, magazin online, vânzări în UE: ai nevoie de cineva care știe fluxurile noi.' },
    ],
  },
  pasi: {
    titlu: 'Cum preluăm evidența',
    lista: [
      { nume: 'Verificăm situația fiscală', text: 'Declarațiile depuse, obligațiile de plată și notificările din SPV, înainte să preluăm.' },
      { nume: 'Stabilim data preluării', text: 'De regulă, de la începutul lunii următoare, ca să nu rămână nimic nedepus.' },
      { nume: 'Preluăm documentele', text: 'Balanța, registrele, declarațiile și dosarele de personal, de la tine sau direct de la contabilul anterior.' },
      { nume: 'Punem evidența la zi', text: 'Dacă lipsesc declarații sau înregistrări, le facem și le depunem.' },
      { nume: 'Pornim ritmul lunar', text: 'Documente, verificare, închidere, situația firmei. Cu un contabil dedicat.' },
    ],
  },
  faq: [
    { q: 'Pot schimba contabilul în mijlocul anului?', a: 'Da. Data cea mai bună este începutul unei luni, după depunerea declarațiilor pentru luna anterioară.' },
    { q: 'Cine răspunde pentru declarațiile vechi?', a: 'Pentru perioada de dinainte de preluare, contabilul anterior, conform contractului vostru. Noi verificăm situația și îți spunem ce lipsește; dacă vrei, refacem și depunem.' },
    { q: 'Ce fac dacă fostul contabil nu îmi dă documentele?', a: 'Documentele firmei sunt ale firmei. Îți spunem exact ce să ceri în scris și cum reconstituim evidența din SPV și din extrase, dacă e nevoie.' },
    { q: 'Cât durează preluarea?', a: 'De obicei, o lună: de la prima discuție până la prima închidere de lună făcută de noi.' },
  ],
  cta: { titlu: 'Spune-ne unde ești', text: 'De când ai contabilul actual, ce te deranjează, dacă ai notificări. Revenim cu pașii și cu prețul.' },
};

const LOCAL = {
  slug: 'contabilitate-popesti-leordeni',
  title: 'Contabilitate în Popești-Leordeni și Sectorul 4 | Accoria',
  description: 'Firmă de contabilitate în Popești-Leordeni, pentru SRL-uri din Ilfov și din sudul Bucureștiului: Sectorul 4, Berceni, Jilava, Vidra. Întâlniri la birou sau online.',
  h1: 'Contabilitate în Popești-Leordeni',
  lead: 'Biroul nostru este în Popești-Leordeni, la marginea de sud a Bucureștiului. Lucrăm cu firme din Ilfov și din Sectorul 4, la birou sau online.',
  intro: [
    'Pentru multe firme din zonă contează să poată veni cu actele la birou, să discute față în față și să știe că contabilul este la zece minute distanță. Pentru altele, totul se întâmplă pe e-mail și pe telefon. Lucrăm în ambele feluri.',
    'Cunoaștem administrațiile fiscale de care aparțin firmele din Ilfov și din Sectorul 4 și știm cum circulă dosarele.',
  ],
  zone: {
    titlu: 'Zonele în care lucrăm',
    puncte: ['Popești-Leordeni', 'Berceni, Jilava, Vidra, Glina, Cernica', 'Sectorul 4: Berceni, Tineretului, Văcărești, Apărătorii Patriei', 'Restul Bucureștiului și al județului Ilfov', 'Online, în toată țara'],
  },
  servicii: ['contabilitate-srl', 'contabilitate-magazin-online', 'infiintare-firma', 'salarizare'],
  faq: [
    { q: 'Trebuie să vin la birou?', a: 'Nu. Documentele circulă electronic, iar discuțiile se țin la telefon sau online. Dacă preferi, ne vedem la birou, cu programare.' },
    { q: 'Lucrați cu firme din alte sectoare?', a: 'Da, din tot Bucureștiul și din Ilfov, și online din toată țara.' },
    { q: 'Pot aduce actele personal?', a: 'Da, cu programare, ca să fim siguri că te așteaptă cineva și că plecăm cu lista completă.' },
  ],
  cta: { titlu: 'Cere o ofertă', text: 'Spune-ne ce face firma ta și câți angajați are. Revenim cu prețul în scris și, dacă vrei, cu o întâlnire la birou.' },
};

const DESPRE = {
  slug: 'despre',
  title: 'Despre Accoria: contabilitate cu explicații, din Popești-Leordeni',
  description: 'Accoria este firma de contabilitate condusă de Adriana Simion, din 2015, în Popești-Leordeni. Cum lucrăm, ce promitem și de ce vorbim pe limba ta.',
  h1: 'Despre Accoria',
  lead: 'O firmă de contabilitate din Popești-Leordeni, condusă de Adriana Simion, pentru antreprenori care vor să înțeleagă cifrele firmei, nu doar să le depună.',
  poveste: [
    'Accoria este numele nou al unei firme de contabilitate care lucrează din 2015 cu antreprenori din București și Ilfov. Numele s-a schimbat, felul de a lucra a rămas: evidență la zi, declarații la termen și explicații pe înțelesul tău.',
    'Am învățat din experiența de antreprenor că cifrele contează doar dacă le înțelegi la timp. De aceea răspundem în scris, spunem din timp ce urmează și nu ne ascundem după termeni de specialitate.',
    'Lucrăm cu SRL-uri mici și mijlocii, cu magazine online și fizice, cu firme la început de drum și cu ONG-uri. Căutăm clienți care vor o colaborare pe termen lung, nu cel mai mic preț pentru luna aceasta.',
  ],
  principii: {
    titlu: 'Cum lucrăm',
    carduri: [
      { nume: 'Vorbim pe limba ta', text: 'Îți explicăm ce înseamnă cifrele pentru firma ta, nu doar le trimitem.' },
      { nume: 'Răspundem prompt', text: 'Când ne spui clar ce ai nevoie și până când, primești răspunsul la timp, în scris.' },
      { nume: 'Gândim ca antreprenorii', text: 'Experiența antreprenorială ne ajută să înțelegem decizia din spatele întrebării.' },
      { nume: 'Spunem din timp', text: 'Termene, sume de plată, schimbări de lege: le afli înainte, nu după.' },
    ],
  },
  conducere: {
    titlu: 'Cine conduce firma',
    nume: 'Adriana Simion',
    rol: 'Administrator',
    text: 'Adriana Simion conduce firma și răspunde personal de fiecare client. Membră CECCAR, cu experiență de antreprenor și de contabil, vorbește pe limba ta, nu doar în limbaj de specialitate.',
  },
  fapte: [
    { nume: 'Membru CECCAR', text: 'Corpul Experților Contabili și Contabililor Autorizați din România' },
    { nume: 'Din 2015', text: 'firmă înregistrată la Registrul Comerțului Ilfov' },
    { nume: 'Popești-Leordeni', text: 'biroul, la marginea de sud a Bucureștiului' },
  ],
  cta: { titlu: 'Hai să vorbim despre firma ta', text: 'Spune-ne ce face firma și ce te încurcă acum. Revenim cu o propunere clară, în scris.' },
};

const CONTACT = {
  slug: 'contact',
  title: 'Contact Accoria: cere o ofertă, sună-ne sau scrie-ne',
  description: 'Contactează Accoria, firmă de contabilitate din Popești-Leordeni: telefon, WhatsApp, e-mail și formular de ofertă. Răspuns în scris în 2 zile lucrătoare.',
  h1: 'Contact',
  lead: 'Scrie-ne, sună-ne sau trimite formularul. Revenim cu un răspuns în scris.',
  canale: {
    titlu: 'Cum ne găsești',
    text: 'Întâlnirile la birou se stabilesc cu programare. Documentele le poți trimite electronic, oricând.',
  },
  dupa: {
    titlu: 'Ce se întâmplă după ce ne scrii',
    pasi: [
      { nume: 'Citim cererea', text: 'Forma firmei, activitatea, numărul de angajați și ce te încurcă acum.' },
      { nume: 'Revenim în scris', text: 'Cu întrebările care lipsesc sau direct cu propunerea și prețul.' },
      { nume: 'Stabilim pașii', text: 'Preluarea documentelor, data de început și cine este contabilul tău dedicat.' },
    ],
  },
  harta: { q: 'Popești-Leordeni, Ilfov', titlu: 'Harta: Popești-Leordeni' },
  faq: [
    { q: 'În cât timp răspundeți?', a: 'În cel mult 2 zile lucrătoare, în scris. Dacă e urgent, sună-ne.' },
    { q: 'Pot veni la birou?', a: 'Da, cu programare, ca să te aștepte cineva și să ai timpul necesar.' },
    { q: 'Răspundeți la întrebări fiscale pe WhatsApp?', a: 'Pe WhatsApp răspundem rapid la întrebări scurte. Răspunsurile pe care să te poți baza le trimitem pe e-mail, în scris.' },
  ],
};

const MULTUMIM = {
  slug: 'multumim',
  title: 'Mulțumim, am primit cererea ta | Accoria',
  description: 'Cererea ta a ajuns la Accoria. Revenim în scris în cel mult 2 zile lucrătoare.',
  h1: 'Mulțumim, am primit cererea ta',
  text: 'Revenim în cel mult 2 zile lucrătoare, în scris, cu întrebările care lipsesc sau direct cu propunerea. Dacă e urgent, sună-ne.',
};

module.exports = { TARIFE, SCHIMBARE, LOCAL, DESPRE, CONTACT, MULTUMIM };
