import Image from "next/image";
import { Journey, FeatureIcon } from "../components/Visuals";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { landingAsset } from "../site";

const CAPABILITIES = [
  {
    num: "01",
    title: "Cohort Management",
    copy: "Track every startup in your ecosystem from one dashboard — stage, status, activity and progress across all your cohorts at a glance.",
  },
  {
    num: "02",
    title: "Startup Onboarding",
    copy: "Add startups one by one or in batches, and organize them into cohorts that mirror your real programs and intakes.",
  },
  {
    num: "03",
    title: "Startup Verification",
    copy: "Verify startups before they represent your ecosystem — building quality and trust signals for students, investors and partners.",
  },
  {
    num: "04",
    title: "Marketplace Monetization",
    copy: "Turn curation into revenue — earn by selling access to your verified cohort and the talent pipeline around it.",
  },
  {
    num: "05",
    title: "Hiring Enablement",
    copy: "Let startups across your network post jobs and gigs, and open those opportunities to your students and community.",
  },
  {
    num: "06",
    title: "Events & Competitions",
    copy: "Publish events, run competitions, manage registrations and keep your ecosystem engaged — all from the same console.",
  },
  {
    num: "07",
    title: "Application Management",
    copy: "AI-based screening that tracks, scores and manages applications easily — from internship drives to cohort intakes.",
  },
  {
    num: "08",
    title: "Analytics & Reporting",
    copy: "Monitor performance with cohort insights and reporting you can take to your board, sponsors and university.",
  },
];

export const metadata = {
  title: "For ecosystem partners — Ments",
  description:
    "Manage cohorts, verify startups, coordinate mentorship, and run events from the Ments facilitator workspace.",
};

export default function EcosystemPartnersPage() {
  return (
    <div className="interior partner-page">
      <SiteNav />
      <main id="main">
        <section className="marketing-hero">
          <div className="marketing-copy">
            <div className="section-label">MENTS FOR ECOSYSTEM PARTNERS</div>
            <h1>
              Bring your ecosystem
              <br />
              <em>closer together.</em>
            </h1>
            <p className="hero-sub">
              A dedicated admin console for incubators, accelerators, e-cells
              and startup communities — manage cohorts, verify startups, run
              events and enable hiring across your entire network.
            </p>
            <div className="hero-actions">
              <a
                href="https://business.ments.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hero-cta"
              >
                Create an Organisation Account
              </a>
              <a href="#console" className="hero-link">
                See the Console
              </a>
            </div>
          </div>
          <div className="product-stage">
            <div className="stage-label">
              <span>PARTNER WORKSPACE</span>
              <span>PRODUCT PREVIEW</span>
            </div>
            <div className="stage-window">
              <div className="window-toolbar">
                <span aria-hidden="true">● ● ●</span>
                <span>business.ments.app</span>
              </div>
              <Image
                src={landingAsset("/facilitator-dashboard.jpeg")}
                alt="Partner workspace preview: startups, mentors, bookings, and applications."
                width={1280}
                height={722}
                sizes="(max-width: 900px) 90vw, 55vw"
                preload
              />
            </div>
            <div className="stage-tags">
              <span>Startups</span>
              <span>Mentors</span>
              <span>Programs</span>
            </div>
          </div>
        </section>
        <nav className="page-wayfinding" aria-label="On this page">
          <a href="#who">01 / Who it’s for</a>
          <a href="#console">02 / The workspace</a>
          <a href="#capabilities">03 / Capabilities</a>
          <a href="#get-started">04 / Get started</a>
        </nav>

        {/* Who it's for */}
        <section id="who" className="section container">
          <div>
            <div className="section-label">Who It&apos;s For</div>
            <h2 className="section-head">
              Built for the people who <em className="serif">run</em> startup
              ecosystems.
            </h2>
            <p className="section-lead">
              If you manage a portfolio of startups — onboarding them, verifying
              them, running their events and connecting them to talent and
              investors — the Ments facilitator console replaces the
              spreadsheets, forms and group chats you do it with today.
            </p>
            <div className="tag-row">
              {[
                "Incubators",
                "Accelerators",
                "E-Cells",
                "Startup Communities",
                "Innovation Programs",
                "Universities",
              ].map((tag, i) => (
                <span key={i} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Journey kind="partner" />

        {/* The console */}
        <section id="console" className="section events-section">
          <div className="container">
            <div>
              <div className="section-label">The Product</div>
              <h2 className="section-head">
                One admin console for your <em className="serif">entire</em>{" "}
                cohort.
              </h2>
              <p className="section-lead">
                A dedicated Facilitator workspace inside Ments Business: your
                organisation profile, your startups, your student access and
                your team — with verified-startup counts, jobs, events and
                competitions tracked from a single dashboard.
              </p>
            </div>

            <div className="console-frame">
              <div className="console-browser-bar" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <div>Facilitator workspace · business.ments.app</div>
              </div>
              <Image
                className="console-shot"
                src={landingAsset("/facilitator-dashboard.jpeg")}
                alt="Ments Facilitator admin console — dashboard with verified startups, jobs, events and competitions"
                width={1280}
                height={722}
                sizes="(max-width: 1280px) 92vw, 1216px"
              />
              <div className="console-caption">
                FACILITATOR / DASHBOARD — VERIFIED STARTUPS · JOBS · EVENTS ·
                COMPETITIONS · QUICK ACTIONS
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities in depth */}
        <section id="capabilities" className="section container">
          <div>
            <div className="section-label">Capabilities</div>
            <h2 className="section-head">
              Everything a facilitator needs,{" "}
              <em className="serif">in depth.</em>
            </h2>
          </div>

          <div className="capability-grid">
            {CAPABILITIES.map((cap, i) => (
              <article key={cap.num} className="capability-card">
                <div className="capability-top">
                  <FeatureIcon index={i} />
                  <span>{cap.num}</span>
                </div>
                <h3 className="entry-title">{cap.title}</h3>
                <p className="entry-copy">{cap.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="get-started" className="cta-section">
          <div className="container">
            <div className="section-label">Get Started</div>
            <h2 className="section-head">
              Create your <em className="serif">organisation</em> account.
            </h2>
            <p>
              Set up your incubator, accelerator, e-cell or startup community on
              Ments Business — onboard your cohort, verify your startups and run
              your ecosystem from one console.
            </p>

            <div className="cta-actions">
              <a
                href="https://business.ments.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green btn-mono"
              >
                Create an Organisation Account
              </a>
              <a
                href="mailto:support@ments.app"
                className="btn btn-outline-light btn-mono"
              >
                Talk to Us
              </a>
            </div>

            <div className="contact-line">
              BUSINESS.MENTS.APP · SUPPORT@MENTS.APP
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
