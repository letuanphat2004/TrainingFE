import type { ChangeEventHandler } from "react";
import "./Input.css";

interface InputProps {
  as?: "input" | "textarea";
  className?: string;
  id: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  type?: string;
}

export function Input({ as = "input", className = "", ...props }: InputProps) {
    const classes = ["input", className].filter(Boolean).join(" ");
    return as === "textarea" ? <textarea className={classes} {...props} /> : <input className={classes} {...props} />;
}
