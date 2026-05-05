import heroBackground from '../assets/hero-background.png'
import profilePhoto from '../assets/profilephoto.png'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

function HomePage() {
    return (
        <>
            <header
                className="hero"
                style={{ backgroundImage: `url(${heroBackground})` }}
            >
                <div className="hero-overlay">
                    <div className="hero-content">
                        <p className="hero-intro">Portfolio in costruzione</p>
                        <h1>Elys Digital Words</h1>
                        <p className="hero-text">
                            Uno spazio in cui far convivere web, scrittura e visione editoriale.
                        </p>
                    </div>
                </div>
            </header>

            <div className="page">
                <main>
                    <section className="section about-section">
                        <div className="about-image">
                            <img src={profilePhoto} alt="Ritratto di Elys" />
                        </div>

                        <div className="about-text">
                            <h2>Chi sono</h2>
                            <p>
                                Mi chiamo Alice e sto costruendo un percorso che unisce competenze digitali,
                                scrittura e progettazione di contenuti.
                            </p>

                            <p>
                                Mi interessa creare spazi chiari, leggibili e curati, in cui
                                struttura e identità riescano a stare insieme.
                            </p>

                            <p>
                                Questo sito nasce per raccogliere in un unico luogo ciò che so
                                fare, ciò che sto costruendo e il modo in cui immagino il mio
                                lavoro.
                            </p>
                        </div>
                    </section>
                    <section className="section two-columns dual-section">
                        <p className="section-eyebrow">Due direzioni, un solo percorso</p>
                        <article className="card">
                            <h2>Digitale</h2>
                            <p>
                                Sviluppo front-end, struttura delle pagine, componenti React,
                                cura dell’esperienza e presenza online.
                            </p>
                        </article>

                        <article className="card">
                            <h2>Redazione</h2>
                            <p>
                                Scrittura editoriale, articoli, analisi culturali,
                                organizzazione dei contenuti e tono di voce.
                            </p>
                        </article>
                    </section>

                    <section className="section">
                        <h2>Cosa posso offrire</h2>
                        <ul>
                            <li>Realizzazione di pagine web semplici e curate</li>
                            <li>Supporto nella scrittura di contenuti editoriali</li>
                            <li>Presentazione chiara di progetti e identità digitali</li>
                        </ul>
                    </section>
                    <footer className="site-footer">
                        <div className="footer-content">
                            <h2 className="footer-title">Restiamo in contatto</h2>

                            <div className="footer-icons">
                                <a
                                    href="https://github.com/AlicePisciuneri"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/alice-pisciuneri-b55275344/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>

                                <a
                                    href="mailto:alice.corleto@libero.it"
                                    aria-label="Email"
                                >
                                    <FaEnvelope />
                                </a>
                            </div>

                            <p className="footer-note">
                                Elys Digital Words · Web, scrittura e visione editoriale
                            </p>
                        </div>
                    </footer>
                </main>
            </div>
        </>
    )
}

export default HomePage