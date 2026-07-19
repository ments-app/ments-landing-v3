import Link from 'next/link';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Child Safety Policy (CSAE) — Ments',
  description: 'Ments standards, procedures and commitment to combating child sexual abuse and exploitation (CSAE).',
};

const CLAUSES = [
  { title: 'Zero Tolerance Policy', body: [
    `Ments has a zero-tolerance policy for any content, behavior, or activity that exploits, abuses, or endangers minors. Any content that sexualizes minors or promotes, depicts, or suggests child sexual abuse in any form is strictly prohibited and will be immediately removed. Accounts found to be sharing such content will be permanently banned and reported to relevant authorities.`,
  ]},
  { title: 'Prohibited Content and Behavior', body: [
    `The following are expressly forbidden on our platform:`,
    { list: [
      `Content depicting minors in a sexual or suggestive context`,
      `Child sexual abuse material (CSAM) in any form`,
      `Content that sexualizes or romanticizes relationships with minors`,
      `Content that promotes, encourages, or normalizes child sexual exploitation`,
      `Attempts to solicit, groom, or exploit minors`,
      `Sharing of personal information of minors without proper consent`,
      `Any other content that puts minors at risk of sexual exploitation or abuse`,
    ]},
  ]},
  { title: 'Age Verification', body: [
    `Our platform requires users to be at least 13 years old to create an account. We implement age-appropriate design features and age verification processes to help ensure that users are of appropriate age. For users between 13-18 years old, we have additional safeguards in place to protect their privacy and safety.`,
  ]},
  { title: 'Content Moderation', body: [
    `We employ a multi-layered approach to content moderation including:`,
    { list: [
      `Automated detection systems using machine learning to identify potentially harmful content`,
      `Human moderators who review flagged content`,
      `Community reporting tools that allow users to quickly report concerning content or behavior`,
      `Regular audits of our moderation systems to identify areas for improvement`,
    ]},
  ]},
  { title: 'Reporting Mechanisms', body: [
    `We provide easy-to-use reporting tools within our application that allow users to report any content or behavior that may violate our CSAE policy. Reports are treated with high priority and are typically reviewed within 24 hours. For urgent CSAE concerns, users can contact us directly at support@ments.app for expedited review.`,
  ]},
  { title: 'Collaboration with Law Enforcement', body: [
    `We maintain a policy of full cooperation with law enforcement agencies in investigations related to child sexual abuse and exploitation. We promptly report instances of CSAM to the National Center for Missing & Exploited Children (NCMEC) in the United States and to appropriate authorities in other jurisdictions.`,
  ]},
  { title: 'User Education', body: [
    `We provide educational resources about online safety for all users, with special emphasis on resources for younger users, parents, and guardians. These resources include in-app safety guides, links to external support organizations, and regular reminders about safety best practices.`,
  ]},
  { title: 'Regular Review and Updates', body: [
    `We regularly review and update our CSAE policies and procedures to incorporate new best practices, technological advances, and changes in regulatory requirements. We consult with child safety experts to ensure our approaches are effective and appropriate.`,
  ]},
  { title: 'Staff Training', body: [
    `All staff members, especially those involved in content moderation, customer support, and product development, receive specialized training on identifying and responding to CSAE issues. This training is updated regularly to reflect evolving threats and best practices.`,
  ]},
  { title: 'Transparency', body: [
    `We are committed to transparency in our efforts to combat CSAE. We publish regular reports on our content moderation activities, including statistics on CSAE-related content removals and account terminations, while respecting privacy and confidentiality requirements.`,
  ]},
  { title: 'Resources and Support', body: [
    `If you or someone you know has been affected by child sexual abuse or exploitation, please contact local law enforcement immediately. Additional resources include:`,
    { list: [
      `Childhelp National Child Abuse Hotline (US): 1-800-422-4453`,
      `NCMEC CyberTipline (US): https://report.cybertip.org/`,
      `Internet Watch Foundation (UK): https://report.iwf.org.uk/`,
      `Child Welfare Committee (India): Contact details available at your local district office`,
    ]},
  ]},
  { title: 'Contact Information', body: [
    `For questions about our CSAE policies or to report concerns, please contact us at support@ments.app.`,
  ]},
];

function Block({ item }) {
  if (typeof item === 'string') return <p>{item}</p>;
  if (item.list) {
    return <ul>{item.list.map((li, j) => <li key={j}>{li}</li>)}</ul>;
  }
  return null;
}

export default function CsaePolicyPage() {
  return (
    <div className="app legal-page">
      <div className="hero-shell">
        <div className="interior-nav">
          <SiteNav />
        </div>
      </div>

      <div className="container">
        <header className="legal-hero">
          <div className="hero-eyebrow">Child Safety</div>
          <h1 className="legal-title">
            Protecting children, <em className="serif">without exception.</em>
          </h1>
          <p className="legal-updated">Last updated: May 10, 2025</p>
          <p className="legal-intro">
            At Ments (&ldquo;the App&rdquo;), we are committed to creating a safe
            environment for all users, with a particular focus on protecting
            children from sexual abuse and exploitation. This policy outlines our
            standards, procedures, and commitment to combating child sexual abuse
            and exploitation (CSAE) in all forms.
          </p>
        </header>

        <div className="legal-content legal-doc-single">
          <div className="legal-section-head">
            <span className="legal-section-num">CSAE</span>
            <h2 className="legal-h2">Standards Against Child Sexual Abuse &amp; Exploitation</h2>
          </div>

          {CLAUSES.map((c, i) => (
            <div key={i} className="legal-clause">
              <h3 className="legal-h3">{c.title}</h3>
              {c.body.map((item, k) => <Block key={k} item={item} />)}
            </div>
          ))}

          <div className="legal-back">
            <Link href="/" className="hero-link">← Return to Home</Link>
            <Link href="/legal" className="hero-link" style={{ marginLeft: '2rem' }}>Legal Documents →</Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
