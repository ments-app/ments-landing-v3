// Lightweight, server-rendered diagrams. No invented product metrics or activity.
export function FeatureIcon({ index = 0 }) {
  const paths = [
    <>
      <rect x="5" y="4" width="14" height="16" rx="3" />
      <path d="M9 9h6M9 13h6M9 17h3" />
    </>,
    <>
      <rect x="3" y="7" width="18" height="13" rx="3" />
      <path d="M8 7V4h8v3M3 12h18M10 12v3h4v-3" />
    </>,
    <>
      <circle cx="10" cy="9" r="4" />
      <path d="M3 21v-2a7 7 0 0 1 14 0v2M17 4a4 4 0 0 1 0 8M21 21v-2a7 7 0 0 0-3-6" />
    </>,
    <>
      <path d="m13 2-9 12h7l-1 8 10-13h-8z" />
    </>,
    <>
      <path d="m4 17 6-6 4 3 6-9M14 5h6v6" />
      <path d="M4 4v16h16" />
    </>,
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M7 2v6M17 2v6M3 11h18M7 15h3M14 15h3" />
    </>,
    <>
      <path d="M3 5h7l2 3h9v12H3zM7 12h10M7 16h6" />
    </>,
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="m7 9 4 6M17 9l-4 6M9 6h6" />
    </>,
    <>
      <path d="m12 3 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5" />
    </>,
  ];
  return (
    <span className="feature-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[index % paths.length]}
      </svg>
    </span>
  );
}

export function Journey({ kind }) {
  const partner = kind === "partner";
  const steps = partner
    ? [
        ["Onboard", "Bring your startups into one cohort.", 0],
        ["Verify", "Build trust in your ecosystem.", 7],
        ["Enable", "Connect talent, mentors, and programs.", 2],
        ["Track", "See progress across your network.", 4],
      ]
    : [
        ["Show up", "Build your public startup profile.", 0],
        ["Build your team", "Post roles and discover talent.", 1],
        ["Find support", "Connect to mentors and facilitators.", 7],
        ["Keep growing", "Explore events and opportunities.", 4],
      ];
  return (
    <section
      className="journey-section"
      aria-label={
        partner
          ? "How your ecosystem works in Ments"
          : "Your startup journey in Ments"
      }
    >
      <div className="journey-heading">
        <span className="section-label">HOW IT COMES TOGETHER</span>
        <span>One workspace. Every next step.</span>
      </div>
      <ol className="journey-track">
        {steps.map(([title, copy, icon], i) => (
          <li key={title}>
            <div className="journey-marker">
              <FeatureIcon index={icon} />
              <span aria-hidden="true">0{i + 1}</span>
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function EventToolVisual({ index }) {
  const steps = [
    ["Discover", "Invest virtually", "Follow"],
    ["Pitch", "Audience votes", "Leaderboard"],
    ["Create profile", "Connect", "Stay in touch"],
  ][index];
  return (
    <div
      className={`event-tool-visual tool-${index}`}
      aria-label={`${steps.join(" → ")}: illustrative event flow`}
    >
      <div className="tool-symbol">
        <FeatureIcon index={[4, 3, 0][index]} />
        <span>{["InvestArena", "Pitchers Pilot", "Ments ID"][index]}</span>
      </div>
      <ol>
        {steps.map((step, i) => (
          <li key={step}>
            <span>0{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>
      <small>HOW IT WORKS</small>
    </div>
  );
}
