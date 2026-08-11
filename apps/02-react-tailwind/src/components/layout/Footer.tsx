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
    <nav aria-label={`${title} links`} className={`${title === "Pages" ? "min-h-[218px]" : "min-h-[182px]"} min-[601px]:min-h-[218px]`}>
      <h2 className="m-0 text-lg font-semibold leading-none tracking-[0.1em] text-white">{title}</h2>
      <ul className="mt-[25px] flex list-none flex-col gap-[11px] p-0 pt-[6px]">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`} className="ml-3 inline-flex items-center text-base font-medium leading-none tracking-[0.1em] text-[#D7DBFF] transition hover:text-white">
              <span aria-hidden="true" className="mr-2 h-2 w-1.5 bg-white [clip-path:polygon(0_0,100%_50%,0_100%)]" />{link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate mx-auto mt-[69px] grid min-h-0 w-full max-w-[1140px] grid-cols-1 gap-9 px-6 pb-24 pt-[72px] min-[601px]:min-h-[740px] min-[601px]:grid-cols-2 min-[601px]:gap-x-8 min-[601px]:gap-y-12 min-[601px]:pb-12 min-[601px]:pt-24 desktop:h-[705.34px] desktop:min-h-0 desktop:max-w-none desktop:grid-cols-[150px_492px_129px_131px_173px_215px_150px] desktop:grid-rows-[225.34px_219px_55px_36px_49px_27.84px_93.16px] desktop:gap-0 desktop:p-0">
      <img src={assets.footer.background} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />

      <div className="flex min-h-[194.59px] flex-col items-start gap-4 min-[601px]:col-span-2 min-[601px]:min-h-0 desktop:col-span-1 desktop:col-start-2 desktop:row-start-2 desktop:mt-4 desktop:w-[492px] desktop:gap-0">
        <img src={assets.footer.logo} alt="Beautice" className="h-[63px] w-[258px]" />
        <p className="m-0 text-base leading-[1.3] tracking-[0.1em] text-[#D7DBFF] desktop:ml-[31px] desktop:mt-[37px] desktop:w-[461px]"><strong className="font-semibold text-white">Beautice</strong> is a Beauty Clinic WordPress Theme.</p>
        <address className="m-0 text-sm font-medium italic leading-none tracking-[0.1em] text-[#D7DBFF] desktop:ml-[33px] desktop:mt-6 desktop:w-[297px]">
          Baker Steet 101, NY, United States.
        </address>
        <div className="flex gap-6 text-sm font-medium italic leading-none tracking-[0.1em] text-[#D7DBFF] desktop:ml-[31px] desktop:mt-3 desktop:gap-10">
          <a href="tel:+5215698966">+521 569 8966.</a>
          <a href="mailto:mail@company.com" className="underline desktop:ml-[5px]">mail@company.com.</a>
        </div>
      </div>

      <div className="desktop:col-start-4 desktop:row-start-2 desktop:w-[131px]"><FooterLinks title="Pages" links={pageLinks} /></div>
      <div className="desktop:col-start-6 desktop:row-start-2 desktop:w-[215px]"><FooterLinks title="Informations" links={informationLinks} /></div>

      <div className="flex h-[27.84px] items-center justify-between min-[601px]:col-span-2 desktop:col-span-1 desktop:col-start-2 desktop:row-start-6 desktop:w-[305px]">
        {socialLinks.map((social) => (
          <a key={social.label} href={`#${social.label.toLowerCase()}`} aria-label={social.label} className="flex h-7 w-7 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
            <img src={social.icon} alt="" className="max-h-7 max-w-7 object-contain" />
          </a>
        ))}
      </div>

      <button type="button" aria-label="Back to top" className="h-9 w-9 justify-self-end bg-transparent p-0 min-[601px]:col-start-2 desktop:col-start-7 desktop:row-start-4 desktop:ml-[49px] desktop:justify-self-start" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src={assets.footer.toTop} alt="" className="h-full w-full" />
      </button>

      <p className="text-left text-base leading-none tracking-[0.1em] text-[#D7DBFF] min-[601px]:col-span-2 desktop:col-start-4 desktop:col-end-7 desktop:row-start-6 desktop:mt-[3.66px] desktop:w-[497px] desktop:justify-self-end desktop:self-start desktop:text-right">© AltDesain Studio 2021 - All right reserved.</p>
    </footer>
  );
}
