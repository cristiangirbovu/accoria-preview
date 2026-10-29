// Paginile de servicii (7) și hub-ul /servicii/. Texte scrise de AMPLIO din studiul SEO, din chestionar și din referința de ton.
// PROVIZORIU: prețurile „de la” sunt fictive până la lista clientei; apartenența la CECCAR și cine întocmește actele ONRC se confirmă cu clienta.

const HUB = {
  slug: 'servicii',
  title: 'Serviciile Accoria: contabilitate, fiscalitate, înființări, salarizare',
  description: 'Șapte servicii pentru firma ta, de la înființare la salarizare: contabilitate SRL, magazine online, consultanță fiscală, cash-flow, modificări la Registrul Comerțului.',
  h1: 'Servicii',
  lead: 'Șapte servicii pentru firma ta, de la înființare la salarizare. Un singur interlocutor, răspunsuri în scris.',
  extra: {
    titlu: 'Lucrăm și cu',
    carduri: [
      { nume: 'ONG-uri și asociații', text: 'Evidență pe proiecte, raportări către finanțatori, contracte de sponsorizare și declarațiile specifice. Scrie-ne și îți spunem cum lucrăm cu asociația ta.' },
      { nume: 'Workshop-uri pentru antreprenori', text: 'Sesiuni practice pentru firme și pentru echipele lor: ce documente contează, cum citești situația firmei, ce întrebi contabilul. Se organizează la cerere.' },
    ],
  },
};

const PAGINI = [
  {
    slug: 'contabilitate-srl',
    title: 'Contabilitate SRL în București și Ilfov | Accoria',
    description: 'Contabilitate externalizată pentru SRL-uri: evidență lunară, declarații la termen, bilanț și un contabil dedicat. Prețuri de la 450 lei pe lună. Cere o ofertă.',
    h1: 'Contabilitate pentru SRL-uri',
    lead: 'Evidența ținută la zi, declarațiile depuse la termen și un contabil care îți explică cifrele. Pentru firme mici și mijlocii din București și Ilfov, cu sau fără angajați.',
    intro: [
      'Contabilitatea unui SRL nu înseamnă doar declarații depuse. Înseamnă să știi, în fiecare lună, cât ai de plată, de ce și ce urmează. Așa lucrăm: preluăm documentele, le verificăm, închidem luna și îți spunem unde ești cu firma.',
      'Lucrăm cu antreprenori care vor să înțeleagă ce se întâmplă în firmă, nu doar să semneze. Documentele circulă electronic, iar întrebările primesc răspuns în scris.',
    ],
    include: {
      titlu: 'Ce include abonamentul',
      puncte: ['Înregistrarea documentelor: facturi, bonuri, extrase, contracte', 'Declarațiile lunare și trimestriale: D100, D300, D390, D394, D112, după caz', 'Raportarea SAF-T (D406)', 'Balanța și situația lunară a firmei, pe înțelesul tău', 'Bilanțul anual și situațiile financiare', 'Registrele obligatorii și relația cu ANAF', 'Răspunsuri la întrebările fiscale curente', 'Avertizări înainte de termene: ce ai de plată și până când'],
    },
    pentru: [
      { nume: 'Firme cu angajați', text: 'Adaugi salarizarea și ai totul într-un singur loc, cu un singur interlocutor.' },
      { nume: 'Firme fără angajați', text: 'Abonament simplu, pentru volum mic de documente, fără costuri ascunse.' },
      { nume: 'Firme care schimbă contabilul', text: 'Preluăm evidența după ce verificăm ce s-a depus și ce lipsește.' },
    ],
    pasi: [
      { nume: 'Ne spui cum lucrezi acum', text: 'Câte documente ai pe lună, câți angajați, ce te încurcă.' },
      { nume: 'Primești oferta în scris', text: 'Prețul exact și ce include, înainte să semnezi.' },
      { nume: 'Preluăm documentele', text: 'De la tine sau de la contabilul anterior, și pornim din luna următoare.' },
    ],
    faq: [
      { q: 'Ce documente trebuie să trimit lunar?', a: 'Facturile emise și primite, bonurile fiscale, extrasele de cont și contractele noi. Le trimiți electronic, iar noi îți spunem dacă lipsește ceva.' },
      { q: 'Cât costă contabilitatea pentru un SRL?', a: 'De la 450 de lei pe lună pentru o firmă fără angajați și cu volum mic de documente. Prețul exact depinde de numărul de documente și de angajați și îl primești în scris, înainte să semnezi.' },
      { q: 'Pot trece la voi în mijlocul anului?', a: 'Da. Preluăm evidența de la contabilul anterior, verificăm declarațiile depuse și continuăm de unde a rămas.' },
      { q: 'Cum aflu situația firmei?', a: 'La fiecare închidere de lună primești situația firmei: încasări, plăți, taxe de plată și ce urmează, explicate pe scurt.' },
    ],
    cta: { titlu: 'Cere o ofertă pentru firma ta', text: 'Spune-ne câți angajați ai și câte documente ai într-o lună obișnuită. Revenim cu prețul în scris.' },
    legate: ['salarizare', 'consultanta-fiscala', 'schimbare-contabil'],
  },
  {
    slug: 'contabilitate-magazin-online',
    title: 'Contabilitate pentru magazine online | Accoria',
    description: 'Contabilitate pentru magazine online: e-Factura pentru persoane fizice, OSS, casa de marcat, stocuri, retururi și ramburs prin curier. Pentru vânzători pe eMAG, Shopify și site propriu.',
    h1: 'Contabilitate pentru magazine online',
    lead: 'Pentru cine vinde pe eMAG, pe Shopify, pe WooCommerce sau pe site propriu, în țară și în Uniunea Europeană. Regulile comerțului online, ținute în ordine lună de lună.',
    intro: [
      'Un magazin online are o contabilitate diferită de a unei firme de servicii: sute de facturi mici, bonuri fiscale, plăți cu cardul, ramburs prin curier, retururi și vânzări în alte țări. Dacă evidența nu ține pasul, apar diferențe între stoc, încasări și declarații.',
      'Noi știm fluxul: de la comanda din platformă până la banii din cont. Reconciliem încasările cu rapoartele de curier și de plată, ținem stocurile la zi și depunem declarațiile corect.',
    ],
    include: {
      titlu: 'Ce include abonamentul',
      puncte: ['e-Factura pentru vânzările către persoane fizice și către firme', 'Casa de marcat, bonurile fiscale și raportul Z, integrate în evidență', 'Reconcilierea încasărilor: ramburs prin curier, card, plată în cont', 'Stocuri, inventar, retururi și marfă deteriorată', 'OSS și TVA pentru livrările către persoane fizice din Uniunea Europeană', 'Vânzări prin marketplace: comisioane, facturi de la platformă, decontări', 'Declarațiile lunare, SAF-T și bilanțul', 'Situația lunară: marja, stocul și banii, pe înțelesul tău'],
    },
    pentru: [
      { nume: 'Magazine pe marketplace', text: 'eMAG și alte platforme: decontări, comisioane și facturi de la platformă, puse corect în evidență.' },
      { nume: 'Magazine pe platformă proprie', text: 'Shopify, WooCommerce, PrestaShop sau Gomag: exporturile de comenzi și de plăți se potrivesc cu evidența.' },
      { nume: 'Magazine fizice cu vânzare online', text: 'Casa de marcat, stocul comun și vânzările din ambele canale, într-o singură contabilitate.' },
    ],
    pasi: [
      { nume: 'Ne arăți platforma și volumul', text: 'Pe ce vinzi, câte comenzi ai pe lună, cum încasezi.' },
      { nume: 'Stabilim fluxul documentelor', text: 'Ce exporturi trimiți, cât de des, cine emite bonul și factura.' },
      { nume: 'Pornim cu stocul și soldurile de pornire', text: 'Inventar, solduri de clienți și furnizori, apoi ritmul lunar.' },
    ],
    faq: [
      { q: 'Trebuie să emit e-Factura pentru clienții persoane fizice?', a: 'Da, facturile emise către persoane fizice se transmit în sistemul e-Factura, în termenul prevăzut de lege. Îți spunem exact ce intră și ce nu intră, în funcție de cum vinzi și de cum încasezi.' },
      { q: 'Vând și în alte țări din UE. Ce înseamnă OSS?', a: 'OSS este regimul prin care declari și plătești TVA-ul pentru vânzările către persoane fizice din alte state membre printr-o singură declarație, în România, după depășirea plafonului de 10.000 de euro pe an. Îți urmărim plafonul și ne ocupăm de înregistrare și de declarații.' },
      { q: 'Cum tratez rambursul prin curier?', a: 'Banii încasați de curier ajung la tine la decontare, nu la livrare. Reconciliem borderourile curierului cu facturile și cu extrasul de cont, ca încasările să fie corecte în evidență.' },
      { q: 'Cât costă contabilitatea pentru un magazin online?', a: 'De la 1.200 de lei pe lună, în funcție de numărul de comenzi, de platforme și de țările în care vinzi. Primești prețul în scris, înainte să semnezi.' },
    ],
    cta: { titlu: 'Cere o ofertă pentru magazinul tău', text: 'Spune-ne pe ce platformă vinzi și câte comenzi ai pe lună. Revenim cu prețul în scris.' },
    legate: ['contabilitate-srl', 'consultanta-fiscala', 'analiza-cash-flow'],
  },
  {
    slug: 'infiintare-firma',
    title: 'Înființare firmă în București și Ilfov | Accoria',
    description: 'Înființare SRL: actele, rezervarea numelui, depunerea la Registrul Comerțului și contabilitatea pregătită din prima zi. Cere o ofertă.',
    h1: 'Înființare firmă',
    lead: 'Pregătim actele, rezervăm numele și depunem dosarul la Registrul Comerțului. Firma pornește cu contabilitatea pusă la punct din prima zi.',
    intro: [
      'Înființarea unei firme are pași clari, dar deciziile de la început contează ani de zile: codul CAEN principal, sediul social, asociații și administratorul, opțiunea pentru TVA, regimul de impozitare. Le discutăm înainte să depunem ceva.',
      'Pentru cine pornește cu noi, înființarea vine împreună cu abonamentul de contabilitate: primele declarații și primele obligații sunt deja în calendar.',
    ],
    include: {
      titlu: 'Ce include',
      puncte: ['Discuția de pornire: forma juridică, CAEN, sediu, asociați, TVA, micro sau profit', 'Rezervarea denumirii la Registrul Comerțului', 'Actul constitutiv și declarațiile necesare', 'Depunerea dosarului și ridicarea certificatului de înregistrare', 'Înregistrarea fiscală: vectorul fiscal și opțiunea pentru TVA, dacă e cazul', 'Documentele de care ai nevoie pentru deschiderea contului bancar', 'Primele obligații după înființare, puse în calendar', 'Abonamentul de contabilitate pregătit din prima zi'],
    },
    pentru: [
      { nume: 'Prima firmă', text: 'Îți explicăm fiecare pas și fiecare decizie, fără jargon.' },
      { nume: 'A doua sau a treia firmă', text: 'Rapid, cu actele pregătite corect din prima și fără drumuri inutile.' },
      { nume: 'Magazin online nou', text: 'Pornim cu codurile CAEN potrivite, casa de marcat și regimul de TVA corect pentru vânzări online.' },
    ],
    pasi: [
      { nume: 'Discutăm despre ce vrei să faci', text: 'Activitate, asociați, sediu, buget de pornire.' },
      { nume: 'Pregătim și semnăm actele', text: 'Actul constitutiv, declarațiile, dovada sediului.' },
      { nume: 'Depunem dosarul și preluăm firma', text: 'Certificatul de înregistrare, apoi contabilitatea din prima lună.' },
    ],
    faq: [
      { q: 'Cât durează înființarea unei firme?', a: 'De regulă, câteva zile lucrătoare de la depunerea dosarului complet la Registrul Comerțului. Pregătirea actelor depinde de cât de repede avem de la tine datele și documentele.' },
      { q: 'Ce acte îmi trebuie?', a: 'Actele de identitate ale asociaților și ale administratorului, dovada sediului social (contract de comodat sau de închiriere și, după caz, acordul asociației de proprietari și al vecinilor) și denumirea dorită, cu variante de rezervă.' },
      { q: 'Micro sau impozit pe profit?', a: 'Depinde de ce faci, de venituri și de angajați. Discutăm înainte de înființare, pentru că decizia influențează taxele din primul an.' },
      { q: 'Pot avea sediul într-un apartament?', a: 'Da, cu acordul proprietarului și, în anumite cazuri, al asociației de proprietari și al vecinilor. Îți spunem exact ce documente sunt necesare pentru adresa ta.' },
    ],
    cta: { titlu: 'Hai să pornim firma corect', text: 'Spune-ne ce vrei să faci și când vrei să începi. Revenim cu pașii și cu prețul.' },
    legate: ['modificari-registrul-comertului', 'contabilitate-srl', 'consultanta-fiscala'],
  },
  {
    slug: 'modificari-registrul-comertului',
    title: 'Modificări la Registrul Comerțului | Accoria',
    description: 'Schimbare sediu social, administrator, coduri CAEN, cesiune de părți sociale, suspendare sau radiere. Pregătim actele și depunem dosarul la Registrul Comerțului.',
    h1: 'Modificări la Registrul Comerțului',
    lead: 'Sediu nou, administrator nou, coduri CAEN, cesiune, suspendare sau radiere. Pregătim actele, depunem dosarul și actualizăm evidența.',
    intro: [
      'Orice schimbare în firmă trebuie înregistrată la Registrul Comerțului și, de multe ori, și la ANAF. Dacă rămâne nefăcută, apar probleme la bancă, la clienți sau la control.',
      'Ne ocupăm de dosar de la cap la coadă și îți spunem ce efecte are schimbarea în contabilitate și în taxe, înainte să semnezi.',
    ],
    include: {
      titlu: 'Ce rezolvăm',
      puncte: ['Schimbarea sediului social sau a punctelor de lucru', 'Numirea sau revocarea administratorului', 'Adăugarea sau schimbarea codurilor CAEN', 'Cesiunea părților sociale și intrarea sau ieșirea unui asociat', 'Majorarea sau reducerea capitalului social', 'Suspendarea și reluarea activității', 'Dizolvarea și radierea firmei', 'Actualizarea datelor la ANAF după modificare'],
    },
    pentru: [
      { nume: 'Firme care se mută', text: 'Sediu nou, punct de lucru nou sau închiderea unuia: actele și termenele, fără întreruperi.' },
      { nume: 'Firme care schimbă structura', text: 'Asociați noi, administrator nou, capital social modificat.' },
      { nume: 'Firme care se opresc', text: 'Suspendare sau radiere, cu obligațiile fiscale închise corect.' },
    ],
    pasi: [
      { nume: 'Ne spui ce vrei să schimbi', text: 'Și îți spunem ce acte sunt necesare și ce efecte are schimbarea.' },
      { nume: 'Pregătim actele și le semnezi', text: 'Hotărârea asociaților, actul constitutiv actualizat, declarațiile.' },
      { nume: 'Depunem dosarul și actualizăm evidența', text: 'La Registrul Comerțului și, unde e cazul, la ANAF.' },
    ],
    faq: [
      { q: 'În cât timp se înregistrează o modificare?', a: 'De regulă, câteva zile lucrătoare de la depunerea dosarului complet. Unele modificări, cum este cesiunea către o persoană din afara firmei, au termene legale de publicitate care prelungesc procedura.' },
      { q: 'Trebuie să anunț și ANAF?', a: 'Da, pentru multe modificări. Vectorul fiscal și datele de identificare se actualizează după înregistrarea la Registrul Comerțului. Ne ocupăm noi.' },
      { q: 'Pot suspenda firma dacă nu mai am activitate?', a: 'Da, pentru cel mult trei ani. În suspendare, obligațiile declarative se reduc, dar nu dispar complet. Îți spunem ce rămâne de depus.' },
      { q: 'Ce se întâmplă cu contabilitatea la radiere?', a: 'Închidem evidența, depunem declarațiile finale și situațiile de lichidare. Radierea se face doar după ce obligațiile fiscale sunt închise.' },
    ],
    cta: { titlu: 'Spune-ne ce se schimbă în firmă', text: 'Îți spunem ce acte sunt necesare, cât durează și cât costă.' },
    legate: ['infiintare-firma', 'contabilitate-srl', 'consultanta-fiscala'],
  },
  {
    slug: 'consultanta-fiscala',
    title: 'Consultanță fiscală pentru firme | Accoria',
    description: 'Consultanță fiscală pentru SRL-uri: micro sau impozit pe profit, dividende, TVA, cheltuieli deductibile, pregătirea pentru control. Răspunsuri în scris.',
    h1: 'Consultanță fiscală',
    lead: 'Micro sau profit, dividende, TVA, cheltuieli deductibile. Răspunsuri în scris, înainte să iei o decizie, nu după.',
    intro: [
      'Optimizarea fiscală nu înseamnă să plătești mai puțin cu orice preț. Înseamnă să înțelegi ce poți deduce real pe firmă, ce nu, și ce opțiuni ai în fiecare situație.',
      'Răspundem la întrebări concrete: cum scoți banii din firmă, dacă îți convine TVA-ul, ce taxe aduce un angajat în plus, cum te pregătești pentru un control.',
    ],
    include: {
      titlu: 'La ce te ajutăm',
      puncte: ['Alegerea regimului: microîntreprindere sau impozit pe profit', 'Dividende: când, cât și cu ce taxe', 'TVA: înregistrare, scoatere, taxare inversă, TVA la încasare', 'Cheltuieli deductibile și limitele lor: mașină, telefon, deplasări, protocol', 'Angajați și colaboratori: costul real al fiecărei variante', 'Pregătirea pentru controale ANAF și răspunsul la notificări', 'Opinii scrise pentru decizii importante: investiții, împrumuturi, vânzarea firmei', 'Calendarul fiscal al firmei, cu termenele și sumele estimate'],
    },
    pentru: [
      { nume: 'Antreprenori la decizie', text: 'Înainte de o investiție, de un angajat nou sau de o schimbare de regim fiscal.' },
      { nume: 'Firme cu control sau notificare', text: 'Te pregătim, pregătim documentele și răspundem împreună, în termen.' },
      { nume: 'Firme cu abonament la noi', text: 'Consultanța de bază este inclusă în abonamentele Standard și Complet.' },
    ],
    pasi: [
      { nume: 'Ne trimiți întrebarea și contextul', text: 'Pe e-mail, cu cifrele pe care le ai la îndemână.' },
      { nume: 'Analizăm cifrele firmei', text: 'Din evidență, din extrase și din planurile tale.' },
      { nume: 'Primești răspunsul în scris', text: 'Cu variante, cu sumele estimate și cu temeiul.' },
    ],
    faq: [
      { q: 'Consultanța este inclusă în abonament?', a: 'Întrebările curente, da. Analizele mai ample, de exemplu o opinie scrisă pentru o investiție sau pregătirea unui control, se ofertează separat, în funcție de timpul necesar.' },
      { q: 'Cum scot bani din firmă în mod legal?', a: 'Prin salariu, dividende, chirii sau alte forme, fiecare cu taxele ei. Alegem împreună varianta care se potrivește situației tale, cu cifrele pe masă.' },
      { q: 'Mă ajutați la un control ANAF?', a: 'Da. Pregătim documentele cerute, verificăm situația înainte și răspundem notificărilor în termen.' },
      { q: 'Ce înseamnă că răspundeți în scris?', a: 'Primești răspunsul pe e-mail, cu explicația și cu temeiul. Îl poți reciti oricând și îl poți folosi în discuțiile cu banca sau cu partenerii.' },
    ],
    cta: { titlu: 'Pune-ne întrebarea', text: 'Descrie situația pe scurt. Îți spunem ce opțiuni ai și cât costă analiza, dacă e nevoie de una.' },
    legate: ['contabilitate-srl', 'analiza-cash-flow', 'salarizare'],
  },
  {
    slug: 'analiza-cash-flow',
    title: 'Analiză cash-flow pentru firme mici | Accoria',
    description: 'Analiză de cash-flow: încasări, plăți și scadențe puse în ordine, ca să vezi lunile grele din timp. Pentru SRL-uri din București și Ilfov.',
    h1: 'Analiză cash-flow',
    lead: 'Profitul de pe hârtie nu plătește salariile. Punem în ordine încasările, plățile și scadențele, ca să vezi lunile grele înainte să vină.',
    intro: [
      'Multe firme profitabile ajung fără bani în cont pentru că încasează târziu și plătesc devreme. Analiza de cash-flow arată exact unde se blochează banii: clienți neîncasați, stocuri prea mari, taxe plătite în aceeași săptămână cu salariile.',
      'Nu este un raport pe care îl pui în sertar. Este o discuție trimestrială cu cifrele firmei tale și cu trei sau patru decizii concrete.',
    ],
    include: {
      titlu: 'Ce primești',
      puncte: ['Situația clienților neîncasați și a furnizorilor neplătiți', 'Calendarul plăților: salarii, taxe, furnizori, rate', 'Previziunea pe următoarele trei luni, cu scenarii', 'Semnale de alarmă: termene de plată, stocuri, dependența de un client', 'Recomandări concrete: termene, avansuri, linii de credit, stocuri', 'Discuție trimestrială pe cifre, cu tine'],
    },
    pentru: [
      { nume: 'Firme în creștere', text: 'Creșterea consumă bani înainte să îi aducă. Vezi cât ai nevoie și când.' },
      { nume: 'Firme cu sezon', text: 'Lunile bune plătesc lunile slabe, dacă sunt planificate.' },
      { nume: 'Firme cu clienți mari', text: 'Un client care plătește la 90 de zile poate bloca toată firma. Îl vezi din timp.' },
    ],
    pasi: [
      { nume: 'Luăm cifrele din contabilitate și din bancă', text: 'Solduri, scadențe, contracte cu termene de plată.' },
      { nume: 'Construim tabloul încasărilor și al plăților', text: 'Pe luni, cu scenariile bun, mediu și slab.' },
      { nume: 'Discutăm scenariile și deciziile', text: 'Ce schimbi la termene, la stocuri, la finanțare.' },
    ],
    faq: [
      { q: 'Am nevoie de cash-flow dacă firma e profitabilă?', a: 'Mai ales atunci. Profitul se vede la sfârșit de an, banii lipsesc în mijlocul lunii. Analiza îți arată diferența.' },
      { q: 'Cât de des se face?', a: 'Trimestrial, în abonamentul Complet, sau la cerere, înainte de o decizie importantă: o investiție, un credit, un client mare.' },
      { q: 'Ce date vă trebuie?', a: 'Evidența contabilă, extrasele de cont, contractele cu termene de plată și planurile tale pentru următoarele luni.' },
      { q: 'Este același lucru cu bugetul?', a: 'Nu. Bugetul spune cât vrei să cheltuiești. Cash-flow-ul spune dacă vei avea banii în cont atunci când trebuie să plătești.' },
    ],
    cta: { titlu: 'Vezi unde se blochează banii', text: 'Spune-ne cum încasezi și cum plătești. Îți arătăm tabloul și ce poți schimba.' },
    legate: ['consultanta-fiscala', 'contabilitate-srl', 'contabilitate-magazin-online'],
  },
  {
    slug: 'salarizare',
    title: 'Salarizare și administrare de personal | Accoria',
    description: 'Servicii de salarizare pentru firme cu angajați: state de plată, Revisal, contracte, concedii, declarația 112, adeverințe. La termen, fără erori.',
    h1: 'Salarizare și administrare de personal',
    lead: 'State de plată, Revisal, contracte, concedii și declarația 112. Totul la termen, cu angajații plătiți corect și cu tine informat din timp.',
    intro: [
      'Un angajat înseamnă contract, Revisal, fișă de post, pontaj, stat de plată, declarația 112 și, din când în când, concedii medicale, adeverințe sau încetări. Fiecare are un termen și o regulă.',
      'Ne ocupăm de toate, lună de lună, și îți spunem înainte de termen cât ai de plată la salarii și la contribuții.',
    ],
    include: {
      titlu: 'Ce include',
      puncte: ['Contracte de muncă, acte adiționale și încetări', 'Revisal: înregistrarea și transmiterea la termen', 'Statele de plată și fluturașii', 'Declarația 112 și plata contribuțiilor', 'Concedii de odihnă, medicale și fără plată', 'Adeverințe pentru angajați', 'Tichete de masă, bonusuri, avantaje în natură', 'Calculul costului total al unui angajat nou, înainte să îl angajezi'],
    },
    pentru: [
      { nume: 'Primul angajat', text: 'Îți spunem ce înseamnă în bani și în acte, înainte să semnezi.' },
      { nume: 'Echipe mici și mijlocii', text: 'Pontaje, concedii, schimbări de normă: lună de lună, fără întârzieri.' },
      { nume: 'Magazine cu ture', text: 'Program de lucru inegal, ture și sporuri, calculate corect.' },
    ],
    pasi: [
      { nume: 'Preluăm dosarele de personal', text: 'Contracte, fișe de post, Revisal, istoricul concediilor.' },
      { nume: 'Primim pontajul lunar de la tine', text: 'Ore lucrate, concedii, bonusuri, până la o dată fixă.' },
      { nume: 'Plătești pe baza situației noastre', text: 'Salariile, contribuțiile și impozitul, cu sumele și termenele în scris.' },
    ],
    faq: [
      { q: 'Până când se plătesc salariile și contribuțiile?', a: 'Salariile, la data din contract. Contribuțiile și impozitul, până pe 25 ale lunii următoare, odată cu declarația 112. Îți trimitem sumele din timp.' },
      { q: 'Ce îmi trebuie ca să angajez pe cineva?', a: 'Datele persoanei, actele de studii dacă postul le cere, fișa de aptitudine de la medicina muncii și contractul semnat și înregistrat în Revisal înainte de prima zi de lucru.' },
      { q: 'Vă ocupați și de concediile medicale?', a: 'Da. Verificăm certificatele, calculăm indemnizațiile și pregătim documentele pentru recuperarea sumelor de la Casa de Sănătate.' },
      { q: 'Cât costă salarizarea?', a: 'Este inclusă în abonamentele Standard și Complet. Separat, se tarifează pe angajat, pe lună. Primești prețul în scris.' },
    ],
    cta: { titlu: 'Cere o ofertă pentru salarizare', text: 'Spune-ne câți angajați ai și dacă lucrează în ture. Revenim cu prețul în scris.' },
    legate: ['contabilitate-srl', 'consultanta-fiscala', 'infiintare-firma'],
  },
];

module.exports = { HUB, PAGINI };
