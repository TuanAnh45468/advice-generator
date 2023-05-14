/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      "light-cyan": "hsl(193, 38%, 86%)",
      "neon-green": "hsl(150, 100%, 66%)",
      "grayish-blue": "hsl(217, 19%, 38%)",
      "dark-grayish-blue": "hsl(217, 19%, 24%)",
      "dark-blue": "hsl(218, 23%, 16%)",
    },
    screens: {
      mobile: "375px",
      laptop: "1440px",
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        "extra-bold": 800,
      },
    },
  },
  plugins: [],
};
