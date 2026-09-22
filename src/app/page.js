import Image from "next/image";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";
import ProductTour from "./components/ProductTour";
import styles from "./page.module.css";
import { WEBAPP_LOGIN_URL, landingAsset, landingUrl } from "./site";
import community from "../../public/product/ments-startups.png";
import meetup from "../../public/events/bangalore-meetup.png";
import delta from "../../public/events/delta-expo.png";
import bits from "../../public/events/bits-pilani.jpeg";

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteNav />

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <i /> THE STARTUP ECOSYSTEM · BETA IS LIVE
            </span>
            <h1 id="hero-title">
              Big ideas.
              <br />
              Right people.
              <br />
              <em>One ecosystem.</em>
            </h1>
            <p>
              Find your people, build your team, and open your next door. Your
              startup journey belongs here.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={WEBAPP_LOGIN_URL}>
                Start building <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.textLink} href="#platform">
                Explore the platform <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className={styles.heroProof}>
              <span className={styles.peopleMark} aria-hidden="true">
                ✳
              </span>
              <span>
                <strong>4,000+ people. One shared ambition.</strong>
                <br />
                Founders, builders, and the people backing them.
              </span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualTop}>
              <span>YOUR NEXT CHAPTER STARTS HERE</span>
              <span aria-hidden="true">✳</span>
            </div>
            <div className={styles.previewLabel}>
              <span className={styles.smallIcon} aria-hidden="true">
                ↗
              </span>
              <div>
                Discover what’s next.
                <br />
                <strong>Meet the people building it.</strong>
              </div>
            </div>
            <div className={styles.heroScreen}>
              <div className={styles.browserBar}>
                <span aria-hidden="true">● ● ●</span>
                <span>ments.app / discover startups</span>
                <span aria-hidden="true">↗</span>
              </div>
              <Image
                src={community}
                alt="The Ments web app showing startup discovery, stage filters, and ranked startup profiles"
                sizes="(max-width: 900px) 95vw, 55vw"
                preload
              />
            </div>
            <div className={styles.visualBottom}>
              <span>
                <i /> A place to connect. A workspace to grow.
              </span>
              <span>PRODUCT PREVIEW</span>
            </div>
          </div>
        </section>

        <div className={styles.numbers} aria-label="Ments community milestones">
          <div>
            <strong>
              4,000<span>+</span>
            </strong>
            <span>users joined the beta</span>
          </div>
          <div>
            <strong>
              200<span>+</span>
            </strong>
            <span>startups reached</span>
          </div>
          <div className={styles.numbersNote}>
            <span>
              ONLINE CONNECTIONS.
              <br />
              <strong>REAL-WORLD POSSIBILITIES.</strong>
            </span>
            <a href="#events" aria-label="Explore the Ments community">
              ↗
            </a>
          </div>
        </div>

        <section
          id="ecosystem"
          className={`${styles.section} ${styles.ecosystem}`}
        >
          <div id="problem" className={styles.sectionCopy}>
            <span className={styles.eyebrow}>01 / FIND YOUR CIRCLE</span>
            <h2>
              Great things start
              <br />
              with the <em>right connection.</em>
            </h2>
            <p>
              Talent in one group. Mentors in another. Ments brings your startup
              world together, so the next step is easier to find.
            </p>
            <a className={styles.textLink} href={landingUrl("/for-startups")}>
              Find your place in Ments <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div
            className={styles.network}
            role="img"
            aria-label="Ments connects founders and startups with talent, mentors, investors, and ecosystem partners"
          >
            <svg
              viewBox="0 0 540 340"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M270 170L120 65M270 170L425 65M270 170L85 230M270 170L450 230M270 170L270 300" />
            </svg>
            <span className={`${styles.node} ${styles.founders}`}>
              <b>↗</b> Founders & startups
            </span>
            <span className={`${styles.node} ${styles.mentors}`}>
              <b>✧</b> Mentors
            </span>
            <span className={`${styles.node} ${styles.talent}`}>
              <b>⌘</b> Talent
            </span>
            <span className={`${styles.node} ${styles.investors}`}>
              <b>↗</b> Investors
            </span>
            <span className={`${styles.node} ${styles.partners}`}>
              <b>◎</b> Ecosystem partners
            </span>
            <span className={styles.networkCenter}>
              <Image
                src={landingAsset("/ments Logo svg/horizontal/white_logo.svg")}
                alt=""
                width={120}
                height={38}
              />
            </span>
          </div>
        </section>

        <section
          id="platform"
          className={`${styles.section} ${styles.product}`}
        >
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>
                02 / BUILT FOR YOUR NEXT MOVE
              </span>
              <h2>
                Your ambition.
                <br />
                <em>Meet your workspace.</em>
              </h2>
            </div>
            <p>
              From your next connection to your next cohort.
              <br />
              See how it comes together in Ments.
            </p>
          </div>
          <ProductTour />
        </section>

        <section
          id="events"
          className={`${styles.section} ${styles.community}`}
        >
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>
                03 / CONNECTIONS BEYOND THE SCREEN
              </span>
              <h2>
                Real people.
                <br />
                <em>Real momentum.</em>
              </h2>
            </div>
            <a className={styles.textLink} href={landingUrl("/events")}>
              Explore our events <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles.eventGrid}>
            <a
              href={landingUrl("/events")}
              className={`${styles.eventCard} ${styles.featuredEvent}`}
            >
              <div className={styles.eventPhoto}>
                <Image
                  src={meetup}
                  alt="Founders and operators together at the Bengaluru Ments meetup"
                  sizes="(max-width: 600px) 90vw, 50vw"
                />
              </div>
              <div className={styles.eventCaption}>
                <span>THE COMMUNITY, IRL</span>
                <h3>
                  Bengaluru Founder Meetup <b aria-hidden="true">↗</b>
                </h3>
                <p>A room full of people building what comes next.</p>
              </div>
            </a>
            <div className={styles.eventStack}>
              <a href={landingUrl("/events")} className={styles.eventCard}>
                <div className={styles.eventPhoto}>
                  <Image
                    src={delta}
                    alt="Startup innovations and the Ments platform at IIT Madras Delta Expo"
                    sizes="(max-width: 600px) 90vw, 40vw"
                  />
                </div>
                <div className={styles.eventCaption}>
                  <span>PLATFORM PARTNER</span>
                  <h3>
                    IIT Madras Delta Expo <b aria-hidden="true">↗</b>
                  </h3>
                </div>
              </a>
              <a href={landingUrl("/events")} className={styles.eventCard}>
                <div className={styles.eventPhoto}>
                  <Image
                    src={bits}
                    alt="Ments at BITS Pilani Hyderabad eSummit"
                    sizes="(max-width: 600px) 90vw, 40vw"
                  />
                </div>
                <div className={styles.eventCaption}>
                  <span>PLATFORM PARTNER</span>
                  <h3>
                    BITS Pilani Hyderabad eSummit <b aria-hidden="true">↗</b>
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section
          className="home-about-preview"
          aria-labelledby="home-about-title"
        >
          <div>
            <span>THE PEOPLE BEHIND THE PLATFORM</span>
            <h2 id="home-about-title">
              Built with belief.
              <br />
              <em>And a little hustle.</em>
            </h2>
            <p>
              Meet the Ments team and explore the workspace where our journey
              began at Nirmaan, IIT Madras.
            </p>
            <a href={landingUrl("/about")}>
              Get to know us <span aria-hidden="true">↗</span>
            </a>
          </div>
          <Image
            src={landingAsset("/about/nirmaan-building.jpg")}
            alt="Nirmaan workspace at IIT Madras in Chennai"
            width={1024}
            height={768}
            sizes="(max-width: 600px) 90vw, 45vw"
          />
        </section>

        <section id="join" className={styles.join}>
          <span className={styles.eyebrow}>YOUR NEXT CHAPTER</span>
          <h2>
            You bring the idea.
            <br />
            <em>Let’s build the rest.</em>
          </h2>
          <p>Your people. Your opportunities. Your place to grow.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href={WEBAPP_LOGIN_URL}>
              Get started with Ments <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.textLink} href={landingUrl("/ecosystem-partners")}>
              Become a partner ↗
            </a>
          </div>
          <span className={styles.joinArt} aria-hidden="true">
            ✳
          </span>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
