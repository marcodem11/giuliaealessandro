import SectionHeading from '../components/SectionHeading'

function Giorno() {
  return (
    <section className="section page page--light">
      <SectionHeading
        title="IL NOSTRO GIORNO"
        subtitle="La cerimonia avrà inizio alle ore 18:00 e da lì continueremo a festeggiare insieme per tutta la serata."
      />
      <div className="day-grid">
        <article>
          <h3>Cerimonia</h3>
          <p>La cerimonia avrà inizio alle ore 18:00.</p>
        </article>
        <article>
          <h3>Il nostro posto del cuore</h3>
          <p>Abbiamo scelto di celebrare questo giorno nel nostro posto del cuore, a casa.</p>
        </article>
      </div>
      <div className="info-map wide">
        <h3>Posizione</h3>
        <div className="info-map__frame">
          <iframe
            title="Mappa Monte Argentario"
            src="https://www.google.com/maps?q=Monte+Argentario&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Giorno
