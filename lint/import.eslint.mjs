// import ESLintPluginImport from 'eslint-plugin-import';

const customImportESLintConfig = [
  // ESLintPluginImport.flatConfigs.recommended,
  // ESLintPluginImport.flatConfigs.typescript,
  // {
  //   settings: {
  //     'import/resolver': {
  //       typescript: true,
  //       node: true,
  //     },
  //   },
  //   rules: {
  //     'sort-imports': [
  //       'error',
  //       {
  //         ignoreDeclarationSort: true,
  //       },
  //     ],
  //     'import/prefer-default-export': 'off',
  //     'import/order': [
  //       'error',
  //       {
  //         groups: [
  //           'builtin',
  //           'external',
  //           'internal',
  //           ['parent', 'sibling', 'index'],
  //           'object',
  //           ['unknown', 'type'],
  //         ],
  //         pathGroups: [
  //           {
  //             pattern: 'react',
  //             group: 'external',
  //             position: 'before',
  //           },
  //         ],
  //         'newlines-between': 'always',
  //         alphabetize: {
  //           order: 'asc',
  //           caseInsensitive: true,
  //         },
  //         distinctGroup: true,
  //         pathGroupsExcludedImportTypes: ['type'],
  //         warnOnUnassignedImports: true,
  //       },
  //     ],
  //     'import/no-unresolved': 'error',
  //   },
  // },
  // {
  //   files: ['**/*.{ts,tsx}'],
  //   rules: {
  //     'no-restricted-imports': [
  //       'error',
  //       {
  //         patterns: [
  //           {
  //             group: ['./*', '../*'],
  //             message: "Please use the absolute path '@/*' instead.",
  //           },
  //           {
  //             group: ['@/api/api'],
  //             message: 'Please use the api default export instead.',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
];

export default customImportESLintConfig;
