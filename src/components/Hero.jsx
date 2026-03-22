import Countdown from './Countdown'
import heroVideo from '../assets/video.mp4'

function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero__video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero__overlay" />
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
