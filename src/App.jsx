import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'
import { SiSubstack } from 'react-icons/si'

function App() {
  return (
    <div className="min-h-screen bg-[#07090d] px-4 py-6 text-white md:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[340px_520px] lg:justify-center">
        <aside className="lg:self-start">
          <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="mb-4 text-5xl font-semibold leading-none text-white">
              {'{ }'}
            </p>

            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-400">
              Tech Projects
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/AlicePisciuneri"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                React Portfolio
              </a>

              <a
                href="https://github.com/AlicePisciuneri"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Task Manager
              </a>

              <a
                href="https://github.com/AlicePisciuneri"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                WordPress Project
              </a>
            </div>
          </section>
        </aside>

        <div className="flex flex-col gap-4">
          <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src="/profile-preview.png"
                    alt="Foto profilo Alice"
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h1 className="text-3xl font-semibold leading-tight">
                      Alice
                    </h1>
                    <p className="text-base text-zinc-400">
                      @elysdigitalwords
                    </p>
                  </div>
                </div>

                <p className="max-w-xs text-lg leading-9 text-zinc-300">
                  Web, scrittura e visione editoriale. Uno spazio personale
                  pensato per unire identità digitale, contenuti e progetti.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <a
                  href="https://www.instagram.com/elysinbookland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 transition hover:bg-white"
                >
                  <FaInstagram className="text-[#E1306C]" />
                </a>

                <a
                  href="https://www.linkedin.com/in/alice-pisciuneri-b55275344/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 transition hover:bg-white"
                >
                  <FaLinkedinIn className="text-[#0A66C2]" />
                </a>

                <a
                  href="https://github.com/AlicePisciuneri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-black transition hover:bg-zinc-800"
                >
                  <FaGithub className="text-white" />
                </a>

                <a
                  href="https://substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 transition hover:bg-white"
                >
                  <SiSubstack className="text-[#FF6719]" />
                </a>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-400">
              Daily Road Map
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/5 p-4 text-base text-zinc-200">
                VS Code
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-base text-zinc-200">
                React
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-base text-zinc-200">
                WordPress
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-base text-zinc-200">
                GitHub
              </div>
            </div>
          </section>
          <section className="rounded-[28px] border border-dashed border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
              Potrebbe interessarti...
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
                  Il diavolo veste ancora Prada: un trattato sulla fine di un’era
                </h3>

                <p className="text-sm leading-6 text-zinc-300">
                  C’è una scena, quasi alla fine di questo atteso sequel de Il Diavolo veste Prada,
                  che si svolge nel silenzio sacro del refettorio di Santa Maria delle Grazie a Milano, davanti all’Ultima Cena di Leonardo. In quel punto il film smette di essere una commedia sulla moda e si rivela per quello che è veramente: un “quasi” trattato politico sulla fine di un’era. Se il primo capitolo era una lezione di estetica, il secondo è una guerra di successione per il futuro dell’umanità e, al centro di questa guerra,
                  c’è ancora lei, la nostra Andy Sachs. Ma non è più la ragazza che abbiamo lasciato vent’anni fa. Prima di parlare di questo, però, dobbiamo fare un passo indietro… </p>
              </div>
            </a>
          </section>

          <section className="rounded-[28px] border border-dashed border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
              Potrebbe interessarti...
            </p>

            <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-white/10 text-sm text-zinc-500">
              Qui andrà l’immagine-link del secondo articolo
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App