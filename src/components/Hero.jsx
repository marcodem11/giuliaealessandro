import Countdown from './Countdown'
import heroPhoto from '../assets/IMG_1607.PNG'

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `linear-gradient(rgba(8, 15, 29, 0.38), rgba(8, 15, 29, 0.42)), url(${heroPhoto})` }}
    >
      <h1 className="hero__title">
        <span>Giulia e Alessandro</span>
      </h1>
      <p className="hero__subtitle">4 Luglio 2026 - Monte Argentario</p>
      <Countdown targetDate="2026-07-04T15:30:00" />
    </section>
  )
}

export default Hero
