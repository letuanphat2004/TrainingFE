import { professionals } from "../../data";
import { AssetImage } from "./AssetImage";
import { SocialLinks } from "./SocialLinks";

export function TeamCards() {
  return (
    <div className="team-grid">
      {professionals.map((person, index) => (
        <article
          className={`team-card ${index === 1 ? "team-card--featured" : ""}`}
          key={person.name}
        >
          <AssetImage fileName={person.image} alt={person.name} />
          <p className="eyebrow">{person.role}</p>
          <h3>{person.name}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit.
          </p>
          <SocialLinks />
        </article>
      ))}
    </div>
  );
}
