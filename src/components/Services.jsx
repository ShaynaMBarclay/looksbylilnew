import { business, services } from '../data/siteContent.js'
import ServiceCard from '../components/ServiceCard.jsx'
import '../styles/Services.css'

const BOOKING_URL =
  'https://book.squareup.com/appointments/9trdv592na54cd/location/L1FEC39XS0HR8/services'

export default function Services() {
  return (
    <div className="services-page">
      <section className="page-hero checker">
        <div className="container page-hero__inner">
          <span className="eyebrow">The full menu</span>
          <h1>Services</h1>
          <p>
            Precision cuts, fades, and beard work, in an affirming,
            sensory-aware space. Prices start from the amounts shown.
          </p>
        </div>
      </section>

      {/* How to book */}
      <section className="section booking-how">
        <div className="container">
          <div className="booking-how__card">
            <div className="booking-how__intro">
              <span className="eyebrow">Booking is easy</span>
              <h2>How to book</h2>
              <p>
                All booking happens on our Square page. Tap the button, pick
                your service, choose a time that works, and you’re set. The list
                below is just so you can read up on each service first.
              </p>
            </div>

            <ol className="booking-steps">
              <li className="booking-step">
                <span className="booking-step__num">1</span>
                <div>
                  <strong>Tap “Book Now”</strong>
                  <p>Opens our Square booking page in a new tab.</p>
                </div>
              </li>
              <li className="booking-step">
                <span className="booking-step__num">2</span>
                <div>
                  <strong>Pick your service &amp; time</strong>
                  <p>Choose what you want and a slot that fits your schedule.</p>
                </div>
              </li>
              <li className="booking-step">
                <span className="booking-step__num">3</span>
                <div>
                  <strong>Confirm &amp; you’re booked</strong>
                  <p>Add your details and you’ll get a confirmation. Done!</p>
                </div>
              </li>
            </ol>

            <div className="booking-how__cta">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary btn--book"
              >
                Book Now
              </a>
              <span className="booking-how__note">
                Have any questions? Text or call {business.phone}.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-menu">
        <div className="container">
          <span className="eyebrow">Read up first</span>
          <h2>The menu</h2>
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
              href={BOOKING_URL}
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