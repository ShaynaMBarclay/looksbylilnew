import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { business } from '../data/siteContent.js'
import '../styles/Navbar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          {business.name}
        </Link>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'is-active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary nav__book"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </nav>
      </div>
      <div className="checker checker-strip" />
    </header>
  )
}