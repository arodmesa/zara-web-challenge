const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');
module.exports = {
  extends: ['./src/eslint-config/next'].map(require.resolve),
  parserOptions: { project },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
