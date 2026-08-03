import { SectionHeading } from "../../common/SectionHeading";
import { TeamMemberCard } from "../../common/TeamMemberCard";
import { assets } from "../../../constants/assets";
import type { SocialLink } from "../../../types/ui";
import "./ProfessionalTeams.css";
const headingDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.";
const memberDescription = (<>
    <span>Lorem ipsum dolor sit amet,</span>
    <span className="team-member-card__description-gap"/>
    <span>consectetur adipiscing elit ut</span>
    <span className="team-member-card__description-line--third">
      aliquam, purus sit
    </span>
  </>);
const socialLinks: SocialLink[] = [
    { label: "Twitter", url: "#twitter", icon: assets.social.twitter },
    { label: "Facebook", url: "#facebook", icon: assets.social.facebook },
    { label: "Instagram", url: "#instagram", icon: assets.social.instagram },
];
const teamMembers = [
    {
        id: "briyan-nevalli",
        image: assets.homeOne.teamBriyan,
        role: "Surgeon",
        name: "Briyan Nevalli",
    },
    {
        id: "bella-sebastian",
        image: assets.homeOne.teamBella,
        role: "Dermatologist",
        name: "Bella sebastian",
        isFeatured: true,
    },
    {
        id: "lilly-adams",
        image: assets.homeOne.teamLilly,
        role: "Stylist expert",
        name: "Lilly Adams",
    },
];
export function ProfessionalTeams() {
    return (<section className="professional-teams" id="team" aria-labelledby="professional-team-title">
      <SectionHeading className="professional-teams__heading" eyebrow="Professional Teams" title="The Professional expert" titleId="professional-team-title" description={headingDescription}/>
      <div className="professional-teams__members">
        {teamMembers.map((member) => (
          <TeamMemberCard className="professional-teams__member" description={memberDescription} image={member.image} isFeatured={member.isFeatured} key={member.id} name={member.name} role={member.role} socialLinks={socialLinks} />
        ))}
      </div>
    </section>);
}
