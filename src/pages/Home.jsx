import { Link } from 'react-router-dom'
import { business, services, values } from '../data/siteContent.js'
import ServiceCard from '../components/ServiceCard.jsx'
import ValueCard from '../components/ValueCard.jsx'
import '../styles/Home.css'

export default function Home() {
  const featured = services.slice(0, 3)

  return (
    <div className="home">
      {/* Hero */}
      <section className="home-hero">
        <div className="container home-hero__inner">
          <div className="home-hero__text">
            <span className="eyebrow">Kentlands, MD · Barber Shop</span>
            <h1>{business.name}</h1>
            <p className="home-hero__lede">{business.tagline}</p>
            <p className="home-hero__sub">
              An LGBTQ+ friendly, autism &amp; sensory-friendly chair where a
              great cut comes with a space you can relax in.
            </p>
            <div className="home-hero__cta">
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                Book Now
              </a>
              <Link to="/services" className="btn btn--green">
                See Services
              </Link>
            </div>
          </div>
          <div className="home-hero__panel checker" aria-hidden="true">
            <div className="home-hero__badge">
              <span>Everyone</span>
              <span>Belongs</span>
              <span>Here</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">What we're about</span>
          <h2>A cut &amp; a space that fit you</h2>
          <div className="home-values">
            {values.map((v) => (
              <ValueCard key={v.id} value={v} />
            ))}
          </div>
        </div>
      </section>

      <div className="checker checker-strip home-divider" aria-hidden="true" />

      {/* Featured services */}
      <section className="section">
        <div className="container">
          <div className="home-services__head">
            <div>
              <span className="eyebrow">On the menu</span>
              <h2>Popular services</h2>
            </div>
            <Link to="/services" className="home-services__all">
              View full menu →
            </Link>
          </div>
          <div className="home-services__grid">
            {featured.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section home-cta">
        <div className="container home-cta__inner">
          <h2>Ready for a fresh look?</h2>
          <p>
            Booking online takes a minute. Need a sensory-friendly setup? Review our detailed services to find your best fit, before booking.
          </p>
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </div>
  )
}