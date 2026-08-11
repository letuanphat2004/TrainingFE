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
    <section id="team" aria-labelledby="professional-team-title" className="relative z-10 mx-auto my-24 flex w-[calc(100%-48px)] max-w-[1085px] flex-col px-[150px] pt-[147px] desktop:my-0 desktop:w-full desktop:max-w-none">
      <SectionHeading
        className="mx-auto flex w-full max-w-[848px] flex-col items-center desktop:h-[148px]"
        eyebrow="Professional Teams"
        eyebrowClassName="desktop:w-[160px]"
        title="The Professional expert"
        titleId="professional-team-title"
        titleClassName="mt-3 desktop:w-[732px]"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        descriptionClassName="mt-[18px] leading-6 desktop:w-[848px] desktop:leading-none"
      />

      <div className="mx-auto mt-16 grid w-full max-w-[1085px] grid-cols-1 justify-items-center gap-x-[54px] gap-y-16 min-[621px]:grid-cols-2 min-[901px]:grid-cols-3 desktop:mt-[178px] desktop:grid-cols-[repeat(3,270px)] desktop:gap-x-[137.5px]">
        {members.map((member) => (
          <article
            key={member.id}
            className={`relative z-10 flex h-[439px] w-[270px] flex-col items-center text-center ${member.featured ? "desktop:-mx-[77px] desktop:-mb-[96px] desktop:-mt-[91px] desktop:h-[626px] desktop:w-[424px] desktop:rounded-[42px] desktop:bg-white desktop:px-[77px] desktop:pb-24 desktop:pt-[91px] desktop:shadow-card" : ""}`}
          >
            <img src={member.image} alt={member.name} className="h-[146px] w-[146px] rounded-full object-cover" />
            <p className="mt-[53px] w-full text-base font-semibold leading-5 text-accent">{member.role}</p>
            <h3 className="mt-4 min-h-[37px] w-[263px] text-lg font-semibold leading-[1.25] text-primary">{member.name}</h3>
            <p className="mt-px w-[270px] text-sm leading-4 tracking-[0.1em] text-muted">
              Lorem ipsum dolor sit amet,<br /><br />consectetur adipiscing elit ut<br /><span className="mt-2 block">aliquam, purus sit</span>
            </p>
            <div className="mt-auto flex items-center gap-[34px]">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="flex h-[49px] w-[49px] items-center justify-center rounded-full bg-white shadow-card transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
                  <img src={social.icon} alt="" className="h-[49px] w-[49px] object-contain" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
