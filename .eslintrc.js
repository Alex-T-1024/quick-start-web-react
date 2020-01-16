module.exports = {
  root: true,
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react-hooks/exhaustive-deps': 0, // the official recommandation is always wrong
    // Plugins rules
    'prettier/prettier': 'warn',
    // Custom rules
    'array-callback-return': 2,
    'prefer-rest-params': 2,
    'no-eval': 2,
    'no-loop-func': 2,
    'no-prototype-builtins': 2,
    'no-param-reassign': 2,
    'no-restricted-globals': 2,
    'no-undef': 2,
    'no-useless-escape': 2,
    'no-var': 2,
  },
  overrides: [ // For TypeScript overrides
    {
      files: ['**/*.ts?(x)'],
      rules: {
      },
    },
  ],
}
