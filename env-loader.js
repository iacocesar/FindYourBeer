/*
  Currently, react-native ignores the env
  configuration on .babelrc, so we can't use
  react-native-dotenv to load .env only on dev mode.

  We use babel-plugin-transform-inline-environment-variables
  to define env vars inside the final bundle, using this custom
  plugin, we can use dotenv to load the .env file only on
  dev mode.
*/

require('dotenv').config()

module.exports = require('babel-plugin-transform-inline-environment-variables')
