import '../styles/ServiceCard.css'

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      {service.image && (
        <div className="service-card__media">
          <img
            src={service.image}
            alt={service.name}
            className="service-card__img"
            style={{ objectPosition: service.imagePosition || 'center' }}
          />
        </div>
      )}
      <div className="service-card__body">
        <div className="service-card__head">
          <h3>{service.name}</h3>
          <span className="service-card__price">{service.price}</span>
        </div>
        <p className="service-card__duration">{service.duration}</p>
        <p className="service-card__desc">{service.description}</p>
      </div>
    </article>
  )
}