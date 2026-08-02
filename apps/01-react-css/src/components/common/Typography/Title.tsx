import type { ReactNode } from "react";
import "./Typography.css";

interface TitleProps {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Title({ as: Heading = "h2", children, className = "", id }: TitleProps) {
    return (<Heading className={["title", className].filter(Boolean).join(" ")} id={id}>
      {children}
    </Heading>);
}
