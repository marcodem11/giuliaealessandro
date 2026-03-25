import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Admin() {
  const navigate = useNavigate()
  const [rsvps, setRsvps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem('bride_auth') !== 'true') {
      navigate('/login')
      return
    }

    const fetchRsvps = async () => {
      const { data, error } = await supabase
        .from('rsvp')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Errore fetch RSVP:', error.message)
      } else {
        setRsvps(data || [])
      }
      setLoading(false)
    }

    fetchRsvps()
  }, [navigate])

  const handleLogout = () => {
    sessionStorage.removeItem('bride_auth')
    navigate('/')
  }

  const attending = rsvps.filter((r) => r.attendance === 'yes')
  const notAttending = rsvps.filter((r) => r.attendance === 'no')
  const totalAdults = attending.reduce((sum, r) => sum + (r.adults || 0), 0)
  const totalKids = attending.reduce((sum, r) => sum + (r.kids || 0), 0)

  return (
    <div className="admin-page">
      <header className="admin-header">
        <button className="login-back" onClick={handleLogout}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="admin-header__title">Rispostee RSVP</h1>
      </header>

      {loading ? (
        <p className="admin-loading">Caricamento...</p>
      ) : (
        <>
          <div className="admin-stats">
            <div className="admin-stat">
              <span className="admin-stat__number">{rsvps.length}</span>
              <span className="admin-stat__label">Risposte</span>
            </div>
            <div className="admin-stat">
              <span className="admin-stat__number">{attending.length}</span>
              <span className="admin-stat__label">Confermati</span>
            </div>
            <div className="admin-stat">
              <span className="admin-stat__number">{totalAdults}</span>
              <span className="admin-stat__label">Adulti</span>
            </div>
            <div className="admin-stat">
              <span className="admin-stat__number">{totalKids}</span>
              <span className="admin-stat__label">Bambini</span>
            </div>
            <div className="admin-stat">
              <span className="admin-stat__number">{notAttending.length}</span>
              <span className="admin-stat__label">Non vengono</span>
            </div>
          </div>

          {rsvps.length === 0 ? (
            <p className="admin-empty">Nessuna risposta ancora.</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Presenza</th>
                    <th>Adulti</th>
                    <th>Bambini</th>
                    <th>Accompagnatori</th>
                    <th>Dieta</th>
                  </tr>
                </thead>
                <tbody>
                  {rsvps.map((r, i) => (
                    <tr key={r.id || i}>
                      <td>{r.name}</td>
                      <td>{r.email}</td>
                      <td>
                        <span className={`admin-badge ${r.attendance === 'yes' ? 'admin-badge--yes' : 'admin-badge--no'}`}>
                          {r.attendance === 'yes' ? 'Sì' : 'No'}
                        </span>
                      </td>
                      <td>{r.adults || '—'}</td>
                      <td>{r.kids || '0'}</td>
                      <td>{r.guests || '—'}</td>
                      <td>{r.diet || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Admin
