import SectionHeading from '../components/SectionHeading'

function Info() {
  return (
    <section className="section page page--light">
      <SectionHeading title="INFO UTILI" subtitle="Come arrivare" />
      <div className="info-grid">
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

        <article>
          <h4>Parcheggio presso la location</h4>
          <p>
            Per chi dovrà raggiungere il parcheggio presso la location l'indirizzo da seguire sarà
            il seguente:
          </p>
          <p>[indirizzo]</p>
          <p>
            Nei giorni precedenti all'evento riceverete un breve video con le indicazioni per
            raggiungere l'ingresso.
          </p>
        </article>

        <article>
          <h4>Servizio navetta</h4>
          <p>
            Per chi raggiungerà la location con il servizio navetta, sarà possibile lasciare l'auto
            nel parcheggio a Porto Santo Stefano, presso: [indirizzo]
          </p>
          <p>Da lì partiranno le navette che accompagneranno gli ospiti alla casa.</p>
          <p>
            Nei giorni precedenti all'evento riceverete tutti i dettagli e gli orari del servizio.
          </p>
        </article>

        <article>
          <h4>Dove soggiornare</h4>
          <p>
            La casa si trova sulla panoramica del Monte Argentario, a pochi minuti da diverse
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
      </div>
    </section>
  )
}

export default Info
