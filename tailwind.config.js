/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "376px",
        md: "769px",
        lg: "1441px",
      },
      colors: {
        desaturatedBlue: "#494E6E",
        darkBlue: "#373B53",
        purple: "#9277FF",
        darkPurple: "#7C5DFA",
        lightGray: "#F8F8FB",
        paleGreen: "rgba(51,214,159,0.06)",
        brightGreen: "#33D69F",
        paleOrange: "rgba(255,143,0,0.06)",
        brightOrange: "#FF8F00",
        dirtyWhite: "rgba(55,59,83,0.06)",
      },
    },
  },
  plugins: [],
};
