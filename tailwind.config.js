/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {
      keyframes: {
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
        slideIn: {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        changeBackgroundColor: {
          '0%': {
            backgroundColor: 'transparent',
            boxShadow: '0px 2px 1px 0px rgba(0,0,0,0.4)',
          },
          '10%': {
            backgroundColor: '#e2e2e2',
            boxShadow: '0px 2px 1px 0px rgba(0,0,0,0.4)',
          },
          '100%': {
            backgroundColor: '#e2e2e2',
            boxShadow: '0px 2px 1px 0px rgba(0,0,0,0.4)',
          },
        },
      },
      animation: {
        listComponentChangeBg: 'listComponentChangeBg 2s ease-in-out',
        slideIn: 'slideIn 0.2s ease-in-out forwards',
        upDown: 'upDown 1.5s infinite ease-in-out',
        shakeAndScaleUp: 'shake 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
