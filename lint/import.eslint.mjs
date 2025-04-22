import { rules } from 'eslint-config-airbnb-extended';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

const customImportESLintConfig = [
  // STRICT IMPORT CONFIG
  rules.base.importsStrict,
  {
    name: 'x/import-x/disable-default-export',
    files: ['**/features/**/**.api.ts', '**/use*.ts'],
    rules: {
      'import-x/prefer-default-export': 'off',
    },
  },
  {
    name: 'unused-imports/config',
    plugins: {
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
];

export default customImportESLintConfig;
