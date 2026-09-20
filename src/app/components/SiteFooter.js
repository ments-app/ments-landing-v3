import Image from "next/image";
import { landingAsset, landingUrl } from "../site";

export default function SiteFooter() {
  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <div className="footer-intro">
          <a href={landingUrl("/")} aria-label="Ments home">
            <Image
              src={landingAsset("/ments Logo svg/horizontal/white_logo.svg")}
              alt="ments."
              width={155}
              height={48}
            />
          </a>
          <p>
            Your people. Your opportunities.
            <br />
            Your place to grow.
          </p>
          <a href="mailto:support@ments.app">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav aria-label="Platform links">
          <span>THE PLATFORM</span>
          <a href={landingUrl("/")}>Home</a>
          <a href={landingUrl("/for-startups")}>For startups</a>
          <a href={landingUrl("/ecosystem-partners")}>For partners</a>
          <a href={landingUrl("/events")}>Events & collaborations</a>
        </nav>
        <nav aria-label="Company links">
          <span>THE PEOPLE</span>
          <a href={landingUrl("/about")}>About Ments</a>
          <a href={landingUrl("/about#team")}>Meet the team</a>
          <a href={landingUrl("/about#workspace")}>Our workspace</a>
          <a href={landingUrl("/support")}>Help & support</a>
        </nav>
        <nav aria-label="Policy links">
          <span>THE DETAILS</span>
          <a href={landingUrl("/legal#terms")}>Terms of service</a>
          <a href={landingUrl("/legal#privacy")}>Privacy policy</a>
          <a href={landingUrl("/legal#community")}>Community guidelines</a>
          <a href={landingUrl("/csae-policy")}>Child safety</a>
        </nav>
      </div>
      <div className="footer-base">
        <span>© 2026 Ments. All rights reserved.</span>
        <span>
          Hustle begins here. <b aria-hidden="true">↗</b>
        </span>
      </div>
    </footer>
  );
}
