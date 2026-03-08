import { useEffect, useMemo, useState } from 'react'

const buildTimeLeft = (target) => {
  const now = new Date()
  const diff = Math.max(target.getTime() - now.getTime(), 0)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
}

function Countdown({ targetDate }) {
  const target = useMemo(() => new Date(targetDate), [targetDate])
  const [timeLeft, setTimeLeft] = useState(() => buildTimeLeft(target))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(buildTimeLeft(target))
    }, 1000)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="countdown">
      <p className="countdown__label">Mancano</p>
      <div className="countdown__grid">
        <span>{String(timeLeft.days).padStart(2, '0')} giorni</span>
        <span>{String(timeLeft.hours).padStart(2, '0')} ore</span>
        <span>{String(timeLeft.minutes).padStart(2, '0')} minuti</span>
        <span>{String(timeLeft.seconds).padStart(2, '0')} secondi</span>
      </div>
    </div>
  )
}

export default Countdown
