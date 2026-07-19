import Link from 'next/link';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Legal Documentation — Ments',
  description: 'Terms & Conditions, Privacy Policy, Community Guidelines, Child Safety Policy and Cookie Notice for Ments.',
};

/* ------------------------------------------------------------------ */
/* Content (kept as data so the legal text stays faithful & editable) */
/* ------------------------------------------------------------------ */

const TERMS = [
  { num: '1.1', title: 'Acceptance of the Terms', body: [
    `By downloading, installing, or using the App you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree, you must not use the App.`,
  ]},
  { num: '1.2', title: 'Eligibility', body: [
    `You must be at least 16 years old to create an account. If you are between 16 and 18, you confirm that your parent or legal guardian has reviewed and accepted these Terms on your behalf.`,
  ]},
  { num: '1.3', title: 'Account Registration & Security', body: [
    { list: [
      `Provide accurate information and keep it updated.`,
      `Keep your credentials confidential. You are responsible for all activity under your account.`,
      `You may not create more than one account, use another person's account, transfer your account, or create an account using false information.`,
      `We may suspend or terminate accounts that violate these Terms or applicable law.`,
    ]},
  ]},
  { num: '1.4', title: 'Description of Service', body: [
    `Ments is a professional networking and opportunities platform that enables users to:`,
    { list: [
      `Create and maintain professional profiles with experience, education, skills, and portfolios`,
      `Browse and apply for jobs, gigs, and freelance opportunities`,
      `Discover and connect with startups, organizations, and professionals`,
      `Showcase projects and professional work`,
      `Communicate with other professionals via direct messaging`,
      `Participate in events, competitions, and professional communities`,
      `Upload and parse resumes for profile auto-fill using AI`,
      `Receive AI-powered job matching and interview preparation`,
    ]},
    `We reserve the right to modify, suspend, or discontinue any part of the App at any time, with or without notice.`,
  ]},
  { num: '1.5', title: 'User-Generated Content & Conduct', body: [
    { list: [
      `You retain ownership of content you post but grant us a worldwide, non-exclusive, royalty-free licence to host, display, reproduce, distribute, and adapt it solely for operating, promoting, and improving the App. This licence ends when you delete your content or account, except where retention is required by law.`,
      `Do not post content that is illegal, hateful, harassing, infringing, or otherwise prohibited in the Community Guidelines.`,
      `Professional interactions on the platform are peer-to-peer. They do not constitute professional, financial, medical, or legal advice. You remain solely responsible for decisions made based on such content.`,
      `Do not post fraudulent or misleading professional credentials, work history, or qualifications.`,
    ]},
  ]},
  { num: '1.6', title: 'Jobs, Gigs & Applications', body: [
    `Opportunity Listings: Employers, facilitators, and organizations may post opportunities on the App. We do not verify the accuracy, legitimacy, or legality of listings and are not responsible for their content.`,
    `Applications: When you apply for a job or gig, the following information may be shared with the employer or facilitator:`,
    { list: [
      `Your profile information (name, skills, experience, education)`,
      `AI-generated match score and profile summary`,
      `Your interview responses and scores`,
      `Resume information`,
    ]},
    `You acknowledge that submitting an application shares this data with the listing party and that we are not responsible for how they use it.`,
    `Application Integrity: During timed assessments and interviews within the App, the App may monitor application activity (such as tab switches and time spent) to maintain assessment integrity. This activity data may be visible to employers.`,
    `No Employment Guarantee: We are a platform that connects professionals with opportunities. We do not guarantee employment, compensation, or any specific outcome. We are not a party to any employment or contracting relationship between users.`,
  ]},
  { num: '1.7', title: 'AI-Powered Features', body: [
    `The App uses artificial intelligence for resume parsing, job matching, interview question generation, profile summaries, intelligent search, and voice conversations. AI-generated content is provided for informational and assistive purposes only.`,
    `While we strive for accuracy, AI-generated content (including match scores, profile summaries, parsed resume data, and interview questions) may contain errors or inaccuracies. You are responsible for reviewing and verifying all AI-generated content before relying on it.`,
    `By using AI features, you consent to the processing of your data (including resume text, profile information, search queries, and voice audio) by our AI service providers for the purpose of delivering these features. See the Privacy Policy below for details.`,
  ]},
  { num: '1.8', title: 'Messaging & Communication', body: [
    `The App provides direct messaging between users. You agree to use messaging only for legitimate professional communication. You agree not to send spam, bulk messages, or unsolicited promotional content, harass other users, or share another user's private messages without their consent.`,
    `While we do not routinely monitor the content of private messages, we reserve the right to review messages when we receive reports of abuse, harassment, or violations of these Terms.`,
  ]},
  { num: '1.9', title: 'Payments & Subscriptions', body: [
    `Premium features, if available, are billed through Google Play or the Apple App Store using the payment method on file. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period. The respective store's refund policies apply.`,
  ]},
  { num: '1.10', title: 'Intellectual-Property Rights', body: [
    `All proprietary content of the App (code, design, trademarks, and brand elements) is owned by or licensed to us and is protected by Indian and international IP laws. No rights are granted except as expressly stated.`,
  ]},
  { num: '1.11', title: 'Third-Party Services', body: [
    `The App integrates third-party services (listed in the Privacy Policy). Your use of those services is governed by their respective terms.`,
  ]},
  { num: '1.12', title: 'Disclaimer of Warranties', body: [
    { caps: `The App is provided "as-is" and "as-available." We make no warranties, express or implied, regarding reliability, availability, fitness for a particular purpose, or non-infringement. We do not warrant that the App will be uninterrupted, secure, or error-free, or that AI-generated content will be accurate.` },
  ]},
  { num: '1.13', title: 'Limitation of Liability', body: [
    { caps: `To the fullest extent permitted by law, our total liability for any claims arising out of or relating to the App will not exceed the greater of INR 5,000 or the amount you paid us in the past 12 months. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.` },
  ]},
  { num: '1.14', title: 'Indemnification', body: [
    `You agree to indemnify and hold harmless Ments, its directors, employees, and partners from any claims, damages, or expenses arising out of your breach of these Terms, your User Content, misuse of the App, or misrepresentation of your professional qualifications.`,
  ]},
  { num: '1.15', title: 'Account Termination', body: [
    `By You: You may delete your account at any time in-app or by emailing support@ments.app. Your profile and content will be removed from public view, and your data will be deleted in accordance with our Privacy Policy.`,
    `By Us: We may suspend or terminate your account at any time for violation of these Terms, fraudulent or illegal activity, extended inactivity, or requests from law enforcement.`,
    `Upon termination, your right to use the App immediately ceases. Sections that by their nature should survive termination shall survive, including Intellectual Property, Disclaimers, Limitation of Liability, and Indemnification.`,
  ]},
  { num: '1.16', title: 'Governing Law & Dispute Resolution', body: [
    `These Terms are governed by the laws of India. Any disputes shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts in Ghaziabad, Uttar Pradesh, India. You agree that dispute resolution will be conducted on an individual basis, not as a class action. Consumers in the EU/UK retain mandatory protections under local law.`,
  ]},
  { num: '1.17', title: 'Apple & Google Platform Terms', body: [
    `Apple App Store: If you download the App from the Apple App Store, you acknowledge that: these Terms are between you and Ments, not Apple Inc.; Apple has no obligation to provide maintenance or support; Apple is not responsible for addressing claims relating to the App; in the event of any third-party IP claim, Ments is responsible for investigation and resolution; Apple and its subsidiaries are third-party beneficiaries of these Terms.`,
    `Google Play Store: If you download the App from Google Play, Google LLC's terms of service also apply.`,
  ]},
  { num: '1.18', title: 'Changes to the Terms', body: [
    `We may update these Terms from time to time. Material changes will be notified in-app or via email at least 7 days before they take effect. Your continued use after changes constitutes acceptance.`,
  ]},
  { num: '1.19', title: 'Contact', body: [
    `Questions about these Terms? Email us at support@ments.app.`,
  ]},
];

const PRIVACY = [
  { num: '2.1', title: 'Scope & Purpose', body: [
    `This Privacy Policy explains what personal data we collect, how we use it, and your choices. It applies to all users of the App and ments.app.`,
  ]},
  { num: '2.2', title: 'Data We Collect', body: [
    { sub: 'Information You Provide Directly' },
    { table: {
      head: ['Category', 'Data Points'],
      rows: [
        ['Account & Identity', 'Full name, email address, username, password (hashed), profile photo, banner image'],
        ['Professional Profile', 'Tagline, bio, current city, user type, skills, "looking for" interests, social links (LinkedIn, portfolio URLs)'],
        ['Experience & Education', 'Company name, position title, dates, description; institution, degree, field of study, dates'],
        ['Resume', 'Uploaded PDF files, extracted text content (processed by AI for auto-fill)'],
        ['Projects & Portfolios', 'Project title, description, media (images/slides), links, portfolio views'],
        ['Startup Profiles', 'Brand name, mission, funding details, founder information'],
        ['Content', 'Text posts, replies, images, videos, poll questions and responses'],
        ['Messages', 'Direct message content, message reactions, conversation metadata (participants, timestamps, read status)'],
        ['Job Applications', 'Applications submitted, answers to AI interview questions, match scores, profile summaries, application timestamps'],
        ['Organization & Events', 'Organization memberships, event participation, competition entries'],
      ],
    }},
    { sub: 'Information Collected Automatically' },
    { table: {
      head: ['Category', 'Data Points'],
      rows: [
        ['Device & Technical', 'Device type, operating system, app version, device platform (iOS/Android)'],
        ['Push Notification Tokens', 'Firebase Cloud Messaging (FCM) token, stored per device'],
        ['Usage Data', 'Content viewed, liked, shared, or interacted with; time spent viewing content; navigation patterns; session identifiers'],
      ],
    }},
    { note: `Note: We do not collect precise GPS location data. City information is provided voluntarily by users as a text field.` },
    { sub: 'Information From Third-Party Services' },
    `When you sign in using Google, we receive your name, email address, and profile photo from Google, subject to your Google account privacy settings.`,
  ]},
  { num: '2.3', title: 'How We Use Data', body: [
    { list: [
      `Operate the App — create and maintain your account, display your profile, facilitate messaging, enable job applications, process your content`,
      `Personalization — personalize your content feed, calculate job match scores, surface relevant opportunities`,
      `AI Features — parse resumes to auto-fill profile fields, generate interview questions, provide intelligent search, power voice conversations`,
      `Communication — send push notifications for messages, replies, mentions, and application updates; deliver in-app notifications`,
      `Safety & Integrity — monitor application integrity during timed assessments, enforce Terms and Community Guidelines, investigate abuse reports`,
      `Improvement — understand usage patterns to improve features, diagnose technical issues, optimize performance`,
      `Legal Compliance — comply with applicable laws and regulations`,
    ]},
  ]},
  { num: '2.4', title: 'Legal Bases (GDPR)', body: [
    `We rely on contractual necessity (providing the service), legitimate interests (improving the App, preventing abuse), consent (where applicable, such as marketing), and legal obligation as appropriate.`,
  ]},
  { num: '2.5', title: 'Third-Party Services & Data Sharing', body: [
    `We never sell your personal data. We share it only with the following:`,
    { table: {
      head: ['Service', 'Purpose', 'Data Shared'],
      rows: [
        ['Supabase', 'Backend infrastructure, authentication, database, file storage, real-time messaging', 'Account data, content, messages, files'],
        ['Firebase (Google)', 'Push notifications', 'Device tokens, notification payloads'],
        ['Google Sign-In', 'Authentication', 'OAuth tokens (email, name, profile photo)'],
        ['Groq', 'AI-powered resume parsing, intelligent search, interview question generation, job matching', 'Resume text, search queries, profile data for matching'],
        ['ElevenLabs', 'Voice agent conversations', 'Voice audio during active voice sessions only'],
        ['AWS S3', 'File storage (images, videos, resumes)', 'Uploaded media files'],
      ],
    }},
    `All service providers process data on our behalf under appropriate data processing agreements.`,
    `With Other Users: Your profile information is visible to other users based on your visibility settings. When you apply for a job or gig, the employer can see your application data including match score, profile summary, interview responses, and resume information.`,
    `Legal Authorities: We disclose data when required by law, court order, or to protect the safety of users or the public.`,
    `Business Transfers: If we are involved in a merger, acquisition, or asset sale, your data may be transferred. We will notify you before your data becomes subject to a different privacy policy.`,
  ]},
  { num: '2.6', title: 'Device Permissions', body: [
    { table: {
      head: ['Permission', 'Purpose', 'When Requested'],
      rows: [
        ['Camera', 'Take photos, record videos, scan QR codes at events', 'When you create a post, update your profile photo, or scan a QR code'],
        ['Microphone', 'Voice agent conversations', 'When you initiate a voice agent session'],
        ['Photo Library', 'Select existing photos and videos for upload', 'When you create a post or update your profile photo'],
        ['Push Notifications', 'Receive alerts for messages, replies, mentions, and application updates', 'On first app launch (you can decline or change later in device settings)'],
      ],
    }},
    `All permissions are requested at the time of use and can be revoked at any time through your device settings.`,
  ]},
  { num: '2.7', title: 'Data Retention', body: [
    { list: [
      `Account data: Retained for as long as your account is active.`,
      `Content you create: Retained until you delete it or your account is deleted.`,
      `Messages: Retained until the conversation is deleted or account deletion is requested. Messages may be anonymized rather than deleted to preserve conversation integrity for other participants.`,
      `Application data: Retained for the duration of the application process and a reasonable period afterward for record-keeping.`,
      `Usage and interaction data: Retained for up to 12 months, then aggregated or deleted.`,
      `Push notification tokens: Updated on each app session; old tokens are overwritten.`,
    ]},
    `You may request deletion of all your data at any time (see Section 2.9).`,
  ]},
  { num: '2.8', title: 'International Transfers', body: [
    `Data may be processed outside your country, including in the US, EU, and India. We use appropriate safeguards such as Standard Contractual Clauses where required.`,
  ]},
  { num: '2.9', title: 'Your Rights', body: [
    `Depending on your jurisdiction you may have rights to access, correct, delete, restrict, or port your data, and to object to processing or withdraw consent.`,
    `Account & Data Deletion: You may request deletion of your account and all associated data by emailing support@ments.app. Upon receiving a verified request: your profile, posts, and content will be removed within 30 days; some data may be retained for legal compliance for up to 90 days.`,
    `Visibility Controls: You can control the visibility of profile sections (projects, startups) through the profile edit screen.`,
    `Notification Preferences: You can manage push notification preferences through your device settings.`,
    `California Residents (CCPA): You have the right to know what personal information we collect, request deletion, and opt out of the sale of personal information (we do not sell personal information).`,
    `EEA/UK/Swiss Residents (GDPR): You have additional rights including data portability and the right to lodge a complaint with a supervisory authority.`,
    `To exercise any rights, email support@ments.app.`,
  ]},
  { num: '2.10', title: 'Security', body: [
    `We use encryption in transit (TLS), row-level security (RLS) policies on our database, authentication via secure JWT tokens, and secure credential storage via environment variables. No system is 100% secure; please report vulnerabilities to official@ments.app.`,
  ]},
  { num: '2.11', title: "Children's Privacy", body: [
    `The App is not directed to anyone under 16. We do not knowingly collect personal data from anyone under 16. If we learn we have collected data from a child under 16 without parental consent, we will delete it promptly. If you believe a child under 16 has provided us with personal information, contact support@ments.app.`,
  ]},
  { num: '2.12', title: 'Changes to This Policy', body: [
    `If we make material changes, we will notify you in-app or via email at least 7 days before they take effect.`,
  ]},
  { num: '2.13', title: 'Contact', body: [
    `Privacy questions? Email support@ments.app or write to:`,
    { note: `Ments\nNirmaan, Sudha Shankar Building, IIT Madras, Chennai, Tamil Nadu, India` },
  ]},
];

const COMMUNITY = [
  { body: [
    `These guidelines complement the Terms and apply to all users:`,
    { list: [
      `Be respectful — Harassment, hate speech, bullying, threats, or discrimination of any kind is forbidden.`,
      `Be honest — Do not misrepresent your identity, credentials, or professional qualifications.`,
      `No illegal content — Do not post content that violates any applicable law.`,
      `No spam or self-promotion — outside designated areas.`,
      `Protect privacy — Share only what you own or have permission to share. Do not share another user's private messages or personal information without consent.`,
      `No exploitation — Content that exploits, abuses, or endangers any person, especially minors, is strictly prohibited.`,
      `Professional conduct — This is a professional platform. Keep interactions professional and constructive.`,
      `Report violations — using the in-app reporting tools. Repeated or severe breaches will lead to account suspension or permanent termination.`,
    ]},
  ]},
];

const CHILD = [
  { title: 'Zero Tolerance Policy', body: [
    `Ments has a zero-tolerance policy for any content, behavior, or activity that exploits, abuses, or endangers minors. Any content that sexualizes minors or promotes, depicts, or suggests child sexual abuse in any form is strictly prohibited and will be immediately removed. Accounts found sharing such content will be permanently banned and reported to relevant authorities.`,
  ]},
  { title: 'Prohibited Content and Behavior', body: [
    `The following are expressly forbidden:`,
    { list: [
      `Content depicting minors in a sexual or suggestive context`,
      `Child sexual abuse material (CSAM) in any form`,
      `Content that sexualizes or romanticizes relationships with minors`,
      `Content that promotes, encourages, or normalizes child sexual exploitation`,
      `Attempts to solicit, groom, or exploit minors`,
      `Sharing personal information of minors without proper consent`,
      `Any other content that puts minors at risk of sexual exploitation or abuse`,
    ]},
  ]},
  { title: 'Age Verification', body: [
    `Our platform requires users to be at least 16 years old to create an account. We implement age-appropriate design features and verification processes. For users between 16 and 18, additional safeguards are in place to protect their privacy and safety.`,
  ]},
  { title: 'Content Moderation', body: [
    `We employ a multi-layered approach including:`,
    { list: [
      `Automated detection systems to identify potentially harmful content`,
      `Human review of flagged content`,
      `Community reporting tools for users to quickly report concerning content or behavior`,
      `Regular audits of moderation systems`,
    ]},
  ]},
  { title: 'Reporting Mechanisms', body: [
    `We provide in-app reporting tools that allow users to report any content or behavior that may violate this policy. Reports are treated with high priority and reviewed within 24 hours. For urgent CSAE concerns, contact support@ments.app for expedited review.`,
  ]},
  { title: 'Collaboration with Law Enforcement', body: [
    `We maintain full cooperation with law enforcement agencies in investigations related to child sexual abuse and exploitation. We promptly report instances of CSAM to the National Center for Missing & Exploited Children (NCMEC) and appropriate authorities in other jurisdictions.`,
  ]},
  { title: 'Resources and Support', body: [
    `If you or someone you know has been affected by child sexual abuse or exploitation, please contact local law enforcement immediately. Additional resources:`,
    { list: [
      `Childhelp National Child Abuse Hotline (US): 1-800-422-4453`,
      `NCMEC CyberTipline (US): https://report.cybertip.org/`,
      `Internet Watch Foundation (UK): https://report.iwf.org.uk/`,
      `Child Welfare Committee (India): Contact details available at your local district office`,
    ]},
  ]},
];

const COOKIES = [
  { body: [
    `We and our partners use local storage and similar technologies to:`,
    { list: [
      `Keep you signed in`,
      `Remember preferences`,
      `Measure engagement and fix bugs`,
      `Personalize your experience`,
    ]},
    `You can clear or block cookies in your browser settings, but some features may not work properly.`,
  ]},
];

const ACK = [
  { body: [
    `By using Ments you acknowledge you have read and understood all of the above documents.`,
    { sub: 'Contact Information' },
    { list: [
      `General support: support@ments.app`,
      `Legal & official inquiries: official@ments.app`,
      `Child safety concerns: support@ments.app`,
      `Website: https://www.ments.app`,
    ]},
  ]},
];

const SECTIONS = [
  { id: 'terms', n: '01', title: 'Terms & Conditions of Use', meta: 'Last updated: March 27, 2026', clauses: TERMS },
  { id: 'privacy', n: '02', title: 'Privacy Policy', meta: 'Last updated: March 27, 2026 — including Data Safety disclosure', clauses: PRIVACY },
  { id: 'community', n: '03', title: 'Community Guidelines', clauses: COMMUNITY },
  { id: 'child-safety', n: '04', title: 'Child Safety Policy (CSAE)', clauses: CHILD },
  { id: 'cookies', n: '05', title: 'Cookie & Tracking Technologies Notice', clauses: COOKIES },
  { id: 'acknowledgement', n: '06', title: 'Acknowledgement', clauses: ACK },
];

/* ------------------------------------------------------------------ */
/* Renderers                                                          */
/* ------------------------------------------------------------------ */

function Block({ item, k }) {
  if (typeof item === 'string') return <p key={k}>{item}</p>;
  if (item.list) {
    return (
      <ul key={k}>
        {item.list.map((li, j) => <li key={j}>{li}</li>)}
      </ul>
    );
  }
  if (item.sub) return <h4 key={k} className="legal-h4">{item.sub}</h4>;
  if (item.note) return <p key={k} className="legal-note">{item.note}</p>;
  if (item.caps) return <p key={k} className="legal-caps">{item.caps}</p>;
  if (item.table) {
    return (
      <div key={k} className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>{item.table.head.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {item.table.rows.map((row, i) => (
              <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return null;
}

function Clause({ clause }) {
  return (
    <div className="legal-clause">
      {clause.title && (
        <h3 className="legal-h3">
          {clause.num && <span className="legal-clause-num">{clause.num}</span>}
          {clause.title}
        </h3>
      )}
      {clause.body.map((item, k) => <Block key={k} item={item} k={k} />)}
    </div>
  );
}

export default function LegalPage() {
  return (
    <div className="app legal-page">
      {/* Consistent navbar (framed, same as every page) */}
      <div className="hero-shell">
        <div className="interior-nav">
          <SiteNav />
        </div>
      </div>

      <div className="container">
        <header className="legal-hero">
          <div className="hero-eyebrow">Legal Documentation</div>
          <h1 className="legal-title">
            The terms behind <em className="serif">the hustle.</em>
          </h1>
          <p className="legal-updated">Last updated: March 27, 2026</p>
          <p className="legal-intro">
            Welcome to Ments (&ldquo;the App&rdquo;), a professional networking
            and opportunities platform based in India (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;). Below you will find the core
            legal documents required for publishing and operating the App on
            Google Play and the Apple App Store.
          </p>
        </header>

        <div className="legal-layout">
          <aside className="legal-toc">
            <div className="legal-toc-label">Table of Contents</div>
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                <span className="toc-num">{s.n}</span>
                {s.title}
              </a>
            ))}
          </aside>

          <div className="legal-content">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="legal-section">
                <div className="legal-section-head">
                  <span className="legal-section-num">{s.n}</span>
                  <h2 className="legal-h2">{s.title}</h2>
                </div>
                {s.meta && <p className="legal-section-meta">{s.meta}</p>}
                {s.clauses.map((c, i) => <Clause key={i} clause={c} />)}
              </section>
            ))}

            <div className="legal-back">
              <Link href="/" className="hero-link">← Back to Ments</Link>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
