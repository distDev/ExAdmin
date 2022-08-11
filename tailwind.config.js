/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#8146FF',
        'border': '#F0F1F1',
        'textSecond': '#A6ACB8',
        'textMain': '#361f67',
        'lightGrey': '#F6F7FB',
        'bodyBg': '#FAFAFD',
      },
      boxShadow: {
        'mainShadow': '0px 4px 38px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
