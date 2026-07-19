import Link from 'next/link';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Support — Ments',
  description: 'Get help with Ments — account access, profile updates, app and web issues, reports, and account deletion requests.',
};

const FAQS = [
  { q: 'How do I create an account?', a: `You can create a Ments account using email signup, Google Sign-In, or Apple Sign-In where available. If you sign up with email, you may need to enter the verification code sent to your email before you can continue.` },
  { q: "I can't log in. What should I do?", a: `Make sure your internet connection is working, check that you are using the same login method you used when creating your account, and confirm that your email is verified if you signed up with email. If you forgot your password, tap "Forgot password?" on the login screen. If Google or Apple Sign-In fails, restart the app and try again.` },
  { q: 'How do I reset my password?', a: `On the login screen, enter your email address and tap "Forgot password?" If an account exists for that email, you will receive a password reset link by email.` },
  { q: 'How do I delete my Ments account?', a: `Open the Ments app, go to your profile or account area, open Settings, tap Delete Account, and confirm your choice. Deleting your account permanently removes your profile from Ments, hides your posts, clears your login session, and cannot be undone. If you cannot access the app, email support@ments.app with the subject "Account Deletion Request" and include the email address linked to your Ments account.` },
  { q: 'How do I delete the Ments app from my phone?', a: `Deleting the app from your phone only removes the app from your device. It does not delete your Ments account. On iPhone, press and hold the Ments app icon, tap Remove App, then tap Delete App. On Android, press and hold the Ments app icon, then tap Uninstall or drag it to Uninstall.` },
  { q: 'What happens when I delete my account?', a: `When you delete your account, your Ments profile is removed and your login session is cleared. Your posts are hidden, and account-related data is deleted according to our Privacy Policy. Some limited information may be retained if required for legal, safety, or abuse-prevention reasons.` },
  { q: 'How do I report a post or profile?', a: `Open the post or profile, tap the menu or overflow button, select Report, choose the reason, and submit the report. We review reports to help keep Ments safe and professional.` },
  { q: 'How do I block or unblock someone?', a: `You can block users from their profile menu. To manage blocked users, open Settings, go to Blocked Users, and view or unblock users from there.` },
  { q: 'Why does Ments ask for camera, photo, microphone, or notification permission?', a: `Ments asks for permissions only for app features. Camera access supports photos, videos, and event QR codes. Photo Library access supports profile photos, posts, replies, project media, startup images, and resumes. Microphone access supports voice-based AI features. Notifications support alerts for messages, follows, replies, mentions, and application updates. You can manage permissions anytime from your device settings.` },
  { q: 'How do I update my profile?', a: `Go to your profile and choose the edit option. You can update details such as your name, username, bio, skills, experience, education, portfolio links, projects, and profile picture.` },
  { q: 'How do job or gig applications work?', a: `Ments may allow you to apply for jobs, gigs, or opportunities. When you apply, relevant profile and application information may be shared with the opportunity creator or employer. Review your information before submitting an application.` },
  { q: 'Does Ments use AI features?', a: `Yes. Ments may use AI features for resume parsing, profile assistance, job matching, interview preparation, search, and voice conversations. AI results may not always be perfect, so you should review important information before relying on it.` },
];

export default function SupportPage() {
  return (
    <div className="app legal-page">
      <div className="hero-shell">
        <div className="interior-nav">
          <SiteNav />
        </div>
      </div>

      <div className="container">
        <header className="legal-hero">
          <div className="hero-eyebrow">Ments Support</div>
          <h1 className="legal-title">
            Need help? <em className="serif">we&apos;ve got you.</em>
          </h1>
          <p className="legal-intro">
            We are here to help with account access, profile updates, app issues,
            web issues, reports, and account deletion requests.
          </p>
          <div className="support-contacts">
            <a href="mailto:support@ments.app" className="btn btn-primary btn-mono">support@ments.app</a>
            <a href="mailto:official@ments.app" className="btn btn-outline-dark btn-mono">official@ments.app</a>
          </div>
        </header>

        <div className="legal-content legal-doc-single">
          <div className="legal-clause">
            <h3 className="legal-h3">App Support</h3>
            <p>
              For users coming from the iOS or Android app, email us at
              support@ments.app. Include your registered email address, device
              type, app version if available, and a short description of the issue.
            </p>
          </div>

          <div className="legal-clause">
            <h3 className="legal-h3">Web Support</h3>
            <p>
              For users coming from the Ments website, email support@ments.app.
              Include the page URL, your browser, your registered email address if
              relevant, and a screenshot or screen recording if helpful.
            </p>
          </div>

          <div className="support-faq">
            <div className="legal-section-head">
              <span className="legal-section-num">FAQ</span>
              <h2 className="legal-h2">Frequently Asked Questions</h2>
            </div>

            <div className="faq-list">
              {FAQS.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="support-policies">
            <div className="legal-section-head">
              <span className="legal-section-num">Policies</span>
              <h2 className="legal-h2">Policies</h2>
            </div>
            <div className="policy-links">
              <Link href="/legal#privacy" className="policy-link">
                <span className="policy-link-title">Privacy Policy</span>
                <span className="policy-link-desc">Read how Ments handles account data and privacy.</span>
              </Link>
              <Link href="/legal#terms" className="policy-link">
                <span className="policy-link-title">Terms of Service</span>
                <span className="policy-link-desc">Read the terms that apply when using Ments.</span>
              </Link>
              <Link href="/csae-policy" className="policy-link">
                <span className="policy-link-title">Child Safety Policy</span>
                <span className="policy-link-desc">Our standards against child abuse &amp; exploitation.</span>
              </Link>
            </div>
          </div>

          <div className="legal-back">
            <Link href="/" className="hero-link">← Return to Home</Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
