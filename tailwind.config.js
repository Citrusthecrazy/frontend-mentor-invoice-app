/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        desaturatedBlue: "#494E6E",
        darkBlue: "#373B53",
        purple: "#9277FF",
        darkPurple: "#7C5DFA",
        lightGray: "#F8F8FB",
      },
    },
  },
  plugins: [],
};
