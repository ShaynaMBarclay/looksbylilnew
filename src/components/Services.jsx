import { business, services } from '../data/siteContent.js'
import ServiceCard from '../components/ServiceCard.jsx'
import '../styles/Services.css'

export default function Services() {
  return (
    <div className="services-page">
      <section className="page-hero checker">
        <div className="container page-hero__inner">
          <span className="eyebrow">The full menu</span>
          <h1>Services</h1>
          <p>
            Precision cuts, fades, and beard work — in an affirming,
            sensory-aware space. Prices start from the amounts shown.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>

          <p className="services-note">
            Don't see what you're looking for? Reach out and we'll sort it out.
          </p>

          <div className="services-cta">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}