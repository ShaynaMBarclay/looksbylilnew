import { Link } from 'react-router-dom'
import { business, hours } from '../data/siteContent.js'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="checker checker-strip footer__strip" />
      <div className="container footer__inner">
        <div className="footer__col">
          <h3 className="footer__brand">{business.name}</h3>
          <p>{business.tagline}</p>
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Book an Appointment
          </a>
        </div>

        <div className="footer__col">
          <h4>Visit</h4>
          <p>{business.address}</p>
          <p>
            <a href={`tel:${business.phone.replace(/[^0-9+]/g, '')}`}>
              {business.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
        </div>

        <div className="footer__col">
          <h4>Hours</h4>
          <ul className="footer__hours">
            {hours.map((h) => (
              <li key={h.day}>
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul className="footer__nav">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        <p>LGBTQ+ friendly · Autism &amp; sensory friendly</p>
      </div>
    </footer>
  )
}