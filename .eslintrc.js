module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    semi: 'off',
    'max-len': ['error', { code: 120 }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};