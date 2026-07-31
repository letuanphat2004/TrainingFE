import "./Typography.css";
export function Description({ children, className = "" }) {
    return <p className={["description", className].filter(Boolean).join(" ")}>{children}</p>;
}
