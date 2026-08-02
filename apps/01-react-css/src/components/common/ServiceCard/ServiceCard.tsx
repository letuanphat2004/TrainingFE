import { Description, Title } from "../Typography";
import type { CSSProperties } from "react";
import type { ServiceAction } from "../../../types/ui";
import "./ServiceCard.css";

interface ServiceCardProps {
  action?: ServiceAction;
  asset: string;
  className?: string;
  description: string;
  style?: CSSProperties;
  title: string;
}

export function ServiceCard({ action, asset, className = "", description, style, title }: ServiceCardProps) {
    return (<article className={["service-card", className].filter(Boolean).join(" ")} style={style}>
      <img alt="" aria-hidden="true" className="service-card__image" src={asset}/>
      <Title as="h3" className="service-card__title">
        {title}
      </Title>
      <Description className="service-card__description">{description}</Description>
      {action ? (<a className="service-card__action" href={action.href}>
          {action.label}
          <span aria-hidden="true"> »</span>
        </a>) : null}
    </article>);
}
