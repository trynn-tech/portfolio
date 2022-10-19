/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      boxShadow: {
        'cursor': '0 2px 6px rgba(25,25,25,0.2), inset 0 1px rgba(50,50,50,0.1), inset 0 3px rgba(50,50,50,0.05), inset 0 3px 8px rgba(64,64,64,0.05), inset 0 -5px 10px rgba(25,25,25,0.1)',
      },
      backgroundSize:{
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'scan': '100% .2rem',
      },
    extend: {
      animationDelay: {
        2000: '2000ms',
      },
      animationDuration: {
        2000: '2000ms',
      },
      animationIteration: {
        '10x': '10',
      },
      animationTiming: {
        cubic: 'cubic-bezier(0, 0, 0.2, 1)',
      },
      keyframes: {
        flicker: {
          '0%':   {opacity: '0.552'},
          '5%':   {opacity: '0.48287'},
          '10%':  {opacity: '0.59134'},
          '15.0%':{opacity: '0.79543'},
          '20%':  {opacity: '0.75134'},
          '25%':  {opacity: '0.1956'},
          '30.0%':{opacity: '0.90687'},
          '35%':  {opacity: '0.122'},
          '40%':  {opacity: '0.62254'},
          '45%':  {opacity: '0.56977'},
          '50%':  {opacity: '0.9925'},
          '55.0%':{opacity: '0.55487'},
          '60.0%':{opacity: '0.16607'},
          '65%':  {opacity: '0.12353'},
          '70%':  {opacity: '0.2214'},
          '75%':  {opacity: '0.67908'},
          '80%':  {opacity: '0.97163'},
          '85.0%':{opacity: '0.1275'},
          '90%':  {opacity: '0.37186'},
          '95%':  {opacity: '0.24475'},
          '100%': {opacity: '0.37221'},
        },
        size:{
          '50%': {transform: 'scaleX(calc(1 / var(--width)))', opacity: '1',},
          '98%': {transform: 'scaleX(calc(1 / var(--width))) scaleY(calc(1 / var(--height)))', opacity: '1'},
          '100%': {transform: 'scaleX(calc(1 / var(--width))) scaleY(calc(1 / var(--height)))', opacity: '0'},
        },
        opacity:{
          'to': { opacity: '1' }
        },
      },
      animation: {
        'flickering': 'flicker 0.12s infinite',
        'collapse': 'size 2s ease-out',
        'opacity': 'opacity 2s ease-out',
      },
    },
  },
    variants: {
        animationDelay: ['responsive'],
        animationDuration: ['responsive'],
        animationIteration: ['responsive'],
        animationTiming: ['responsive'],
        animationDirection: ['responsive'],
        animationFillMode: ['responsive'],
        animationPlayState: ['responsive'],
    },
  plugins: [],
};
