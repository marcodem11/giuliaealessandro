import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

function Info() {
  return (
    <section className="section page page--jungle" id="info">
      <Reveal>
        <SectionHeading title="Info Utili" />
      </Reveal>
      <div className="info-grid">
        <Reveal delay={0.1}>
          <article>
            <h4>Come arrivare</h4>
            <p>La nostra casa si trova in una zona con disponibilità limitata di parcheggio.</p>
            <p>Per facilitare l'arrivo di tutti gli ospiti abbiamo organizzato anche un servizio navetta.</p>
            <p>
              Nei giorni precedenti all'evento riceverete alcune informazioni pratiche per l'arrivo,
              insieme alla modalità di accesso prevista per ciascuno di voi (navetta o parcheggio
              presso la location).
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.2}>
          <article>
            <h4>Parcheggio presso la location</h4>
            <p>
              Per chi dovrà raggiungere il parcheggio presso la location l'indirizzo da seguire sarà
              il seguente:
            </p>
            <p>
              <a className="poi-link" href="https://www.google.com/maps/search/Cala+dell'Olio+Monte+Argentario" target="_blank" rel="noreferrer">
                Cala dell'Olio
              </a>
            </p>
            <p>
              Nei giorni precedenti all'evento riceverete un breve video con le indicazioni per
              raggiungere l'ingresso.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.3}>
          <article>
            <h4>Servizio navetta</h4>
            <p>
              Per chi raggiungerà la location con il servizio navetta, sarà possibile lasciare l'auto
              nel parcheggio a Porto Santo Stefano, presso:{' '}
              <a
                className="poi-link"
                href="https://maps.app.goo.gl/3KPV4aWkjZHBVdhx8"
                target="_blank"
                rel="noreferrer"
              >
                Via del Campone, 117
              </a>
            </p>
            <p>Da lì partiranno le navette che accompagneranno gli ospiti alla Location.</p>
            <p>
              Nei giorni precedenti all'evento riceverete tutti i dettagli e gli orari del servizio.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.4}>
          <article>
            <h4>Dove soggiornare</h4>
            <p>
              La Villa si trova sulla panoramica del Monte Argentario, a pochi minuti da diverse
              località dove è possibile trovare hotel, B&amp;B e appartamenti.
            </p>
            <p>
              Le zone con la maggiore disponibilità di alloggi sono Porto Santo Stefano e Porto
              Ercole, entrambe vicine alla casa e facilmente raggiungibili in auto (rispettivamente
              a circa 15 e 25 minuti di distanza).
            </p>
            <p>
              Considerato il periodo di alta stagione, suggeriamo di prenotare l'alloggio con un po'
              di anticipo.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

export default Info
