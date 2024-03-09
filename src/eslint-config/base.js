/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
  ].map(require.resolve),
  plugins: ['simple-import-sort', 'check-file'],
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  // add rules configurations here
  rules: {
    'import/no-default-export': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'react/jsx-no-leaked-render': [
      'error',
      { validStrategies: ['coerce', 'ternary'] },
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/': 'KEBAB_CASE',
      },
    ],
    'check-file/filename-naming-convention': [
      'error',
      { 'src/*': 'KEBAB_CASE' },
    ],
  },
};
