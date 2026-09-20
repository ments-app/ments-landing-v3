import Image from "next/image";
import { Journey, FeatureIcon } from "../components/Visuals";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { landingAsset } from "../site";

const CAPABILITIES = [
  {
    num: "01",
    title: "Profile & Visibility",
    copy: "A public startup profile that makes you discoverable across the ecosystem — founders, investors, talent and facilitators all find you in one place.",
  },
  {
    num: "02",
    title: "Hiring & Talent",
    copy: "Post jobs and gigs, and manage candidates end-to-end — with AI handling the busywork of screening and shortlisting.",
  },
  {
    num: "03",
    title: "Talent Discovery",
    copy: "Filter and discover relevant candidates across the Ments network instead of waiting for applications to arrive.",
  },
  {
    num: "04",
    title: "AI Hiring Tools",
    copy: "Automate screening with AI interviews — score, rank and shortlist candidates before you ever take a call.",
  },
  {
    num: "05",
    title: "Investor Access",
    copy: "Connect with investors for funding — your verified presence and traction signals make you discoverable to the right people.",
  },
  {
    num: "06",
    title: "Events & Competitions",
    copy: "Join or host events and competitions for exposure — demo days, pitch arenas, hackathons and hiring drives.",
  },
  {
    num: "07",
    title: "Resources & Schemes",
    copy: "Access growth resources, startup schemes, tools and credits — curated for your stage instead of buried in portals.",
  },
  {
    num: "08",
    title: "Facilitator Integration",
    copy: "Work with incubators and accelerators, and track your program progress inside the same console.",
  },
  {
    num: "09",
    title: "Plans",
    copy: "Start free and scale with tier-based upgrades as your startup grows — pay for what you actually use.",
  },
];

export const metadata = {
  title: "For startups — Ments",
  description:
    "Build your startup profile, hire talent, connect with mentors and investors, and access growth resources in Ments.",
};

export default function ForStartupsPage() {
  return (
    <div className="interior startup-page">
      <SiteNav />
      <main id="main">
        <section className="marketing-hero">
          <div className="marketing-copy">
            <div className="section-label">MENTS FOR STARTUPS</div>
            <h1>
              Built for your startup.
              <br />
              <em>Ready for what’s next.</em>
            </h1>
            <p className="hero-sub">
              A dedicated startup console — build your public presence, hire
              with AI, reach investors, join events and access growth resources,
              all from one dashboard.
            </p>
            <div className="hero-actions">
              <a
                href="https://business.ments.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hero-cta"
              >
                Create a Startup Account
              </a>
              <a href="#console" className="hero-link">
                See the Console
              </a>
            </div>
          </div>
          <div className="product-stage">
            <div className="stage-label">
              <span>STARTUP WORKSPACE</span>
              <span>PRODUCT PREVIEW</span>
            </div>
            <div className="stage-window">
              <div className="window-toolbar">
                <span aria-hidden="true">● ● ●</span>
                <span>business.ments.app</span>
              </div>
              <Image
                src={landingAsset("/startup-dashboard.jpeg")}
                alt="Startup workspace preview: hiring, mentorship, applications, and events."
                width={1280}
                height={729}
                sizes="(max-width: 900px) 90vw, 55vw"
                preload
              />
            </div>
            <div className="stage-tags">
              <span>Profile</span>
              <span>Hiring</span>
              <span>Mentorship</span>
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
              Built for startups at <em className="serif">every</em> stage.
            </h2>
            <p className="section-lead">
              Whether you&apos;re validating an idea, shipping an MVP or scaling
              a funded team — the Ments startup console replaces the scattered
              job boards, cold DMs and spreadsheets you grow with today.
            </p>
            <div className="tag-row">
              {[
                "Idea Stage",
                "MVP",
                "Early Revenue",
                "Funded",
                "Scaling",
                "Student Startups",
              ].map((tag, i) => (
                <span key={i} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Journey kind="startup" />

        {/* The console */}
        <section id="console" className="section events-section">
          <div className="container">
            <div>
              <div className="section-label">The Product</div>
              <h2 className="section-head">
                Your startup&apos;s <em className="serif">operating</em>{" "}
                console.
              </h2>
              <p className="section-lead">
                A dedicated Startup workspace inside Ments Business: your public
                profile, your jobs and gigs, your events and competitions — with
                applications, facilitators and quick actions one click away.
              </p>
            </div>

            <div className="console-frame">
              <div className="console-browser-bar" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <div>Startup workspace · business.ments.app</div>
              </div>
              <Image
                className="console-shot"
                src={landingAsset("/startup-dashboard.jpeg")}
                alt="Ments Startup admin console — dashboard with jobs posted, gigs posted, events and quick actions"
                width={1280}
                height={729}
                sizes="(max-width: 1280px) 92vw, 1216px"
              />
              <div className="console-caption">
                STARTUP / DASHBOARD — JOBS · GIGS · EVENTS · COMPETITIONS ·
                QUICK ACTIONS
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities in depth */}
        <section id="capabilities" className="section container">
          <div>
            <div className="section-label">Capabilities</div>
            <h2 className="section-head">
              Everything your startup needs,{" "}
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
              Create your <em className="serif">startup</em> account.
            </h2>
            <p>
              Set up your startup on Ments Business — build your profile, post
              your first role, and put your startup in front of the ecosystem.
            </p>

            <div className="cta-actions">
              <a
                href="https://business.ments.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green btn-mono"
              >
                Create a Startup Account
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
