/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'hsl(0, 100%, 74%)',
        green: 'hsl(154, 59%, 51%)',
        blue: 'hsl(248, 32%, 49%)',
        'dark-blue': 'hsl(249, 10%, 26%)',
        'grayish-blue': 'hsl(246, 25%, 80%)'
      }
    }
  },
  plugins: []
}
