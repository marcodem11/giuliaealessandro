import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

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
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} onClose={closeSidebar} activeSection={activeSection} />
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
