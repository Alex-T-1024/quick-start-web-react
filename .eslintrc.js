module.exports = {
  root: true,
  extends: ['react-app'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  overrides: [ // For TypeScript overrides
    {
      files: ['**/*.ts?(x)'],
      rules: {
      },
    },
  ],
}
