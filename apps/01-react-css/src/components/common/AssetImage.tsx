import type { ImgHTMLAttributes } from "react";
import { asset } from "../../lib/assets";

interface AssetImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  fileName: string;
}

export function AssetImage({
  fileName,
  alt = "",
  ...imageProps
}: AssetImageProps) {
  return <img src={asset(fileName)} alt={alt} {...imageProps} />;
}
