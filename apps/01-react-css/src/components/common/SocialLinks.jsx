import { AssetImage } from "./AssetImage.jsx";

const socialNetworks = [
  ["Twitter.png", "Twitter"],
  ["facebook-f.png", "Facebook"],
  ["Instagram.png", "Instagram"],
];

export function SocialLinks({ dark = false }) {
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
