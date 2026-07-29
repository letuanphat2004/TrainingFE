import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../../data.js";
import { AssetImage } from "../common/AssetImage.jsx";

export function Header({ dark = false, overlay = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const logo = dark ? "Site Header.png" : "Site Header-1.png";

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "site-header",
        dark ? "site-header--dark" : "",
        overlay ? "site-header--overlay" : "",
        isMenuOpen ? "is-menu-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container site-header__inner">
        <Link
          className="brand-link"
          to="/"
          aria-label="Beautice home"
          onClick={() => setIsMenuOpen(false)}
        >
          <AssetImage fileName={logo} alt="Beautice" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              to={item.path}
              key={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
              {item.homeMenu ? <span aria-hidden="true">+</span> : null}
            </Link>
          ))}
          <Link
            className="button button--small"
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
