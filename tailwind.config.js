/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FFE5E5',
        'pastel-blue': '#E5F3FF',
        'light-green': '#B9E7C9',
      },
    },
  },
  plugins: [],
}
