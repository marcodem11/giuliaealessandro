import { useState } from 'react'

function RsvpForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
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
          C'è qualcuno che ha tolleranze o preferenze alimentari? Specifica il nome e la sua necessità
          <textarea name="diet" rows="3" />
        </label>
      </div>
      <button type="submit">INVIA</button>
      {submitted && (
        <p className="rsvp__notice">
          Grazie! Questo e un form demo. Collega un servizio come Formspree o Netlify Forms per ricevere le risposte.
        </p>
      )}
    </form>
  )
}

export default RsvpForm
