import ESLintPluginNext from '@next/eslint-plugin-next';
import ESLintPluginQuery from '@tanstack/eslint-plugin-query';

const customReactESLintConfig = [
  // AIRBNB CONFIG
  // IT IS USING IMPORT, REACT, REACT HOOKS (ALL) & JSX A11Y INTERNALLY SO THOSE 4 PACKAGES SHOULD BE AFTER THIS
  // ...ESLintConfigAirbnbExtended.configs.recommended,
  // REACT CONFIG RULES
  // {
  //   name: 'react/rules',
  //   rules: {
  //     'react/function-component-definition': [
  //       'error',
  //       {
  //         namedComponents: 'arrow-function',
  //       },
  //     ],
  //     'react/prop-types': 'off',
  //     'react/jsx-props-no-spreading': 'off',
  //     'react/jsx-fragments': ['error', 'element'],
  //     'react/require-default-props': [
  //       'error',
  //       {
  //         functions: 'defaultArguments',
  //       },
  //     ],
  //   },
  // },
  // JSX A11Y CONFIG RULES
  // {
  //   name: 'jsx-a11y/rules',
  //   rules: {
  //     'jsx-a11y/label-has-associated-control': [
  //       'error',
  //       {
  //         required: {
  //           some: ['nesting', 'id'],
  //         },
  //       },
  //     ],
  //     'jsx-a11y/label-has-for': [
  //       'error',
  //       {
  //         required: {
  //           some: ['nesting', 'id'],
  //         },
  //       },
  //     ],
  //   },
  // },
  // TAN STACK QUERY CONFIG
  ...ESLintPluginQuery.configs['flat/recommended'],
  // NEXT.JS CONFIG
  {
    name: 'next/rules',
    plugins: {
      '@next/next': ESLintPluginNext,
    },
    rules: {
      ...ESLintPluginNext.configs.recommended.rules,
      ...ESLintPluginNext.configs['core-web-vitals'].rules,
    },
  },
];

export default customReactESLintConfig;
