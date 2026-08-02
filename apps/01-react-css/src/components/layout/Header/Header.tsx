import { assets } from "../../../constants/assets";
import { Button } from "../../common/Button";
import "./Header.css";

const navigationItems = [
  { id: "home", label: "Home", href: "#home", hasPlus: true },
  { id: "about", label: "About", href: "#about" },
  { id: "service", label: "Service", href: "#services" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "blog", label: "Blog", href: "#blog" },
];

interface HeaderProps {
  activePage?: string;
  logo?: string;
  variant?: string;
}

export function Header({ activePage, variant, logo = assets.brand.mainLogo }: HeaderProps) {
  return (
    <header className={`site-header page-component${variant ? ` site-header--${variant}` : ""}`}>
      <a className="site-header__brand" href="#home" aria-label="Beautice home">
        <img src={logo} width="258" height="63" alt="Beautice" />
      </a>

      <nav className="site-header__navigation" aria-label="Primary navigation">
        <ul className="site-header__navigation-list">
          {navigationItems.map((item) => (
            <li
              className={`site-header__navigation-item site-header__navigation-item--${item.id}`}
              key={item.id}
            >
              <a
                className="site-header__navigation-link"
                data-active={item.id === activePage || undefined}
                href={item.href}
                aria-current={item.id === activePage ? "page" : undefined}
              >
                {item.label}
                {item.hasPlus ? (
                  <span className="site-header__navigation-plus" aria-hidden="true">
                    +
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button className="site-header__contact" href="#contact">
        Contact
      </Button>
    </header>
  );
}
