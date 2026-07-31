import "./Button.css";
export function Button({ href, children, className = "", onClick, type = "button", }) {
    const classes = ["button", className].filter(Boolean).join(" ");
    if (href) {
        return (<a className={classes} href={href} onClick={onClick}>
        {children}
      </a>);
    }
    return (<button className={classes} type={type} onClick={onClick}>
      {children}
    </button>);
}
