function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section__heading">
      {eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
