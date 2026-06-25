import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'
import { SiSubstack } from 'react-icons/si'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import EnglishTeacherPage from './pages/EnglishTeacherPage'
import MusicProjectPage from './pages/MusicProjectPage'

const projects = [
  {
    title: 'Landing page per insegnante di inglese',
    href: '/english-teacher',
    color:
      'border-violet-400/20 bg-violet-400/10 text-zinc-100 hover:bg-violet-400/15',
  },
  {
    title: 'Vendita brani royalty-free per musicista',
    href: '/music-project',
    color:
      'border-fuchsia-400/20 bg-fuchsia-400/10 text-zinc-100 hover:bg-fuchsia-400/15',
  },
  {
    title: 'Sito WordPress per progetto agricolo',
    href: '/agricultural-site',
    color:
      'border-cyan-400/20 bg-cyan-400/10 text-zinc-100 hover:bg-cyan-400/15',
  },
]

function ProjectLink({ project }) {
  return (
    <Link
      to={project.href}
      className={`rounded-2xl border px-4 py-4 text-sm transition hover:-translate-y-0.5 ${project.color}`}
    >
      {project.title}
    </Link>
  )
}

function Card({ children, className = '', isDashed = false }) {
  return (
    <section
      className={`rounded-[28px] border ${isDashed ? 'border-dashed border-white/10' : 'border-white/10'
        } bg-white/5 p-5 backdrop-blur-sm ${className}`}
    >
      {children}
    </section>
  )
}

function WorkInProgressPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#07090d] p-4 text-white">
      <h2 className="mb-4 text-2xl font-semibold">Progetto in arrivo!</h2>
      <p className="mb-6 text-zinc-400">
        Sto sistemando gli ultimi dettagli di questo caso studio.
      </p>
      <Link to="/" className="text-violet-400 hover:underline">
        Torna alla Home
      </Link>
    </div>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[#07090d] px-4 py-6 text-white md:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[340px_520px_320px] lg:justify-center">
        <aside className="order-2 lg:order-1 lg:self-start">
          <Card className="shadow-[0_0_30px_rgba(168,85,247,0.12)]">
            <p className="mb-4 text-5xl font-semibold leading-none text-white">
              {'{ }'}
            </p>

            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-400">
              Scopri cosa ho già realizzato
            </p>

            <div className="flex flex-col gap-3">
              {projects.map((project) => (
                <ProjectLink key={project.title} project={project} />
              ))}
            </div>
          </Card>
        </aside>
        <div className="order-1 flex flex-col gap-4 lg:order-2">
          <Card className="shadow-[0_0_30px_rgba(168,85,247,0.12)]">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src="/profile-preview.png"
                    alt="Foto profilo Alice"
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h1 className="text-3xl font-semibold leading-tight">
                      alice.digitalwords
                    </h1>
                  </div>
                </div>

                <p className="max-w-md text-lg leading-8 text-zinc-300">
                  Progetto spazi digitali che uniscono struttura, contenuti e
                  identità visiva per aiutare freelance, professionisti e
                  piccole attività a presentarsi meglio online e trasformare il
                  traffico in contatti concreti.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <a
                  href="https://www.instagram.com/elysinbookland"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visita il mio profilo Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 transition hover:bg-white"
                >
                  <FaInstagram className="text-[#E1306C]" />
                </a>

                <a
                  href="https://www.linkedin.com/in/alice-pisciuneri-b55275344/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visita il mio profilo LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 transition hover:bg-white"
                >
                  <FaLinkedinIn className="text-[#0A66C2]" />
                </a>

                <a
                  href="https://github.com/AlicePisciuneri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visita il mio profilo GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-black transition hover:bg-zinc-800"
                >
                  <FaGithub className="text-white" />
                </a>

                <a
                  href="https://substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visita il mio profilo Substack"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 transition hover:bg-white"
                >
                  <SiSubstack className="text-[#FF6719]" />
                </a>
              </div>
            </div>
          </Card>

          <Card>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-400">
              Cosa costruisco
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/5 p-4 text-base text-zinc-200">
                Landing page
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-base text-zinc-200">
                Siti vetrina
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-base text-zinc-200">
                Contenuti digitali
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-base text-zinc-200">
                Presenza online e social
              </div>
            </div>
          </Card>

          <Card>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-400">
              Cosa offro
            </p>

            <p className="text-base leading-8 text-zinc-300">
              Uno spazio digitale che non sia solo ordinato o bello da vedere,
              ma capace di guidare chi arriva, generare fiducia e trasformare
              l’attenzione in un contatto reale.
            </p>
          </Card>

          <Card isDashed>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
              Se scrivi o lavori sui social ti potrebbe interessare...
            </p>

            <a
              href="https://calligrafe.com/2026/05/04/il-diavolo-veste-ancora-prada/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <img
                src="/The Devil Wears Prada 2.jpg"
                alt="Anteprima articolo pubblicato su Calligrafe"
                className="h-64 w-full object-cover object-top"
              />

              <div className="p-4">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-400">
                  Calligrafe
                </p>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  Il diavolo veste ancora Prada: un trattato sulla fine di
                  un’era
                </h3>

                <p className="text-sm leading-6 text-zinc-300">
                  Un esempio del mio lato editoriale: analisi culturale,
                  sguardo narrativo e costruzione di contenuti con un’identità
                  precisa.
                </p>
              </div>
            </a>
          </Card>

          <Card isDashed>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
              Work in progress
            </p>

            <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-white/10 text-sm text-zinc-500">
              Qui andrà un futuro caso studio o un’altra article card
            </div>
          </Card>
        </div>
        <aside className="order-3 lg:order-3 lg:self-start">
          <a
            href="/elys.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
          >
            <img
              src="/elys.jpg"
              alt="Grafica visuale di Elys"
              className="mb-4 max-h-[500px] w-full rounded-[22px] object-contain"
            />

            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-400">
              Visual storytelling
            </p>

            <h2 className="mb-3 text-xl font-semibold leading-tight text-white">
              Come nascono queste grafiche?
            </h2>

            <p className="text-sm leading-6 text-zinc-300">
              Un piccolo spazio per raccontare il lato visivo dei miei
              contenuti: immagini, idee, atmosfera e qualche segreto di
              lavorazione.
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
              Clicca per ingrandire
            </p>
          </a>
        </aside>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/english-teacher" element={<EnglishTeacherPage />} />
      <Route path="/music-project" element={<MusicProjectPage />} />
      <Route path="/agricultural-site" element={<WorkInProgressPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App