import Link from 'next/link';

/* Shared navbar: white logo card + links over the hero visual.
   Rendered as two grid children of .hero-grid on every page. */
export default function SiteNav() {
  return (
    <>
      <header className="nav-card">
        <Link href="/" className="nav-brand">
          <img
            className="brand-logo"
            src="/ments Logo svg/horizontal/black_logo.svg"
            alt="ments."
          />
        </Link>
        <img
          className="nav-glyph"
          src="/ments Logo svg/horizontal/black.svg"
          alt=""
          aria-hidden="true"
        />
      </header>
      <nav className="nav-menu">
        <Link href="/#problem">Problem</Link>
        <Link href="/for-startups">For Startups</Link>
        <Link href="/ecosystem-partners">Ecosystem Partners</Link>
        <Link href="/events">Events</Link>
        <button className="auth-button">Login / Sign in</button>
      </nav>
    </>
  );
}
