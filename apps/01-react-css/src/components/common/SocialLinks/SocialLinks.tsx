import type { SocialLink } from "../../../types/ui";
import "./SocialLinks.css";

interface SocialLinksProps {
  className?: string;
  links: SocialLink[];
}

export function SocialLinks({ className = "", links }: SocialLinksProps) {
    const classes = ["social-links", className].filter(Boolean).join(" ");
    return (<ul className={classes} aria-label="Social media links">
      {links.map(({ icon, label, url }) => (<li className="social-links__item" key={label}>
          <a className="social-links__link" href={url} aria-label={label}>
            <img className="social-links__icon" src={icon} alt=""/>
          </a>
        </li>))}
    </ul>);
}
