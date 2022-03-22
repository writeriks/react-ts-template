module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.d.ts', '.tsx'],
      },
    },
  },
  rules: {
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js', '**/*.spec.js'] }],
    'no-await-in-loop': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'jsx-a11y/label-has-associated-control': [2, { assert: 'either' }],
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
    'react/prop-types': 'off',
    'react/function-component-definition': [2, { namedComponents: ['arrow-function'] }],
    'class-methods-use-this': 'off',
    'react/jsx-key': ['error'],
    curly: [2, 'all'],

    // to fix false positive of no-shadow rule with ENUMs - https://github.com/typescript-eslint/typescript-eslint/issues/2483
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // to fix false positive of no-use-before-define while importing React - https://github.com/typescript-eslint/typescript-eslint/issues/2502
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    // disable the rule for all files
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
