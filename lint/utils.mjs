import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

export const ESLintDirectoryName = path.resolve('.');
export const gitignorePath = path.resolve(ESLintDirectoryName, '.gitignore');

export const gitIgnoreFile = includeIgnoreFile(gitignorePath);

export const flatCompat = new FlatCompat({
  baseDirectory: ESLintDirectoryName,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
