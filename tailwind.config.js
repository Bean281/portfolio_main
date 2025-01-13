/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg-clr": "#242a34",
        "second-bg-clr": "#1b232e",
        "white-text-clr": "#ffffff",
        "green-text-clr": "#36eee0",
        "gray-text-clr": "#717781",
        "gray2-text-clr": "#414751",
      }
    },
  },
  plugins: [],
}

