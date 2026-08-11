import type { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

const baseClasses = "inline-flex min-h-[52px] items-center justify-center rounded-[50px] border-0 bg-accent px-5 font-poppins text-base font-semibold leading-6 tracking-[0.1em] text-white shadow-button transition hover:-translate-y-px hover:bg-[#F554A1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:translate-y-0";

export function Button({ children, className = "", href, onClick, type = "button" }: ButtonProps) {
  const classes = `${baseClasses} ${className}`;

  if (href) {
    return <a className={classes} href={href} onClick={onClick}>{children}</a>;
  }

  return <button className={classes} type={type} onClick={onClick}>{children}</button>;
}
