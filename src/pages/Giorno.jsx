import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

function Giorno() {
  return (
    <section className="section page page--parchment" id="giorno">
      <Reveal>
        <SectionHeading
          title="Il Nostro Giorno"
          subtitle="Non vediamo l'ora di vivere questa giornata insieme a voi!"
        />
      </Reveal>
      <Reveal delay={0.15}>
        <div className="day-grid">
          <article>
            <h3>Cerimonia</h3>
            <p>Abbiamo scelto di celebrare questo giorno nel nostro posto del cuore, a casa.</p>
            <p>La cerimonia avra inizio alle ore 18:00 e da li continueremo a festeggiare insieme per tutta la serata.</p>
          </article>
        </div>
      </Reveal>
      <Reveal delay={0.25}>
        <div className="info-map wide">
          <h3>Posizione</h3>
          <a className="poi-link" href="https://share.google/hlEPeL9zCIPNkQ1Yv" target="_blank" rel="noreferrer">
            Cala dell'Olio
          </a>
        </div>
      </Reveal>
    </section>
  )
}

export default Giorno
