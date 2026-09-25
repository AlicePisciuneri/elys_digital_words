import { useState } from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { motion, useReducedMotion } from 'framer-motion'
import EnglishTeacherPage from './pages/EnglishTeacherPage'
import MusicProjectPage from './pages/MusicProjectPage'
import { siteContent } from './content/siteContent'

const toneClasses = {
  violet: 'border-violet-400/20 bg-violet-400/10',
  fuchsia: 'border-fuchsia-400/20 bg-fuchsia-400/10',
  cyan: 'border-cyan-400/20 bg-cyan-400/10',
}

function Card({ children, className = '' }) {
  return <section className={`rounded-[28px] border border-white/10 bg-[#14151a]/90 p-6 backdrop-blur-md ${className}`}>{children}</section>
}

function HeroVisual() {
  const reduceMotion = useReducedMotion()
  const [laptop, wireframe] = siteContent.profile.supportingImages
  const enter = (x, y, delay) => ({
    initial: reduceMotion ? false : { opacity: 0, x, y, scale: 0.94 },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  })

  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[390px] md:h-[500px]" aria-label="Alice e il suo spazio di lavoro">
      <motion.img
        {...enter(0, 28, 0.05)}
        whileHover={reduceMotion ? undefined : { y: -5 }}
        src={siteContent.profile.photo}
        alt={`Ritratto professionale di ${siteContent.legalName}`}
        className="absolute left-1/2 top-10 z-20 -ml-[122px] h-[360px] w-[245px] rounded-[26px] border border-white/15 object-cover shadow-2xl md:-ml-[142px] md:h-[420px] md:w-[285px]"
      />
      <motion.img
        initial={reduceMotion ? false : { opacity: 0, x: 34, y: -24, scale: 0.94, rotate: 7 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 3 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        whileHover={reduceMotion ? undefined : { y: -7, rotate: 1 }}
        src={laptop.src}
        alt={laptop.alt}
        className="absolute right-0 top-0 z-30 h-36 w-28 rounded-2xl border border-white/20 object-cover shadow-xl md:h-40 md:w-32"
      />
      <motion.img
        initial={reduceMotion ? false : { opacity: 0, x: -34, y: 24, scale: 0.94, rotate: -7 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -3 }}
        transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
        whileHover={reduceMotion ? undefined : { y: -7, rotate: -1 }}
        src={wireframe.src}
        alt={wireframe.alt}
        className="absolute bottom-0 left-0 z-30 h-36 w-28 rounded-2xl border border-white/20 object-cover shadow-xl md:h-40 md:w-32"
      />
      <div className="absolute inset-x-8 bottom-6 h-24 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', project: '' })
  const submit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Richiesta dal sito di ${form.name}`)
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\nProgetto:\n${form.project}`)
    window.location.href = `mailto:${siteContent.contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <label className="grid gap-2 text-sm text-zinc-300">Come ti chiami?
        <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400" />
      </label>
      <label className="grid gap-2 text-sm text-zinc-300">La tua email
        <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400" />
      </label>
      <label className="grid gap-2 text-sm text-zinc-300">Raccontami brevemente cosa vuoi realizzare
        <textarea required rows="5" value={form.project} onChange={(event) => setForm({ ...form, project: event.target.value })} className="resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400" />
      </label>
      <button className="rounded-xl bg-violet-500 px-5 py-3 font-semibold text-white transition hover:bg-violet-400">Apri la tua email e invia</button>
      <p className="text-xs leading-5 text-zinc-500">Il pulsante prepara il messaggio nella tua applicazione email. I dati inseriti non vengono salvati dal sito.</p>
    </form>
  )
}

function HomePage() {
  const whatsappUrl = siteContent.contact.whatsappNumber ? `https://wa.me/${siteContent.contact.whatsappNumber}` : ''
  const videoCallMessage = encodeURIComponent('Ciao Alice, vorrei fissare una breve videochiamata per parlarti del mio progetto. Quando saresti disponibile?')
  const videoCallUrl = whatsappUrl ? `${whatsappUrl}?text=${videoCallMessage}` : ''
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d] px-4 py-6 text-white md:px-8 md:py-10">
      <video autoPlay loop muted playsInline className="fixed inset-0 h-full w-full object-cover opacity-20" aria-hidden="true"><source src="/background.mp4" type="video/mp4" /></video>
      <div className="fixed inset-0 bg-[#07090d]/80" />
      <main className="relative mx-auto max-w-6xl space-y-6">
        <Card className="p-7 md:p-10">
          <div className={`grid items-center gap-10 ${siteContent.profile.photo ? 'lg:grid-cols-[minmax(0,1fr)_390px]' : ''}`}>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-violet-300">{siteContent.profile.eyebrow}</p>
              <p className="mb-2 text-lg text-zinc-300">{siteContent.profile.name}</p>
              <h1 className="max-w-4xl whitespace-pre-line text-4xl font-semibold leading-tight md:text-6xl">{siteContent.profile.headline}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{siteContent.profile.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contatti" className="rounded-xl bg-violet-500 px-5 py-3 font-semibold transition hover:bg-violet-400">Raccontami il tuo progetto</a>
                <a href="#progetti" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10">Scopri cosa ho realizzato</a>
              </div>
            </div>
            {siteContent.profile.photo && <HeroVisual />}
          </div>
        </Card>

        <Card className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Chi c’è dietro</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{siteContent.about.title}</h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-zinc-300">
            {siteContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="text-lg font-semibold leading-8 text-white">{siteContent.about.closing}</p>
          </div>
        </Card>

        <section id="servizi" className="grid scroll-mt-6 gap-6 lg:grid-cols-3" aria-labelledby="servizi-title">
          <div className="lg:col-span-3"><p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Come posso aiutarti</p><h2 id="servizi-title" className="mt-3 text-3xl font-semibold md:text-4xl">Il digitale deve risolvere problemi, non crearne di nuovi.</h2></div>
          {siteContent.services.map((service) => (
            <Card key={service.title} className="flex h-full flex-col">
              <h3 className="text-2xl font-semibold">{service.title}</h3><p className="mt-4 leading-7 text-zinc-300">{service.audience}</p>
              <p className="mt-5 text-sm uppercase tracking-wider text-zinc-500">Problema</p><p className="mt-2 leading-7 text-zinc-300">{service.problem}</p>
              <p className="mt-5 text-sm uppercase tracking-wider text-zinc-500">Risultato</p><p className="mt-2 leading-7 text-zinc-300">{service.result}</p>
              <a href="#contatti" className="mt-6 font-semibold text-violet-300 hover:text-violet-200">{service.cta}</a>
            </Card>
          ))}
        </section>

        <Card><p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Come lavoro</p><div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {siteContent.process.map(([number, title, description]) => <div key={number}><span className="text-sm text-violet-300">{number}</span><h3 className="mt-2 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-zinc-400">{description}</p></div>)}
        </div></Card>

        <section id="progetti" className="scroll-mt-6" aria-labelledby="progetti-title">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Progetti e casi studio</p><h2 id="progetti-title" className="mt-3 text-3xl font-semibold md:text-4xl">Il lavoro, con il suo stato reale.</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">{siteContent.projects.map((project) => {
            const content = <><p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{project.status}</p><h3 className="mt-4 text-2xl font-semibold">{project.title}</h3><p className="mt-3 leading-7 text-zinc-300">{project.description}</p><p className="mt-6 font-semibold text-white">{project.available ? 'Apri il caso studio →' : 'Presto disponibile'}</p></>
            const classes = `block rounded-[28px] border p-6 ${toneClasses[project.tone]} ${project.available ? 'transition hover:-translate-y-1' : 'opacity-75'}`
            return project.available ? <Link key={project.title} to={project.href} className={classes}>{content}</Link> : <article key={project.title} className={classes}>{content}</article>
          })}</div>
        </section>

        <section id="contatti" className="grid scroll-mt-6 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card><p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Contatti</p><h2 className="mt-4 text-3xl font-semibold">Partiamo da quello che ti fa perdere tempo.</h2><p className="mt-5 leading-8 text-zinc-300">Non devi arrivare con un progetto già pronto o sapere quale tecnologia ti serve. Raccontami come lavori, cosa ti rallenta e cosa vorresti rendere più semplice. Da lì capiremo se posso aiutarti e quale potrebbe essere il primo passo.</p><p className="mt-5 text-sm leading-6 text-zinc-400">{siteContent.contact.responseTime}</p>
            <div className="mt-7 grid gap-3">
              <a href={`mailto:${siteContent.contact.email}`} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10"><FaEnvelope /> <span><strong className="block text-white">Scrivimi via email</strong><span className="text-sm text-zinc-400">{siteContent.contact.email}</span></span></a>
              {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-emerald-400/10 px-4 py-3 hover:bg-emerald-400/20"><FaWhatsapp /> <strong>Parliamone su WhatsApp</strong></a>}
              {videoCallUrl && <a href={videoCallUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-violet-400/20 bg-violet-400/10 px-4 py-3 hover:bg-violet-400/20"><span aria-hidden="true" className="text-lg">◉</span> <span><strong className="block text-white">Richiedi una videochiamata</strong><span className="text-sm text-zinc-400">Concordiamo l’orario e ci incontriamo su Zoom o Google Meet.</span></span></a>}
            </div>
            <div className="mt-7 flex gap-4 text-xl"><a href={siteContent.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a><a href={siteContent.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></div>
          </Card>
          <Card><ContactForm /></Card>
        </section>

        <section className="relative mt-20 rounded-[28px] border border-white/10 bg-[#14151a]/95 px-6 pb-9 pt-20 text-center md:px-12 md:pb-11" aria-labelledby="author-bio-title">
          <img
            src={siteContent.authorBio.photo}
            alt={`Ritratto di ${siteContent.legalName}`}
            className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#14151a] object-cover object-[50%_35%] shadow-2xl ring-1 ring-white/15 md:h-32 md:w-32"
          />
          <p className="text-xs uppercase tracking-[0.3em] text-violet-300">La persona dietro il progetto</p>
          <h2 id="author-bio-title" className="mt-4 text-3xl font-semibold md:text-4xl">{siteContent.authorBio.title}</h2>
          <div className="mx-auto mt-6 max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
            {siteContent.authorBio.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <a href={siteContent.social.linkedin} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold text-violet-300 hover:text-violet-200">
            <FaLinkedinIn /> Conosciamoci anche su LinkedIn →
          </a>
        </section>

        <footer className="rounded-[28px] border border-white/10 bg-[#101116]/90 px-6 py-8 md:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="text-xl font-semibold">{siteContent.brand}</p>
              <p className="mt-3 max-w-sm leading-7 text-zinc-400">Soluzioni digitali per freelance, professionisti e piccole attività.</p>
              <p className="mt-4 text-sm text-zinc-500">{siteContent.legalName}</p>
            </div>
            <nav aria-label="Collegamenti del footer">
              <p className="text-sm font-semibold text-white">Esplora</p>
              <div className="mt-3 grid gap-2 text-sm text-zinc-400">
                <a href="#servizi" className="hover:text-white">Servizi</a>
                <a href="#progetti" className="hover:text-white">Progetti</a>
                <a href="#contatti" className="hover:text-white">Contatti</a>
              </div>
            </nav>
            <div>
              <p className="text-sm font-semibold text-white">Restiamo in contatto</p>
              <a href={`mailto:${siteContent.contact.email}`} className="mt-3 block break-all text-sm text-zinc-400 hover:text-white">{siteContent.contact.email}</a>
              <div className="mt-4 flex gap-4 text-lg"><a href={siteContent.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a><a href={siteContent.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-5 text-xs text-zinc-500">© 2026 {siteContent.brand}</div>
        </footer>
      </main>
    </div>
  )
}

function App() {
  return <Routes><Route path="/" element={<HomePage />} /><Route path="/english-teacher" element={<EnglishTeacherPage />} /><Route path="/music-project" element={<MusicProjectPage />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes>
}

export default App
