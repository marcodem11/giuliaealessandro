import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CREDENTIALS = {
  username: 'giuliademichele',
  password: 'tobia01',
}

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
      sessionStorage.setItem('bride_auth', 'true')
      navigate('/admin')
    } else {
      setError('Credenziali non valide')
    }
  }

  return (
    <div className="login-page">
      <button className="login-back" onClick={() => navigate('/')}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
      </button>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form__title">Area Riservata</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="login-form__error">{error}</p>}
        <button type="submit" className="login-form__btn">Accedi</button>
      </form>
    </div>
  )
}

export default Login
