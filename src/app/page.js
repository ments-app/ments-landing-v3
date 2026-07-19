"use client";

import React, { useEffect } from 'react';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import PastEventsScroller from './components/PastEventsScroller';

export default function Home() {
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
      {/* Framed hero: floating rounded cards on a dark frame (reference geometry) */}
      <div className="hero-shell">
       <section className="hero-grid">
        {/* Navbar: white logo card (left) + links floating over the visual (right) */}
        <SiteNav />

        {/* Left: white hero card */}
        <div className="hero-card">
          <div className="hero-center animate-fade-in-up">
            <div className="hero-dots">
              <span></span><span></span><span></span>
            </div>

            <div className="hero-eyebrow">Beta is live</div>

            <h1 className="hero-headline">
              THE STARTUP
              <em className="serif">ecosystem,</em>
              FINALLY CONNECTED
            </h1>

            <p className="hero-sub">
              Startup discovery, jobs, gigs, hiring, events, mentorship and
              investor access — one focused platform for founders, startups,
              builders and ecosystem partners.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary hero-cta">Join Beta</button>
              <a href="#ecosystem" className="hero-link">See the Vision</a>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="num">4,000+</span>
              <span className="lbl">Users joined the beta</span>
            </div>
            <div className="hero-stat">
              <span className="num">200+</span>
              <span className="lbl">Startups reached</span>
            </div>
            <div className="hero-stat">
              <span className="num">3</span>
              <span className="lbl">Ecosystem events</span>
            </div>
          </div>
        </div>

        {/* Right: visual panel spanning the nav and hero rows */}
        <div className="hero-visual">
          <div className="tech-pattern"></div>
          <div className="glow"></div>

          <div className="hero-visual-card">
            <div className="hvc-diamonds">
              {Array.from({ length: 9 }).map((_, i) => <span key={i}></span>)}
            </div>
            <div className="hvc-title">Ecosystem Online</div>
            <div className="hvc-text">BETA LIVE // 4,000+ BUILDERS ONBOARD</div>
          </div>
        </div>
       </section>
      </div>

      {/* The Problem */}
      <section id="problem" className="section container">
        <div className="scroll-anim">
          <div className="section-label">The Problem</div>
          <h2 className="section-head">
            Startup growth is <em className="serif">scattered.</em>
          </h2>
          <p className="section-lead">
            Founders, students, builders and startup enablers depend on scattered
            networks — LinkedIn, WhatsApp groups, college communities, incubators
            and personal connections. The opportunities exist, but they are
            fragmented, hard to verify and difficult to act on.
          </p>
          <div className="tag-row">
            {['Co-founders', 'Mentors', 'Investors', 'Jobs', 'Gigs', 'Internships', 'Grants', 'Incubators', 'Events', 'Resources'].map((tag, i) => (
              <span key={i} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* One ecosystem, different entry points */}
      <section id="ecosystem" className="section container">
        <div className="scroll-anim">
          <div className="section-label">Entry Points</div>
          <h2 className="section-head">
            One ecosystem. <em className="serif">different</em> entry points.
          </h2>
          <p className="section-lead">
            MENTS works as a startup ecosystem layer. Founders, startups,
            investors, mentors, talent and partners enter from different doors —
            but operate inside one connected network.
          </p>
        </div>

        <div className="entry-list">
          {[
            { num: '01', title: 'Founders', copy: 'Showcase your startup, find collaborators, discover jobs, gigs and events, and become visible to investors and ecosystem partners.' },
            { num: '02', title: 'Startups', copy: 'Post jobs and gigs, manage applicants, run AI interviews, discover talent and build your public startup presence.' },
            { num: '03', title: 'Partners', copy: 'Incubators, accelerators, e-cells and communities — manage cohorts, post events, run internship drives and track applications.' },
            { num: '04', title: 'Investors & Mentors', copy: 'Discover early-stage startups, track founder signals and support high-intent founders through curated access.' },
          ].map((entry, i) => (
            <div key={i} className="entry-row scroll-anim">
              <span className="entry-num">{entry.num}</span>
              <h3 className="entry-title">{entry.title}</h3>
              <p className="entry-copy">{entry.copy}</p>
              <span className="entry-arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* Product Model */}
      <section id="model" className="section model-section">
        <div className="container">
          <div className="scroll-anim">
            <div className="section-label">The Product Model</div>
            <h2 className="section-head">
              Social on top. <em className="serif">infrastructure</em> underneath.
            </h2>
          </div>

          <div className="model-rows">
            {[
              { layer: 'Layer 01', title: 'Social', points: ['Founder community', 'Startup discovery', 'Jobs & gigs', 'Real conversations', 'Events & visibility'] },
              { layer: 'Layer 02', title: 'Startup SaaS', points: ['Startup profiles', 'Job & gig posting', 'Candidate dashboard', 'AI interviews', 'Talent discovery', 'Investor access'] },
              { layer: 'Layer 03', title: 'Facilitator SaaS', points: ['Cohort management', 'Startup onboarding', 'Events & competitions', 'Internship drives', 'Application tracking', 'Analytics'] },
            ].map((model, i) => (
              <div key={i} className="model-row scroll-anim">
                <span className="model-layer">{model.layer}</span>
                <h3 className="model-title">{model.title}</h3>
                <p className="model-points">{model.points.join(' / ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="section container">
        <div className="scroll-anim">
          <div className="section-label">Proof</div>
          <h2 className="section-head">
            The ecosystem <em className="serif">already</em> exists.
          </h2>
          <p className="section-lead">
            MENTS is not starting from zero — product, community and offline
            startup rooms already compound into one ecosystem.
          </p>
        </div>

        <div className="stats-strip scroll-anim">
          <div className="hero-stat">
            <span className="num">4,000+</span>
            <span className="lbl">Users joined the beta</span>
          </div>
          <div className="hero-stat">
            <span className="num">200+</span>
            <span className="lbl">Startups reached</span>
          </div>
          <div className="hero-stat">
            <span className="num">3</span>
            <span className="lbl">Ecosystem events</span>
          </div>
        </div>

        <div className="past-scroll-hint scroll-anim">Scroll to explore</div>
        <PastEventsScroller />
      </section>

      {/* Events */}
      <section id="events" className="section events-section">
        <div className="container">
          <div className="scroll-anim">
            <div className="section-label">Events</div>
            <h2 className="section-head">
              From digital profiles to <em className="serif">real</em> founder rooms.
            </h2>
            <p className="section-lead">
              Online startup discovery, connected to offline founder-investor
              rooms, pitch days, competitions and hiring drives.
            </p>
          </div>

          <div className="proof-grid">
            {[
              { num: '01', title: 'Attend', copy: 'Join founder meetups, pitch days, panels, competitions and startup networking rooms.' },
              { num: '02', title: 'Host', copy: 'E-cells, incubators, accelerators and communities publish events, manage registrations and bring their network online.' },
              { num: '03', title: 'Sponsor', copy: 'Brands partner with startup-focused events to reach founders, investors, builders and ecosystem leaders.' },
            ].map((item, i) => (
              <div key={i} className="proof-col scroll-anim">
                <span className="proof-num">{item.num}</span>
                <h3 className="proof-title">{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>

          <div className="scroll-anim" style={{ marginTop: '3.5rem' }}>
            <a href="/events" className="hero-link">Partner with us for your event →</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="join" className="cta-section">
        <div className="container scroll-anim">
          <div className="section-label">Join the Beta</div>
          <h2 className="section-head">
            Start where your <em className="serif">ecosystem</em> begins.
          </h2>
          <p>
            Join MENTS as a founder, startup, builder, investor, mentor or
            ecosystem partner — and help build the connected layer for
            entrepreneurship.
          </p>

          <div className="cta-actions">
            <button className="btn btn-green btn-mono">Join Beta</button>
            <button className="btn btn-outline-light btn-mono">Partner With Us</button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
