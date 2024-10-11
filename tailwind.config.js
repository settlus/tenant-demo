/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {
      keyframes: {
        listComponentChangeBg: {
          '0%': { backgroundColor: '#D9D9D9' },
          '100%': { backgroundColor: '#FFA300' },
        },
        listComponentSlideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        listComponentChangeBg: 'listComponentChangeBg 2s ease-in-out',
        listComponentSlideIn: 'listComponentSlideIn 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
}
