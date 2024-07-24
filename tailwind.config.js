const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [
    require("tailwindcss-primeui"),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') },
      })
    })
  ],
  safelist: [
    {
      pattern: /grid-cols-*/,
    },
  ]
};
