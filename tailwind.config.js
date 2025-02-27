/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
        almarai: ["Almarai", "sans-serif"],
      },
      colors: {
        "primary-blue": "#3248F2",
        "primary-black": "#171215",
        "primary-gray": "#666666",
        "primary-white-2": "#ebf0f4",
      },
      height: {
        screen: "100dvh",
      },
      screens: {
        "2xl": { min: "1381px" },
        xl: { max: "1380px" },

        md: { max: "1025px" },

        sm: { max: "800px" },

        us: { max: "600px" },
      },
    },
  },
  plugins: [],
};
