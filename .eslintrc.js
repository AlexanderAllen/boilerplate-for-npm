/**
 * References:
 * - https://typescript-eslint.io/docs/linting/
 */

module.exports = {
  root: true,
  // https://eslint.org/docs/user-guide/configuring/language-options
  env: {
    browser: true,
    es6: true,
    // https://stackoverflow.com/questions/48584556/eslint-chrome-is-not-defined-no-undef
    // webextensions: true,
  },
  plugins: ['react'],
  parser: ['@babel/eslint-parser'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  ignorePatterns: [
    'node_modules',
    'dist',
    'lib',
  ],
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended', // removes redundant warnings between TS & ESLint
        'plugin:@typescript-eslint/recommended', // rules specific to typescript, e.g., writing interfaces
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
      ],
    },
    // Override enviornment for test files.
    {
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      files: [
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.test.js',
        '**/*.test.jsx',
      ],
      env: {
        jest: true,
        // 'jest/globals': true,
      },
      // https://www.npmjs.com/package/eslint-plugin-jest
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
};
