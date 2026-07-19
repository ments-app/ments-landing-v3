"use client";

import React, { useEffect } from 'react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

const CAPABILITIES = [
  { num: '01', title: 'Profile & Visibility', copy: 'A public startup profile that makes you discoverable across the ecosystem — founders, investors, talent and facilitators all find you in one place.' },
  { num: '02', title: 'Hiring & Talent', copy: 'Post jobs and gigs, and manage candidates end-to-end — with AI handling the busywork of screening and shortlisting.' },
  { num: '03', title: 'Talent Discovery', copy: 'Filter and discover relevant candidates across the Ments network instead of waiting for applications to arrive.' },
  { num: '04', title: 'AI Hiring Tools', copy: 'Automate screening with AI interviews — score, rank and shortlist candidates before you ever take a call.' },
  { num: '05', title: 'Investor Access', copy: 'Connect with investors for funding — your verified presence and traction signals make you discoverable to the right people.' },
  { num: '06', title: 'Events & Competitions', copy: 'Join or host events and competitions for exposure — demo days, pitch arenas, hackathons and hiring drives.' },
  { num: '07', title: 'Resources & Schemes', copy: 'Access growth resources, startup schemes, tools and credits — curated for your stage instead of buried in portals.' },
  { num: '08', title: 'Facilitator Integration', copy: 'Work with incubators and accelerators, and track your program progress inside the same console.' },
  { num: '09', title: 'Plans', copy: 'Start free and scale with tier-based upgrades as your startup grows — pay for what you actually use.' },
];

export default function ForStartupsPage() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-anim');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="app">
      {/* Framed hero */}
      <div className="hero-shell">
       <section className="hero-grid">
        <SiteNav />

        {/* Left: white hero card */}
        <div className="hero-card">
          <div className="hero-center animate-fade-in-up">
            <div className="hero-dots">
              <span></span><span></span><span></span>
            </div>

            <div className="hero-eyebrow">Ments for Startups</div>

            <h1 className="hero-headline">
              SAAS FOR
              <em className="serif">your</em>
              STARTUP
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
              <a href="#console" className="hero-link">See the Console</a>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="num">4,000+</span>
              <span className="lbl">Users in the network</span>
            </div>
            <div className="hero-stat">
              <span className="num">200+</span>
              <span className="lbl">Startups onboard</span>
            </div>
            <div className="hero-stat">
              <span className="num">3</span>
              <span className="lbl">Ecosystem events</span>
            </div>
          </div>
        </div>

        {/* Right: startup console as the visual */}
        <div
          className="hero-visual"
          style={{ background: `var(--color-black) url('/startup-dashboard.png') center / cover no-repeat` }}
        >
          <div className="tech-pattern"></div>
          <div className="glow"></div>

          <div className="hero-visual-card">
            <div className="hvc-diamonds">
              {Array.from({ length: 9 }).map((_, i) => <span key={i}></span>)}
            </div>
            <div className="hvc-title">Startup Console</div>
            <div className="hvc-text">PROFILE // HIRING // INVESTORS // EVENTS</div>
          </div>
        </div>
       </section>
      </div>

      {/* Who it's for */}
      <section id="who" className="section container">
        <div className="scroll-anim">
          <div className="section-label">Who It&apos;s For</div>
          <h2 className="section-head">
            Built for startups at <em className="serif">every</em> stage.
          </h2>
          <p className="section-lead">
            Whether you&apos;re validating an idea, shipping an MVP or scaling a
            funded team — the Ments startup console replaces the scattered
            job boards, cold DMs and spreadsheets you grow with today.
          </p>
          <div className="tag-row">
            {['Idea Stage', 'MVP', 'Early Revenue', 'Funded', 'Scaling', 'Student Startups'].map((tag, i) => (
              <span key={i} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* The console */}
      <section id="console" className="section events-section">
        <div className="container">
          <div className="scroll-anim">
            <div className="section-label">The Product</div>
            <h2 className="section-head">
              Your startup&apos;s <em className="serif">operating</em> console.
            </h2>
            <p className="section-lead">
              A dedicated Startup workspace inside Ments Business: your public
              profile, your jobs and gigs, your events and competitions — with
              applications, facilitators and quick actions one click away.
            </p>
          </div>

          <div className="console-frame scroll-anim">
            <img
              className="console-shot"
              src="/startup-dashboard.png"
              alt="Ments Startup admin console — dashboard with jobs posted, gigs posted, events and quick actions"
              loading="lazy"
            />
            <div className="console-caption">
              STARTUP / DASHBOARD — JOBS · GIGS · EVENTS · COMPETITIONS · QUICK ACTIONS
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities in depth */}
      <section id="capabilities" className="section container">
        <div className="scroll-anim">
          <div className="section-label">Capabilities</div>
          <h2 className="section-head">
            Everything your startup needs, <em className="serif">in depth.</em>
          </h2>
        </div>

        <div className="entry-list">
          {CAPABILITIES.map((cap, i) => (
            <div key={i} className="entry-row scroll-anim">
              <span className="entry-num">{cap.num}</span>
              <h3 className="entry-title">{cap.title}</h3>
              <p className="entry-copy">{cap.copy}</p>
              <span className="entry-arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="cta-section">
        <div className="container scroll-anim">
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
            <a href="mailto:support@ments.app" className="btn btn-outline-light btn-mono">
              Talk to Us
            </a>
          </div>

          <div className="contact-line">
            BUSINESS.MENTS.APP · SUPPORT@MENTS.APP
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
