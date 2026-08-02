import type { MouseEventHandler, ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export function Button({ href, children, className = "", onClick, type = "button" }: ButtonProps) {
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
