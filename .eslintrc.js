module.exports = {
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  plugins: ['react'],
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'react/jsx-wrap-multilines': 0,
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'react/prop-types': 0
  }
}
