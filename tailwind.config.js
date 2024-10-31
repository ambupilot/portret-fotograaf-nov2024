/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Zorgt ervoor dat Tailwind in alle componenten werkt
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Voeg eventuele extra kleuren toe als je deze wilt gebruiken
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Voeg eigen lettertypen toe (Inter als voorbeeld)
      },
    },
  },
  plugins: [],
};
