const tsRules = require('./rules/typescript').rules

module.exports = {
  extends: [
    'airbnb-base',
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/flowtype.js',
    './rules/imports.js',
    './rules/react.js',
    './rules/react-hooks.js',
    './rules/es6.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/prettier.js',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es2020: true,
  },
  globals: {
    _: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
  rules: {},
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      rules: {
        'global-require': 'off',
        'no-magic-numbers': 'off',
      },
    },
    {
      files: ['.storybook/**/*.js'],
      rules: {
        'global-require': 'off',
      },
    },
    {
      files: ['./src/index.js', 'types.js'],
      rules: {
        'import/no-unused-modules': 'off',
      },
    },
    {
      files: ['src/**/*.tsx', 'src/**/*.ts', '**/*.d.ts'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        react: {
          version: 'detect',
        },
        'import/resolver': {
          typescript: {},
        },
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      rules: tsRules,
      parserOptions: {
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'react/prefer-stateless-function': 'off',
        'import/no-unused-modules': 'off',
        'import/extensions': 'off',
      },
    },
  ],
}
