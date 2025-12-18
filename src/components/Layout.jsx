import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} onClose={closeSidebar} />
      <button className="mobile-cta" onClick={toggleSidebar} type="button">
        Menu
      </button>
      <div
        className={`overlay ${sidebarOpen ? 'is-visible' : ''}`}
        onClick={closeSidebar}
        role="presentation"
      />
      <main className="content">
        <Outlet />
        <footer className="footer">
          <p>Giulia & Alessandro - 4 Luglio 2026</p>
        </footer>
      </main>
    </div>
  )
}

export default Layout
