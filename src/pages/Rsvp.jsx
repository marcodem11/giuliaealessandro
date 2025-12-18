import SectionHeading from '../components/SectionHeading'
import RsvpForm from '../components/RsvpForm'

function Rsvp() {
  return (
    <section className="section page">
      <SectionHeading
        eyebrow="RSVP"
        title="Conferma la tua presenza"
        subtitle="Vi chiediamo di compilare il form entro il 15 giugno 2026."
      />
      <RsvpForm />
    </section>
  )
}

export default Rsvp
