const eslintrc = {
  extends: ['@mstr/eslint-config-mstr', 'prettier'],
  settings: {
    react: { version: '17.0.2' },
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'babel', 'jest', '@typescript-eslint'],
  rules: {
    'no-await-in-loop': 'off',
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
  overrides: [
    {
      files: ['.ts', '.tsx'],
      rules: {
        // enable the rules specifically for TypeScript files
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        'no-undef': 'off',
      },
    },
  ],
};

module.exports = eslintrc;
