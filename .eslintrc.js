module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    './lint/.eslintrc-import.js',
    './lint/.eslintrc-typescript.js',
    './lint/.eslintrc-react.js',
    'plugin:@next/next/recommended',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import', '@tanstack/query'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-void': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': [
      'error',
      'ForStatement',
      'ForInStatement',
      'ForOfStatement',
      'ContinueStatement',
      'DoWhileStatement',
      'WhileStatement',
      'WithStatement',
      // REACT
      {
        selector: 'MemberExpression[object.name="React"]',
        message: 'Use of React.method is not allowed.',
      },
      // TYPESCRIPT
      {
        selector: 'TSTypeReference[typeName.left.name="React"]',
        message: 'Use of React.type is not allowed.',
      },
    ],
  },
};
