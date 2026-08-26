export const siteContent = {
  brand: 'Elys Digital Words',
  profile: {
    eyebrow: 'Web · contenuti · identità digitale',
    name: 'Alice Pisciuneri',
    role: 'Frontend developer e progettista di contenuti digitali',
    headline: 'Progetto spazi digitali che rendono più chiara un’offerta e più semplice il primo contatto.',
    description: 'Unisco sviluppo frontend, struttura dei contenuti e sensibilità editoriale per aiutare freelance, professionisti e piccole attività a presentarsi online con maggiore coerenza.',
    education: 'Formazione in sviluppo web con Boolean e un percorso costruito attraverso progetti reali tra React, contenuti e comunicazione digitale.',
    // Inserisci qui il percorso della futura foto, per esempio: '/alice-professionale.jpg'.
    // Lascia una stringa vuota per mantenere la testata senza immagine.
    photo: '/alice-professionale.png',
    supportingImages: [
      { src: '/hero-laptop.png', alt: 'Postazione di lavoro con portatile' },
      { src: '/hero-wireframe.png', alt: 'Progettazione di una pagina su quaderno' },
    ],
  },
  contact: {
    email: 'alice.digitalwords@gmail.com',
    // Inserisci il numero completo di prefisso internazionale, senza spazi.
    whatsappNumber: '393356854905',
    responseTime: 'Rispondo normalmente entro 1–2 giorni lavorativi.',
  },
  social: {
    instagram: 'https://www.instagram.com/elysinbookland',
    linkedin: 'https://www.linkedin.com/in/alice-pisciuneri/',
    github: 'https://github.com/AlicePisciuneri',
  },
  services: [
    { title: 'Landing page', audience: 'Per chi deve presentare un servizio o una proposta specifica.', problem: 'Un’offerta valida che online risulta dispersiva o difficile da capire.', result: 'Una pagina chiara, credibile e costruita intorno al contatto.' },
    { title: 'Siti vetrina', audience: 'Per professionisti e piccole attività che hanno bisogno di una casa digitale.', problem: 'Informazioni frammentate tra social, messaggi e materiali diversi.', result: 'Uno spazio ordinato che presenta attività, servizi e modalità di contatto.' },
    { title: 'Struttura e contenuti digitali', audience: 'Per progetti che hanno già materiali, ma non una narrazione coerente.', problem: 'Testi, immagini e canali che non guidano verso un’azione precisa.', result: 'Una presenza digitale più leggibile e allineata all’identità del progetto.' },
  ],
  process: [
    ['01', 'Ascolto', 'Partiamo dal problema, dal pubblico e dall’obiettivo reale.'],
    ['02', 'Struttura', 'Definisco priorità, contenuti e percorso della pagina.'],
    ['03', 'Realizzazione', 'Costruisco e rifinisco l’esperienza su desktop e mobile.'],
    ['04', 'Consegna', 'Ricevi il progetto, gli accessi e indicazioni chiare per gestirlo.'],
  ],
  projects: [
    { title: 'Vendita di brani royalty-free', description: 'Strategia dei contenuti e percorso digitale per un catalogo musicale.', href: '/music-project', status: 'Caso studio disponibile', tone: 'fuchsia', available: true },
    { title: 'Landing page per insegnante di inglese', description: 'Un progetto orientato a chiarezza, fiducia e contatto.', href: '/english-teacher', status: 'In fase di realizzazione', tone: 'violet', available: false },
    { title: 'Sito per attività agricola', description: 'Spazio riservato al progetto attualmente in attesa di sviluppo.', href: '/agricultural-site', status: 'In attesa', tone: 'cyan', available: false },
  ],
}
