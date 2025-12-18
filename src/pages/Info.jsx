import SectionHeading from '../components/SectionHeading'

function Info() {
  return (
    <section className="section page">
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
  )
}

export default Info
