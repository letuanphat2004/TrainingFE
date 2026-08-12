interface SectionHeadingProps {
  className?: string;
  description?: string;
  descriptionClassName?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  title: string;
  titleClassName?: string;
  titleId?: string;
}

export function SectionHeading({
  className = "",
  description,
  descriptionClassName = "",
  eyebrow,
  eyebrowClassName = "",
  title,
  titleClassName = "",
  titleId,
}: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow ? <p className={`m-0 text-base font-semibold leading-5 text-accent ${eyebrowClassName}`}>{eyebrow}</p> : null}
      <h2 className={`m-0 text-4xl font-semibold leading-tight text-primary ${titleClassName}`} id={titleId}>{title}</h2>
      {description ? <p className={`m-0 text-base font-normal tracking-widest text-muted ${descriptionClassName}`}>{description}</p> : null}
    </div>
  );
}
