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
          Nome e Cognome
          <input name="name" placeholder="Es. Giulia Rossi" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="nome@email.com" required />
        </label>
        <label>
          Parteciperai?
          <select name="attendance" required>
            <option value="">Seleziona</option>
            <option value="yes">Si, con piacere</option>
            <option value="no">No, purtroppo no</option>
          </select>
        </label>
        <label>
          Numero adulti
          <select name="adults" required>
            <option value="">Seleziona</option>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          Bambini (se presenti)
          <select name="kids">
            <option value="">Seleziona</option>
            {[0, 1, 2, 3, 4].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className="rsvp__full">
          Allergie o preferenze alimentari
          <input name="diet" placeholder="Es. vegetariano, senza glutine" />
        </label>
        <label className="rsvp__full">
          Trasporto desiderato
          <div className="rsvp__choices">
            <label className="rsvp__choice">
              <input type="checkbox" name="transfer" value="navetta" /> Navetta dalla chiesa alla location
            </label>
            <label className="rsvp__choice">
              <input type="checkbox" name="transfer" value="auto" /> Vengo con auto propria
            </label>
          </div>
        </label>
        <label className="rsvp__full">
          Messaggio per gli sposi
          <textarea name="message" rows="3" placeholder="Scrivi un pensiero" />
        </label>
      </div>
      <button type="submit">Conferma presenza</button>
      {submitted && (
        <p className="rsvp__notice">
          Grazie! Questo e un form demo. Collega un servizio come Formspree o Netlify Forms per ricevere le risposte.
        </p>
      )}
    </form>
  )
}

export default RsvpForm
