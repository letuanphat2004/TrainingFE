export function SectionHeading({
  eyebrow,
  title,
  description = "",
  centered = true,
}) {
  return (
    <div
      className={`section-heading ${centered ? "section-heading--center" : ""}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? (
        <p className="section-heading__description">{description}</p>
      ) : null}
    </div>
  );
}
