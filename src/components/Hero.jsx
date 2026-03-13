import Countdown from './Countdown'
import heroPhoto from '../assets/IMG_1607.PNG'

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `linear-gradient(rgba(8, 12, 28, 0.58), rgba(8, 12, 28, 0.65)), url(${heroPhoto})` }}
    >
      <p className="hero__date">04.07.2026</p>
      <h1 className="hero__title">
        <span>Giulia e Alessandro</span>
      </h1>
      <p className="hero__subtitle">Monte Argentario, Toscana</p>
      <Countdown targetDate="2026-07-04T15:30:00" />
    </section>
  )
}

export default Hero
