import "./Typography.css";
export function Title({ as: Element = "h2", children, className = "", ...props }) {
    const Heading = Element;
    return (<Heading className={["title", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </Heading>);
}
