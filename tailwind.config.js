/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // tailwind.config.js

    screens: {
      'xs': '180px',   // custom extra small
      'sm': '640px',
      'md': '700px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

  },
  plugins: [],
}