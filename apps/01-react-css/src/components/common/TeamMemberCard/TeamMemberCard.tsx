import { Description, Title } from "../Typography";
import { SocialLinks } from "../SocialLinks";
import type { Content, SocialLink } from "../../../types/ui";
import "./TeamMemberCard.css";

interface TeamMemberCardProps {
  className?: string;
  description: Content;
  image: string;
  isFeatured?: boolean;
  name: string;
  role: string;
  socialLinks: SocialLink[];
}

export function TeamMemberCard({ className = "", description, image, isFeatured = false, name, role, socialLinks }: TeamMemberCardProps) {
    const classes = [
        "team-member-card",
        isFeatured && "team-member-card--featured",
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (<article className={classes}>
      <img className="team-member-card__image" src={image} alt={name}/>
      <p className="team-member-card__role">{role}</p>
      <Title as="h3" className="team-member-card__name">
        {name}
      </Title>
      <Description className="team-member-card__description">
        {description}
      </Description>
      <SocialLinks className="team-member-card__social-links" links={socialLinks}/>
    </article>);
}
