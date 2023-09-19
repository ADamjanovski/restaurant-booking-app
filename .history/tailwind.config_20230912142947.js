/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dec2ba",
        secondary: "#181816",
        accent: "#b84242",
        background: "#242424",
      },
      backgroundImage: {
        'account-background' : "url(src\assets/blur-img.jpg)"
      }
    },
  },
  plugins: [],
};
