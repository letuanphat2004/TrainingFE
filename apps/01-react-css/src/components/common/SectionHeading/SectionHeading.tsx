import { Description, Title } from "../Typography";
import "./SectionHeading.css";

interface SectionHeadingProps {
  className?: string;
  description?: string;
  eyebrow?: string;
  title: string;
  titleId?: string;
}

export function SectionHeading({ eyebrow, title, description, titleId, className = "" }: SectionHeadingProps) {
    return (<div className={["section-heading", className].filter(Boolean).join(" ")}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <Title className="section-heading__title" id={titleId}>
        {title}
      </Title>
      {description ? <Description className="section-heading__description">{description}</Description> : null}
    </div>);
}
