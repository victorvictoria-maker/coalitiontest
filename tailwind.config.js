/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "default-blue": "#072635",
        "default-gray": "#707070",
        "background-color": "#F6F7F8",
        button: "#01f0d0",
      },
      fontSize: {
        headings: "24px",
      },
    },
  },
  plugins: [],
};
