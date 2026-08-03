import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";

export const muiTheme = createTheme({
  palette: {
    primary: { main: tokens.color.primary },
    secondary: { main: tokens.color.accent },
    text: {
      primary: tokens.color.primary,
      secondary: tokens.color.textMuted,
    },
    background: { default: tokens.color.surface, paper: tokens.color.surface },
  },
  typography: {
    fontFamily: tokens.font.family,
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: tokens.radius.field,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: tokens.breakpoint.mobile,
      md: tokens.breakpoint.tablet,
      lg: 1024,
      xl: tokens.breakpoint.desktop,
    },
  },
});
