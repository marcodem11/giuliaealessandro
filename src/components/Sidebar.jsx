import { NavLink } from 'react-router-dom'

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'giorno', label: 'Il nostro giorno', path: '/giorno' },
  { id: 'info', label: 'Info utili', path: '/info' },
  { id: 'rsvp', label: 'RSVP', path: '/rsvp' },
  { id: 'lista-nozze', label: 'Lista nozze', path: '/lista-nozze' },
]

function Sidebar({ isOpen, onToggle, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'is-open' : ''}`}>
      <div className="sidebar__top">
        <div className="monogram">G A</div>
        <button
          className="sidebar__toggle"
          onClick={onToggle}
          type="button"
          aria-label="Chiudi menu"
        >
          Chiudi
        </button>
      </div>
      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <NavLink key={item.id} to={item.path} onClick={onClose} end>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar__footer">
        <span>4 Luglio 2026</span>
        <span>Monte Argentario</span>
      </div>
    </aside>
  )
}

export default Sidebar
