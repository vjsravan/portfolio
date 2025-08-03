module.exports = {
  darkMode: 'class',                   // enable class-based dark mode
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1F2937',                // deep navy for backgrounds
        gold: '#D4AF37',                // gold accent
        ivory: '#F7F5F2',               // light ivory background
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};