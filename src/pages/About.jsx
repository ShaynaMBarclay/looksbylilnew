import { about, values } from '../data/siteContent.js'
import ValueCard from '../components/ValueCard.jsx'
import lilyImg from '../assets/lily.png'
import '../styles/About.css'
import '../styles/Services.css' 

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Who we are</span>
          <h1>{about.heading}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container about-layout">
          <div className="about-body">
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