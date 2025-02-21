module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003B95',
          light: '#0066FF',
          dark: '#002B6E',
        },
        secondary: {
          DEFAULT: '#4D9BFF',
          light: '#E5F0FF',
          dark: '#003366',
        }
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 59, 149, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 59, 149, 0.12)',
      }
    },
  },
  plugins: [],
} 