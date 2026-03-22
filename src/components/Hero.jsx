import { useRef, useEffect } from 'react'
import Countdown from './Countdown'
import heroVideo from '../assets/video.mp4'

function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Force muted (some iOS versions need the property, not just the attribute)
    video.muted = true

    // Try to play immediately
    const tryPlay = () => {
      const promise = video.play()
      if (promise) promise.catch(() => {})
    }

    tryPlay()

    // Fallback: retry when the video becomes visible (handles iOS scroll-to-play)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay()
      },
      { threshold: 0.3 }
    )
    observer.observe(video)

    // Fallback: retry on first user interaction
    const onInteraction = () => {
      tryPlay()
      document.removeEventListener('touchstart', onInteraction)
      document.removeEventListener('scroll', onInteraction)
    }
    document.addEventListener('touchstart', onInteraction, { once: true })
    document.addEventListener('scroll', onInteraction, { once: true })

    return () => {
      observer.disconnect()
      document.removeEventListener('touchstart', onInteraction)
      document.removeEventListener('scroll', onInteraction)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <video
        ref={videoRef}
        className="hero__video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline=""
        preload="auto"
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
