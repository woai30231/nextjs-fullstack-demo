import { configs, plugins } from 'eslint-config-airbnb-extended';

const customTSESLintConfig = [
  // Typescript ESLint Plugin
  plugins.typescriptEslint,
  // AIRBNB BASE TYPESCRIPT CONFIG
  ...configs.base.typescript,
  // AIRBNB NEXT TYPESCRIPT CONFIG
  ...configs.next.typescript,
  // REACT ONLY - REMOVED ONE RULE FOR FEATURES HOOK
  {
    name: 'x/typescript-eslint/features-hook-only',
    files: ['src/features/**/use*.ts'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];

export default customTSESLintConfig;
