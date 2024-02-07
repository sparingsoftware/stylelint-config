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
    'stylelint-config-recess-order'
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
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend'
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true
        },
        'rules'
      ]
    ],
    'scss/selector-no-redundant-nesting-selector': null,
    'scss/dollar-variable-colon-space-after': null,
    'color-hex-length': 'long'
  }
}

module.exports = defaultConfig
