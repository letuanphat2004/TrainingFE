import { SectionHeading } from "../../common/SectionHeading";
import { TeamMemberCard } from "../../common/TeamMemberCard";
import { assets } from "../../../constants/assets";
import type { CssVariableStyle, SocialLink, TeamMemberLayout } from "../../../types/ui";
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
const baseMemberLayout: TeamMemberLayout = {
    cardWidth: 270,
    cardHeight: 439,
    imageTop: 0,
    imageLeft: 62,
    imageWidth: 146,
    imageHeight: 146,
    roleTop: 178,
    roleLeft: 0,
    nameTop: 244,
    nameLeft: 4,
    nameWidth: 263,
    descriptionTop: 287,
    descriptionLeft: 0,
    descriptionWidth: 270,
    socialTop: 390,
    socialLeft: 28,
};
const teamMembers = [
    {
        id: "briyan-nevalli",
        image: assets.homeOne.teamBriyan,
        role: "Surgeon",
        name: "Briyan Nevalli",
        localLeft: 0,
        layout: { ...baseMemberLayout, nameTop: 235, roleTop: 199, descriptionTop: 280 },
    },
    {
        id: "bella-sebastian",
        image: assets.homeOne.teamBella,
        role: "Dermatologist",
        name: "Bella sebastian",
        localLeft: 408,
        isFeatured: true,
        layout: {
            ...baseMemberLayout,
            featuredTop: -91,
            featuredLeft: -78,
            featuredWidth: 424,
            featuredHeight: 626,
            featuredRadius: 42,
            nameTop: 235,
            roleTop: 199,
            descriptionTop: 280,
        },
    },
    {
        id: "lilly-adams",
        image: assets.homeOne.teamLilly,
        role: "Stylist expert",
        name: "Lilly Adams",
        localLeft: 815,
        layout: {
            ...baseMemberLayout,
            nameTop: 235,
            roleTop: 199,
            descriptionTop: 280,
        },
    },
];
export function ProfessionalTeams() {
    return (<section className="professional-teams" id="team" aria-labelledby="professional-team-title">
      <SectionHeading className="professional-teams__heading" eyebrow="Professional Teams" title="The Professional expert" titleId="professional-team-title" description={headingDescription}/>
      {teamMembers.map((member) => {
        const style: CssVariableStyle = { "--team-member-left": `${member.localLeft}px` };

        return <TeamMemberCard className="professional-teams__member" description={memberDescription} image={member.image} isFeatured={member.isFeatured} key={member.id} layout={member.layout} name={member.name} role={member.role} socialLinks={socialLinks} style={style} />;
      })}
    </section>);
}
