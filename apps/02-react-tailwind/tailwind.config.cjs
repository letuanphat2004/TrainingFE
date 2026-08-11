/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      mobile: "560px",
      tablet: "800px",
      laptop: "1100px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        primary: "#091156",
        accent: "#FF64AE",
        muted: "#8B8B8B",
        border: "#D9DDFE",
        placeholder: "#D0D0D0",
        footer: "#0D165C",
      },
      fontFamily: {
        poppins: ["Poppins", "Arial", "sans-serif"],
      },
      boxShadow: {
        button: "0 12px 24px rgb(255 100 174 / 25%)",
        card: "0 25px 50px 25px rgb(246 247 255 / 70%)",
      },
    },
  },
  plugins: [],
};
