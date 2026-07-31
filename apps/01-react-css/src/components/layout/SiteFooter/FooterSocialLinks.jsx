import "./FooterSocialLinks.css";
export function FooterSocialLinks({ links }) {
    return (<ul className="footer-social-links" aria-label="Beautice social media">
      {links.map((link) => (<li key={link.label}>
          <a href={link.href} aria-label={link.label}>
            <img src={link.icon} alt=""/>
          </a>
        </li>))}
    </ul>);
}
