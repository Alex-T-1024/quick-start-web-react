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
    'no-restricted-globals': [
      'error',
      // Common
      {
        name: 'event',
        message:
          'Use local parameter instead. (This is a global DOM event in IE)',
      },
      {
        name: 'name',
        message: 'Global use of `name` is not allowed.',
      },
      {
        name: 'length',
        message: 'Global use of `length` is not allowed',
      },
      // Methods on Number
      {
        name: 'isFinite',
        message:
          'Global use of `isFinite` is not allowed. Use `Number.isFinite` instead',
      },
      {
        name: 'isNaN',
        message:
          'Global use of `isNaN` is not allowed. Use `Number.isNaN` instead',
      },
      {
        name: 'parseFloat',
        message:
          'Global use of `parseFloat` is not allowed. Use `Number.parseFloat` instead',
      },
      {
        name: 'parseInt',
        message:
          'Global use of `parseInt` is not allowed. Use `Number.parseInt` instead',
      },
      {
        name: 'NaN',
        message: 'Global use of `NaN` is not allowed. Use `Number.NaN` instead',
      },
      // Members on Object.prototype
      {
        name: 'constructor',
        message: 'Global use of `constructor` is not allowed.',
      },
      {
        name: '__defineGetter__',
        message: 'Global use of `__defineGetter__` is not allowed.',
      },
      {
        name: '__defineSetter__',
        message: 'Global use of `__defineSetter__` is not allowed.',
      },
      {
        name: 'hasOwnProperty',
        message: 'Global use of `hasOwnProperty` is not allowed.',
      },
      {
        name: '__lookupGetter__',
        message: 'Global use of `__lookupGetter__` is not allowed.',
      },
      {
        name: '__lookupSetter__',
        message: 'Global use of `__lookupSetter__` is not allowed.',
      },
      {
        name: 'isPrototypeOf',
        message: 'Global use of `isPrototypeOf` is not allowed.',
      },
      {
        name: 'propertyIsEnumerable',
        message: 'Global use of `propertyIsEnumerable` is not allowed.',
      },
      {
        name: 'toString',
        message: 'Global use of `toString` is not allowed.',
      },
      {
        name: 'toLocaleString',
        message: 'Global use of `toLocaleString` is not allowed.',
      },
      {
        name: 'valueOf',
        message: 'Global use of `valueOf` is not allowed.',
      },
      {
        name: '__proto__',
        message: 'Global use of `__proto__` is not allowed.',
      },
    ],
    'no-undef': 2,
    'no-useless-escape': 2,
    'no-var': 2,
    'object-shorthand': ['warn', 'always'],
  },
  overrides: [
    // For TypeScript overrides
    {
      files: ['**/*.ts?(x)'],
      rules: {},
    },
  ],
}
