import ESLintPluginPrettier from 'eslint-plugin-prettier';
import ESLintConfigPrettier from 'eslint-config-prettier';
import customTSESLintConfig from './lint/typescript.eslint.mjs';
import { gitIgnoreFile } from './lint/utils.mjs';
import customReactESLintConfig from './lint/react.eslint.mjs';
import customImportESLintConfig from './lint/import.eslint.mjs';
import js from '@eslint/js';

export default [
  gitIgnoreFile,
  ...[
    js.configs.recommended,
    ...customImportESLintConfig,
    ...customTSESLintConfig,
    ...customReactESLintConfig,
    // 'plugin:@next/next/recommended',
    // 'plugin:@tanstack/eslint-plugin-query/recommended',
    ESLintConfigPrettier,
  ],
  {
    plugins: {
      prettier: ESLintPluginPrettier,
    },
  },
  {
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'off',
      'no-void': 'off',
      'consistent-return': 'off',
      'no-array-constructor': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allow: ['_id'],
        },
      ],
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
  },
];
