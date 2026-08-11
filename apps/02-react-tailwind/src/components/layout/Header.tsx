import { useState } from "react";
import { assets } from "../../constants/assets";
import { Button } from "../common/Button";

const navigationItems = [
  { id: "home", label: "Home", href: "#home", hasPlus: true },
  { id: "about", label: "About", href: "#about" },
  { id: "service", label: "Service", href: "#services" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "blog", label: "Blog", href: "#blog" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-20 mt-4 flex min-h-[63px] w-full items-center px-4 min-[541px]:mt-[41px] min-[541px]:px-12 desktop:mt-[65px] desktop:px-[150px]">
      <a href="#home" aria-label="Beautice home" className="relative z-20 shrink-0">
        <img src={assets.brand.mainLogo} width="258" height="63" alt="Beautice" className="h-[63px] w-[min(258px,calc(100vw-112px))] object-contain min-[541px]:w-[258px]" />
      </a>

      <nav
        id="primary-navigation"
        aria-label="Primary navigation"
        className={`${isOpen ? "flex" : "hidden"} absolute left-4 right-4 top-[79px] z-10 flex-col rounded-3xl bg-white p-6 shadow-card min-[1051px]:static min-[1051px]:ml-auto min-[1051px]:flex min-[1051px]:flex-row min-[1051px]:items-center min-[1051px]:bg-transparent min-[1051px]:p-0 min-[1051px]:shadow-none`}
      >
        <ul className="m-0 flex list-none flex-col gap-5 p-0 min-[1051px]:flex-row min-[1051px]:items-center min-[1051px]:gap-[clamp(24px,3.33vw,48px)]">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                className={`text-base font-medium leading-6 transition hover:text-primary ${item.id === "home" ? "font-semibold text-primary" : "text-muted"}`}
                href={item.href}
                aria-current={item.id === "home" ? "page" : undefined}
              >
                {item.label}
                {item.hasPlus ? <span aria-hidden="true" className="ml-1">+</span> : null}
              </a>
            </li>
          ))}
        </ul>
        <Button className="mt-6 w-[158px] min-[1051px]:hidden" href="#contact">Contact</Button>
      </nav>

      <Button className="ml-8 hidden h-[52px] w-[158px] min-[1051px]:inline-flex desktop:ml-[52px]" href="#contact">Contact</Button>

      <button
        className="relative z-20 ml-auto flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-accent shadow-button min-[1051px]:hidden"
        type="button"
        aria-label="Toggle navigation"
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="h-0.5 w-5 bg-white" />
        <span className="h-0.5 w-5 bg-white" />
        <span className="h-0.5 w-5 bg-white" />
      </button>
    </header>
  );
}
