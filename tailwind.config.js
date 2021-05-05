module.exports = {
  purge: [

    './src/**/*.html',

    './src/**/*.js',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2.5rem',
        md: '3rem',
        lg: '3.5rem',
        xl: '5rem',
      },
    },
    fontFamily: {
      'display': ['Alegreya Sans'],
      'body': ['Nunito'],
      'mono': ['Courier Prime']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
