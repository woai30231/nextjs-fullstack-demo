import js from '@eslint/js';
import ESLintConfigPrettier from 'eslint-config-prettier';
import ESLintPluginPrettier from 'eslint-plugin-prettier';

import customImportESLintConfig from './lint/import.eslint.mjs';
import customJSESLintConfig from './lint/javascript.eslint.mjs';
import customReactESLintConfig from './lint/react.eslint.mjs';
import customTSESLintConfig from './lint/typescript.eslint.mjs';
import { gitIgnoreFile } from './lint/utils.mjs';

export default [
  gitIgnoreFile,
  js.configs.recommended,
  ...customJSESLintConfig,
  ...customReactESLintConfig,
  ...customTSESLintConfig,
  ...customImportESLintConfig,
  ESLintConfigPrettier,
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
        // REACT - TYPESCRIPT
        {
          selector: 'TSTypeReference[typeName.left.name="React"]',
          message: 'Use of React.type is not allowed.',
        },
      ],
    },
  },
];
