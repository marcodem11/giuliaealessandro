import SectionHeading from '../components/SectionHeading'

function Giorno() {
  return (
    <section className="section page">
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
  )
}

export default Giorno
