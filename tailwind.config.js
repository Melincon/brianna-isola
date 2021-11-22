module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lineColor': '#212222',
      },
      borderColor: {
        'lineColor': '#212222',
      },
    },
    textColor: {
      'colorOne': '#DDDDDD',
      'colorTwo': '#636464',
      'colorThree': '#383838',
      'colorFour': '#212222',
      'colorFive': '#C4234B',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
