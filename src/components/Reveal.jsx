import { useScrollReveal } from '../hooks/useScrollReveal'

function Reveal({ children, delay = 0, direction = 'up' }) {
  const [ref, isVisible] = useScrollReveal(0.12)

  const directions = {
    up: 'translateY(30px)',
    down: 'translateY(-30px)',
    left: 'translateX(30px)',
    right: 'translateX(-30px)',
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : directions[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default Reveal
