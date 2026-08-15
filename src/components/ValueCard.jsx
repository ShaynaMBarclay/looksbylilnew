import '../styles/ValueCard.css'

export default function ValueCard({ value }) {
  return (
    <article className="value-card">
      <h3 className="value-card__title">{value.title}</h3>
      <p className="value-card__blurb">{value.blurb}</p>
    </article>
  )
}