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
        primary: '#B88E2F',
        'primary-light': '#DCB95A',
        'primary-dark': '#9A7420',
        dark: '#333333',
        medium: '#666666',
        light: '#999999',
        cream: '#FCF8F3',
        'cream-dark': '#F4EEDC',
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

