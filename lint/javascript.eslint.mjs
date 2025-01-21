import ESLintPluginPromise from 'eslint-plugin-promise';
import ESLintPluginUnicorn from 'eslint-plugin-unicorn';

import { flatCompat } from './utils.mjs';

const customJSESLintConfig = [
  // IT IS USING IMPORT, PROMISE & N INTERNALLY SO THOSE 3 PACKAGES SHOULD BE AFTER THIS
  ...flatCompat.extends('eslint-config-standard'),
  ESLintPluginPromise.configs['flat/recommended'],
  ESLintPluginUnicorn.configs['flat/recommended'],
  {
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            camelCase: true,
            pascalCase: true,
          },
          multipleFileExtensions: false,
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-array-reduce': 'off',
    },
  },
];

export default customJSESLintConfig;
