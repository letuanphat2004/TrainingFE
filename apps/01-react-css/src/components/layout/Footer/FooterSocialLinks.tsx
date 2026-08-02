import type { FooterLink } from "../../../types/ui";
import "./FooterSocialLinks.css";

interface FooterSocialLink extends FooterLink {
  icon: string;
}

interface FooterSocialLinksProps {
  links: FooterSocialLink[];
}

export function FooterSocialLinks({ links }: FooterSocialLinksProps) {
    return (<ul className="footer-social-links" aria-label="Beautice social media">
      {links.map((link) => (<li key={link.label}>
          <a href={link.href} aria-label={link.label}>
            <img src={link.icon} alt=""/>
          </a>
        </li>))}
    </ul>);
}
