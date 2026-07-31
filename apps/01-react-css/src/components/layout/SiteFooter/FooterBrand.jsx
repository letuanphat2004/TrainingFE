import "./FooterBrand.css";
export function FooterBrand({ className = "", logo }) {
    const classes = ["footer-brand", className].filter(Boolean).join(" ");
    return (<section className={classes} aria-label="Beautice information">
      <img className="footer-brand__logo" src={logo} alt="Beautice"/>
      <p className="footer-brand__tagline">
        <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
      </p>
      <address className="footer-brand__address">Baker Steet 101, NY, United States.</address>
      <div className="footer-brand__contact">
        <a href="tel:+5215698966">+521 569 8966.</a>
        <a href="mailto:mail@company.com">mail@company.com.</a>
      </div>
    </section>);
}
