import { Link } from "react-router-dom";
import { AssetImage } from "../common/AssetImage.jsx";

const footerSocials = [
  ["facebook-f.png", "Facebook"],
  ["Twitter.png", "Twitter"],
  ["linkedin-in.png", "LinkedIn"],
  ["youtube.png", "YouTube"],
  ["Instagram.png", "Instagram"],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__content">
        <div className="site-footer__brand">
          <AssetImage fileName="Footer Logo.png" alt="Beautice" />
          <p>
            <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
          </p>
          <address>
            Baker Street 101, NY, United States.
            <br />
            +521 569 8966. &nbsp;&nbsp; <u>mail@company.com</u>
          </address>
        </div>
        <div>
          <h3>Pages</h3>
          <Link to="/">› Home</Link>
          <Link to="/about">› About</Link>
          <Link to="/services">› Services</Link>
          <Link to="/gallery">› Gallery</Link>
          <Link to="/team">› Team</Link>
        </div>
        <div>
          <h3>Informations</h3>
          <a href="#">› Terms &amp; conditions</a>
          <a href="#">› Privacy policy</a>
          <Link to="/blog">› Blog</Link>
          <Link to="/contact">› Contact</Link>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <div className="footer-social">
          {footerSocials.map(([fileName, label]) => (
            <a href="#" aria-label={label} key={label}>
              <AssetImage fileName={fileName} />
            </a>
          ))}
        </div>
        <p>© AltDesain Studio 2021 - All right reserved.</p>
      </div>
      <button
        className="back-to-top"
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </footer>
  );
}
