import type { ReactNode } from "react";
import "./Typography.css";
interface DescriptionProps {
  children: ReactNode;
  className?: string;
}

export function Description({ children, className = "" }: DescriptionProps) {
    return <p className={["description", className].filter(Boolean).join(" ")}>{children}</p>;
}
