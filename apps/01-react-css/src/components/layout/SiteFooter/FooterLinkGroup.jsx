import "./FooterLinkGroup.css";
export function FooterLinkGroup({ className = "", links, title }) {
    const classes = ["footer-link-group", className].filter(Boolean).join(" ");
    return (<nav className={classes} aria-label={title}>
      <h2 className="footer-link-group__title">{title}</h2>
      <ul className="footer-link-group__list">
        {links.map((link) => (<li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>))}
      </ul>
    </nav>);
}
