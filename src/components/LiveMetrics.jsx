

export default function LiveMetrics({ metrics }) {
    return (
        <section>
            <h2>Live Metrics</h2>

            <h3>YouTube</h3>
            <p>Visualizzazioni (ultimi 60 giorni): {metrics.youtube.viewslast60Days}</p>
            <p>Visualizzazioni (48 ore): {metrics.youtube.viewslast48Hours}</p>

            <h3>Instagram</h3>
            <p>Account raggiunti: {metrics.instagram.reachedAccounts}</p>

            <h3>Sito Web</h3>
            <p>Visite: {metrics.website.visits}</p>
        </section>
    );
}
