// Secțiunea pentru antreprenori (numele și adresa vin din ACADEMIA, în content.js): pagina de intrare, ghidul gratuit, video-urile, mentoratul.
// STRUCTURĂ: paginile sunt pregătite ca structură. Materialele (ghidul, lista de video-uri, detaliile și prețul mentoratului) vin într-o rundă separată.
// Locurile lor sunt câmpurile „loc”: pe preview apar punctate, cu eticheta „De completat”. Generatorul le numără, iar la lansare nu rămâne niciunul.
// Tipuri de „loc”: text (o casetă), lista (n rânduri), carduri (n carduri), pasi (n pași numerotați).

const { ACADEMIA } = require('../content.js');

// Cele trei trepte, de la gratuit la cel mai complex
const TREPTE = [
  { slug: 'ghid', nume: 'Ghidul gratuit', pastila: 'Gratuit', text: 'O privire de ansamblu, pe înțelesul tău. Îl primești pe e-mail.', btn: 'Vezi ghidul', imagine: 'academia-ghid' },
  { slug: 'video', nume: 'Video-uri pe subiecte clare', pastila: 'În curând', text: 'Câte un subiect pe fiecare video, la un preț mic. Alegi doar ce te interesează.', btn: 'Vezi video-urile', imagine: 'academia-video' },
  { slug: 'mentorat', nume: 'Mentorat', pastila: 'Cu programare', text: 'Lucrezi direct cu Adriana Simion, pe cifrele și pe deciziile firmei tale.', btn: 'Vezi mentoratul', imagine: 'adriana-mentorat' },
];

const HUB = {
  title: `${ACADEMIA.nume}: ghid, video-uri și mentorat pentru antreprenori`,
  description: 'Trei feluri de a învăța să îți citești cifrele: un ghid gratuit, video-uri pe subiecte clare și mentorat cu Adriana Simion.',
  h1: ACADEMIA.nume,
  lead: 'Trei trepte pentru antreprenorii care vor să își înțeleagă cifrele: un ghid gratuit, video-uri pe subiecte clare și mentorat.',
  cum: {
    titlu: 'Cum alegi',
    pasi: [
      { nume: 'Începi cu ghidul', text: 'Este gratuit și general, ca să vezi tabloul întreg.' },
      { nume: 'Aprofundezi cu un video', text: 'Un singur subiect, explicat clar, la un preț mic.' },
      { nume: 'Lucrezi direct cu noi', text: 'Mentoratul, pentru situația și deciziile firmei tale.' },
    ],
  },
  // Textul despre workshop-uri este cel de pe pagina Servicii, mutat aici
  echipe: {
    titlu: 'Workshop-uri pentru antreprenori',
    text: 'Sesiuni practice pentru firme și pentru echipele lor: ce documente contează, cum citești situația firmei, ce întrebi contabilul. Se organizează la cerere.',
    btn: 'Scrie-ne',
  },
};

const GHID = {
  slug: 'ghid',
  title: `Ghidul gratuit | ${ACADEMIA.nume}`,
  description: 'Un ghid general, gratuit, pentru antreprenorii care vor să înțeleagă contabilitatea firmei lor. Îl primești pe e-mail.',
  h1: 'Ghidul gratuit',
  lead: 'Un ghid general, pe înțelesul tău, pentru antreprenorii care vor să înțeleagă contabilitatea firmei lor. Îl primești pe e-mail.',
  cuprins: { titlu: 'Ce găsești în ghid', loc: { fel: 'lista', n: 5, nume: 'Capitolul', ce: 'cuprinsul ghidului (4 până la 6 capitole, câte un rând)' } },
  pentru: { titlu: 'Pentru cine este', loc: { fel: 'text', text: 'Două sau trei rânduri despre cui îi folosește ghidul.', ce: 'pentru cine este ghidul (două sau trei rânduri)' } },
  formular: { titlu: 'Primește ghidul pe e-mail', consimtamant: 'Sunt de acord ca datele trimise să fie folosite pentru a primi ghidul pe e-mail.', btn: 'Trimite-mi ghidul' },
};

const VIDEO = {
  slug: 'video',
  title: `Video-uri pe subiecte clare | ${ACADEMIA.nume}`,
  description: 'Video-uri informative, câte un subiect clar pe fiecare, pentru antreprenorii care vor să își înțeleagă cifrele.',
  h1: 'Video-uri',
  lead: 'Câte un subiect clar pe fiecare video, explicat pe înțelesul tău. Alegi doar ce te interesează.',
  // Lista video-urilor: titlul, descrierea, durata, prețul și miniatura fiecăruia vin odată cu materialele
  lista: { n: 3, nume: 'Video', text: 'Ce afli din acest video, în două rânduri.', meta: 'Durata și prețul', btn: 'Comandă', ce: 'lista video-urilor (titlu, descriere, durată, preț, miniatură)' },
  cum: {
    titlu: 'Cum cumperi un video',
    pasi: [
      { nume: 'Alegi video-ul', text: 'Din lista de mai sus, după subiectul care te interesează.' },
      { nume: 'Trimiți comanda', text: 'Completezi formularul cu datele pentru factură.' },
      { nume: 'Primești factura și linkul', text: 'După plată, primești pe e-mail linkul privat către video.' },
    ],
  },
  formular: {
    titlu: 'Comandă un video',
    text: 'Completezi formularul, primești factura pe e-mail, iar după plată îți trimitem linkul privat către video.',
    consimtamant: 'Sunt de acord ca datele trimise să fie folosite pentru comanda mea.',
    btn: 'Trimite comanda',
  },
};

const MENTORAT = {
  slug: 'mentorat',
  title: `Mentorat pentru antreprenori | ${ACADEMIA.nume}`,
  description: 'Mentorat cu Adriana Simion, pe cifrele și pe deciziile firmei tale.',
  h1: 'Mentorat',
  lead: 'Lucrezi direct cu Adriana Simion, pe cifrele și pe deciziile firmei tale.',
  intro: [
    'Mentoratul este pentru antreprenorii care vor mai mult decât o contabilitate ținută la zi: vor să își înțeleagă cifrele și să ia decizii pe baza lor.',
    'Este treapta cea mai completă din ' + ACADEMIA.nume + ' și pornește de la situația firmei tale, nu de la o programă generală.',
  ],
  include: { titlu: 'Ce include', loc: { fel: 'lista', n: 5, nume: 'Punctul', ce: 'ce include mentoratul (4 până la 6 puncte)' } },
  pentru: { titlu: 'Pentru cine', loc: { fel: 'carduri', n: 3, nume: 'Situația', text: 'Un rând despre situația în care ajută mentoratul.', ce: 'pentru cine este mentoratul (trei situații, fiecare cu titlu și un rând)' } },
  decurge: { titlu: 'Cum decurge', loc: { fel: 'pasi', n: 3, nume: 'Pasul', text: 'Un rând despre ce se întâmplă în acest pas.', ce: 'cum decurge mentoratul (3 sau 4 pași)' } },
  pret: { titlu: 'Format și preț', loc: { fel: 'text', text: 'Formatul (ședință sau pachet), durata și prețul.', ce: 'formatul, durata și prețul mentoratului' } },
  inscriere: { titlu: 'Înscrierea începe cu o discuție', text: 'Stabilim împreună, într-o discuție online gratuită de 30 de minute cu Adriana Simion, dacă mentoratul ți se potrivește și de unde începem.' },
};

module.exports = { TREPTE, HUB, GHID, VIDEO, MENTORAT };
