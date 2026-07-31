import "./WatchVideo.css";
export function WatchVideo({ className = "", label = "Watch Video", onClick, playImage }) {
    const classes = ["watch-video", className].filter(Boolean).join(" ");
    return (<div className={classes}>
      <button className="watch-video__play" type="button" aria-label={label} onClick={onClick}>
        {playImage ? (<img className="watch-video__image" src={playImage} alt="" aria-hidden="true"/>) : (<span className="watch-video__icon" aria-hidden="true"/>)}
      </button>
      <span className="watch-video__label">{label}</span>
    </div>);
}
