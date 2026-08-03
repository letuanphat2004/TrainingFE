/**
 * Source of truth for the libraries introduced during the refactor.
 * Legacy CSS variables remain temporarily while each component is migrated.
 */
export const tokens = {
  color: {
    primary: "#091156",
    accent: "#FF64AE",
    accentHover: "#F554A1",
    textMuted: "#8B8B8B",
    surface: "#FFFFFF",
    border: "#D9DDFE",
    footerText: "#D7DBFF",
  },
  font: {
    family: '"Poppins", Arial, Helvetica, sans-serif',
  },
  spacing: {
    pageInline: 150,
    sectionGap: 80,
  },
  radius: {
    pill: 50,
    card: 42,
    field: 15,
  },
  breakpoint: {
    mobile: 540,
    tablet: 768,
    desktop: 1440,
  },
} as const;
