/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
      },
      colors: {
        "primary-blue": "#3248F2",
        "primary-black": "#171215",
        "primary-gray": "#666666",
        "primary-white-2": "#f6f8fa",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
