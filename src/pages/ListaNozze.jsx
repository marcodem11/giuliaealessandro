import SectionHeading from '../components/SectionHeading'
import polaroid1 from '../assets/polaroid1.jpeg'
import polaroid2 from '../assets/polaroid2.jpeg'
import polaroid3 from '../assets/polaroid3.jpeg'
import polaroid4 from '../assets/polaroid4.jpeg'
import polaroid5 from '../assets/polaroid5.jpeg'

function ListaNozze() {
  return (
    <section className="section page page--jungle" id="lista-nozze">
      <SectionHeading
        title="Lista Nozze"
        subtitle="La vostra presenza sara il dono piu prezioso, ma se desideraste farci un regalo e contribuire al nostro viaggio di nozze trovate di seguito i dettagli."
      />
      <div className="gift gift--stack">
        <p>IBAN: IT12N0623003208000040901854</p>
        <p>Intestato a: De Michele Giulia e Surace Alessandro</p>
        <p>Grazie di cuore</p>
      </div>
      <div className="polaroid-gallery">
        <div className="polaroid">
          <img src={polaroid1} alt="Giulia e Alessandro" />
        </div>
        <div className="polaroid">
          <img src={polaroid2} alt="Giulia e Alessandro" />
        </div>
        <div className="polaroid">
          <img src={polaroid3} alt="Giulia e Alessandro" />
        </div>
        <div className="polaroid">
          <img src={polaroid4} alt="Giulia e Alessandro" />
        </div>
        <div className="polaroid">
          <img src={polaroid5} alt="Giulia e Alessandro" />
        </div>
      </div>
    </section>
  )
}

export default ListaNozze
