import ESLintPluginQuery from '@tanstack/eslint-plugin-query';
import ESLintPluginReactRefresh from 'eslint-plugin-react-refresh';

const customReactESLintConfig = [
  // IT IS USING IMPORT, REACT, REACT HOOKS (ALL) & JSX A11Y INTERNALLY SO THOSE 3 PACKAGES SHOULD BE AFTER THIS
  // 'airbnb',
  // 'airbnb/hooks',
  // {
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
  // {
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
  {
    plugins: {
      'react-refresh': ESLintPluginReactRefresh,
    },
    ignores: ['src/context/**'],
    rules: {
      'react-refresh/only-export-components': [
        'error',
        {
          allowExportNames: ['metadata'],
        },
      ],
    },
  },
  // 'plugin:@next/next/recommended',
  ...ESLintPluginQuery.configs['flat/recommended'],
];

export default customReactESLintConfig;
