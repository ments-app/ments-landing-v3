"use client";

import { useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../page.module.css";
import { WEBAPP_LOGIN_URL, landingAsset, landingUrl } from "../site";

const NAV_LINKS = [
  { href: "/#ecosystem", label: "The platform" },
  { href: "/for-startups", label: "For startups" },
  { href: "/ecosystem-partners", label: "For partners" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About us" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const menu = useRef(null);
  const closeMenu = () => {
    if (menu.current) menu.current.open = false;
  };
  const links = NAV_LINKS.map(({ href, label }) => (
    <a
      href={landingUrl(href)}
      key={href}
      aria-current={pathname === href ? "page" : undefined}
      onClick={closeMenu}
    >
      {label}
    </a>
  ));
  return (
    <header className={styles.nav}>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>
      <a href={landingUrl("/")} aria-label="Ments home">
        <Image
          src={landingAsset("/ments Logo svg/horizontal/black_logo.svg")}
          alt="ments."
          width={151}
          height={46}
          loading="eager"
        />
      </a>
      <nav className={styles.desktopNav} aria-label="Main navigation">
        {links}
      </nav>
      <a className={styles.navCta} href={WEBAPP_LOGIN_URL}>
        Login / Sign in <span aria-hidden="true">↗</span>
      </a>
      <details
        ref={menu}
        className={styles.mobileNav}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeMenu();
            menu.current.querySelector("summary").focus();
          }
        }}
      >
        <summary aria-label="Toggle navigation">
          <span aria-hidden="true">☰</span>
        </summary>
        <nav aria-label="Mobile navigation">
          {links}
          <a href={WEBAPP_LOGIN_URL}>Login / Sign in ↗</a>
        </nav>
      </details>
    </header>
  );
}
