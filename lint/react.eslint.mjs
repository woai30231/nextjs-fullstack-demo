import ESLintPluginQuery from '@tanstack/eslint-plugin-query';
import ESLintPluginReactRefresh from 'eslint-plugin-react-refresh';
import ESLintPluginNext from '@next/eslint-plugin-next';

const customReactESLintConfig = [
  // IT IS USING IMPORT, REACT, REACT HOOKS (ALL) & JSX A11Y INTERNALLY SO THOSE 4 PACKAGES SHOULD BE AFTER THIS
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
  ...ESLintPluginQuery.configs['flat/recommended'],
  // NEXT.JS CONFIG
  {
    plugins: {
      '@next/next': ESLintPluginNext,
    },
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...ESLintPluginNext.configs.recommended.rules,
      ...ESLintPluginNext.configs['core-web-vitals'].rules,
    },
  },
];

export default customReactESLintConfig;
