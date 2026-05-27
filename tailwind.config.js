/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: { primary: '#8B5CF6', secondary: '#6366f1', dark: '#0a0a0f', darker: '#050507', glass: 'rgba(255, 255, 255, 0.05)' },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}
