import Image from "next/image";
import { FeatureIcon, EventToolVisual } from "../components/Visuals";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import PastEventsScroller from "../components/PastEventsScroller";
import { landingAsset, landingUrl } from "../site";

export const metadata = {
  title: "Events & collaborations — Ments",
  description:
    "Build startup events with Ments: audience reach, virtual investment, live voting, and connections beyond event day.",
};

export default function EventsPage() {
  return (
    <div className="interior event-page">
      <SiteNav />
      <main id="main">
        <section className="marketing-hero">
          <div className="marketing-copy">
            <div className="section-label">EVENTS & COLLABORATIONS</div>
            <h1>
              Good events end.
              <br />
              <em>Great connections don’t.</em>
            </h1>
            <p className="hero-sub">
              Helping startup events drive better reach, real engagement and
              measurable post-event value — for organisers, incubators,
              accelerators, founder communities and ecosystem partners.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary hero-cta">
                Partner With Us
              </a>
              <a href="#why" className="hero-link">
                Why Collaborate
              </a>
            </div>
          </div>
          <figure className="event-hero-photo">
            <Image
              src={landingAsset("/events/bangalore-meetup.png")}
              alt="Founders and operators connecting at the Bengaluru Ments meetup."
              width={1080}
              height={1080}
              sizes="(max-width: 900px) 90vw, 50vw"
              preload
            />
            <figcaption>
              <span>THE MENTS COMMUNITY, IRL</span>
              <strong>Bengaluru Founder Meetup</strong>
              <span>Connections that keep going. ↗</span>
            </figcaption>
          </figure>
        </section>
        <nav className="page-wayfinding" aria-label="On this page">
          <a href="#why">01 / Why Ments</a>
          <a href="#tools">02 / Event technology</a>
          <a href="#past-events">03 / Past events</a>
          <a href="#collab">04 / Collaborate</a>
        </nav>

        {/* Why collaborate: the three problems */}
        <section id="why" className="section container">
          <div>
            <div className="section-label">Why Collaborate</div>
            <h2 className="section-head">
              Most startup events leak value in the{" "}
              <em className="serif">same three</em> places.
            </h2>
          </div>

          <div className="entry-list">
            {[
              {
                num: "01",
                title: "Reach",
                copy: "Getting in front of the right startup and founder audience.",
              },
              {
                num: "02",
                title: "Engage",
                copy: "Keeping attendees actually paying attention during the event.",
              },
              {
                num: "03",
                title: "Retain",
                copy: "Creating value that survives after the last session ends.",
              },
            ].map((problem, i) => (
              <div key={i} className="entry-row ">
                <span className="entry-num">{problem.num}</span>
                <h3 className="entry-title">{problem.title}</h3>
                <p className="entry-copy">{problem.copy}</p>
                <span className="entry-arrow">→</span>
              </div>
            ))}
          </div>

          <div className="statement ">
            <div className="s-label">Our Position</div>
            <p className="s-text">
              Not a promotional partner. A{" "}
              <em className="g">growth, engagement & ecosystem</em> partner for
              startup-focused events.
            </p>
          </div>
        </section>

        {/* Distribution & reach */}
        <section id="reach" className="section events-section">
          <div className="container">
            <div>
              <div className="section-label">Distribution &amp; Reach</div>
              <h2 className="section-head">
                An active network — <em className="serif">ready</em> to show up.
              </h2>
              <p className="section-lead">
                Startups, founders and opportunity-seekers across campuses,
                incubators and founder communities. Better startup turnout,
                sharper audience, event credibility that lands.
              </p>
            </div>

            <div className="stats-strip ">
              <div className="hero-stat">
                <span className="num">300+</span>
                <span className="lbl">Startups onboarded on the platform</span>
              </div>
              <div className="hero-stat">
                <span className="num">1,000+</span>
                <span className="lbl">Extended connections to startups</span>
              </div>
              <div className="hero-stat">
                <span className="num">5,000+</span>
                <span className="lbl">Monthly active users</span>
              </div>
            </div>

            <div className="tag-row ">
              {[
                "BITS Pilani",
                "IIT Madras",
                "IIT Bhubaneswar",
                "IIT Patna",
                "Runway Incubator",
                "Investors & Mentors",
              ].map((tag, i) => (
                <span key={i} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement tech */}
        <section id="tools" className="section model-section">
          <div className="container">
            <div>
              <div className="section-label">Engagement Tech</div>
              <h2 className="section-head">
                Software-led moments that make your event{" "}
                <em className="serif">trackable &amp; memorable.</em>
              </h2>
            </div>

            <div className="model-rows">
              {[
                {
                  layer: "Tool · A",
                  title: "InvestArena",
                  copy: "Every startup gets a QR. Attendees invest virtual cash, show support, and follow on Ments.",
                  outcome: "→ Measurable audience interest",
                },
                {
                  layer: "Tool · B",
                  title: "Pitchers Pilot",
                  copy: "Live pitches. Audience votes on confidence, clarity, traction. A live leaderboard creates the hype.",
                  outcome: "→ Real-time engagement",
                },
                {
                  layer: "Tool · C",
                  title: "Ments ID",
                  copy: "Startups register with their profile. Attendees follow, track updates, and reconnect later.",
                  outcome: "→ Value beyond event day",
                },
              ].map((tool, i) => (
                <div key={i} className="model-row ">
                  <EventToolVisual index={i} />
                  <span className="model-layer">{tool.layer}</span>
                  <h3 className="model-title">{tool.title}</h3>
                  <p className="model-copy">
                    {tool.copy}
                    <span className="tool-outcome">{tool.outcome}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event formats */}
        <section id="formats" className="section container">
          <div>
            <div className="section-label">Event Formats</div>
            <h2 className="section-head">
              Flexible across the <em className="serif">whole spectrum</em> of
              startup events.
            </h2>
          </div>

          <div className="formats-grid ">
            {[
              "Founder meetups",
              "Pitch arenas",
              "Startup exhibitions",
              "Demo days",
              "Investor-startup mixers",
              "Incubator & accelerator events",
              "Startup networking",
              "Campus entrepreneurship",
              "Hiring & talent events",
            ].map((format, i) => (
              <div key={i} className="format-cell">
                <FeatureIcon index={i} />
                <span className="format-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="format-title">{format}</h3>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className="section-label">How Ments Contributes</div>
            <div className="tag-row">
              {[
                "Event marketing",
                "Startup outreach",
                "Founder onboarding",
                "QR-based discovery",
                "Live voting & leaderboards",
                "Investor intros",
                "Post-event amplification",
              ].map((tag, i) => (
                <span key={i} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration model */}
        <section id="collab" className="section events-section">
          <div className="container">
            <div>
              <div className="section-label">
                Collaboration Model · Paid Partnership via MoU
              </div>
              <h2 className="section-head">
                Pick the role (or roles) that <em className="serif">fit</em>{" "}
                your event.
              </h2>
            </div>

            <div className="formats-grid ">
              {[
                {
                  title: "Distribution",
                  copy: "Promoting the event to a relevant startup audience.",
                },
                {
                  title: "Community",
                  copy: "Activating founder & startup communities around the event.",
                },
                {
                  title: "Startup onboarding",
                  copy: "Bringing startups for pitches, demo days, and exhibitions.",
                },
                {
                  title: "Event-tech",
                  copy: "QR codes, Ments IDs, virtual investment, voting, leaderboards.",
                },
                {
                  title: "Ecosystem",
                  copy: "Access to incubators, investors, mentors & startup networks.",
                },
                {
                  title: "Strategic growth",
                  copy: "All of the above — distribution + engagement + visibility.",
                },
              ].map((role, i) => (
                <div key={i} className="format-cell">
                  <span className="format-num">
                    Role · {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="format-title">{role.title}</h3>
                  <p className="format-copy">{role.copy}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "3rem" }}>
              <div className="section-label">The MoU Defines</div>
              <div className="tag-row">
                {[
                  "Scope of work",
                  "Deliverables",
                  "Payment terms",
                  "Branding visibility",
                  "Content rights",
                  "Data / reporting",
                  "Event responsibilities",
                  "Long-term scope",
                ].map((tag, i) => (
                  <span key={i} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <section id="sponsors" className="section container">
          <div>
            <div className="section-label">Sponsors</div>
            <h2 className="section-head">
              We can bring <em className="serif">sponsors</em> too.
            </h2>
            <p className="section-lead">
              Beyond distribution and engagement, Ments can connect your event
              with relevant sponsors from our network — brands, investors and
              ecosystem partners — so you can fund, co-host and scale any event
              format in collaboration with us.
            </p>
            <div className="tag-row">
              {[
                "Brand sponsorships",
                "Co-hosted events",
                "Ecosystem partners",
                "Venue & community tie-ups",
              ].map((tag, i) => (
                <span key={i} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Past events */}
        <section id="past-events" className="section events-section">
          <div className="container">
            <div>
              <div className="section-label">Past Events</div>
              <h2 className="section-head">
                We&apos;ve <em className="serif">already</em> done this.
              </h2>
              <p className="section-lead">
                From 5,000-footfall campus expos to curated founder rooms and
                virtual pitch competitions — executed on-ground and powered by
                the Ments platform.
              </p>
            </div>

            <PastEventsScroller />
          </div>
        </section>

        {/* Before / During / After */}
        <section id="value" className="section model-section">
          <div className="container">
            <div>
              <div className="section-label">Before, During, After</div>
              <h2 className="section-head">
                Value that shows up <em className="serif">three times</em> — not
                just on event day.
              </h2>
            </div>

            <div className="timeline-grid">
              {[
                {
                  title: "before.",
                  items: [
                    "Event marketing",
                    "Startup outreach",
                    "Founder onboarding",
                    "Community awareness",
                    "Ecosystem partner access",
                  ],
                },
                {
                  title: "during.",
                  items: [
                    "QR-based discovery",
                    "Audience voting",
                    "Live leaderboards",
                    "Investor-startup intros",
                    "Higher engagement",
                  ],
                },
                {
                  title: "after.",
                  items: [
                    "Ments ID tracking",
                    "Continued engagement",
                    "Content amplification",
                    "Post-event visibility",
                    "Long-term value",
                  ],
                },
              ].map((phase, i) => (
                <div key={i} className="timeline-col ">
                  <h3 className="timeline-title">{phase.title}</h3>
                  <ul>
                    {phase.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="cta-section">
          <div className="container">
            <div className="section-label">Let&apos;s Talk</div>
            <h2 className="section-head">
              Build the <em className="serif">event</em> together.
            </h2>
            <p>
              Tell us your event format and goals — we&apos;ll identify where
              Ments adds the most value, finalize the collaboration scope,
              define the MoU and execute together.
            </p>

            <div className="cta-actions">
              <a
                href="mailto:official@ments.app"
                className="btn btn-green btn-mono"
              >
                Partner With Us
              </a>
              <a href={landingUrl("/")} className="btn btn-outline-light btn-mono">
                Back to Ments
              </a>
            </div>

            <div className="contact-line">
              OFFICIAL@MENTS.APP · INFO.MENTS.APP · @MENTS_APP
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
