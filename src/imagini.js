// Locurile de imagine de pe site. Numele din stânga este numele fișierului, fără extensie.
// Fișierul se pune în assets/img/foto/ (jpg, webp, png sau avif) și apare singur la următoarea generare (node src/build.js).
// Cât lipsește fișierul, pe preview apare o imagine provizorie: „Poze persoane” la fotografiile reale, „Imagine” la cele generate.
// La lansare (--prod) locurile fără fișier nu se afișează, iar paginile arată ca înainte de imagini.
// tip: persoane = fotografie reală cu oameni, birou = fotografie reală a biroului, generata = imagine generată din prompt.

const IMAGINI = {
  // Fotografii reale
  'adriana-hero': { tip: 'persoane', raport: '1x1', alt: 'Adriana Simion, expert-contabil, la birou' },
  'adriana-portret': { tip: 'persoane', raport: '4x5', alt: 'Adriana Simion, expert-contabil' },
  'adriana-birou': { tip: 'persoane', raport: '4x5', alt: 'Adriana Simion la masa de lucru' },
  'adriana-mentorat': { tip: 'persoane', raport: '3x2', alt: 'Adriana Simion explicând cifrele unei firme, la laptop' },
  echipa: { tip: 'persoane', raport: '3x2', alt: 'Echipa Accoria: Adriana Simion, Ionela Lamba și Andreea Ciocirlan' },
  'cum-lucram': { tip: 'persoane', raport: '3x2', alt: 'Discuție cu un client, cu documentele pe masă' },
  birou: { tip: 'birou', raport: '3x2', alt: 'Biroul Accoria din Popești-Leordeni' },

  // Imagini generate: paginile de servicii
  'serviciu-contabilitate-srl': { tip: 'generata', raport: '4x3', alt: 'Mâini care așază facturi într-un biblioraft, pe un birou cu laptop și calculator' },
  'serviciu-contabilitate-magazin-online': { tip: 'generata', raport: '4x3', alt: 'Colete pregătite pentru livrare pe o masă de ambalat, lângă un laptop' },
  'serviciu-infiintare-firma': { tip: 'generata', raport: '4x3', alt: 'Stilou și ștampilă lângă actele de înființare ale unei firme' },
  'serviciu-modificari-registrul-comertului': { tip: 'generata', raport: '4x3', alt: 'Mâini care așază un document într-un dosar cu separatoare' },
  'serviciu-consultanta-fiscala': { tip: 'generata', raport: '4x3', alt: 'Două persoane discută la o masă, cu grafice tipărite în față' },
  'serviciu-analiza-cash-flow': { tip: 'generata', raport: '4x3', alt: 'Grafic tipărit cu încasări și plăți, urmărit cu stiloul' },
  'serviciu-salarizare': { tip: 'generata', raport: '4x3', alt: 'Plicuri și un planificator de birou, pregătite pentru ziua de salarii' },

  // Imagini generate: copertele articolelor
  'articol-saf-t-pentru-firmele-mici': { tip: 'generata', raport: '16x9', alt: 'Laptop și dosare ordonate pe un birou, cu o listă de verificare alături' },
  'articol-e-factura-magazin-online-persoane-fizice': { tip: 'generata', raport: '16x9', alt: 'Colet deschis, cu factura împăturită deasupra produsului' },

  // Imagini generate: secțiunea pentru antreprenori
  'academia-ghid': { tip: 'generata', raport: '4x3', alt: 'Ghid tipărit, cu copertă prună, pe un birou' },
  'academia-video': { tip: 'generata', raport: '4x3', alt: 'Cameră pe trepied, pregătită pentru filmare într-un birou' },
  // Miniaturile video-urilor se fac odată cu materialele
  'video-1': { tip: 'generata', raport: '16x9', alt: 'Miniatura video-ului' },
  'video-2': { tip: 'generata', raport: '16x9', alt: 'Miniatura video-ului' },
  'video-3': { tip: 'generata', raport: '16x9', alt: 'Miniatura video-ului' },
};

module.exports = { IMAGINI };
