/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

const capitalizeFirst = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.capitalize-first:first-letter': {
      textTransform: 'uppercase',
    },
  };
  addUtilities(newUtilities, ['responsive', 'hover']);
});

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [capitalizeFirst],
};
