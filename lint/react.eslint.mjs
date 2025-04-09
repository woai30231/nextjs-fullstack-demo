import ESLintPluginQuery from '@tanstack/eslint-plugin-query';
import { configs, plugins, rules } from 'eslint-config-airbnb-extended';

const customReactESLintConfig = [
  // React Plugin
  plugins.react,
  // React Hooks Plugin
  plugins.reactHooks,
  // React JSX-A11y Plugin
  plugins.reactA11y,
  // Next Plugin
  plugins.next,
  // AIRBNB NEXT CONFIG
  ...configs.next.recommended,
  // AIRBNB REACT STRICT RULES
  rules.base.reactStrict,
  // JSX A11Y CONFIG RULES
  {
    name: 'jsx-a11y/rules',
    rules: {
      'jsx-a11y/label-has-associated-control': 'off',
    },
  },
  // TAN STACK QUERY CONFIG
  ...ESLintPluginQuery.configs['flat/recommended'],
];

export default customReactESLintConfig;
