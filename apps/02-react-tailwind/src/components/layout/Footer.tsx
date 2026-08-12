import { assets } from "../../constants/assets";

const pageLinks = ["Home", "About", "Services", "Gallery", "Team"];
const informationLinks = ["Terms & conditions", "Privacy policy", "Blog", "Contact"];
const socialLinks = [
  { label: "Facebook", icon: assets.footer.facebook },
  { label: "Twitter", icon: assets.footer.twitter },
  { label: "LinkedIn", icon: assets.footer.linkedin },
  { label: "YouTube", icon: assets.footer.youtube },
  { label: "Instagram", icon: assets.footer.instagram },
];

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <nav
      aria-label={`${title} links`}
      className={`${title === "Pages" ? "min-h-[218px]" : "min-h-[182px]"} sm:min-h-[218px]`}
    >
      <h2
        className={`${title === "Pages" ? "xl:w-48" : "xl:w-[175px]"} text-lg font-semibold leading-6 tracking-widest xl:h-[31px]`}
      >
        {title}
      </h2>
      <ul className="mt-6 flex list-none flex-col gap-[11px] p-0">
        {links.map((link) => (
          <li key={link} className="xl:h-6">
            <a
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="inline-flex items-center gap-2 text-base font-normal leading-none tracking-widest xl:h-6"
            >
              <img
                src={assets.footer.caretRight}
                alt=""
                aria-hidden="true"
                className="size-[13px] shrink-0"
              />
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto mt-[69.66px] w-full max-w-[1440px] text-[#D7DBFF]">
      <div className="relative isolate grid w-full bg-footer px-6 sm:px-8 lg:px-12 xl:bg-transparent xl:px-[calc((100%_-_1140px)_/_2)]">
        <img
          src={assets.footer.background}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden size-full xl:block"
        />

        <div className="col-start-1 row-start-1 mx-auto grid min-h-0 w-full max-w-[1140px] grid-cols-1 gap-9 pb-24 pt-[72px] sm:min-h-[740px] sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 sm:pb-12 sm:pt-24 xl:min-h-[705.34px] xl:grid-cols-[492px_129px_131px_173px_215px] xl:grid-rows-[225.34px_219px_55px_36px_49px_27.84px_93.16px] xl:gap-0 xl:py-0">
          <div className="flex min-h-[194.59px] flex-col items-start gap-4 sm:col-span-2 sm:min-h-0 xl:col-span-1 xl:col-start-1 xl:row-start-2 xl:mt-4 xl:w-[492px] xl:gap-0">
            <img src={assets.footer.logo} alt="Beautice" className="h-[63px] w-[258px]" />
            <p className="m-0 text-base font-normal leading-none tracking-widest xl:ml-[31px] xl:mt-[37px] xl:h-[21px] xl:w-[461px]">
              <strong className="font-bold">Beautice</strong> is a Beauty Clinic WordPress Theme.
            </p>
            <address className="m-0 text-sm font-medium italic leading-none tracking-widest xl:ml-[31px] xl:mt-[26px] xl:h-6 xl:w-[297px]">
              Baker Steet 101, NY, United States.
            </address>
            <div className="flex items-start gap-6 text-sm font-medium italic leading-none tracking-widest xl:ml-[31px] xl:mt-px xl:h-6 xl:gap-7">
              <a href="tel:+5215698966" className="shrink-0 xl:h-[23px] xl:w-[140px]">
                +521 569 8966.
              </a>
              <a href="mailto:mail@company.com" className="inline-flex shrink-0 xl:h-[23px] xl:w-[190px]">
                <span className="underline decoration-auto decoration-solid underline-offset-1">mail@company.com</span>
                <span>.</span>
              </a>
            </div>
          </div>

          <div className="xl:col-start-3 xl:row-start-2 xl:w-[131px]">
            <FooterLinks title="Pages" links={pageLinks} />
          </div>
          <div className="xl:col-start-5 xl:row-start-2 xl:w-[215px]">
            <FooterLinks title="Informations" links={informationLinks} />
          </div>

          <div className="flex h-[27.84px] w-full max-w-[305px] items-center justify-between justify-self-start sm:col-span-2 xl:col-span-1 xl:col-start-1 xl:row-start-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={`#${social.label.toLowerCase()}`}
                aria-label={social.label}
                className="flex size-7 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <img src={social.icon} alt="" className="max-h-7 max-w-7 object-contain" />
              </a>
            ))}
          </div>

          <p className="text-left text-base font-normal leading-6 tracking-widest sm:col-span-2 xl:col-start-3 xl:col-end-6 xl:row-start-6 xl:w-[497px] xl:justify-self-end xl:self-start xl:text-right">
            {"\u00A9"} AltDesain Studio 2021 - All right reserved.
          </p>
        </div>

        <button
          type="button"
          aria-label="Back to top"
          className="col-start-1 row-start-1 mb-6 size-9 self-end justify-self-end p-0 sm:mb-1.5 xl:mr-[max(-85px,calc(594px_-_50vw))] xl:mb-0 xl:mt-[499.34px] xl:self-start"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={assets.footer.toTop}
            alt=""
            width={36}
            height={36}
            className="size-9"
          />
        </button>
      </div>
    </footer>
  );
}
