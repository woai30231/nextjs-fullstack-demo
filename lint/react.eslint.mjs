import ESLintPluginNext from '@next/eslint-plugin-next';
import ESLintPluginQuery from '@tanstack/eslint-plugin-query';
import { configs } from 'eslint-config-airbnb-extended';

const customReactESLintConfig = [
  // AIRBNB NEXT CONFIG
  ...configs.next.recommended,
  // REACT CONFIG RULES
  {
    name: 'react/rules',
    rules: {
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
        },
      ],
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-fragments': ['error', 'element'],
      'react/require-default-props': [
        'error',
        {
          functions: 'defaultArguments',
        },
      ],
    },
  },
  // JSX A11Y CONFIG RULES
  {
    name: 'jsx-a11y/rules',
    rules: {
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
      'jsx-a11y/label-has-for': [
        'error',
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
    },
  },
  // TAN STACK QUERY CONFIG
  ...ESLintPluginQuery.configs['flat/recommended'],
];

export default customReactESLintConfig;
