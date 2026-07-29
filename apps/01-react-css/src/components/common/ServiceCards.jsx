import { Link } from "react-router-dom";
import { services } from "../../data.js";
import { AssetImage } from "./AssetImage.jsx";

export function ServiceCards({ compact = false }) {
  return (
    <div className={`service-grid ${compact ? "service-grid--compact" : ""}`}>
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <AssetImage
            fileName={compact ? service.smallIcon : service.icon}
            alt={service.title}
          />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          {compact ? (
            <Link className="text-link" to="/services">
              Learn more »
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}
