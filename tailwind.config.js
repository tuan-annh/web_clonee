/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-body': '#4f4f4f',
        'main': '#222222',
        'hover': '#c7ab62',
        'name-product': '#666666',
        'current-product': '#e21c1c',
        // label-sale: '#c7ab62',
        // label-in: '#25a799',
        // label-out: '#858585',
      }
    },
  },
  plugins: [],
}

