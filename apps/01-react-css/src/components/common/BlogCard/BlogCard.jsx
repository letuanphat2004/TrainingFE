import { Description, Title } from "../Typography";
import "./BlogCard.css";
export function BlogCard({ actionHref, asset, className = "", description, title }) {
    return (<article className={["blog-card", className].filter(Boolean).join(" ")}>
      <img className="blog-card__image" src={asset} alt=""/>
      <Title as="h3" className="blog-card__title">
        {title}
      </Title>
      <Description className="blog-card__description">{description}</Description>
      <a className="blog-card__action" href={actionHref}>
        Learn more <span aria-hidden="true">»</span>
      </a>
    </article>);
}
