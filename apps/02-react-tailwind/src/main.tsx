import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/500-italic.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { App } from "./app/App";
import "./styles/tailwind.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("The application root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
