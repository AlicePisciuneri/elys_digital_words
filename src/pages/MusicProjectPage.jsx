import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const projectMetrics = {
    youtubeViews28Days: "5.626",
    youtubeViews48Hours: "695",
    instagramReach: "1.240",
    websiteVisits: "327",
    lastUpdate: "24 giugno 2026",
};

function MusicProjectPage() {
    return (
        <div className="min-h-screen bg-[#07090d] px-6 py-10 text-white md:px-10 lg:px-16">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-16"
                >
                    <Link
                        to="/"
                        className="mb-6 inline-block text-sm text-zinc-400 transition hover:text-white"
                    >
                        ← Torna alla home
                    </Link>

                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                        Professionisti che ho aiutato
                    </p>

                    <h1 className="mb-6 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
                        Vendita brani royalty-free per @madhatterrecords
                    </h1>

                    <p className="max-w-3xl text-lg leading-8 text-zinc-300">
                        Ho realizzato un intervento strategico a 360° che ha unito  Content Strategy,
                        posizionamento sui social e conversion design.
                        Il focus del progetto è stato  costruire l'intera narrazione visiva e testuale per
                        attrarre il target giusto sui social,
                        educarlo al valore del prodotto e guidarlo verso una piattaforma web ottimizzata per la vendita.
                    </p>
                </motion.div>

                <motion.section
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mb-20 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
                >
                    <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                            Un po' di contesto
                        </p>

                        <h2 className="mb-6 text-3xl font-semibold">
                            Da raccolta musicale a proposta digitale
                        </h2>

                        <div className="space-y-5 text-base leading-8 text-zinc-300">
                            <p>
                                Il progetto nasce dall’idea di dare una forma più chiara alla
                                vendita di brani royalty-free destinati a creator, video,
                                podcast e contenuti digitali.
                            </p>

                            <p>
                                Il focus del progetto è stato lo sviluppo di un ecosistema digitale integrato,
                                capace di trasformare la presenza del cliente in una piattaforma di vendita strutturata, chiara e scalabile.
                                Come developer non mi sono limitata a scrivere il codice, ma ho progettato l'architettura tecnica per connettere la presenza social al
                                funnel di monetizzazione su Gumroad.

                                Abbiamo riorganizzato l'identità visiva e il catalogo musicale,
                                trasformando un archivio artistico in un asset commerciale comprensibile
                                e ottimizzato per la conversione. I risultati della Content Strategy Tech-Driven:
                                In un solo trimestre, l'infrastruttura multimediale ha generato una crescita progressiva e costante.


                                Il grafico sottostante mostra l'impatto di questa strategia su YouTube, dove l'ottimizzazione
                                dei contenuti ha attirato migliaia di visualizzazioni organiche, traducendosi
                                in picchi significativi di traffico diretto verso la piattaforma web.
                                Questo caso studio dimostra come lo sviluppo web, se integrato a una visione multimediale
                                e di marketing coerente, sia il motore fondamentale per convertire l'attenzione dei social in metriche commerciali concrete.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start justify-center">
                        <section className="w-full">
                            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                                Performance
                            </p>

                            <h2 className="mb-4 text-4xl font-semibold text-violet-300">
                                5.626 visualizzazioni in 28 giorni
                            </h2>

                            <p className="mb-8 text-lg leading-8 text-zinc-300">
                                I contenuti pubblicati hanno generato una crescita organica significativa,
                                con picchi di interesse che mostrano il potenziale del progetto e della
                                sua presenza digitale.
                            </p>

                            <img
                                src="/youtube-analytics.png"
                                alt="Analytics YouTube del progetto"
                                className="w-full"
                            />
                        </section>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mb-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
                >
                    <div className="flex items-start justify-center">
                        <section className="w-full">
                            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                                Catalogo dei brani
                            </p>

                            <h2 className="mb-4 text-4xl font-semibold text-red-300">
                                Possibilità di acquisto diretto dal sito
                            </h2>

                            <p className="mb-8 text-lg leading-8 text-zinc-300">

                            </p>

                            <img
                                src="/sito-analytics.png"
                                alt="Analytics Sito del progetto"
                                className="w-full"
                            />
                        </section>
                    </div>

                    <div className="order-1 lg:order-2">
                        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                            Obiettivo
                        </p>

                        <h2 className="mb-6 text-3xl font-semibold">
                            Rendere il catalogo più leggibile e più facile da esplorare
                        </h2>

                        <div className="space-y-5 text-base leading-8 text-zinc-300">
                            <p>
                                L’obiettivo era ordinare il catalogo musicale, chiarire l’offerta
                                e rendere più semplice per un potenziale cliente capire cosa
                                stesse guardando, a chi fosse rivolto e perché valesse la pena
                                approfondire.
                            </p>


                            Una pagina del genere non deve solo “piacere”. Deve ridurre
                            attrito, aumentare chiarezza e accompagnare la persona verso
                            un’azione possibile: ascoltare, orientarsi, contattare, comprare.

                            <p><strong> Infrastruttura Dati & Automation:</strong>
                                Per supportare questa crescita, ho implementato un sistema di backend
                                integrato con webhooks e automazioni API. Questo ha permesso di catturare
                                l'interesse generato sui social e instradare gli utenti direttamente verso
                                i touchpoint di conversione del sito, eliminando ogni barriera tecnica all'acquisto
                                e automatizzando la distribuzione delle licenze digitali.
                            </p>

                            <p><strong>Sinergia Full-Stack:</strong>
                                Questo progetto dimostra l'efficacia di un approccio full-stack che non si ferma alla
                                sola scrittura del codice. Ottimizzando l'architettura web in funzione della content
                                strategy del cliente, abbiamo creato un flusso continuo in cui ogni contenuto multimediale
                                agisce da acceleratore per le metriche della piattaforma proprietaria.
                            </p>

                        </div>
                    </div>
                </motion.section>
                <section className="my-20">
                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                        Metriche del progetto
                    </p>

                    <h2 className="mb-8 text-4xl font-semibold text-violet-300">
                        Crescita monitorata nel tempo
                    </h2>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">YouTube</h3>
                            <p>{projectMetrics.youtubeViews28Days} visualizzazioni (28 giorni)</p>
                            <p>{projectMetrics.youtubeViews48Hours} visualizzazioni (48 ore)</p>
                        </div>

                        <div>
                            <h3 className="mb-2 text-xl font-semibold">Instagram</h3>
                            <p>{projectMetrics.instagramReach} account raggiunti</p>
                        </div>

                        <div>
                            <h3 className="mb-2 text-xl font-semibold">Sito</h3>
                            <p>{projectMetrics.websiteVisits} visite</p>
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-zinc-500">
                        Ultimo aggiornamento: {projectMetrics.lastUpdate}
                    </p>
                </section>
            </div>
        </div>
    )
}

export default MusicProjectPage

