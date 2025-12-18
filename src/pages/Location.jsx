import SectionHeading from '../components/SectionHeading'

function Location() {
  return (
    <section className="section page">
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
  )
}

export default Location
