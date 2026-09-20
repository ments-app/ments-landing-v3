import Image from "next/image";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { landingAsset, landingUrl } from "../site";
import office from "../../../public/about/nirmaan-building.jpg";
import collaboration from "../../../public/about/office-min.png";

export const metadata = {
  title: "About us — Ments",
  description:
    "Meet the people building Ments and explore our roots at Nirmaan, IIT Madras, Chennai.",
};

// People/photo mapping restored from v3 at af20fea; roster updated per user on 2026-09-12.
const team = [
  ["RajKamal", "Co-Founder & CEO", "IIT Madras", "krishna.jpeg"],
  ["Ayushman", "Co-Founder & COO", "IIT Madras", "ayushman.jpeg"],
  ["Dev", "Head of Marketing", "Punjab University", "dev.png"],
  ["Rithik", "Content Creator", "IIT Madras", "ritik.jpg"],
  ["Shrishti", "Content Writer", "IIT Madras", "shrishti.jpg"],
  ["Ashish", "Web Developer", "IIT Madras", "ashish.png"],
  ["Siddhartha Kushwaha", "Brand Designer", "IIT Madras", "Siddarth.jpg"],
];

export default function AboutPage() {
  return (
    <div className="interior about-page">
      <SiteNav />
      <main id="main">
        <section className="marketing-hero about-hero">
          <div className="marketing-copy">
            <div className="section-label">THE PEOPLE BEHIND MENTS</div>
            <h1>
              Built by people.
              <br />
              <em>For people who build.</em>
            </h1>
            <p className="hero-sub">
              A small, fast-moving crew building tools for founders and future
              makers. We’re bringing the startup ecosystem closer together.
            </p>
            <div className="hero-actions">
              <a href="#team" className="btn btn-primary">
                Meet the team ↗
              </a>
              <a href="#workspace" className="hero-link">
                Visit our workspace ↓
              </a>
            </div>
          </div>
          <div className="about-art">
            <span>IDEAS BECOME BETTER, TOGETHER.</span>
            <Image
              src={collaboration}
              alt="Collaboration illustration from the original Ments website"
              sizes="(max-width: 900px) 90vw, 45vw"
              preload
            />
            <span>YOU DON’T WORK FOR MENTS. YOU BUILD IT WITH US.</span>
          </div>
        </section>
        <nav className="page-wayfinding" aria-label="On this page">
          <a href="#workspace">01 / Our workspace</a>
          <a href="#team">02 / Meet the team</a>
          <a href="#connect">03 / Connect with us</a>
        </nav>
        <section id="workspace" className="section container workspace-section">
          <div className="workspace-heading">
            <div className="section-label">01 / WHERE IT BEGAN</div>
            <h2 className="section-head">
              Room for ideas.
              <br />
              <em className="serif">Space to build.</em>
            </h2>
            <p className="section-lead">
              Our journey began with pre-incubation at Nirmaan, IIT Madras — a
              space for turning ambitious ideas into something real.
            </p>
            <div className="location-label">
              <span aria-hidden="true">◎</span>
              <div>
                <strong>Nirmaan, IIT Madras</strong>
                <span>Chennai, India</span>
              </div>
            </div>
          </div>
          <figure className="workspace-photo">
            <Image
              src={office}
              alt="Sudha and Shankar Innovation Hub at IIT Madras, home to the Nirmaan workspace featured on the original Ments website"
              sizes="(max-width: 900px) 90vw, 60vw"
            />
            <figcaption>
              <span>OUR WORKSPACE</span>
              <span>IIT MADRAS · CHENNAI ↗</span>
            </figcaption>
          </figure>
        </section>
        <section id="team" className="section container team-section">
          <div className="section-heading-row">
            <div>
              <div className="section-label">02 / MEET THE TEAM</div>
              <h2 className="section-head">
                Different strengths.
                <br />
                <em className="serif">A shared ambition.</em>
              </h2>
            </div>
            <p>
              Meet the people bringing
              <br />
              the Ments ecosystem to life.
            </p>
          </div>
          <div className="team-grid">
            {team.map(([name, role, education, photo], i) => (
              <article className="team-card" key={name}>
                <div className="team-photo">
                  <Image
                    src={landingAsset(`/about/team/${photo}`)}
                    alt={name}
                    fill
                    sizes="(max-width: 600px) 44vw, (max-width: 1000px) 28vw, 22vw"
                  />
                  <span className="team-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{name}</h3>
                <p>{role}</p>
                <span>{education}</span>
              </article>
            ))}
          </div>
        </section>
        <section id="connect" className="cta-section">
          <div className="container">
            <div className="section-label">LET’S BUILD TOGETHER</div>
            <h2 className="section-head">
              Good things begin
              <br />
              <em className="serif">with a conversation.</em>
            </h2>
            <p>Have an idea, a collaboration, or a question for the team?</p>
            <div className="cta-actions">
              <a href="mailto:official@ments.app" className="btn btn-green">
                Say hello ↗
              </a>
              <a href={landingUrl("/events")} className="btn btn-outline-light">
                Explore collaborations
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
