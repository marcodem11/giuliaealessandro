import { NavLink } from 'react-router-dom'

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'storia', label: 'La nostra storia', path: '/storia' },
  { id: 'giorno', label: 'Il giorno', path: '/giorno' },
  { id: 'location', label: 'Location', path: '/location' },
  { id: 'rsvp', label: 'RSVP', path: '/rsvp' },
  { id: 'lista-nozze', label: 'Lista nozze', path: '/lista-nozze' },
  { id: 'info', label: 'Info utili', path: '/info' },
]

function Sidebar({ isOpen, onToggle, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'is-open' : ''}`}>
      <div className="sidebar__top">
        <div className="monogram">G & A</div>
        <button className="sidebar__toggle" onClick={onToggle} type="button">
          {isOpen ? 'Chiudi' : 'Menu'}
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
