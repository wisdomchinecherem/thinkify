/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      thinkify: {
        background: "#F8F8F8",
        primarygreen: "#08AC9F",
        primaryorange: "#F59C05",
        primarypurple: "#B607A4",
      },
    },
  },
  plugins: [],
};
