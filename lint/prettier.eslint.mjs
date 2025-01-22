import ESLintConfigPrettier from 'eslint-config-prettier';
import ESLintPluginPrettier from 'eslint-plugin-prettier';

const customPrettierESLintConfig = [
  ESLintConfigPrettier,
  {
    plugins: {
      prettier: ESLintPluginPrettier,
    },
  },
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
];

export default customPrettierESLintConfig;
