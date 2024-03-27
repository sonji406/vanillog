/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      placeholderColor: {
        white: '#ffffff',
      },
    },
  },
  variants: {
    extend: {
      placeholderColor: ['active', 'focus'],
    },
  },
  plugins: [],
};
