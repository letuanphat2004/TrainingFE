import { Description, Title } from "../Typography";
import "./ServiceCard.css";
export function ServiceCard({ action, asset, className = "", description, style, title }) {
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
