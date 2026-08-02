import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { App } from "./app/App";
import "./styles/reset.css";
import "./styles/global.css";
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("The application root element was not found.");
}

createRoot(rootElement).render(<StrictMode>
    <App />
  </StrictMode>);
