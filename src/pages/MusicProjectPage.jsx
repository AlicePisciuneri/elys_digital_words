import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LiveMetrics from '../components/LiveMetrics'

const projectMetrics = {
  youtube: { viewslast60Days: '22.857', viewslast48Hours: '6.950' },
  instagram: { reachedAccounts: '1.395' },
  website: { visits: '500' },
  lastUpdate: '07/07/2026',
}

const interventions = [
  {
    number: '01',
    title: 'Sito e catalogo',
    description: 'Ho organizzato i brani in uno spazio più chiaro, rendendo più semplice capire cosa fosse disponibile e a chi fosse rivolto.',
  },
  {
    number: '02',
    title: 'Contenuti e social',
    description: 'Ho coordinato testi e contenuti per presentare il progetto con maggiore continuità e accompagnare le persone dal contenuto al catalogo.',
  },
  {
    number: '03',
    title: 'Percorso verso l’acquisto',
    description: 'Ho reso più diretto il passaggio tra scoperta, ascolto e acquisto dei brani sulla piattaforma dedicata.',
  },
]

function MusicProjectPage() {
  return (
    <div className="min-h-screen bg-[#07090d] px-4 py-8 text-white md:px-10 md:py-12 lg:px-16">
      <main className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16"
        >
          <Link to="/" className="mb-8 inline-block text-sm text-zinc-400 transition hover:text-white">← Torna alla home</Link>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-violet-300">Caso studio · Madhatterrecords</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Un catalogo musicale più chiaro, riconoscibile e facile da acquistare.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Ho lavorato sul sito, sull’organizzazione del catalogo e sui contenuti social per creare un percorso più semplice: scoprire i brani, capire come utilizzarli e raggiungere il punto di acquisto.
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16 grid gap-8 rounded-[28px] border border-white/10 bg-[#14151a] p-6 md:grid-cols-[0.8fr_1.2fr] md:p-9"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Il punto di partenza</p>
            <h2 className="mt-4 text-3xl font-semibold">Dare ordine a un progetto ricco di contenuti.</h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-zinc-300">
            <p>Madhatterrecords propone brani royalty-free destinati a creator, video, podcast e altri contenuti digitali.</p>
            <p>Il materiale c’era, ma serviva una struttura capace di presentarlo con maggiore chiarezza e di collegare la comunicazione social al catalogo e all’acquisto.</p>
          </div>
        </motion.section>

        <section className="mb-20" aria-labelledby="interventi-title">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Il mio intervento</p>
          <h2 id="interventi-title" className="mt-4 text-3xl font-semibold md:text-4xl">Tre aree, un unico percorso.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {interventions.map((item) => (
              <article key={item.number} className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                <span className="text-sm font-semibold text-violet-300">{item.number}</span>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-zinc-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-[#14151a] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Risultati</p>
            <h2 className="mt-4 text-3xl font-semibold">Una presenza digitale capace di generare attenzione.</h2>
            <p className="mt-5 leading-8 text-zinc-300">
              I dati fotografano la crescita raggiunta dal progetto nel periodo indicato. Le metriche mostrano visualizzazioni, persone raggiunte e visite al sito, senza trasformarle in risultati di vendita non verificati.
            </p>
            <LiveMetrics metrics={projectMetrics} />
          </div>
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#14151a] p-4">
            <img src="/youtube-analytics.png" alt="Dati YouTube del progetto Madhatterrecords" className="h-full w-full rounded-2xl object-contain" />
          </div>
        </section>

        <section className="mb-20 grid items-center gap-10 rounded-[28px] border border-white/10 bg-[#14151a] p-6 md:p-9 lg:grid-cols-[1fr_1.1fr]">
          <img src="/sito-analytics.png" alt="Catalogo online del progetto Madhatterrecords" className="w-full rounded-2xl" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Il risultato del percorso</p>
            <h2 className="mt-4 text-3xl font-semibold">Dalla scoperta del brano al punto di acquisto.</h2>
            <p className="mt-5 leading-8 text-zinc-300">
              Il sito è diventato il punto centrale del progetto: uno spazio in cui esplorare il catalogo e proseguire verso l’acquisto senza perdersi tra informazioni e canali differenti.
            </p>
          </div>
        </section>

        <section className="rounded-[28px] border border-violet-400/20 bg-violet-400/10 p-7 text-center md:p-10">
          <h2 className="text-3xl font-semibold">Hai contenuti validi, ma difficili da presentare online?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-300">
            Possiamo organizzarli in uno spazio più chiaro e costruire un percorso semplice verso il contatto o l’acquisto.
          </p>
          <Link to="/#contatti" className="mt-7 inline-block rounded-xl bg-violet-500 px-5 py-3 font-semibold transition hover:bg-violet-400">
            Raccontami il tuo progetto
          </Link>
        </section>
      </main>
    </div>
  )
}

export default MusicProjectPage
