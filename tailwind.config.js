/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-body': '#4f4f4f',
        main: '#222222',
        hover: '#c7ab62',
        'main-text': '#4f4f4f',
        'name-product': '#666666',
        'current-product': '#e21c1c',
        'product-bg': '#F5F5F5'
        // label-sale: '#c7ab62',
        // label-in: '#25a799',
        // label-out: '#858585',
      },
      boxShadow: {
        'box-1': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      }
    }
  },
  plugins: []
}
