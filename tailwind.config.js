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
        upDown: {
          '0%, 100%': { transform: 'translateY(var(--topPos))' },
          '50%': { transform: 'translateY(var(--bottomPos))' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.7)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.7)' },
        },
        shakeAndScaleUp: {
          '0%': { transform: 'scale(0.1) translateY(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(5deg)' },
          '20%, 40%, 60%, 80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'scale(1) translateY(0)' },
        },
        shake: {
          '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(5deg)' },
          '20%, 40%, 60%, 80%': { transform: 'rotate(-5deg)' },
        },
      },
      animation: {
        listComponentChangeBg: 'listComponentChangeBg 2s ease-in-out',
        listComponentSlideIn: 'listComponentSlideIn 0.2s ease-in-out',
        upDown: 'upDown 1.5s infinite ease-in-out',
        shakeAndScaleUp: 'shakeAndScaleUp 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
}
