
export default function LiveMetrics({ metrics }) {
    return (
        <section className="mt-10">
            <h2 className="mb-6 text-2xl font-semibold text-violet-300">
                Risultati registrati
            </h2>

            <div className="grid gap-6 md:grid-cols-3">

                <div>
                    <h3 className="mb-2 text-lg font-semibold">
                        YouTube
                    </h3>

                    <p>
                        Ultimi 60 giorni: {metrics.youtube.viewslast60Days}
                    </p>

                    <p>
                        Ultime 48 ore: {metrics.youtube.viewslast48Hours}
                    </p>
                </div>

                <div>
                    <h3 className="mb-2 text-lg font-semibold">
                        Instagram
                    </h3>

                    <p>
                        Account raggiunti: {metrics.instagram.reachedAccounts}
                    </p>
                </div>

                <div>
                    <h3 className="mb-2 text-lg font-semibold">
                        Sito Web
                    </h3>

                    <p>
                        Visite: {metrics.website.visits}
                    </p>
                </div>

            </div>

            <p className="mt-6 text-sm text-zinc-500">
                Ultimo aggiornamento: {metrics.lastUpdate}
            </p>
        </section>
    );
}
