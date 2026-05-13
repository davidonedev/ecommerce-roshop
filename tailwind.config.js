/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,scss}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#AC274F',
        'primary-light': '#EB638B',
        'primary-dark': '#8B1F3F',
        dark: '#191516',
        medium: '#6B5760',
        light: '#B09098',
        cream: '#FFD9DA',
        'cream-dark': '#F5B8C4',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};
