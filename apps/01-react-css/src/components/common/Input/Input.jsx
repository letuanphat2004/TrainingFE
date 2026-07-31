import "./Input.css";
export function Input({ as: Element = "input", className = "", ...props }) {
    const classes = ["input", className].filter(Boolean).join(" ");
    const Control = Element;
    return <Control className={classes} {...props}/>;
}
