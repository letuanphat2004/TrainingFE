import "./Statistic.css";
export function Statistic({ className = "", icon, label, value }) {
    return (<div className={["statistic", className].filter(Boolean).join(" ")}>
      <img className="statistic__icon" src={icon} alt="" aria-hidden="true"/>
      <div className="statistic__copy">
        <strong className="statistic__value">{value}</strong>
        <span className="statistic__label">{label}</span>
      </div>
    </div>);
}
