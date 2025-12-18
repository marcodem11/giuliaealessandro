import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import SectionHeading from './components/SectionHeading'
import RsvpForm from './components/RsvpForm'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <button className="mobile-cta" onClick={toggleSidebar} type="button">
        Menu
      </button>
      <div
        className={`overlay ${sidebarOpen ? 'is-visible' : ''}`}
        onClick={closeSidebar}
        role="presentation"
      />
      <main className="content">
        <Hero />

        <section className="section" id="storia">
          <SectionHeading
            eyebrow="Un po' di noi"
            title="Un viaggio iniziato al mare"
            subtitle="Ci siamo scelti con il sorriso di una sera d'estate e da allora non abbiamo piu smesso di sognare insieme."
          />
          <div className="story">
            <p>
              Il nostro matrimonio sara un momento intimo ma pieno di energia, con le persone che
              amiamo di piu. Ci piacerebbe che ogni ospite si sentisse a casa e libero di godersi
              ogni dettaglio.
            </p>
            <p>
              Monte Argentario e il luogo che ci ha fatto innamorare di un ritmo piu lento,
              di tramonti colorati e di promesse sincere. Non vediamo l'ora di festeggiare con voi.
            </p>
          </div>
        </section>

        <section className="section" id="giorno">
          <SectionHeading
            eyebrow="Il nostro giorno"
            title="4 luglio 2026"
            subtitle="Una giornata pensata per condividere emozioni, sorrisi e un brindisi al mare."
          />
          <div className="cards">
            <article>
              <h3>Cerimonia</h3>
              <p>Ore 15:30 - Chiesa di Santo Stefano, Orbetello</p>
            </article>
            <article>
              <h3>Aperitivo</h3>
              <p>Ore 17:00 - Giardino della Tenuta Argentario</p>
            </article>
            <article>
              <h3>Cena e festa</h3>
              <p>Ore 19:30 - Sala delle Limonaie, musica dal vivo</p>
            </article>
          </div>
        </section>

        <section className="section" id="location">
          <SectionHeading
            eyebrow="Location"
            title="Monte Argentario"
            subtitle="Una terrazza sul mare per vivere insieme il nostro si."
          />
          <div className="details">
            <div>
              <h4>Ricevimento</h4>
              <p>Tenuta Argentario</p>
              <p>Strada Panoramica, 12 - 58019 Monte Argentario</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                Apri su Google Maps
              </a>
            </div>
            <div>
              <h4>Come arrivare</h4>
              <ul>
                <li>Parcheggio disponibile in loco (posti limitati).</li>
                <li>Navetta dedicata dalla chiesa alla location.</li>
                <li>Consigliato arrivo entro le 16:30.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="rsvp">
          <SectionHeading
            eyebrow="RSVP"
            title="Conferma la tua presenza"
            subtitle="Vi chiediamo di compilare il form entro il 15 giugno 2026."
          />
          <RsvpForm />
        </section>

        <section className="section" id="lista-nozze">
          <SectionHeading
            eyebrow="Lista nozze"
            title="Il nostro viaggio"
            subtitle="Il vostro affetto e gia un dono, ma se desiderate contribuire al nostro viaggio, trovate i dettagli qui."
          />
          <div className="gift">
            <div>
              <h4>Viaggio in Giappone</h4>
              <p>IBAN: IT00 X000 0000 0000 0000 0000 000</p>
              <p>Intestato a: Giulia Bianchi e Alessandro Rossi</p>
            </div>
            <div>
              <p>
                In alternativa, potete lasciare un pensiero nella scatola dei desideri
                che troverete in location.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="info">
          <SectionHeading
            eyebrow="Info utili"
            title="Piccoli dettagli"
            subtitle="Per rendere la giornata ancora piu piacevole per tutti."
          />
          <div className="info-grid">
            <article>
              <h4>Dress code</h4>
              <p>Toni chiari ispirati al mare: sabbia, azzurro, verde salvia.</p>
            </article>
            <article>
              <h4>Bambini</h4>
              <p>Sara presente un angolo dedicato ai piu piccoli con baby-sitter.</p>
            </article>
            <article>
              <h4>Contatti</h4>
              <p>Giulia: +39 333 000 0000</p>
              <p>Alessandro: +39 333 000 0001</p>
            </article>
          </div>
        </section>

        <footer className="footer">
          <p>Giulia & Alessandro - 4 Luglio 2026</p>
        </footer>
      </main>
    </div>
  )
}

export default App
