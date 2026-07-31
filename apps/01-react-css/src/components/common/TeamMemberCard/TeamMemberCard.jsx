import { Description, Title } from "../Typography";
import { SocialLinks } from "../SocialLinks";
import "./TeamMemberCard.css";
const layoutVariableNames = Object.freeze({
    cardWidth: "--team-member-card-width",
    cardHeight: "--team-member-card-height",
    imageTop: "--team-member-image-top",
    imageLeft: "--team-member-image-left",
    imageWidth: "--team-member-image-width",
    imageHeight: "--team-member-image-height",
    roleTop: "--team-member-role-top",
    roleLeft: "--team-member-role-left",
    nameTop: "--team-member-name-top",
    nameLeft: "--team-member-name-left",
    nameWidth: "--team-member-name-width",
    descriptionTop: "--team-member-description-top",
    descriptionLeft: "--team-member-description-left",
    descriptionWidth: "--team-member-description-width",
    socialTop: "--team-member-social-top",
    socialLeft: "--team-member-social-left",
    featuredTop: "--team-member-featured-top",
    featuredLeft: "--team-member-featured-left",
    featuredWidth: "--team-member-featured-width",
    featuredHeight: "--team-member-featured-height",
    featuredRadius: "--team-member-featured-radius",
});
const typographyVariableNames = Object.freeze({
    roleFontSize: "--team-member-role-font-size",
    roleLineHeight: "--team-member-role-line-height",
    roleLetterSpacing: "--team-member-role-letter-spacing",
    nameFontSize: "--team-member-name-font-size",
    nameLineHeight: "--team-member-name-line-height",
    nameLetterSpacing: "--team-member-name-letter-spacing",
    descriptionFontSize: "--team-member-description-font-size",
    descriptionLineHeight: "--team-member-description-line-height",
    descriptionLetterSpacing: "--team-member-description-letter-spacing",
});
function toLayoutVariables(layout) {
    return Object.entries(layout).reduce((variables, [name, value]) => {
        const variableName = layoutVariableNames[name];
        if (variableName && value !== undefined) {
            variables[variableName] = `${value}px`;
        }
        return variables;
    }, {});
}
function toTypographyVariables(typography) {
    return Object.entries(typography).reduce((variables, [name, value]) => {
        const variableName = typographyVariableNames[name];
        if (variableName && value !== undefined) {
            variables[variableName] = String(value);
        }
        return variables;
    }, {});
}
export function TeamMemberCard({ className = "", description, image, isFeatured = false, layout = {}, name, role, socialLinks, style, typography = {}, }) {
    const classes = [
        "team-member-card",
        isFeatured && "team-member-card--featured",
        className,
    ]
        .filter(Boolean)
        .join(" ");
    const cardStyle = {
        ...style,
        ...toLayoutVariables(layout),
        ...toTypographyVariables(typography),
    };
    return (<article className={classes} style={cardStyle}>
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
