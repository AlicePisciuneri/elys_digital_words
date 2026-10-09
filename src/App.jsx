import { useState } from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
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

function AnimatedProfilePhoto() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.img
      initial={reduceMotion ? false : { opacity: 0, x: -28, scale: 0.97 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
      src={siteContent.profile.photo}
      alt={`Ritratto professionale di ${siteContent.profile.name}`}
      className="mx-auto aspect-[2/3] w-full max-w-[390px] rounded-[28px] object-cover shadow-xl"
    />
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
      <button className="rounded-xl bg-violet-500 px-5 py-3 font-semibold text-white transition hover:bg-violet-400">Prepara la richiesta via email</button>
      <p className="text-xs leading-5 text-zinc-500">Il pulsante apre la tua app email: nessun dato viene salvato dal sito.</p>
    </form>
  )
}

function HomePage() {
  const whatsappUrl = siteContent.contact.whatsappNumber ? `https://wa.me/${siteContent.contact.whatsappNumber}` : ''
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d] text-white">
      <video autoPlay loop muted playsInline className="fixed inset-0 h-full w-full object-cover opacity-20" aria-hidden="true"><source src="/background.mp4" type="video/mp4" /></video>
      <div className="fixed inset-0 bg-[#07090d]/80" />
      <header className="relative bg-[#351653] px-6 pb-20 pt-7 md:px-12 md:pb-32 md:pt-9">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-wide text-white/90">Alice.DigitalWords</p>
          <h1 className="mx-auto mt-24 max-w-5xl text-center text-5xl font-semibold leading-[1.08] tracking-tight md:mt-32 md:text-7xl lg:text-8xl">
            Il tuo lavoro merita uno spazio all’altezza.
          </h1>
        </div>
      </header>

      <section className="relative bg-[#f7f5f2] px-6 py-16 text-[#241b2b] md:px-12 md:py-24" aria-labelledby="mission-title">
        <div className="mx-auto max-w-5xl text-center">
          <h2 id="mission-title" className="mt-6 text-3xl font-medium leading-snug md:text-5xl md:leading-tight">
            Ti aiuto a costruire una presenza digitale che racconta davvero chi sei, unendo strategia, contenuti e sviluppo web in un progetto su misura.
          </h2>
        </div>
      </section>

      <section className="relative bg-white px-6 py-16 text-[#241b2b] md:px-12 md:py-24" aria-labelledby="author-intro-title">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
          <AnimatedProfilePhoto />
          <div>
            <h2 id="author-intro-title" className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Ciao, sono Alice.</h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-[#5b5360]">
              <p>20 anni di lavoro a contatto con le persone, le loro esigenze e le loro storie.</p>
              <p>Alla scrittura, che mi accompagna da sempre, ho affiancato lo sviluppo web e la comunicazione digitale.</p>
              <p>Oggi unisco queste competenze per aiutarti a raccontare davvero chi sei.</p>
              <p>Ascolto, progetto e costruisco insieme a te, con attenzione ai dettagli e obiettivi chiari.</p>
              <p>Resto al tuo fianco per aiutarti a crescere.</p>
            </div>
          </div>
        </div>
      </section>

      <main className="relative mx-auto max-w-6xl space-y-6 px-4 py-6 md:px-8 md:py-10">

        <section className="grid gap-6 lg:grid-cols-3" aria-labelledby="servizi-title">
          <div className="lg:col-span-3"><p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Come posso aiutarti</p><h2 id="servizi-title" className="mt-3 text-3xl font-semibold md:text-4xl">Partiamo dal problema, non dal formato.</h2></div>
          {siteContent.services.map((service) => (
            <Card key={service.title} className="flex h-full flex-col">
              <h3 className="text-2xl font-semibold">{service.title}</h3><p className="mt-4 leading-7 text-zinc-300">{service.audience}</p>
              <p className="mt-5 text-sm uppercase tracking-wider text-zinc-500">Problema</p><p className="mt-2 leading-7 text-zinc-300">{service.problem}</p>
              <p className="mt-5 text-sm uppercase tracking-wider text-zinc-500">Risultato</p><p className="mt-2 leading-7 text-zinc-300">{service.result}</p>
              <a href="#contatti" className="mt-6 font-semibold text-violet-300 hover:text-violet-200">Chiedimi informazioni →</a>
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
          <Card><p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Contatti</p><h2 className="mt-4 text-3xl font-semibold">Hai un’idea o un problema da chiarire?</h2><p className="mt-5 leading-8 text-zinc-300">Scrivimi senza preparare un brief perfetto. Possiamo partire da poche informazioni e capire insieme il passo successivo.</p><p className="mt-5 text-sm text-zinc-400">{siteContent.contact.responseTime}</p>
            <div className="mt-7 grid gap-3"><a href={`mailto:${siteContent.contact.email}`} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10"><FaEnvelope /> {siteContent.contact.email}</a>{whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-emerald-400/10 px-4 py-3 hover:bg-emerald-400/20"><FaWhatsapp /> Scrivimi su WhatsApp</a>}</div>
            <div className="mt-7 flex gap-4 text-xl"><a href={siteContent.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a><a href={siteContent.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a><a href={siteContent.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a></div>
          </Card>
          <Card><ContactForm /></Card>
        </section>
      </main>
    </div>
  )
}

function App() {
  return <Routes><Route path="/" element={<HomePage />} /><Route path="/english-teacher" element={<EnglishTeacherPage />} /><Route path="/music-project" element={<MusicProjectPage />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes>
}

export default App
