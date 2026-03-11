import SectionHeading from '../components/SectionHeading'
import RsvpForm from '../components/RsvpForm'
import Reveal from '../components/Reveal'

function Rsvp() {
  return (
    <section className="section page page--jungle rsvp-page" id="rsvp">
      <Reveal>
        <SectionHeading
          title="RSVP"
          subtitle="In questa sezione potete comunicarci la vostra presenza per il giorno del nostro matrimonio e specificare eventuali informazioni utili. Vi chiediamo la cortesia di compilare il form entro il 30 aprile."
        />
      </Reveal>
      <Reveal delay={0.15}>
        <RsvpForm />
      </Reveal>
    </section>
  )
}

export default Rsvp
