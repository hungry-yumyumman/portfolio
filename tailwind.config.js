/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        midnightTeal: '001e22',
        forestEmerald: '0a533f',
        brightTeal: '0bbba1',

      }
    },
  },
  plugins: [],
}

