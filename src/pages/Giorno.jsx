import SectionHeading from '../components/SectionHeading'

function Giorno() {
  return (
    <section className="section page page--parchment" id="giorno">
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
        <a className="poi-link" href="https://share.google/hlEPeL9zCIPNkQ1Yv" target="_blank" rel="noreferrer">
          📍 Casa dell'Olio (clicca qui)
        </a>
      </div>
    </section>
  )
}

export default Giorno
