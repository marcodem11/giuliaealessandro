import { useRef, useEffect } from 'react'
import Countdown from './Countdown'
import heroVideo from '../assets/video1.MOV'

function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Force muted (some iOS versions need the property, not just the attribute)
    video.muted = true
    // Remove controls so no play button can appear
    video.controls = false
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    const tryPlay = () => {
      video.muted = true
      const promise = video.play()
      if (promise) promise.catch(() => {})
    }

    tryPlay()

    // Retry when video data is ready
    video.addEventListener('loadeddata', tryPlay)
    video.addEventListener('canplay', tryPlay)

    // Retry when the video becomes visible (handles iOS scroll-to-play)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay()
      },
      { threshold: 0.1 }
    )
    observer.observe(video)

    // Retry on any user interaction (touch, scroll, click)
    const events = ['touchstart', 'scroll', 'click', 'pointerdown']
    const onInteraction = () => {
      tryPlay()
      events.forEach(e => document.removeEventListener(e, onInteraction))
    }
    events.forEach(e => document.addEventListener(e, onInteraction, { once: true }))

    return () => {
      observer.disconnect()
      video.removeEventListener('loadeddata', tryPlay)
      video.removeEventListener('canplay', tryPlay)
      events.forEach(e => document.removeEventListener(e, onInteraction))
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
