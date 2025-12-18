import Countdown from './Countdown'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__badge">Save the Date</div>
      <h1 className="hero__title">
        <span>Giulia</span>
        <span className="hero__amp">&amp;</span>
        <span>Alessandro</span>
      </h1>
      <p className="hero__subtitle">4 Luglio 2026 - Monte Argentario</p>
      <p className="hero__intro">
        Siamo felici di condividere questo momento con voi. Qui trovate
        tutti i dettagli della giornata, gli spostamenti e il modo per confermare
        la vostra presenza.
      </p>
      <Countdown targetDate="2026-07-04T15:30:00" />
    </section>
  )
}

export default Hero
