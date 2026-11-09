import { useState } from 'react'
import { siteContent } from './content/siteContent'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function submit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Richiesta dal sito di ${form.name}`)
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\nMessaggio:\n${form.message}`)
    window.location.href = `mailto:${siteContent.contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
      <label className="grid gap-2 text-sm font-medium text-[#403748]">
        Come ti chiami?
        <input required autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="rounded-2xl border border-[#e6e0e9] bg-[#fbfafc] px-4 py-3.5 text-[#241b2b] outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[#403748]">
        La tua email
        <input required type="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="rounded-2xl border border-[#e6e0e9] bg-[#fbfafc] px-4 py-3.5 text-[#241b2b] outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10" />
      </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-[#403748]">
        Raccontami brevemente cosa vuoi realizzare
        <textarea required rows="5" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="resize-y rounded-2xl border border-[#e6e0e9] bg-[#fbfafc] px-4 py-3.5 text-[#241b2b] outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10" />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button className="rounded-2xl bg-[#351653] px-6 py-3.5 font-semibold text-white transition hover:bg-[#48236a] focus:outline-none focus:ring-4 focus:ring-violet-500/20">Prepara la richiesta <span aria-hidden="true">→</span></button>
        <p className="text-xs leading-5 text-[#716978]">Si aprirà la tua app email. I dati non vengono salvati dal sito.</p>
      </div>
    </form>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090d] text-white">
      <header className="w-full">
        <div className="w-full bg-[#351653] px-6 pb-16 pt-7 md:px-12 md:pb-24 md:pt-9">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium tracking-wide text-white/90">{siteContent.brand}</p>
            <h1 className="mx-auto mt-20 max-w-5xl text-center text-5xl font-semibold leading-[1.08] tracking-tight md:mt-28 md:text-7xl lg:text-8xl">
              {siteContent.profile.headline}
            </h1>
          </div>
        </div>
        <div className="w-full bg-[#f7f5f2] px-6 py-14 text-[#241b2b] md:px-12 md:py-20">
          <p className="mx-auto max-w-5xl text-center text-3xl font-medium leading-snug md:text-5xl md:leading-tight">{siteContent.profile.description}</p>
        </div>
      </header>

      <main>
        <section className="bg-white px-6 py-16 text-[#241b2b] md:px-12 md:py-24" aria-labelledby="bio-title">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
            <img src={siteContent.about.photo} alt={`Ritratto professionale di ${siteContent.legalName}`} className="mx-auto aspect-[3/4] w-full max-w-[390px] rounded-[28px] object-cover shadow-xl" />
            <div>
              <h2 id="bio-title" className="text-4xl font-bold leading-tight md:text-6xl">{siteContent.about.title}</h2>
              <div className="mt-6 space-y-4 text-lg leading-8 text-[#5b5360]">
                {siteContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section id="servizi" className="scroll-mt-6 bg-[#07090d] px-4 py-12 text-white md:px-8 md:py-16" aria-labelledby="servizi-title">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#17131f] via-[#111217] to-[#0d1419] p-6 md:p-10">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Per chi crea</p>
              <h2 id="servizi-title" className="mt-4 text-xl font-medium leading-relaxed text-zinc-200 md:text-2xl">Non sai da dove partire? Ci pensiamo insieme.</h2>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {siteContent.solutions.map((solution) => (
                <article key={solution.number} className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#111217]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-[#17151d] md:p-7">
                  <div className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl ${solution.glow}`} aria-hidden="true" />
                  <div className="relative flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">{solution.label}</span>
                    <span className={`text-3xl font-light ${solution.accent}`} aria-hidden="true">{solution.number}</span>
                  </div>
                  <h3 className="relative mt-8 text-2xl font-semibold leading-snug">{solution.title}</h3>
                  <p className="relative mt-4 leading-7 text-zinc-300">{solution.description}</p>
                  <ul className="relative mt-5 grid gap-3 text-sm leading-6 text-zinc-300">
                    {solution.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${solution.dot}`} aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contatti" className={`relative mt-auto pt-7 font-semibold transition hover:text-white ${solution.accent}`}>Parliamone <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contatti" className="bg-[#f7f5f2] px-4 py-12 md:px-8 md:py-16" aria-labelledby="contact-title">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-[0_24px_80px_rgba(35,21,43,0.12)] md:grid-cols-[0.75fr_1.25fr]">
            <div className="flex flex-col justify-between bg-[#351653] p-7 text-white md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Contatti</p>
                <h2 id="contact-title" className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">Raccontami la tua idea.</h2>
              </div>
              <a href={`mailto:${siteContent.contact.email}`} className="mt-8 break-all text-sm text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white">{siteContent.contact.email}</a>
            </div>
            <div className="p-6 md:p-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#07090d] px-6 py-7 text-white md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-400">© 2026 {siteContent.brand}</p>
          <nav aria-label="Profili social e informative legali" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-zinc-300">
            <a href={siteContent.social.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
            <a href={siteContent.social.instagram} target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a>
            <a href={siteContent.social.github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
            <a href="https://www.iubenda.com/privacy-policy/59930764" className="iubenda-white iubenda-noiframe iubenda-embed transition hover:text-white" title="Privacy Policy">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/59930764/cookie-policy" className="iubenda-white iubenda-noiframe iubenda-embed transition hover:text-white" title="Cookie Policy">Cookie Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
