/** @type {import("stylelint")}  */
const defaultConfig = {
  overrides: [
    {
      customSyntax: 'postcss-html',
      files: ['**/*.vue']
    }
  ],
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'selector-no-qualifying-type': null,
    'selector-class-pattern': null,
    'property-no-vendor-prefix': null,
    'max-nesting-depth': 4,
    'selector-max-compound-selectors': 4,
    'color-named': null,
    'order/properties-alphabetical-order': null,
    'scss/selector-no-redundant-nesting-selector': null,
    'color-hex-length': 'long'
  }
}

module.exports = defaultConfig
