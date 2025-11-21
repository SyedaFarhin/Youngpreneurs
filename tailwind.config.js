/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Poppins'", "Inter", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#0f272c",
          mint: "#7fb7b0",
          gold: "#dcae1a",
        },
      },
    },
  },
  plugins: [],
};

