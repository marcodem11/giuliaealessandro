import { useRef, useEffect, useState } from 'react'
import Countdown from './Countdown'
import heroVideoMov from '../assets/video1.MOV'
import heroVideoMp4 from '../assets/video2.mp4'
import fallbackImg from '../assets/IMG_1607.PNG'

function Hero() {
  const videoRef = useRef(null)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.controls = false
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    let settled = false

    const tryPlay = () => {
      if (settled) return
      video.muted = true
      const promise = video.play()
      if (promise) {
        promise.catch(() => {
          // Autoplay blocked — switch to fallback image
          if (!settled) {
            settled = true
            setUseFallback(true)
          }
        })
      }
    }

    // Mark as settled once video is actually playing
    const onPlaying = () => { settled = true }
    video.addEventListener('playing', onPlaying)

    // If the video fails to load entirely, switch to fallback
    const onError = () => {
      if (!settled) {
        settled = true
        setUseFallback(true)
      }
    }
    video.addEventListener('error', onError)

    // Timeout: if video hasn't played within 4s, show fallback
    const timeout = setTimeout(() => {
      if (!settled) {
        settled = true
        setUseFallback(true)
      }
    }, 4000)

    tryPlay()

    video.addEventListener('loadeddata', tryPlay)
    video.addEventListener('canplay', tryPlay)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay()
      },
      { threshold: 0.1 }
    )
    observer.observe(video)

    const events = ['touchstart', 'scroll', 'click', 'pointerdown']
    const onInteraction = () => {
      tryPlay()
      events.forEach(e => document.removeEventListener(e, onInteraction))
    }
    events.forEach(e => document.addEventListener(e, onInteraction, { once: true }))

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
      video.removeEventListener('playing', onPlaying)
      video.removeEventListener('error', onError)
      video.removeEventListener('loadeddata', tryPlay)
      video.removeEventListener('canplay', tryPlay)
      events.forEach(e => document.removeEventListener(e, onInteraction))
    }
  }, [])

  return (
    <section className="hero" id="home">
      {useFallback ? (
        <img
          className="hero__video"
          src={fallbackImg}
          alt=""
          aria-hidden="true"
        />
      ) : (
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline=""
          preload="auto"
        >
          <source src={heroVideoMp4} type="video/mp4" />
          <source src={heroVideoMov} type="video/quicktime" />
        </video>
      )}
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
