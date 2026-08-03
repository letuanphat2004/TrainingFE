import { ThemeProvider } from "@mui/material/styles";
import type { PropsWithChildren } from "react";
import { muiTheme } from "../theme/muiTheme";

/** Provides application-wide libraries without changing the current CSS baseline. */
export function AppProviders({ children }: PropsWithChildren) {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}
