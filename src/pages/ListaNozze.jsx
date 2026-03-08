import SectionHeading from '../components/SectionHeading'

function ListaNozze() {
  return (
    <section className="section page page--light">
      <SectionHeading
        title="Lista Nozze"
        subtitle="La vostra presenza sarà il dono più prezioso, ma se desideraste farci un regalo e contribuire al nostro viaggio di nozze trovate di seguito i dettagli."
      />
      <div className="gift gift--stack">
        <p>IBAN: IT12N0623003208000040901854</p>
        <p>Intestato a: De Michele Giulia e Surace Alessandro</p>
        <p>Grazie di cuore</p>
      </div>
    </section>
  )
}

export default ListaNozze
