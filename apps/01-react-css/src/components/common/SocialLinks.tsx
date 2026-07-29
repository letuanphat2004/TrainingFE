import { AssetImage } from "./AssetImage";

const socialNetworks = [
  ["Twitter.png", "Twitter"],
  ["facebook-f.png", "Facebook"],
  ["Instagram.png", "Instagram"],
] as const;

interface SocialLinksProps {
  dark?: boolean;
}

export function SocialLinks({ dark = false }: SocialLinksProps) {
  return (
    <div className={`social-links ${dark ? "social-links--dark" : ""}`}>
      {socialNetworks.map(([fileName, label]) => (
        <a href="#" aria-label={label} key={label}>
          <AssetImage fileName={fileName} />
        </a>
      ))}
    </div>
  );
}
