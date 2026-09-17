import { useEffect } from 'react'
import { about, values, calmCut, business } from '../data/siteContent.js'
import ValueCard from '../components/ValueCard.jsx'
import lilyImg from '../assets/lily.png'
import '../styles/About.css'
import '../styles/Services.css'

const IG_REEL_URL = 'https://www.instagram.com/reel/DZIP4SSPEgG/'

export default function About() {
  useEffect(() => {
    const SCRIPT_SRC = 'https://www.instagram.com/embed.js'
    const process = () => window.instgrm?.Embeds?.process()

    if (window.instgrm) {
      process()
      return
    }

    let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
    if (!script) {
      script = document.createElement('script')
      script.src = SCRIPT_SRC
      script.async = true
      document.body.appendChild(script)
    }
    script.addEventListener('load', process)
    return () => script.removeEventListener('load', process)
  }, [])

  return (
    <div className="about-page">
      <section className="section">
        <div className="container about-layout">
          <div className="about-body">
            <span className="eyebrow">Our shop</span>
            <h2>{about.heading}</h2>
            {about.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <aside className="about-aside">
            <img
              src={lilyImg}
              alt="Lily, owner of Looks By Lil"
              className="about-aside__img"
            />
            <p className="about-aside__blurb">
              <strong>Inclusive by design.</strong> An affirming, sensory-aware
              chair where everyone is welcome exactly as they are.
            </p>
          </aside>
        </div>
      </section>

      {/* Calm Cut — sensory hour */}
      <section className="section about-calmcut-section">
        <div className="container">
          <div className="calmcut-head">
            <span className="eyebrow">{calmCut.eyebrow}</span>
            <h2>{calmCut.heading}</h2>
          </div>

          <div className="calmcut-layout">
            <div className="calmcut-card">
              <div className="calmcut-card__body">
                {calmCut.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <a
                  href={business.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary calmcut-card__cta"
                >
                  Book a Calm Cut
                </a>
              </div>
            </div>

            <aside className="calmcut-social">
              <div className="calmcut-social__frame">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`${IG_REEL_URL}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    margin: 0,
                    width: '100%',
                    maxWidth: '100%',
                    minWidth: 0,
                  }}
                >
                  <a href={IG_REEL_URL} target="_blank" rel="noreferrer">
                    View this reel on Instagram
                  </a>
                </blockquote>
              </div>
              <p className="calmcut-social__note">
                See the space and the vibe before your visit.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section about-values-section">
        <div className="container">
          <span className="eyebrow">Our promises</span>
          <h2>What you can count on</h2>
          <div className="about-values">
            {values.map((v) => (
              <ValueCard key={v.id} value={v} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}