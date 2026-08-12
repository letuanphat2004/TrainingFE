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
    <header className="z-20 mt-4 grid min-h-[63px] w-full grid-cols-[minmax(0,1fr)_auto] grid-rows-[63px_0px] items-center px-4 sm:mt-[41px] sm:px-12 lg:flex lg:flex-nowrap xl:px-[calc((100%_-_1140px)_/_2)]">
      <a href="#home" aria-label="Beautice home" className="col-start-1 row-start-1 shrink-0">
        <img src={assets.brand.mainLogo} width="258" height="63" alt="Beautice" className="h-[63px] w-[min(258px,calc(100vw-112px))] object-contain sm:w-[258px]" />
      </a>

      <nav
        id="primary-navigation"
        aria-label="Primary navigation"
        className={`${isOpen ? "flex" : "hidden"} col-span-2 row-start-2 mt-4 w-full self-start flex-col rounded-3xl bg-white p-6 shadow-card lg:ml-auto lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:items-center lg:self-auto lg:bg-transparent lg:p-0 lg:shadow-none xl:ml-[191px] xl:w-[481px] xl:flex-none`}
      >
        <ul className="m-0 flex list-none flex-col gap-5 p-0 lg:flex-row lg:items-center lg:gap-6 xl:w-full xl:gap-0">
          {navigationItems.map((item, index) => (
            <li key={item.id} className={`${navigationDesktopMargins[index]} ${item.id === "about" ? "xl:-translate-y-px" : ""}`}>
              <a
                className={`inline-flex items-center text-base leading-none tracking-widest transition ${item.id === "home" ? "font-semibold text-[#414880] hover:text-[#414880]" : "font-medium text-muted hover:text-primary"}`}
                href={item.href}
                aria-current={item.id === "home" ? "page" : undefined}
              >
                {item.label}
                {item.hasPlus ? <img src={assets.brand.plusIcon} alt="" aria-hidden="true" className="ml-[5px] h-[7px] w-[7px] shrink-0" /> : null}
              </a>
            </li>
          ))}
        </ul>
        <Button className="mt-6 w-[158px] lg:hidden" href="#contact">Contact</Button>
      </nav>

      <Button className="ml-8 hidden h-[52px] w-[158px] shrink-0 lg:inline-flex xl:ml-[52px]" href="#contact">Contact</Button>

      <button
        className="col-start-2 row-start-1 ml-auto flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-accent shadow-button lg:hidden"
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
