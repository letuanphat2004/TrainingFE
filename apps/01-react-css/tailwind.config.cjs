/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    // Keep the existing CSS reset as the visual baseline during migration.
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        beautice: {
          primary: "#091156",
          accent: "#FF64AE",
          muted: "#8B8B8B",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
