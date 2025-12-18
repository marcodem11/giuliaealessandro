import SectionHeading from '../components/SectionHeading'

function ListaNozze() {
  return (
    <section className="section page">
      <SectionHeading
        eyebrow="Lista nozze"
        title="Il nostro viaggio"
        subtitle="Il vostro affetto e gia un dono, ma se desiderate contribuire al nostro viaggio, trovate i dettagli qui."
      />
      <div className="gift">
        <div>
          <h4>Viaggio in Giappone</h4>
          <p>IBAN: IT00 X000 0000 0000 0000 0000 000</p>
          <p>Intestato a: Giulia Bianchi e Alessandro Rossi</p>
        </div>
        <div>
          <p>
            In alternativa, potete lasciare un pensiero nella scatola dei desideri
            che troverete in location.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ListaNozze
