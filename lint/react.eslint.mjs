import tanstackQueryPlugin from '@tanstack/eslint-plugin-query';
import { configs, plugins, rules } from 'eslint-config-airbnb-extended';

const customReactESLintConfig = [
  // REACT PLUGIN
  plugins.react,
  // REACT HOOKS PLUGIN
  plugins.reactHooks,
  // REACT JSX-A11Y PLUGIN
  plugins.reactA11y,
  // NEXT PLUGIN
  plugins.next,
  // AIRBNB NEXT CONFIG
  ...configs.next.recommended,
  // AIRBNB REACT STRICT RULES
  rules.react.strict,
  // JSX A11Y CONFIG RULES
  {
    name: 'x/jsx-a11y/rules',
    rules: {
      'jsx-a11y/label-has-associated-control': 'off',
    },
  },
  // TAN STACK QUERY CONFIG
  ...tanstackQueryPlugin.configs['flat/recommended'],
];

export default customReactESLintConfig;
