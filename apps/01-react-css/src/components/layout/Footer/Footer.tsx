import { assets } from "../../../constants/assets";
import { FooterBrand } from "./FooterBrand";
import { FooterLinkGroup } from "./FooterLinkGroup";
import { FooterSocialLinks } from "./FooterSocialLinks";
import type { FooterLink } from "../../../types/ui";
import "./Footer.css";
const pageLinks: FooterLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Team", href: "#team" },
];
const informationLinks: FooterLink[] = [
    { label: "Terms & conditions", href: "#terms" },
    { label: "Privacy policy", href: "#privacy" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];
const socialLinks = [
    { label: "Facebook", href: "#facebook", icon: assets.footer.facebook },
    { label: "Twitter", href: "#twitter", icon: assets.footer.twitter },
    { label: "LinkedIn", href: "#linkedin", icon: assets.footer.linkedin },
    { label: "YouTube", href: "#youtube", icon: assets.footer.youtube },
    { label: "Instagram", href: "#instagram", icon: assets.footer.instagram },
];
interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
    const classes = ["site-footer", className].filter(Boolean).join(" ");
    return (<footer className={classes}>
      <img className="site-footer__background" src={assets.footer.background} alt="" aria-hidden="true"/>
      <FooterBrand className="site-footer__brand" logo={assets.footer.logo}/>
      <FooterLinkGroup className="site-footer__pages" title="Pages" links={pageLinks}/>
      <FooterLinkGroup className="site-footer__information" title="Informations" links={informationLinks}/>
      <FooterSocialLinks links={socialLinks}/>
      <button className="site-footer__to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src={assets.footer.toTop} alt=""/>
      </button>
      <p className="site-footer__copyright">© AltDesain Studio 2021 - All right reserved.</p>
    </footer>);
}
