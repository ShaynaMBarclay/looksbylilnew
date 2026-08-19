import { business, hours } from '../data/siteContent.js'
import door from '../assets/doorfront.webp'
import '../styles/Contact.css'
import '../styles/Services.css'

export default function Contact() {
  const mapQuery = encodeURIComponent(business.address)

  return (
    <div className="contact-page">
      <section className="section contact-visit-section">
        <div className="container contact-visit">
          <div className="contact-visit__text">
            <span className="eyebrow">Come see us</span>
            <h1>Contact &amp; Visit</h1>
            <p>
              We're on Main Street in Gaithersburg. Walk-ins welcome when the
              chair's open, booking ahead is safest.
            </p>
            <p>
              Tan door with "Salon Concept Suites." Walk up two flights of
              stairs and we are on the right! Click the address below for
              directions.
            </p>
          </div>
          <img
            src={door}
            alt="Tan front door with Salon Concept Suites signage"
            className="contact-visit__img"
          />
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <div className="contact-block">
              <h3>Location</h3>
              <p>{business.address}</p>
            </div>
            <div className="contact-block">
              <h3>Get in touch</h3>
              <p>
                <a href={`tel:${business.phone.replace(/[^0-9+]/g, '')}`}>
                  {business.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </p>
            </div>
            <div className="contact-block">
              <h3>Hours</h3>
              <ul className="contact-hours">
                {hours.map((h) => (
                  <li key={h.day}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              Book an Appointment
            </a>
          </div>

          <div className="contact-map">
            <iframe
              title="Map to Looks By Lil"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}