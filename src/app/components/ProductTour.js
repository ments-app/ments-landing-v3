"use client";

import { useState } from "react";
import Image from "next/image";
import startup from "../../../public/startup-dashboard.jpeg";
import facilitator from "../../../public/facilitator-dashboard.jpeg";
import styles from "../page.module.css";
import { WEBAPP_LOGIN_URL, landingUrl } from "../site";
import community from "../../../public/product/ments-events.png";

const workspaces = [
  {
    label: "The Ments app",
    title: "Your next connection starts here.",
    copy: "Discover startups, find events, and explore opportunities with the people building what’s next.",
    points: ["Discover startups", "Find events & competitions", "Explore jobs & gigs"],
    image: community,
    alt: "The Ments web app events directory with event cards and filters for competitions, meetups, and workshops",
    href: WEBAPP_LOGIN_URL,
    cta: "Explore Ments",
    screen: "ments.app / events & opportunities",
    caption: "Real Ments web app · Open the screenshot to take a closer look",
  },
  {
    label: "For startups",
    title: "Build your team. Grow your startup.",
    copy: "Hiring, mentorship, and opportunities — together in your startup workspace.",
    points: ["Post jobs & gigs", "Manage applications", "Connect with mentors"],
    image: startup,
    alt: "Startup dashboard preview showing jobs, gigs, mentorship sessions, and applications",
    href: "/for-startups",
    cta: "Explore the startup workspace",
  },
  {
    label: "For ecosystem partners",
    title: "Your ecosystem. Working together.",
    copy: "Bring your startups, mentors, and programs into one connected workspace.",
    points: [
      "Manage your startups",
      "Coordinate mentorship",
      "Run events & programs",
    ],
    image: facilitator,
    alt: "Facilitator dashboard preview showing startups, expert mentors, session bookings, and applications",
    href: "/ecosystem-partners",
    cta: "Explore the partner workspace",
  },
];

export default function ProductTour() {
  const [selected, setSelected] = useState(0);
  const workspace = workspaces[selected];
  function handleKey(event, index) {
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? workspaces.length - 1
          : ["ArrowLeft", "ArrowRight"].includes(event.key)
            ? (index + (event.key === "ArrowRight" ? 1 : -1) + workspaces.length) % workspaces.length
            : null;
    if (next === null) return;
    event.preventDefault();
    setSelected(next);
    document.getElementById(`workspace-tab-${next}`)?.focus();
  }
  return (
    <div>
      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Explore the Ments app and workspaces"
      >
        {workspaces.map((item, index) => (
          <button
            key={item.label}
            id={`workspace-tab-${index}`}
            role="tab"
            aria-selected={selected === index}
            aria-controls="workspace-panel"
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => handleKey(event, index)}
          >
            <span aria-hidden="true">{index === 0 ? "✳" : index === 1 ? "↗" : "◎"}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div
        className={styles.tourPanel}
        id="workspace-panel"
        role="tabpanel"
        aria-labelledby={`workspace-tab-${selected}`}
        tabIndex={0}
      >
        <div className={styles.tourCopy}>
          <span className={styles.eyebrow}>YOUR WAY INTO MENTS</span>
          <h3>{workspace.title}</h3>
          <p>{workspace.copy}</p>
          <ul>
            {workspace.points.map((point) => (
              <li key={point}>
                <span aria-hidden="true">✓</span>
                {point}
              </li>
            ))}
          </ul>
          <a className={styles.textLink} href={landingUrl(workspace.href)}>
            {workspace.cta} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <figure className={styles.tourVisual}>
          <div className={styles.browserBar}>
            <span aria-hidden="true">● ● ●</span>
            <span>{workspace.screen || `${workspace.label} / dashboard`}</span>
          </div>
          <a
            href={workspace.image.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open full-size screenshot: ${workspace.label}`}
            className={styles.screenshotLink}
          >
            <Image
              src={workspace.image}
              alt={workspace.alt}
              sizes="(max-width: 900px) 90vw, 65vw"
            />
          </a>
          <figcaption>
            {workspace.caption || "Workspace preview · Open the screenshot to take a closer look"}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
