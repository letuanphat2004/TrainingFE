import { assets } from "../../constants/assets";
import { SectionHeading } from "../common/SectionHeading";

const socialLinks = [
  { label: "Twitter", href: "#twitter", icon: assets.social.twitter },
  { label: "Facebook", href: "#facebook", icon: assets.social.facebook },
  { label: "Instagram", href: "#instagram", icon: assets.social.instagram },
];

const members = [
  { id: "briyan", image: assets.homeOne.teamBriyan, role: "Surgeon", name: "Briyan Nevalli" },
  { id: "bella", image: assets.homeOne.teamBella, role: "Dermatologist", name: "Bella sebastian", featured: true },
  { id: "lilly", image: assets.homeOne.teamLilly, role: "Stylist expert", name: "Lilly Adams" },
];

export function ProfessionalTeams() {
  return (
    <section id="team" aria-labelledby="professional-team-title" className="z-10 mx-auto mt-24 flex w-[calc(100%-48px)] max-w-[1085px] flex-col sm:w-[calc(100%-96px)] xl:mt-[142.2px] xl:w-full">
      <SectionHeading
        className="flex w-full max-w-[848px] self-center flex-col items-center gap-3 xl:h-[148px] xl:w-[848px] xl:max-w-none"
        eyebrow="Professional Teams"
        eyebrowClassName="h-5 w-full max-w-40"
        title="The Professional expert"
        titleId="professional-team-title"
        titleClassName="w-full max-w-[732px] xl:h-[53px]"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        descriptionClassName="w-full max-w-[848px] leading-6 xl:h-[51px]"
      />

      <div className="mt-16 flex w-full flex-col items-center gap-16 lg:h-[626px] lg:flex-row lg:items-start lg:justify-between lg:gap-0 xl:mt-[87px]">
        {members.map((member) => (
          <article
            key={member.id}
            className={`z-10 flex w-full shrink-0 flex-col items-center text-center lg:min-w-0 ${member.featured ? "max-w-[424px] rounded-[42px] bg-white py-16 shadow-card lg:h-[626px] lg:flex-[0_1_424px] lg:py-0 lg:pb-24 lg:pt-[91px] xl:w-[424px] xl:flex-none" : "h-[439px] max-w-[270px] lg:mt-[91px] lg:flex-[0_1_270px] xl:w-[270px] xl:flex-none"}`}
          >
            <img src={member.image} alt={member.name} className="h-[146px] w-[146px] shrink-0 rounded-full object-cover" />
            <p className="m-0 mt-[53px] h-5 w-fit text-base font-semibold leading-5 text-accent">{member.role}</p>
            <h3 className="m-0 mt-[15px] h-[37px] w-full max-w-[263px] text-lg font-semibold leading-tight text-primary">{member.name}</h3>
            <p className="m-0 mt-1.5 h-[63px] w-full max-w-[270px] text-sm font-normal leading-[1.5] tracking-widest text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
            </p>
            <div className="mt-[50px] flex h-[49px] w-[215px] items-center justify-between">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="grid h-[49px] w-[49px] place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-primary">
                  <img src={social.icon} alt="" className="h-[49px] w-[49px] origin-center translate-x-[-3px] translate-y-[6px] scale-[1.6] object-contain" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
