/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "threads-gray": "#0f0f0f",
        "threads-gray-light": "#7a7a7a",
        "threads-gray-dark": "#1e1e1e",
        modal: "#414040",
      },
    },
  },
  plugins: [],
};
