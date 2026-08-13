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

const navigationDesktopMargins = ["", "xl:ml-[45px]", "xl:ml-[45px]", "xl:ml-[46px]", "xl:ml-[47px]"];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-20 mt-4 min-h-[63px] w-full px-6 sm:mt-[41px] sm:px-8 lg:px-6">
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-[minmax(0,1fr)_auto] grid-rows-[63px_0px] items-center lg:flex">
        <a href="#home" aria-label="Beautice home" className="col-start-1 row-start-1 w-full max-w-[258px] shrink-0">
          <img src={assets.brand.mainLogo} width="258" height="63" alt="Beautice" className="h-auto w-full object-contain" />
        </a>

        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`${isOpen ? "flex" : "hidden"} col-span-2 row-start-2 flex-col max-lg:mt-3 max-lg:w-fit max-lg:min-w-[220px] max-lg:justify-self-end max-lg:self-start max-lg:rounded-3xl max-lg:bg-white max-lg:p-5 max-lg:shadow-card lg:ml-auto lg:flex lg:min-w-0 lg:flex-row lg:items-center xl:ml-[191px] xl:w-auto xl:max-w-[481px]`}
        >
          <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 xl:gap-0">
            {navigationItems.map((item, index) => (
              <li key={item.id} className={`${navigationDesktopMargins[index]} ${item.id === "about" ? "xl:-translate-y-px" : ""}`}>
                <a
                  className={`inline-flex items-center text-base leading-none tracking-widest transition ${item.id === "home" ? "font-semibold text-[#414880]" : "font-medium text-muted hover:text-primary"}`}
                  href={item.href}
                  aria-current={item.id === "home" ? "page" : undefined}
                >
                  {item.label}
                  {item.hasPlus ? <img src={assets.brand.plusIcon} alt="" aria-hidden="true" className="ml-[5px] h-[7px] w-[7px] shrink-0" /> : null}
                </a>
              </li>
            ))}
          </ul>
          <Button className="mt-5 w-[158px] lg:hidden" href="#contact">Contact</Button>
        </nav>

        <Button className="ml-8 hidden h-[52px] w-[158px] shrink-0 lg:inline-flex xl:ml-[52px]" href="#contact">Contact</Button>

        <button
          className="col-start-2 row-start-1 ml-auto flex h-12 w-12 flex-col items-center justify-center gap-1.5 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="h-0.5 w-6 bg-muted" />
          <span className="h-0.5 w-6 bg-muted" />
          <span className="h-0.5 w-6 bg-muted" />
        </button>
      </div>
    </header>
  );
}
