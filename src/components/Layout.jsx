import { useState } from 'react'
import Sidebar from './Sidebar'

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="app">
      <header className="topbar">
        <button
          className={`burger is-floating ${sidebarOpen ? 'is-open' : ''}`}
          onClick={toggleSidebar}
          type="button"
          aria-label={sidebarOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={sidebarOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} onClose={closeSidebar} />
      <div
        className={`overlay ${sidebarOpen ? 'is-visible' : ''}`}
        onClick={closeSidebar}
        role="presentation"
      />
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <p>Giulia & Alessandro - 4 Luglio 2026</p>
      </footer>
    </div>
  )
}

export default Layout
