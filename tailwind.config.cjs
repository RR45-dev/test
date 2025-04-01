/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sf: ['San Francisco', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      as: [
        "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", 
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"
      ],
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#06223F",
        bg_light_primary: "#F5F9FD",
        gray: "#B7C5D3",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #B6CCF5 0.48%, #D5E3F1 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
