"use client";

import React, { useEffect } from 'react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

const CAPABILITIES = [
  { num: '01', title: 'Cohort Management', copy: 'Track every startup in your ecosystem from one dashboard — stage, status, activity and progress across all your cohorts at a glance.' },
  { num: '02', title: 'Startup Onboarding', copy: 'Add startups one by one or in batches, and organize them into cohorts that mirror your real programs and intakes.' },
  { num: '03', title: 'Startup Verification', copy: 'Verify startups before they represent your ecosystem — building quality and trust signals for students, investors and partners.' },
  { num: '04', title: 'Marketplace Monetization', copy: 'Turn curation into revenue — earn by selling access to your verified cohort and the talent pipeline around it.' },
  { num: '05', title: 'Hiring Enablement', copy: 'Let startups across your network post jobs and gigs, and open those opportunities to your students and community.' },
  { num: '06', title: 'Events & Competitions', copy: 'Publish events, run competitions, manage registrations and keep your ecosystem engaged — all from the same console.' },
  { num: '07', title: 'Application Management', copy: 'AI-based screening that tracks, scores and manages applications easily — from internship drives to cohort intakes.' },
  { num: '08', title: 'Analytics & Reporting', copy: 'Monitor performance with cohort insights and reporting you can take to your board, sponsors and university.' },
];

export default function EcosystemPartnersPage() {
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

            <div className="hero-eyebrow">Ments for Ecosystem Partners</div>

            <h1 className="hero-headline">
              SAAS FOR
              <em className="serif">startup</em>
              FACILITATORS
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
              <span className="lbl">Startups reached</span>
            </div>
            <div className="hero-stat">
              <span className="num">3</span>
              <span className="lbl">Ecosystem events</span>
            </div>
          </div>
        </div>

        {/* Right: facilitator console as the visual */}
        <div
          className="hero-visual"
          style={{ background: `var(--color-black) url('/facilitator-dashboard.png') center / cover no-repeat` }}
        >
          <div className="tech-pattern"></div>
          <div className="glow"></div>

          <div className="hero-visual-card">
            <div className="hvc-diamonds">
              {Array.from({ length: 9 }).map((_, i) => <span key={i}></span>)}
            </div>
            <div className="hvc-title">Facilitator Console</div>
            <div className="hvc-text">COHORTS // VERIFICATION // HIRING // ANALYTICS</div>
          </div>
        </div>
       </section>
      </div>

      {/* Who it's for */}
      <section id="who" className="section container">
        <div className="scroll-anim">
          <div className="section-label">Who It&apos;s For</div>
          <h2 className="section-head">
            Built for the people who <em className="serif">run</em> startup ecosystems.
          </h2>
          <p className="section-lead">
            If you manage a portfolio of startups — onboarding them, verifying
            them, running their events and connecting them to talent and
            investors — the Ments facilitator console replaces the spreadsheets,
            forms and group chats you do it with today.
          </p>
          <div className="tag-row">
            {['Incubators', 'Accelerators', 'E-Cells', 'Startup Communities', 'Innovation Programs', 'Universities'].map((tag, i) => (
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
              One admin console for your <em className="serif">entire</em> cohort.
            </h2>
            <p className="section-lead">
              A dedicated Facilitator workspace inside Ments Business: your
              organisation profile, your startups, your student access and your
              team — with verified-startup counts, jobs, events and competitions
              tracked from a single dashboard.
            </p>
          </div>

          <div className="console-frame scroll-anim">
            <img
              className="console-shot"
              src="/facilitator-dashboard.png"
              alt="Ments Facilitator admin console — dashboard with verified startups, jobs, events and competitions"
              loading="lazy"
            />
            <div className="console-caption">
              FACILITATOR / DASHBOARD — VERIFIED STARTUPS · JOBS · EVENTS · COMPETITIONS · QUICK ACTIONS
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities in depth */}
      <section id="capabilities" className="section container">
        <div className="scroll-anim">
          <div className="section-label">Capabilities</div>
          <h2 className="section-head">
            Everything a facilitator needs, <em className="serif">in depth.</em>
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
