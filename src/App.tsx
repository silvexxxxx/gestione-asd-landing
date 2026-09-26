import { useEffect, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  CircleX,
  ClipboardList,
  CloudOff,
  Coins,
  FileCheck2,
  FolderSync,
  HeartHandshake,
  Landmark,
  Loader2,
  Mail,
  Menu,
  MonitorSmartphone,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
  Zap,
} from 'lucide-react';

const appUrl = 'https://gestione-asd.vercel.app/';

const videoTourPoints = [
  {
    icon: UsersRound,
    title: 'Anagrafica Soci',
    tag: 'Scadenze & Tesseramenti',
    description:
      'Gestione completa delle schede soci, storico quote e semafori visivi per i certificati medici agonistici e non.',
  },
  {
    icon: FileCheck2,
    title: 'Ricevute con calcolo POS',
    tag: 'Numerazione a norma',
    description:
      'Emissione guidata in un click, numerazione progressiva automatica e gestione trasparente di contanti, bonifici e POS.',
  },
  {
    icon: Coins,
    title: 'Compensi Riforma dello Sport',
    tag: 'D.Lgs. 36/2021',
    description:
      'Registro istruttori e collaboratori sportivi con tracciamento compensi, ricevute dedicate e conformità alle normative.',
  },
  {
    icon: Landmark,
    title: 'Prima Nota Cassa',
    tag: 'Cassa & Banca',
    description:
      'Registrazione entrate e uscite distinte tra cassa contanti e conti bancari, con saldo sempre allineato in tempo reale.',
  },
  {
    icon: ClipboardList,
    title: 'Verbali assemblee guidati',
    tag: 'Assemblee & Delibere',
    description:
      'Generatore guidato per verbali del consiglio direttivo e assemblee dei soci con template conformi e archivio storico.',
  },
  {
    icon: CloudOff,
    title: 'Funzionamento 100% Offline',
    tag: 'Zero attese',
    description:
      'Operatività garantita al desk anche in assenza totale di connessione internet: zero rotelline di caricamento e massima velocità.',
  },
];

const screenshots = [
  {
    title: 'Dashboard & Panoramica',
    benefit: 'Dashboard: situazione dell’associazione e scadenze in tempo reale',
    description:
      'Tieni sempre sotto controllo soci attivi, certificati in scadenza e andamento degli incassi con un solo colpo d’occhio.',
    src: '/images/screenshots/DashBoard.png',
    alt: 'Schermata Dashboard di Gestionale ASD con riepilogo soci e scadenze',
    masks: ['dashboard-left-names', 'dashboard-right-names'],
    tags: ['Panoramica', 'Avvisi Scadenze', 'Desk Reattivo'],
  },
  {
    title: 'Anagrafica Soci & Tesserati',
    benefit: 'Registro Soci: gestione completa anagrafiche e certificati medici',
    description:
      'Tesseramenti, quote associative, recapiti e scadenze sanitarie organizzati in schede pulite, senza fogli sparsi.',
    src: '/images/screenshots/AnagraficaSoci.png',
    alt: 'Gestione e anagrafica soci per associazioni sportive',
    masks: ['members-lastnames', 'members-firstnames', 'members-contacts'],
    tags: ['Senza Limiti', 'Controllo Sanitario', 'Storico'],
  },
  {
    title: 'Gestione Ricevute',
    benefit: 'Ricevute Non Fiscali: emissione immediata e numerazione progressiva',
    description:
      'Emetti, archivia e stampa ogni ricevuta in pochi click con calcolo automatico del bollo e conformità alla Riforma dello Sport.',
    src: '/images/screenshots/GestioneRicevute.png',
    alt: 'Emissione e gestione ricevute conformi alla Riforma dello Sport',
    masks: ['receipts-names'],
    tags: ['A Norma di Legge', 'Stampa PDF', '1 Click'],
  },
  {
    title: 'Calendario Attività & Corsi',
    benefit: 'Calendario: corsi, sale e orari sincronizzati con la segreteria',
    description:
      'Pianifica le lezioni settimanali, monitora le capienze delle sale e condividi gli orari aggiornati con staff e collaboratori.',
    src: '/images/screenshots/Calendario.png',
    alt: 'Calendario e pianificazione corsi della palestra',
    masks: ['calendar-name-1', 'calendar-name-2', 'calendar-name-3', 'calendar-name-4', 'calendar-name-5'],
    tags: ['Gestione Sale', 'Orari Corsi', 'Multi-postazione'],
  },
  {
    title: 'Prima Nota & Cassa',
    benefit: 'Cassa e Prima Nota: gestione contante e POS senza errori',
    description:
      'Movimenti entrate e uscite separati tra cassa e banca, rendiconto finanziario trasparente e saldo sempre allineato.',
    src: '/images/screenshots/PrimaNotaCassa.png',
    alt: 'Prima nota cassa e gestione entrate e uscite ASD',
    masks: ['cash-descriptions'],
    tags: ['Cassa & Banca', 'Riforma dello Sport', 'Report Chiari'],
  },
  {
    title: 'Registro Istruttori & Collaboratori',
    benefit: 'Registro Staff: anagrafica collaboratori e compensi sportivi',
    description:
      'Gestione completa dei compensi per lavoro sportivo, ricevute per collaboratori e contratti in conformità al D.Lgs. 36/2021.',
    src: '/images/screenshots/GestioneIstruttori.png',
    alt: 'Gestione compensi e registro istruttori sportivi',
    masks: ['instructors-names', 'instructors-contacts'],
    tags: ['Collaboratori Sportivi', 'Compensi', 'Tracciabilità'],
  },
  {
    title: 'Assemblee & Verbali',
    benefit: 'Assemblee e Delibere: generatore guidato e archivio storico',
    description:
      'Redigi verbali del direttivo e assemblee dei soci con template guidati a norma di legge e archiviazione storica protetta.',
    src: '/images/screenshots/AssembleeVerbali.png',
    alt: 'Gestione verbali assemblee e delibere direttivo',
    masks: [],
    tags: ['D.Lgs. 36/2021', 'Verbali Soci', 'Archivio PDF'],
  },
  {
    title: 'Impostazioni & Backup Cloud',
    benefit: 'Backup & Cloud: sincronizzazione sicura sul tuo Google Drive',
    description:
      'I tuoi dati non finiscono su server sconosciuti: sincronizzazione automatica sul tuo Drive personale e multi-postazione.',
    src: '/images/screenshots/Impostazioni.png',
    alt: 'Pannello impostazioni e backup dati cloud',
    masks: [],
    tags: ['Tuo Google Drive', 'Fino a 5 Dispositivi', 'Zero Lock-in'],
  },
];

const pillars = [
  {
    icon: Zap,
    tag: 'Velocità istantanea',
    title: 'Lavora 100% Offline (Zero Rotelline)',
    description:
      'Nessuna attesa di caricamento, nessun blocco se internet salta o il Wi-Fi è debole. Passaggio istantaneo tra anagrafica e cassa per smaltire subito la fila al bancone.',
    highlight: 'Nessun caricamento web',
  },
  {
    icon: FolderSync,
    tag: 'Sovranità dati',
    title: 'Il Cloud è il TUO Google Drive',
    description:
      'Nessun server aziendale terzo sconosciuto. Dati al sicuro nel tuo account personale con backup automatico e sincronizzazione multi-postazione.',
    highlight: 'Zero rischio lock-in',
  },
  {
    icon: Coins,
    tag: 'Convenienza estrema',
    title: 'Prezzo trasparente: 100€ all’anno',
    description:
      'Nessun canone da centinaia di euro, nessun costo nascosto o legato al numero di tesserati. Si ammortizza con appena 1 o 2 iscrizioni.',
    highlight: 'Tutto incluso, nessun extra',
  },
  {
    icon: HeartHandshake,
    tag: 'Community driven',
    title: 'Cresce con i tuoi feedback',
    description:
      'Il software si evolve accogliendo i suggerimenti reali di chi lo usa ogni giorno; le funzioni utili vengono implementate per tutta la community.',
    highlight: 'Ascolto e aggiornamenti continui',
  },
];

const comparisons = [
  {
    feature: 'Costo annuale',
    traditional: '400€ - 700€+/anno con rinnovi continui e rincari imprevisti',
    ourApp: 'Solo 100€/anno trasparente, prezzo bloccato e zero sorprese',
  },
  {
    feature: 'Operatività senza rete',
    traditional: 'Inutilizzabili o bloccati se cade la linea o il Wi-Fi è debole',
    ourApp: '100% operativo anche offline al desk, fila smaltita all’istante',
  },
  {
    feature: 'Sovranità dei dati',
    traditional: 'Dati residenti su server terzi proprietari (rischio lock-in)',
    ourApp: 'Dati sempre sul tuo PC o sul tuo Google Drive personale',
  },
  {
    feature: 'Condivisione multi-postazione',
    traditional: 'Spesso con sovrapprezzo per utente extra o nuova postazione',
    ourApp: 'Inclusa via Google Drive condiviso su tutti i dispositivi necessari (fino a 5 dispositivi!)',
  },
  {
    feature: 'Sviluppo ed evoluzione',
    traditional: 'Ticket generici verso grandi aziende e attese infinite',
    ourApp: 'Contatto diretto e modifiche basate sulle esigenze reali della community',
  },
];

const faqs = [
  {
    question: 'Serve internet per usarlo?',
    answer:
      'No per la postazione singola al desk. Il software opera al 100% in locale con reattività istantanea. La connessione a internet serve solo ed esclusivamente se decidi di sincronizzare o condividere l’archivio tramite Google Drive con altre postazioni o collaboratori.',
  },
  {
    question: 'E se il computer si rompe o lo cambio?',
    answer:
      'Se attivi la sincronizzazione con Google Drive, l’archivio è sempre salvato al sicuro nel tuo spazio cloud protetto: basta aprire l’applicazione da un altro computer e riprendi a lavorare esattamente da dove eri in due minuti.',
  },
  {
    question: 'Posso usarlo da casa e in segreteria?',
    answer:
      'Sì, condividendo la cartella dati su Google Drive con i collaboratori. Puoi consultare la cassa o aggiornare un’anagrafica da casa sul tuo portatile e ritrovare tutto allineato sul PC del bancone.',
  },
  {
    question: 'Cosa include il canone di 100€/anno?',
    answer:
      'Include l’accesso completo a tutti i moduli senza limiti sul numero di soci o tesserati, gli aggiornamenti normativi per la conformità alla Riforma dello Sport e le nuove funzionalità sviluppate regolarmente sui suggerimenti della community.',
  },
];

const coreModules = [
  {
    icon: Landmark,
    badge: 'Riforma dello Sport (D.Lgs. 36/2021)',
    title: 'Prima Nota Cassa e Banca a norma',
    description:
      'Registrazione immediata di entrate e uscite distinte per cassa contanti e conti bancari. Rendiconto economico chiaro e saldo sempre aggiornato per la massima tranquillità con revisori e soci.',
  },
  {
    icon: FileCheck2,
    badge: 'Numerazione progressiva',
    title: 'Ricevute non fiscali e quota tesseramento',
    description:
      'Emissione guidata in un click con numerazione progressiva univoca automatica, gestione marca da bollo quando dovuta e layout pulito e pronto per la stampa o l’invio PDF.',
  },
  {
    icon: ShieldCheck,
    badge: 'Controllo sanitario immediato',
    title: 'Monitoraggio visivo scadenze certificati',
    description:
      'Semafori visivi intuitivi per certificati medici agonistici e non agonistici e quote associative. Individui subito chi è in scadenza prima che scenda in campo o in sala corsi.',
  },
  {
    icon: UsersRound,
    badge: 'Nessun limite al numero di soci',
    title: 'Anagrafica completa e registro staff',
    description:
      'Tutti i dati anagrafici, recapiti, codice fiscale, certificati, storico pagamenti e contratti collaboratori/istruttori centralizzati in un archivio reattivo e ordinato.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Contact Modal State
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    associazione: '',
    email: '',
    telefono: '',
    messaggio: '',
  });

  // On-page Contact Form State
  const [pageFormStatus, setPageFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [pageFormErrorMessage, setPageFormErrorMessage] = useState('');
  const [pageFormData, setPageFormData] = useState({
    nome: '',
    associazione: '',
    email: '',
    telefono: '',
    messaggio: '',
  });

  // Touch swipe support for carousel
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const currentScreenshot = screenshots[activeScreenshot];

  const moveScreenshot = (direction: number) => {
    setActiveScreenshot((current) => (current + direction + screenshots.length) % screenshots.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (diff > 50) {
        moveScreenshot(1); // Swipe left -> next
      } else if (diff < -50) {
        moveScreenshot(-1); // Swipe right -> prev
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  // Close modal on ESC key and prevent body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && contactModalOpen) {
        setContactModalOpen(false);
      }
    };
    if (contactModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [contactModalOpen]);

  // Form submission handler via Web3Forms (Modal)
  const handleSubmitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormErrorMessage('');

    const payload = {
      access_key: '3d83964e-f6af-422f-96db-69e4b10ef502',
      subject: '[Richiesta da Landing Gestionale ASD] Nuovo messaggio',
      from_name: 'Gestionale ASD Landing',
      nome: formData.nome,
      associazione: formData.associazione || 'Non specificata',
      email: formData.email,
      telefono: formData.telefono || 'Non specificato',
      messaggio: formData.messaggio,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        setFormStatus('success');
        setFormData({
          nome: '',
          associazione: '',
          email: '',
          telefono: '',
          messaggio: '',
        });
        setTimeout(() => {
          setContactModalOpen(false);
          setTimeout(() => setFormStatus('idle'), 300);
        }, 3000);
      } else {
        setFormStatus('error');
        setFormErrorMessage(data.message || 'Si è verificato un errore durante l’invio. Riprova più tardi.');
      }
    } catch {
      setFormStatus('error');
      setFormErrorMessage('Errore di connessione. Controlla la tua connessione e riprova.');
    }
  };

  // Form submission handler via Web3Forms (On-page section)
  const handleSubmitPageContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPageFormStatus('loading');
    setPageFormErrorMessage('');

    const payload = {
      access_key: '3d83964e-f6af-422f-96db-69e4b10ef502',
      subject: '[Richiesta Demo/Info Landing Gestionale ASD] Nuovo contatto',
      from_name: 'Gestionale ASD Landing',
      nome: pageFormData.nome,
      associazione: pageFormData.associazione || 'Non specificata',
      email: pageFormData.email,
      telefono: pageFormData.telefono || 'Non specificato',
      messaggio: pageFormData.messaggio,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        setPageFormStatus('success');
        setPageFormData({
          nome: '',
          associazione: '',
          email: '',
          telefono: '',
          messaggio: '',
        });
      } else {
        setPageFormStatus('error');
        setPageFormErrorMessage(data.message || 'Si è verificato un errore durante l’invio. Riprova più tardi.');
      }
    } catch {
      setPageFormStatus('error');
      setPageFormErrorMessage('Errore di connessione. Controlla la tua connessione e riprova.');
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f9fc] text-slate-900">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0b1d35]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Gestionale ASD home">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2f7cf6] text-white shadow-md shadow-blue-500/25">
              <ClipboardList size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white leading-tight">
                Gestionale ASD
              </span>
              <span className="text-[10px] text-blue-300 font-normal hidden sm:block leading-none mt-0.5">
                100€/anno • Trasparenza al desk
              </span>
            </div>
          </a>

          <nav
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } absolute left-4 right-4 top-14 sm:top-16 flex-col gap-1 rounded-2xl border border-white/10 bg-[#102844] p-4 shadow-2xl md:static md:flex md:flex-row md:flex-nowrap md:items-center md:gap-2.5 lg:gap-3.5 xl:gap-4 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            <a
              href="#video"
              onClick={() => setMenuOpen(false)}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs lg:text-sm font-medium tracking-tight text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Video Tour
            </a>
            <a
              href="#pilastri"
              onClick={() => setMenuOpen(false)}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs lg:text-sm font-medium tracking-tight text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              I 4 Pilastri
            </a>
            <a
              href="#confronto"
              onClick={() => setMenuOpen(false)}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs lg:text-sm font-medium tracking-tight text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Confronto
            </a>
            <a
              href="#per-chi-e"
              onClick={() => setMenuOpen(false)}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs lg:text-sm font-medium tracking-tight text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Per chi è
            </a>
            <a
              href="#moduli"
              onClick={() => setMenuOpen(false)}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs lg:text-sm font-medium tracking-tight text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Riforma dello Sport
            </a>
            <a
              href="#schermate"
              onClick={() => setMenuOpen(false)}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs lg:text-sm font-medium tracking-tight text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Schermate
            </a>
            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs lg:text-sm font-medium tracking-tight text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              FAQ
            </a>
            <a
              href="#richiesta-demo"
              onClick={() => setMenuOpen(false)}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs lg:text-sm font-medium tracking-tight text-slate-300 transition hover:bg-white/10 hover:text-white cursor-pointer"
            >
              Contatti & Demo
            </a>
            <a
              href={appUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-[#2f7cf6] px-3 py-1.5 text-xs lg:text-sm font-semibold text-white shadow-sm shadow-blue-500/25 transition hover:bg-[#5594ff] md:mt-0"
            >
              Prova la Demo gratuita <ArrowRight size={14} />
            </a>
          </nav>

          <button
            className="rounded-lg p-2 text-slate-200 md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* 1. HERO SECTION & PROPOSTA DI VALORE */}
        <section className="relative isolate overflow-hidden bg-[#0b1d35] pb-16 pt-24 text-white sm:pb-24 sm:pt-28">
          <div className="hero-grid absolute inset-0 -z-10 opacity-60" />
          <div className="absolute -right-40 top-10 -z-10 h-[460px] w-[460px] rounded-full bg-[#2f7cf6]/20 blur-3xl" />
          <div className="absolute -left-40 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-[#2f7cf6]/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:px-10">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-200">
                <Sparkles size={14} className="text-[#65a2ff]" />
                Trasparenza totale • Senza canoni gonfiati da centinaia di euro
              </div>

              <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[62px]">
                Il gestionale per ASD e palestre{' '}
                <span className="text-[#68a5ff]">semplice, veloce e davvero tuo.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                Lavora al desk anche senza internet, sincronizza su più dispositivi con il tuo Google Drive e tieni
                cassa e ricevute sempre in regola. A soli <strong>100€ all'anno</strong>.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#2f7cf6] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-[#5594ff]"
                >
                  Prova la Demo gratuita
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#video"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#ff0000] px-6 py-4 text-base font-bold text-white shadow-xl shadow-red-600/35 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e60000] hover:shadow-2xl hover:shadow-red-600/50"
                >
                  <Play size={18} fill="currentColor" className="transition-transform group-hover:scale-110" />
                  <span>Guarda la video demo</span>
                </a>
              </div>

              {/* Micro-copy rassicurante */}
              <p className="mt-4 text-xs font-medium text-blue-200/90 flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#68a5ff] shrink-0" />
                <span>Nessuna carta di credito richiesta • I tuoi dati restano sul tuo PC o sul tuo Drive</span>
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Check size={16} className="text-[#65a2ff]" /> 100% Offline (Zero attese)
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check size={16} className="text-[#65a2ff]" /> Dati sul tuo Google Drive
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check size={16} className="text-[#65a2ff]" /> A norma Riforma dello Sport
                </span>
              </div>
            </div>

            {/* Mockup Preview */}
            <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto">
              <div className="absolute -inset-4 rounded-[28px] bg-[#2f7cf6]/15 blur-2xl" />
              <div className="relative rounded-[24px] border border-white/15 bg-[#102844]/90 p-2.5 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-3.5">
                <div className="flex items-center justify-between border-b border-white/10 px-3 py-3">
                  <div className="flex gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-full bg-[#f97068]" />
                    <i className="h-2.5 w-2.5 rounded-full bg-[#f5c451]" />
                    <i className="h-2.5 w-2.5 rounded-full bg-[#5ed68b]" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest text-slate-400">
                    GESTIONALE ASD • DESK ATTIVO
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#5ed68b] font-medium bg-[#5ed68b]/10 px-2 py-0.5 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5ed68b] animate-pulse" /> Offline OK
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 p-3 sm:gap-3 sm:p-5">
                  <div className="col-span-2 rounded-xl bg-[#172f4c] p-4">
                    <div className="mb-6 flex justify-between">
                      <span className="text-xs font-medium text-slate-300">Andamento tesseramenti</span>
                      <BarChart3 size={16} className="text-[#68a5ff]" />
                    </div>
                    <div className="flex items-end gap-1.5">
                      <div className="h-10 flex-1 rounded-t bg-[#2f7cf6]/40" />
                      <div className="h-16 flex-1 rounded-t bg-[#2f7cf6]/50" />
                      <div className="h-12 flex-1 rounded-t bg-[#2f7cf6]/60" />
                      <div className="h-24 flex-1 rounded-t bg-[#65a2ff]" />
                      <div className="h-20 flex-1 rounded-t bg-[#2f7cf6]/70" />
                      <div className="h-28 flex-1 rounded-t bg-[#68a5ff]" />
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#172f4c] p-4">
                    <div className="mb-5 text-xs text-slate-300">Soci attivi</div>
                    <div className="text-3xl font-bold text-white">248</div>
                    <div className="mt-2 text-[10px] text-[#5ed68b] font-medium">+12% questo mese</div>
                  </div>

                  <div className="rounded-xl bg-[#172f4c] p-4">
                    <div className="mb-4 text-xs text-slate-300">Ricevute emesse</div>
                    <div className="text-2xl font-bold text-white">1.284</div>
                    <div className="mt-3 h-1.5 rounded-full bg-slate-700">
                      <div className="h-1.5 w-3/4 rounded-full bg-[#5ed68b]" />
                    </div>
                    <div className="mt-1 text-[9px] text-slate-400">Numerazione a norma</div>
                  </div>

                  <div className="col-span-2 rounded-xl bg-[#172f4c] p-4">
                    <div className="mb-3 flex justify-between text-xs text-slate-300">
                      <span>Cassa & Prima Nota in tempo reale</span>
                      <span className="text-[#68a5ff] font-semibold">100€/anno</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Quota mensile iscrizione
                        </span>
                        <span className="text-emerald-400 font-semibold">+45,00 €</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Certificato medico e tessera
                        </span>
                        <span className="text-emerald-400 font-semibold">+30,00 €</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-700/60 pt-1.5">
                        <span>Backup Google Drive</span>
                        <span className="text-blue-300 font-medium">Sincronizzato</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#0b1d35] shadow-xl sm:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e7f0ff] text-[#2f7cf6]">
                  <CircleCheck size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold">Desk reattivo a 100€/anno</div>
                  <div className="mt-0.5 text-[10px] text-slate-500">Nessuna attesa, nessun canone nascosto</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUOVA SEZIONE: VIDEO PRESENTAZIONE COMPLETA DEL SOFTWARE */}
        <section id="video" className="relative bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10 border-b border-slate-100">
          <div className="mx-auto max-w-7xl">
            {/* 1. Titolo e Sottotitolo Chiari e Accattivanti */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Video Tour Guidato</p>
              <h2 className="section-title">Guarda il Gestionale all'opera</h2>
              <p className="section-copy mx-auto">
                Un tour completo di tutte le funzionalità operative in 12 minuti: soci, ricevute, prima nota e verbali a norma di legge.
              </p>
            </div>

            {/* 2 & 3. Player Video Responsivo 16:9 con YouTube Embed */}
            <div className="relative mx-auto mt-12 max-w-5xl">
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-blue-500/15 via-[#2f7cf6]/20 to-indigo-500/15 blur-xl -z-10" />
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-[#0b1d35] shadow-2xl shadow-slate-300/60">
                <iframe
                  src="https://www.youtube.com/embed/SLl_Ga3ixgg"
                  title="Video Tour Gestionale ASD - Presentazione completa delle funzionalità"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* 4. Box con Punti Chiave Trattati nel Tour */}
            <div className="mx-auto mt-14 max-w-5xl">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200/80 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Punti chiave trattati nel video tour:
                </span>
                <span className="text-xs text-[#2f7cf6] font-semibold flex items-center gap-1.5">
                  <Check size={14} className="text-[#2f7cf6]" /> Panoramica operativa dettagliata in 12 minuti
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {videoTourPoints.map(({ icon: Icon, title, tag, description }) => (
                  <div
                    key={title}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-[#fbfcfe] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:shadow-blue-100/40"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2f7cf6] transition group-hover:bg-[#2f7cf6] group-hover:text-white">
                          <Icon size={20} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          {tag}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#0b1d35] leading-snug">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Pulsante di chiamata all'azione (CTA) verso form contatti / richiesta demo */}
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#richiesta-demo"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#2f7cf6] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/25 transition hover:bg-[#5594ff] hover:-translate-y-0.5"
              >
                <span>Richiedi una Demo o Maggiori Informazioni</span>
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 hover:border-slate-400"
              >
                <span>Prova subito la Demo Online</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* 2. I 4 PILASTRI CHIAVE */}
        <section id="pilastri" className="relative bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Trasparenza & Efficienza Operativa</p>
              <h2 className="section-title">I 4 Pilastri di Gestionale ASD</h2>
              <p className="section-copy mx-auto">
                Abbiamo eliminato tutto ciò che rende i software aziendali pesanti, complicati e costosi.
                Ecco perché la nostra architettura fa la differenza ogni giorno al desk.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map(({ icon: Icon, tag, title, description, highlight }) => (
                <article
                  key={title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#fbfcfe] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-100/50"
                >
                  <div>
                    <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0b1d35] p-3 text-[#68a5ff] shadow-md transition group-hover:bg-[#2f7cf6] group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <span className="inline-block rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2f7cf6]">
                      {tag}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-[#0b1d35] leading-snug">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4 text-xs font-semibold text-[#2f7cf6] flex items-center gap-1.5">
                    <Check size={14} /> {highlight}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SEZIONE COMPARATIVA */}
        <section id="confronto" className="bg-[#f1f5fa] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Confronto Trasparente</p>
              <h2 className="section-title">Gestionale ASD vs Gestionali Cloud Tradizionali</h2>
              <p className="section-copy mx-auto">
                La maggior parte dei software impone costi ricorrenti elevatissimi e ti blocca quando cade internet.
                Guarda la differenza reale, punto per punto.
              </p>
            </div>

            <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50">
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr_1.5fr] border-b border-slate-200 bg-slate-50/80 px-6 py-5 text-xs font-bold uppercase tracking-wider">
                <div className="text-slate-500 hidden md:block">Caratteristica</div>
                <div className="text-slate-500 hidden md:block">Soliti gestionali cloud tradizionali</div>
                <div className="text-[#2f7cf6] hidden md:block">Gestionale ASD</div>
                <div className="md:hidden text-center text-sm font-bold text-[#0b1d35]">
                  Tabella comparativa di sintesi
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {comparisons.map((item) => (
                  <div
                    key={item.feature}
                    className="grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr_1.5fr] items-center gap-3 p-6 transition hover:bg-blue-50/20"
                  >
                    <div className="font-semibold text-slate-900 text-sm md:text-base flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#2f7cf6] md:hidden" />
                      {item.feature}
                    </div>

                    {/* Concorrenza Tradizionale */}
                    <div className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3.5 text-xs text-slate-600 md:bg-transparent md:p-0 md:text-sm">
                      <CircleX size={17} className="text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="md:hidden font-semibold block text-slate-700 mb-0.5">
                          Gestionali tradizionali:
                        </span>
                        {item.traditional}
                      </div>
                    </div>

                    {/* Gestionale ASD */}
                    <div className="flex items-start gap-2.5 rounded-xl bg-blue-50/70 p-3.5 text-xs font-medium text-slate-800 md:bg-transparent md:p-0 md:text-sm">
                      <CircleCheck size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="md:hidden font-semibold block text-[#2f7cf6] mb-0.5">
                          Gestionale ASD:
                        </span>
                        <strong className="text-[#0b1d35] font-semibold">{item.ourApp}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 bg-[#0b1d35] p-6 text-white text-center sm:flex sm:items-center sm:justify-between sm:text-left sm:px-8">
                <div>
                  <div className="text-sm font-bold text-white">Pronto a toccare con mano la differenza?</div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Puoi provare subito tutte le funzioni online senza registrare alcuna carta.
                  </div>
                </div>
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f7cf6] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#5594ff] sm:mt-0"
                >
                  Apri la Demo gratuita <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SEZIONE "PER CHI SIAMO (E PER CHI NO)" - CON IMMAGINE FOTOGRAFICA SX/DX */}
        <section id="per-chi-e" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Colonna SX: Testo pulito e sobrio */}
              <div>
                <p className="section-kicker">Trasparenza Totale</p>
                <h2 className="section-title">Per chi siamo (e per chi no)</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Non facciamo finta di essere la soluzione universale per chiunque. Abbiamo scelto di
                  fare <strong>alla perfezione ciò che serve al desk</strong> ogni giorno.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Blocco 1: Per chi NON siamo */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-6">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
                      <CircleX size={16} className="text-rose-500" /> Non fa per te se:
                    </div>
                    <h3 className="mt-2 text-base font-bold text-slate-900">
                      Cerchi un ERP complesso per grandi catene e tornelli RFID
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Se gestisci una polisportiva con 10 sedi differenti, controllo accessi tramite tornelli
                      automatizzati o strutture con centinaia di dipendenti con turnazioni complesse: esistono
                      piattaforme enormi (e costose) pensate per quello.
                    </p>
                  </div>

                  {/* Blocco 2: Per chi SIAMO IDEALI */}
                  <div className="rounded-2xl border-2 border-[#2f7cf6] bg-blue-50/50 p-6">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2f7cf6]">
                      <CircleCheck size={16} className="text-emerald-600" /> È la soluzione ideale se:
                    </div>
                    <h3 className="mt-2 text-base font-bold text-[#0b1d35]">
                      Sei una palestra, un box o una ASD che desidera ordine e rapidità al desk
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      Se desideri gestire anagrafiche soci, scadenze dei certificati medici, prima nota cassa/banca e
                      ricevute non fiscali con numerazione a norma in modo <strong>fulmineo, senza stress e a soli 100€ all'anno</strong>.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-xs text-slate-500 flex items-center gap-2">
                  <span className="font-semibold text-slate-700">La nostra promessa:</span> Massima trasparenza, zero costi nascosti e software sempre tuo.
                </div>
              </div>

              {/* Colonna DX: Prima Immagine Fotografica (Desk Palestra Rilassato) */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
                  <img
                    src="/images/desk-palestra-rilassato.jpg"
                    alt="Gestore sereno al desk di una palestra che usa il gestionale senza blocchi di connessione"
                    loading="lazy"
                    decoding="async"
                    className="h-[420px] sm:h-[500px] w-full max-w-full object-cover transition duration-500 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d35]/50 via-transparent to-transparent opacity-60" />
                </div>

                {/* Badge rassicurante in sovrimpressione */}
                <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/95 px-5 py-3.5 text-[#0b1d35] shadow-xl backdrop-blur-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <CircleCheck size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Desk sereno e veloce</div>
                    <div className="text-[11px] text-slate-500">Zero rotelline di attesa, fila smaltita subito</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. MODULI CHIAVE & RIFORMA DELLO SPORT */}
        <section id="moduli" className="bg-[#f1f5fa] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Conformità & Semplicità</p>
              <h2 className="section-title">Tutto a norma con la Riforma dello Sport</h2>
              <p className="section-copy mx-auto">
                I requisiti del D.Lgs. 36/2021 richiedono precisione nella contabilità e nelle ricevute.
                Gestionale ASD è strutturato per darti serenità totale con il fisco e la federazione.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreModules.map(({ icon: Icon, badge, title, description }) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f1ff] text-[#2f7cf6] transition group-hover:bg-[#2f7cf6] group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2f7cf6] block mb-2">
                      {badge}
                    </span>
                    <h3 className="text-lg font-bold text-[#0b1d35] leading-snug">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{description}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400">
                    <Check size={14} className="text-[#2f7cf6]" /> Inclusa nel canone 100€
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. VIDEO DIMOSTRATIVO: EMISSIONE RICEVUTA */}
        <section id="video-ricevuta" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-kicker">Guarda l'Immediatezza Operativa</p>
              <h2 className="section-title">Una ricevuta emessa in pochi click.</h2>
              <p className="section-copy mx-auto">
                Guarda come smaltire la fila alla segreteria in pochi istanti con ricevuta a norma e prima nota
                aggiornata in automatico.
              </p>
            </div>

            <div className="video-frame relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[24px] bg-[#0b1d35] shadow-2xl shadow-slate-300/50">
              <div className="relative aspect-video overflow-hidden">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  poster="/video/video-poster.jpg"
                >
                  <source src="/video/Video_Breve_Ricevuta.mp4" type="video/mp4" />
                  Il tuo browser non supporta la riproduzione del video.
                </video>
              </div>
            </div>
            <p className="mt-5 text-center text-sm text-slate-500">
              Video dimostrativo: zero rotelline di caricamento, emissione rapida e numerazione automatica.
            </p>
          </div>
        </section>

        {/* 7. CAROSELLO INTERATTIVO SCHERMATE & SECONDA IMMAGINE FOTOGRAFICA */}
        <section id="schermate" className="overflow-hidden bg-[#f7f9fc] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Blocco Introduttivo con Seconda Immagine Fotografica */}
            <div className="mb-8 sm:mb-10 grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <p className="section-kicker">Dentro il gestionale</p>
                <h2 className="section-title">
                  Tutto chiaro,<br />a colpo d’occhio.
                </h2>
                <p className="section-copy">
                  Dalla postazione al bancone fino alla sala corsi: un'interfaccia pulita e immediata, pensata per chi
                  deve lavorare veloce senza perdersi in menu complessi o corsi di formazione.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <div className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                    <Check size={15} className="text-[#2f7cf6]" /> Consulta su PC o tablet
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                    <Check size={15} className="text-[#2f7cf6]" /> Sempre allineato via Google Drive
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                    <Check size={15} className="text-[#2f7cf6]" /> Fila smaltita al bancone
                  </div>
                </div>
              </div>

              {/* Seconda Immagine Fotografica (Istruttore in palestra con tablet) */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
                  <img
                    src="/images/istruttore-palestra-tablet.jpg"
                    alt="Istruttore che consulta presenze e corsi su tablet in palestra"
                    loading="lazy"
                    decoding="async"
                    className="h-[220px] sm:h-[260px] w-full max-w-full object-cover transition duration-500 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d35]/40 via-transparent to-transparent opacity-50" />
                </div>

                <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/95 px-3 py-2 text-[#0b1d35] shadow-md backdrop-blur-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e7f0ff] text-[#2f7cf6]">
                    <MonitorSmartphone size={17} />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Flessibilità operativa</div>
                    <div className="text-[10px] text-slate-500">Usa su computer fisso o tablet in sala</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider / Carosello Orizzontale */}
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xl shadow-slate-200/50">
              {/* Contatore e Intestazione Slide */}
              <div className="mb-3 sm:mb-4 flex items-center border-b border-slate-100 pb-2.5 sm:pb-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#0b1d35] px-2.5 py-0.5 text-[11px] sm:text-xs font-bold text-white">
                    Schermata {String(activeScreenshot + 1).padStart(2, '0')} di {String(screenshots.length).padStart(2, '0')}
                  </span>
                  <span className="hidden sm:inline text-xs font-semibold text-[#2f7cf6]">
                    {currentScreenshot.benefit}
                  </span>
                </div>
              </div>

              {/* Contenitore a Scorrimento con supporto Touch Swipe */}
              <div
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeScreenshot * 100}%)` }}
                >
                  {screenshots.map((screen) => (
                    <div key={screen.title} className="w-full shrink-0">
                      <div className="grid items-center gap-6 lg:grid-cols-[.35fr_.65fr]">
                        {/* Colonna Testo & Beneficio Pratico */}
                        <div className="flex flex-col justify-between py-1">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#2f7cf6] block mb-1.5">
                              {screen.benefit}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0b1d35]">
                              {screen.title}
                            </h3>
                            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                              {screen.description}
                            </p>

                            <div className="mt-3.5 flex flex-wrap gap-1.5">
                              {screen.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-3.5 pt-2.5 border-t border-slate-100 hidden sm:flex items-center justify-between text-[11px] text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <Check size={13} className="text-emerald-500" /> Funzionalità 100% inclusa
                            </span>
                            <span>Trascina o usa le frecce</span>
                          </div>
                        </div>

                        {/* Colonna Mockup Schermata con Privacy Masks e Frecce Flottanti */}
                        <div className="relative group">
                          <button
                            type="button"
                            onClick={() => moveScreenshot(-1)}
                            className="absolute -left-2.5 sm:-left-3.5 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-white/95 border border-slate-200 text-slate-700 shadow-md backdrop-blur-sm transition hover:bg-[#2f7cf6] hover:border-[#2f7cf6] hover:text-white cursor-pointer"
                            aria-label="Schermata precedente"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => moveScreenshot(1)}
                            className="absolute -right-2.5 sm:-right-3.5 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-white/95 border border-slate-200 text-slate-700 shadow-md backdrop-blur-sm transition hover:bg-[#2f7cf6] hover:border-[#2f7cf6] hover:text-white cursor-pointer"
                            aria-label="Schermata successiva"
                          >
                            <ChevronRight size={16} />
                          </button>

                          <div className="screenshot-shell">
                            <img
                              src={screen.src}
                              alt={screen.alt}
                              loading="eager"
                              decoding="async"
                              className="block w-full"
                            />
                            {screen.masks.map((mask) => (
                              <span key={mask} className={`privacy-mask ${mask}`} aria-label="Dati personali oscurati" />
                            ))}
                            {screen.masks.length > 0 && (
                              <span className="privacy-label">Dati personali oscurati</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Barra di Navigazione Inferiore Compatta */}
              <div className="mt-3 flex flex-row items-center justify-between gap-3 border-t border-slate-100 pt-3">
                {/* Pulsante Indietro */}
                <button
                  type="button"
                  onClick={() => moveScreenshot(-1)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-200 border border-slate-300 px-3.5 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-300 hover:border-slate-400 hover:text-slate-900 shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <ChevronLeft size={15} /> Indietro
                </button>

                {/* Pallini (Dots) di Posizione */}
                <div className="flex items-center gap-1.5">
                  {screenshots.map((screen, idx) => (
                    <button
                      key={`dot-${screen.title}`}
                      type="button"
                      onClick={() => setActiveScreenshot(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeScreenshot
                          ? 'w-7 bg-[#2f7cf6]'
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Vai alla schermata ${screen.title}`}
                    />
                  ))}
                </div>

                {/* Pulsante Avanti */}
                <button
                  type="button"
                  onClick={() => moveScreenshot(1)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#2f7cf6] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#5594ff] shadow-sm transition cursor-pointer"
                >
                  Avanti <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SEZIONE FAQ (DOMANDE FREQUENTI) */}
        <section id="faq" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="section-kicker">Chiarezza Senza Sorprese</p>
              <h2 className="section-title">Domande Frequenti (FAQ)</h2>
              <p className="section-copy mx-auto">
                Crediamo nella trasparenza assoluta. Ecco le risposte alle domande più comuni poste dai responsabili di ASD e palestre.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfcfe] transition"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-bold text-[#0b1d35] transition hover:bg-slate-50 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-[#2f7cf6] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 sm:px-6 pb-6 pt-4 text-sm sm:text-base leading-relaxed text-slate-600 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Box sotto le FAQ con rimando diretto */}
            <div className="mt-10 rounded-2xl bg-blue-50/70 border border-blue-100 p-6 text-center text-sm text-slate-700">
              Hai un dubbio specifico per la tua associazione?{' '}
              <a
                href="#richiesta-demo"
                className="font-bold text-[#2f7cf6] underline hover:text-blue-800 transition cursor-pointer inline-block"
              >
                Scrivici qui
              </a>{' '}
              e ti risponderemo direttamente senza intermediari.
            </div>
          </div>
        </section>

        {/* 9. SEZIONE RICHIESTA DEMO & FORM CONTATTI (CON SCROLL FLUIDO) */}
        <section id="richiesta-demo" className="bg-[#eaf2fc] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="section-kicker">Richiesta Demo & Contatto Diretto</p>
              <h2 className="section-title">Inizia a gestire la tua ASD senza stress</h2>
              <p className="section-copy mx-auto">
                Hai visto il video tour e vuoi provare il gestionale o fare domande per la tua realtà?
                Puoi testare la demo online subito oppure scriverci per ricevere supporto dedicato.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_1.35fr] items-stretch">
              {/* Box Demo Immediata */}
              <div className="rounded-3xl border border-slate-200/90 bg-[#0b1d35] p-8 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#68a5ff] mb-4">
                    Accesso Immediato • Zero Attese
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    Prova subito la Demo Operativa nel browser
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    Esplora tutte le schermate, aggiungi soci fittizi, emetti ricevute di prova e verifica tu stesso l'estrema velocità e chiarezza dell'interfaccia.
                  </p>

                  <div className="mt-8 space-y-3.5">
                    <div className="flex items-center gap-3 text-sm text-slate-200">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2f7cf6]/30 text-[#68a5ff]">
                        <Check size={14} />
                      </div>
                      <span>Nessuna carta di credito o registrazione richiesta</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-200">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2f7cf6]/30 text-[#68a5ff]">
                        <Check size={14} />
                      </div>
                      <span>Tutti i moduli abilitati al 100% per il test</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-200">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2f7cf6]/30 text-[#68a5ff]">
                        <Check size={14} />
                      </div>
                      <span>Canone trasparente di soli 100€ all'anno per sempre</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10">
                  <a
                    href={appUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#2f7cf6] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-[#5594ff]"
                  >
                    <span>Apri la Demo Gratuita</span>
                    <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                  </a>
                  <p className="mt-2 text-center text-xs text-slate-400">
                    Operativo in 2 minuti • Nessuna installazione richiesta
                  </p>
                </div>
              </div>

              {/* Modulo Contatti Integrato */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#2f7cf6] mb-2">
                      <Mail size={13} /> Modulo Richiesta Demo & Info
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0b1d35]">
                      Scrivici per domande o per richiedere una demo
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500">
                      Compila il modulo sottostante: ti risponderemo direttamente e rapidamente senza intermediari.
                    </p>
                  </div>

                  {pageFormStatus === 'success' ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <CircleCheck size={36} />
                      </div>
                      <h4 className="text-xl font-bold text-[#0b1d35]">Richiesta inviata con successo!</h4>
                      <p className="mt-2 text-sm text-slate-600">
                        Grazie per averci contattato. Ti risponderemo al più presto via email o WhatsApp.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitPageContact} className="space-y-4">
                      {pageFormStatus === 'error' && (
                        <div className="flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs font-medium text-rose-700">
                          <AlertCircle size={17} className="shrink-0 text-rose-600" />
                          <span>{pageFormErrorMessage || 'Si è verificato un errore durante l’invio. Riprova.'}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="page-nome" className="block text-xs font-semibold text-slate-700 mb-1">
                            Nome e Cognome <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="page-nome"
                            type="text"
                            required
                            value={pageFormData.nome}
                            onChange={(e) => setPageFormData({ ...pageFormData, nome: e.target.value })}
                            placeholder="Mario Rossi"
                            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-[#2f7cf6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f7cf6]/20"
                          />
                        </div>

                        <div>
                          <label htmlFor="page-associazione" className="block text-xs font-semibold text-slate-700 mb-1">
                            Nome ASD / Palestra <span className="text-xs font-normal text-slate-400">(opzionale)</span>
                          </label>
                          <input
                            id="page-associazione"
                            type="text"
                            value={pageFormData.associazione}
                            onChange={(e) => setPageFormData({ ...pageFormData, associazione: e.target.value })}
                            placeholder="es. ASD Sporting Club"
                            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-[#2f7cf6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f7cf6]/20"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="page-email" className="block text-xs font-semibold text-slate-700 mb-1">
                            Tua Email <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="page-email"
                            type="email"
                            required
                            value={pageFormData.email}
                            onChange={(e) => setPageFormData({ ...pageFormData, email: e.target.value })}
                            placeholder="mario@esempio.it"
                            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-[#2f7cf6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f7cf6]/20"
                          />
                        </div>

                        <div>
                          <label htmlFor="page-telefono" className="block text-xs font-semibold text-slate-700 mb-1">
                            Telefono / WhatsApp <span className="text-xs font-normal text-slate-400">(opzionale)</span>
                          </label>
                          <input
                            id="page-telefono"
                            type="tel"
                            value={pageFormData.telefono}
                            onChange={(e) => setPageFormData({ ...pageFormData, telefono: e.target.value })}
                            placeholder="+39 340 1234567"
                            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-[#2f7cf6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f7cf6]/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="page-messaggio" className="block text-xs font-semibold text-slate-700 mb-1">
                          Messaggio o Domande <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          id="page-messaggio"
                          required
                          rows={3}
                          value={pageFormData.messaggio}
                          onChange={(e) => setPageFormData({ ...pageFormData, messaggio: e.target.value })}
                          placeholder="Vorrei informazioni per la mia associazione o richiedere maggiori dettagli..."
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3.5 text-sm text-slate-900 transition focus:border-[#2f7cf6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f7cf6]/20 resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={pageFormStatus === 'loading'}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f7cf6] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#5594ff] disabled:opacity-60 cursor-pointer"
                        >
                          {pageFormStatus === 'loading' ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              <span>Invio in corso...</span>
                            </>
                          ) : (
                            <>
                              <span>Invia Richiesta Demo / Informazioni</span>
                              <Send size={16} />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contatti" className="bg-[#08182c] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2f7cf6]">
                <ClipboardList size={18} />
              </div>
              <span className="font-bold text-lg">Gestionale ASD</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Il software per ASD e palestre veloce, semplice e davvero tuo. Lavora offline e salvi sul tuo Google Drive a 100€/anno.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm sm:items-end">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">Contatto Diretto</p>
              <button
                type="button"
                onClick={() => {
                  setFormStatus('idle');
                  setContactModalOpen(true);
                }}
                className="inline-flex items-center gap-2 text-[#68a5ff] font-medium transition hover:text-white cursor-pointer text-left"
              >
                <Mail size={15} /> Scrivici direttamente
              </button>
            </div>
            <a
              href={appUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#2f7cf6] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5594ff]"
            >
              Accedi alla Demo <ArrowRight size={15} />
            </a>
            <p className="text-xs text-slate-500">© 2026 Gestionale ASD. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

      {/* MODALE DI CONTATTO (POPUP WEB3FORMS) */}
      {contactModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0b1d35]/80 backdrop-blur-md transition-all duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setContactModalOpen(false);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl transition-all duration-300">
            {/* Tasto di chiusura X */}
            <button
              type="button"
              onClick={() => setContactModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
              aria-label="Chiudi finestra"
            >
              <X size={20} />
            </button>

            {formStatus === 'success' ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CircleCheck size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1d35]">Messaggio inviato con successo!</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Ti risponderemo al più presto. Questa finestra si chiuderà automaticamente.
                </p>
                <button
                  type="button"
                  onClick={() => setContactModalOpen(false)}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#2f7cf6] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5594ff] cursor-pointer"
                >
                  Chiudi ora
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#2f7cf6] mb-2">
                    <Mail size={13} /> Supporto diretto
                  </div>
                  <h3 id="modal-title" className="text-2xl font-bold text-[#0b1d35]">
                    Parla con noi
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Hai domande sul gestionale o vuoi capire se fa al caso tuo? Rispondiamo in tempi rapidi.
                  </p>
                </div>

                {formStatus === 'error' && (
                  <div className="mb-4 flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs font-medium text-rose-700">
                    <AlertCircle size={17} className="shrink-0 text-rose-600" />
                    <span>{formErrorMessage || 'Si è verificato un errore durante l’invio. Riprova.'}</span>
                  </div>
                )}

                <form onSubmit={handleSubmitContact} className="space-y-4">
                  {/* Campi nascosti richiesti da Web3Forms */}
                  <input type="hidden" name="access_key" value="3d83964e-f6af-422f-96db-69e4b10ef502" />
                  <input type="hidden" name="subject" value="[Richiesta da Landing Gestionale ASD] Nuovo messaggio" />
                  <input type="hidden" name="from_name" value="Gestionale ASD Landing" />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nome" className="block text-xs font-semibold text-slate-700 mb-1">
                        Nome e Cognome <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="nome"
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Mario Rossi"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-[#2f7cf6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f7cf6]/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="associazione" className="block text-xs font-semibold text-slate-700 mb-1">
                        Nome ASD / Palestra <span className="text-xs font-normal text-slate-400">(opzionale)</span>
                      </label>
                      <input
                        id="associazione"
                        type="text"
                        name="associazione"
                        value={formData.associazione}
                        onChange={(e) => setFormData({ ...formData, associazione: e.target.value })}
                        placeholder="es. ASD Sporting Club"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-[#2f7cf6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f7cf6]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                        Tua Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="mario@esempio.it"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-[#2f7cf6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f7cf6]/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-xs font-semibold text-slate-700 mb-1">
                        Telefono / WhatsApp <span className="text-xs font-normal text-slate-400">(opzionale)</span>
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="+39 340 1234567"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition focus:border-[#2f7cf6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f7cf6]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block text-xs font-semibold text-slate-700 mb-1">
                      Messaggio <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      required
                      rows={4}
                      value={formData.messaggio}
                      onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                      placeholder="Scrivi qui le tue richieste o dubbi..."
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3.5 text-sm text-slate-900 transition focus:border-[#2f7cf6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f7cf6]/20 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f7cf6] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#5594ff] disabled:opacity-60 cursor-pointer"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Invio in corso...</span>
                        </>
                      ) : (
                        <>
                          <span>Invia messaggio</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
