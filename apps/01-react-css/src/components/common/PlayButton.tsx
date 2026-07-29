import { useState } from "react";
import { AssetImage } from "./AssetImage";

interface PlayButtonProps {
  label?: string;
}

export function PlayButton({ label = "Watch Video" }: PlayButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <button
      className={`video-control ${isPlaying ? "is-playing" : ""}`}
      type="button"
      data-video-trigger
      aria-pressed={isPlaying}
      onClick={() => setIsPlaying((current) => !current)}
    >
      <span>
        <AssetImage fileName="Polygon Play.png" />
      </span>
      <b>{isPlaying ? "Pause Video" : label}</b>
    </button>
  );
}
