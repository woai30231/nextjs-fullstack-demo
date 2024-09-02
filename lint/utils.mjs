import path from 'node:path';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';

export const ESLintDirectoryName = path.resolve('.');
export const gitignorePath = path.resolve(ESLintDirectoryName, '.gitignore');

export const gitIgnoreFile = includeIgnoreFile(gitignorePath);

export const flatCompat = new FlatCompat({
  baseDirectory: ESLintDirectoryName,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
