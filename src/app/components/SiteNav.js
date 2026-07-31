import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '/#problem', label: 'Problem' },
  { href: '/for-startups', label: 'For Startups' },
  { href: '/ecosystem-partners', label: 'Ecosystem Partners' },
  { href: '/events', label: 'Events' },
];

/* Shared navbar: white logo card + links over the hero visual.
   Rendered as two grid children of .hero-grid on every page. */
export default function SiteNav() {
  return (
    <>
      <header className="nav-card">
        <Link href="/" className="nav-brand">
          <Image
            className="brand-logo"
            src="/ments Logo svg/horizontal/black_logo.svg"
            alt="ments."
            width={184}
            height={56}
            loading="eager"
          />
        </Link>

        <details className="mobile-nav">
          <summary className="menu-toggle" aria-label="Open navigation menu">
            <span></span><span></span><span></span>
          </summary>
          <nav className="mobile-nav-panel" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
            <button className="auth-button">Login / Sign in</button>
          </nav>
        </details>
      </header>
      <nav className="nav-menu">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>{link.label}</Link>
        ))}
        <button className="auth-button">Login / Sign in</button>
      </nav>
    </>
  );
}
