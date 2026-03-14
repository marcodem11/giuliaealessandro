import { useState } from 'react'
import { supabase } from '../lib/supabase'

function RsvpForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const form = event.target
    const formData = new FormData(form)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      attendance: formData.get('attendance'),
      adults: formData.get('adults') ? Number(formData.get('adults')) : null,
      kids: formData.get('kids') ? Number(formData.get('kids')) : 0,
      guests: formData.get('guests') || null,
      diet: formData.get('diet') || null,
    }

    const { error: dbError } = await supabase.from('rsvp').insert([data])

    setLoading(false)

    if (dbError) {
      setError('Si è verificato un errore. Riprova tra poco.')
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rsvp" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>Grazie per aver confermato!</p>
        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
          La vostra risposta è stata registrata correttamente.
        </p>
      </div>
    )
  }

  return (
    <form className="rsvp" onSubmit={handleSubmit}>
      <div className="rsvp__grid">
        <label>
          Nome e Cognome*
          <input name="name" placeholder="Es. Giulia Rossi" required />
        </label>
        <label>
          Email*
          <input name="email" type="email" placeholder="nome@email.com" required />
        </label>
        <label>
          Ci sarete il giorno del nostro matrimonio?*
          <select name="attendance" required>
            <option value="">Seleziona</option>
            <option value="yes">Sì, con grande piacere</option>
            <option value="no">No, purtroppo no</option>
          </select>
        </label>
        <label>
          Quanti adulti sarete in totale?
          <select name="adults" required>
            <option value="">Seleziona numero</option>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          Ci saranno bambini? Se sì, specifica quanti
          <select name="kids">
            <option value="">Seleziona numero</option>
            {[0, 1, 2, 3, 4].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className="rsvp__full">
          Per favore specifica qui i nomi di adulti e bambini indicati
          <textarea name="guests" rows="2" />
        </label>
        <label className="rsvp__full">
          C'è qualcuno che ha intolleranze o preferenze alimentari? Specifica il nome e la sua necessità
          <textarea name="diet" rows="3" />
        </label>
      </div>
      {error && <p style={{ color: '#a03030', fontSize: '0.82rem', textAlign: 'center' }}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'INVIO IN CORSO...' : 'INVIA'}
      </button>
    </form>
  )
}

export default RsvpForm
