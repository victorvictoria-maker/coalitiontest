/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "default-blue": "#072635",
        "background-color": "#F6F7F8",
      },
    },
  },
  plugins: [],
};
