module.exports = {
  rules: {
    // enforce that class methods utilize this
    // https://eslint.org/docs/latest/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // Require braces around arrow function bodies
    // https://eslint.org/docs/latest/rules/arrow-body-style
    'arrow-body-style': 'off',

    // Require or disallow named function expressions
    // https://eslint.org/docs/latest/rules/func-names
    'func-names': 'off',

    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],

    // Require using arrow functions for callbacks
    // https://eslint.org/docs/latest/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'warn',
  },
}
