import ESLintPluginPromise from 'eslint-plugin-promise';
import ESLintPluginUnicorn from 'eslint-plugin-unicorn';

import { flatCompat } from './utils.mjs';

const customJSESLintConfig = [
  // IT IS USING IMPORT, PROMISE & N INTERNALLY SO THOSE 3 PACKAGES SHOULD BE AFTER THIS
  ...flatCompat.extends('eslint-config-standard'),
  ESLintPluginPromise.configs['flat/recommended'],
  ESLintPluginUnicorn.configs['flat/recommended'],
];

export default customJSESLintConfig;
