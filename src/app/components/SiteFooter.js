import Link from 'next/link';

/* Shared footer used on every page. */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/" className="footer-brand">
            <img
              src="/ments Logo svg/horizontal/white_logo.svg"
              alt="ments."
            />
          </Link>
          <nav className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/for-startups">Startups</Link>
            <Link href="/ecosystem-partners">Partners</Link>
            <Link href="/events">Events</Link>
            <Link href="/support">Support</Link>
            <Link href="/legal">Legal</Link>
            <a href="mailto:support@ments.app">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Ments. All rights reserved.</p>
          <p>Hustle begins here.</p>
        </div>
      </div>
    </footer>
  );
}
