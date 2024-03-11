/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Outfit"', 'sans-serif'],
        'serif': ['"Young Serif"', 'serif']
      },
      fontWeight: {
        'regular': 400,
        'semibold': 600,
        'bold': 700
      },
      fontSize: {
        'regular': '1rem',
        'lg': '1.25rem',
        'xl': '1.75rem',
        '2xl': '2.25rem',
        '3xl': '2.5rem',
      },
      maxWidth: {
        'desktop': '46rem'
      },
      padding: {
        'desktop': "7.688rem"
      }
    },
    colors: {
      'nutmeg': 'hsl(14, 45%, 36%)',
      'raspberry': 'hsl(332, 51%, 32%)',
      'white': 'hsl(0, 0%, 100%)',
      'rose-white': 'hsl(330, 100%, 98%)',
      'eggshell': 'hsl(30, 54%, 90%)',
      'light-grey': 'hsl(30, 18%, 87%)',
      'wenge': 'hsl(30, 10%, 34%)',
      'charcoal': 'hsl(24, 5%, 18%)'
    }
  },
  plugins: [],
}

