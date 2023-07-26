/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './modules/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
