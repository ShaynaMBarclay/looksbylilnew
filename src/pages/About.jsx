import { about, values } from '../data/siteContent.js'
import ValueCard from '../components/ValueCard.jsx'
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
          <aside className="about-aside checker" aria-hidden="true">
            <div className="about-aside__card">
              <p>Inclusive by design</p>
            </div>
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