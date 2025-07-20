/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        midnightTeal: '#001e22',
        darkGreen:'#043c31',
        forestEmerald: '#0a533f',
        brightTeal: '#0bbba1',
        darkPurple: '#1b093f',
        hoverPurple: '#411798',
        basePurple: '#36147e',
        lightPurple: '#6c29fe',
        orangePri: '#FE961B',
        darkGrey:'#313338',
        lighterGrey:'#565a62',
        grampsBrown:'#795649',
        plum: '#3a0035',
        lightplum: '#590248'
      },
      fontFamily: {
        'discord': ['"gg sans"', '"Noto Sans"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
