const navItems = [
  { id: 'home', label: 'Home', path: '#home' },
  { id: 'giorno', label: 'Il nostro giorno', path: '#giorno' },
  { id: 'info', label: 'Info utili', path: '#info' },
  { id: 'lista-nozze', label: 'Lista nozze', path: '#lista-nozze' },
  { id: 'rsvp', label: 'RSVP', path: '#rsvp' },
]

function Sidebar({ isOpen, onToggle, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'is-open' : ''}`}>
      <div className="sidebar__top">
        <div className="monogram">G A</div>
      </div>
      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <a key={item.id} href={item.path} onClick={onClose}>
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
