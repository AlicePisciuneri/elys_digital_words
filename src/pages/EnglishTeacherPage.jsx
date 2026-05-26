const CASE_STUDY_SECTIONS = [
    {
        id: 'contesto',
        title: 'Contesto',
        content:
            'Il progetto nasce dall’esigenza di dare più chiarezza alla presenza online di una professionista e presentare il servizio in modo più credibile e immediato.',
    },
    {
        id: 'attivita',
        title: 'Cosa ho fatto',
        content:
            'Ho lavorato sulla struttura della pagina, sulla gerarchia dei contenuti, sulla presentazione del servizio e sulla costruzione di una comunicazione più chiara e orientata alla fiducia.',
    },
    {
        id: 'obiettivo',
        title: 'Obiettivo',
        content:
            'Creare una pagina capace di presentare il servizio in modo diretto, rendere più semplice il contatto e rafforzare la percezione di professionalità.',
    },
    {
        id: 'recensione',
        title: 'Recensione cliente',
        content: 'Qui potrai inserire una frase del cliente appena la recuperi.',
        isItalic: true,
    },
]

function Card({ children, className = '', isDashed = false }) {
    return (
        <section
            className={`rounded-[28px] border ${isDashed ? 'border-dashed border-white/10' : 'border-white/10'
                } bg-white/5 p-6 backdrop-blur-sm ${className}`}
        >
            {children}
        </section>
    )
}

function EnglishTeacherPage() {
    return (
        <div className="min-h-screen bg-[#07090d] px-4 py-8 text-white md:px-6">
            <div className="mx-auto max-w-4xl">
                <header className="mb-8">
                    <h1 className="mb-4 text-4xl font-semibold tracking-tight">
                        Landing page per insegnante di inglese
                    </h1>
                    <p className="text-lg text-zinc-300">
                        Una landing page pensata per presentare il servizio in modo chiaro,
                        professionale e orientato al contatto.
                    </p>
                </header>

                <div className="space-y-6">
                    {CASE_STUDY_SECTIONS.map((section) => (
                        <Card key={section.id} className="transition-colors hover:border-white/20">
                            <h2 className="mb-3 text-2xl font-semibold">{section.title}</h2>
                            <p className={section.isItalic ? 'italic text-zinc-400' : 'text-zinc-300'}>
                                {section.content}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EnglishTeacherPage