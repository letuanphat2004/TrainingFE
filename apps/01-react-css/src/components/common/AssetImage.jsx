import { asset } from "../../lib/assets.js";

export function AssetImage({ fileName, alt = "", ...imageProps }) {
  return <img src={asset(fileName)} alt={alt} {...imageProps} />;
}
