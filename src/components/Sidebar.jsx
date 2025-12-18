const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'storia', label: 'La nostra storia' },
  { id: 'giorno', label: 'Il giorno' },
  { id: 'location', label: 'Location' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'lista-nozze', label: 'Lista nozze' },
  { id: 'info', label: 'Info utili' },
]

function Sidebar({ isOpen, onToggle }) {
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
          <a key={item.id} href={`#${item.id}`} onClick={onToggle}>
            {item.label}
          </a>
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
