import SectionHeading from '../components/SectionHeading'
import RsvpForm from '../components/RsvpForm'

function Rsvp() {
  return (
    <section className="section page page--light rsvp-page">
      <SectionHeading
        title="RSVP"
        subtitle="In questa sezione potete comunicarci la vostra presenza per il giorno del nostro matrimonio e specificare eventuali informazioni utili. Vi chiediamo la cortesia di compilare il form entro il 30 aprile."
      />
      <RsvpForm />
    </section>
  )
}

export default Rsvp
