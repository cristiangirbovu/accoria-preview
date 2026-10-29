// Blogul: indexul și primele două articole din planul studiului pentru noiembrie 2026. Texte scrise de AMPLIO.
// Exactitatea fiscală se verifică de clientă înainte de publicare (regula din chestionar, întrebarea 8).
// Blocuri: { t: 'h2' | 'p' | 'ul' | 'ol' | 'nota', s: text sau listă }.

const INDEX = {
  slug: 'blog',
  title: 'Blog Accoria: calendar fiscal, magazine online, administrarea firmei',
  description: 'Articole pentru antreprenori: termenele fiscale explicate, contabilitatea magazinelor online și deciziile din administrarea firmei, pe înțelesul tău.',
  h1: 'Blog',
  lead: 'Scriem despre termenele fiscale, despre contabilitatea magazinelor online și despre deciziile pe care le iei în firmă, pe înțelesul tău.',
};

const ARTICOLE = [
  {
    slug: 'saf-t-pentru-firmele-mici',
    cat: 'Calendar fiscal',
    data: '2026-11-03',
    dataText: '3 noiembrie 2026',
    titlu: 'SAF-T pentru firmele mici: ce se depune, până când și ce verifică ANAF',
    description: 'Ce este raportarea SAF-T (D406), cine o depune, care sunt termenele, ce compară ANAF cu ea și cum te pregătești ca antreprenor.',
    rezumat: 'Cine are obligația, ce conține raportarea și cum o pregătești fără stres.',
    corp: [
      { t: 'p', s: 'Din 2025, și firmele mici depun raportarea SAF-T, declarația D406. Nu este o declarație în plus pe care o semnezi și o uiți: este o radiografie completă a contabilității tale, pe care ANAF o compară cu celelalte declarații. Iată ce trebuie să știi, fără jargon.' },
      { t: 'h2', s: 'Ce este SAF-T' },
      { t: 'p', s: 'SAF-T (Standard Audit File for Tax) este un fișier electronic standardizat, în format XML, care conține datele din contabilitatea firmei: planul de conturi, înregistrările contabile, facturile emise și primite, plățile, partenerii și, la cerere, stocurile și mijloacele fixe. În România se depune prin declarația D406, introdusă prin Ordinul ANAF nr. 1.783/2021.' },
      { t: 'p', s: 'Diferența față de declarațiile clasice: D300 sau D394 conțin totaluri. SAF-T conține fiecare înregistrare. ANAF nu mai vede doar cât TVA ai declarat, ci și din ce facturi, cu ce parteneri și pe ce conturi.' },
      { t: 'h2', s: 'Cine depune și de când' },
      { t: 'ul', s: ['Marii contribuabili: din ianuarie 2022.', 'Contribuabilii mijlocii: din ianuarie 2023.', 'Contribuabilii mici, adică majoritatea SRL-urilor: din ianuarie 2025.', 'Firmele care țin contabilitate în partidă simplă nu depun SAF-T.'] },
      { t: 'p', s: 'Pentru primele raportări, ANAF a acordat o perioadă de grație de șase luni, în care depunerea cu întârziere sau cu erori nu s-a sancționat, cu condiția corectării. Pentru firmele mici perioada a trecut, așa că acum termenele contează.' },
      { t: 'h2', s: 'Până când se depune' },
      { t: 'ul', s: ['Lunar, până în ultima zi calendaristică a lunii următoare, pentru firmele cu perioadă fiscală lunară la TVA.', 'Trimestrial, până în ultima zi a lunii următoare trimestrului, pentru firmele cu perioadă fiscală trimestrială la TVA sau neînregistrate în scopuri de TVA.', 'Secțiunea de stocuri: doar la solicitarea ANAF, în termenul stabilit de organul fiscal, de cel puțin 30 de zile.', 'Secțiunea de mijloace fixe: anual, până la termenul de depunere a situațiilor financiare.'] },
      { t: 'p', s: 'Exemplu: pentru luna octombrie 2026, D406 se depune până pe 30 noiembrie 2026.' },
      { t: 'h2', s: 'Ce verifică ANAF cu SAF-T' },
      { t: 'p', s: 'Fișierul se compară automat cu celelalte declarații și cu e-Factura. Diferențele devin întrebări:' },
      { t: 'ul', s: ['TVA-ul din jurnalele de vânzări și de cumpărări, față de D300.', 'Facturile cu partenerii, față de D394 și față de e-Factura.', 'Soldurile clienților și ale furnizorilor, față de ce declară partenerii tăi.', 'Cheltuielile pe conturi, față de deducerile din impozitul pe profit sau din impozitul pe venit.'] },
      { t: 'p', s: 'Un SAF-T curat nu îți aduce un control. Un SAF-T cu diferențe neexplicate aduce, cel puțin, o notificare.' },
      { t: 'h2', s: 'Greșelile pe care le vedem cel mai des' },
      { t: 'ul', s: ['Partenerii fără CUI corect sau cu CUI-uri inactive.', 'Planul de conturi nemapat pe nomenclatorul ANAF, deci înregistrări care nu intră în fișier.', 'Facturi înregistrate într-o lună și declarate la TVA în alta, fără explicație.', 'Codurile de taxă greșite: operațiuni scutite trecute ca taxabile sau invers.', 'Documente lipsă: bonuri, extrase sau facturi de la platforme care nu ajung la contabil la timp.'] },
      { t: 'h2', s: 'Cum te pregătești, ca antreprenor' },
      { t: 'ol', s: ['Trimite documentele la timp, în fiecare lună, nu la final de trimestru.', 'Verifică datele partenerilor pe facturi: denumire, CUI, adresă.', 'Spune contabilului despre orice schimbare: un cont bancar nou, o platformă nouă de vânzare, un împrumut.', 'Cere situația firmei lunar și întreabă dacă ceva nu se leagă.'] },
      { t: 'h2', s: 'Ce facem noi' },
      { t: 'p', s: 'Generăm și verificăm D406 înainte de depunere, comparăm fișierul cu D300, D394 și e-Factura și corectăm diferențele înainte să le vadă ANAF. Dacă primești o notificare, răspundem împreună, în termen.' },
      { t: 'nota', s: 'Articolul explică regulile generale la data publicării. Termenele și obligațiile pot avea excepții pentru situația firmei tale; verifică-le cu contabilul tău.' },
    ],
  },
  {
    slug: 'e-factura-magazin-online-persoane-fizice',
    cat: 'Magazine online',
    data: '2026-11-17',
    dataText: '17 noiembrie 2026',
    titlu: 'e-Factura pentru magazinul online care vinde persoanelor fizice',
    description: 'Ce facturi către persoane fizice intră în e-Factura, în ce termen, ce date trebuie să conțină și cum ții ordinea într-un magazin online cu ramburs, card și marketplace.',
    rezumat: 'Ce facturi intră în sistem, în cât timp și ce se întâmplă cu bonurile fiscale.',
    corp: [
      { t: 'p', s: 'De la 1 ianuarie 2025, facturile emise către persoane fizice se transmit și ele în sistemul RO e-Factura. Pentru un magazin online, asta înseamnă sute de documente pe lună, fiecare cu un termen. Iată ce intră în sistem, ce nu intră și cum ții ordinea.' },
      { t: 'h2', s: 'Ce s-a schimbat' },
      { t: 'p', s: 'Până în 2024, e-Factura era obligatorie doar între firme. Din 2025, obligația acoperă și relația cu persoanele fizice: orice factură emisă unui client persoană fizică se transmite în sistemul RO e-Factura, în termen de 5 zile calendaristice de la emitere.' },
      { t: 'p', s: 'Nu s-a schimbat regula de bază a comerțului cu amănuntul: vânzarea către o persoană fizică se documentează, de regulă, cu bon fiscal. Factura apare când clientul o cere sau când nu există bon fiscal pentru acea vânzare.' },
      { t: 'h2', s: 'Când emiți factură unui client persoană fizică' },
      { t: 'ul', s: ['Când clientul o solicită, la comandă sau ulterior.', 'Când vânzarea nu este documentată cu bon fiscal, de exemplu la anumite plăți online sau la livrări cu plata în cont.', 'Când vinzi bunuri sau servicii pentru care legea cere factură indiferent de client.'] },
      { t: 'p', s: 'Pentru fiecare dintre aceste facturi, transmiterea în e-Factura este obligatorie. Bonurile fiscale nu se transmit în e-Factura.' },
      { t: 'h2', s: 'Ce date trebuie să conțină factura către o persoană fizică' },
      { t: 'ul', s: ['Numele clientului și adresa, așa cum le-a dat la comandă.', 'Codul numeric personal, dacă clientul îl comunică. Dacă nu, factura se transmite cu un cod format din 13 cifre de zero.', 'Produsele, cantitățile, prețurile și TVA-ul, ca la orice factură.'] },
      { t: 'h2', s: 'Cum arată fluxul într-un magazin online' },
      { t: 'ol', s: ['Comanda intră în platformă: site propriu, Shopify, WooCommerce sau marketplace.', 'La livrare sau la plată se emite documentul fiscal: bon fiscal sau factură, după caz.', 'Facturile către persoane fizice pleacă în e-Factura în cel mult 5 zile.', 'Retururile se documentează cu facturi de stornare sau cu bonuri de retur, tot în evidență.', 'La final de lună, totul se reconciliază: comenzi, încasări, facturi, stoc.'] },
      { t: 'h2', s: 'Ramburs, card și marketplace' },
      { t: 'p', s: 'Plata la curier, plata cu cardul online și vânzarea prin marketplace au fiecare documentul lor. Cine emite bonul, când se consideră încasarea și cum apar comisioanele platformei în evidență depinde de contractele tale cu curierul, cu procesatorul de plăți și cu platforma. Aici regulile au excepții, așa că fluxul se stabilește o dată, cu contabilul, și apoi se repetă lunar.' },
      { t: 'h2', s: 'Greșelile frecvente' },
      { t: 'ul', s: ['Facturi emise din platformă, dar netransmise în e-Factura.', 'Termenul de 5 zile depășit, pentru că facturile se trimit la final de lună, în bloc.', 'Același client facturat de două ori: o dată din platformă, o dată din programul de facturare.', 'Retururi fără document de stornare, deci stoc și TVA greșite.', 'Date de client incomplete, care blochează validarea în sistem.'] },
      { t: 'h2', s: 'Ce faci practic' },
      { t: 'ol', s: ['Verifică dacă platforma ta trimite automat facturile în e-Factura sau dacă e nevoie de un program de facturare conectat la SPV.', 'Stabilește o singură sursă pentru facturi: ori platforma, ori programul de facturare, nu ambele.', 'Transmite zilnic sau la două zile, nu la final de lună.', 'Trimite contabilului exporturile de comenzi, de plăți și borderourile de curier, lunar.'] },
      { t: 'h2', s: 'Ce facem noi' },
      { t: 'p', s: 'Pentru magazinele online pe care le ținem în evidență, verificăm lunar că toate facturile au ajuns în e-Factura, reconciliem încasările cu borderourile de curier și cu rapoartele procesatorului de plăți și ținem stocul la zi. Dacă o factură este respinsă de sistem, o corectăm și o retransmitem în termen.' },
      { t: 'nota', s: 'Articolul explică regulile generale la data publicării. Modul de plată, contractul cu curierul și platforma pe care vinzi pot aduce excepții; verifică-le cu contabilul tău.' },
    ],
  },
];

module.exports = { INDEX, ARTICOLE };
