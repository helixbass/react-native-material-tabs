const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['flowtype', 'jest', 'prettier', 'react-native'],
  rules: {
    'global-require': OFF,
    'import/no-extraneous-dependencies': OFF,
    'import/no-named-as-default': OFF,
    'react/destructuring-assignment': OFF,
    'react/sort-comp': OFF,
    'react/jsx-filename-extension': [OFF, { extensions: ['.js'] }],
    'react/forbid-prop-types': [ERROR, { forbid: ['any'] }],
    'react/no-unescaped-entities': [Error, { forbid: ['>', '}'] }],
    'react/require-default-props': WARNING,
    'no-unused-expressions': OFF,
    'no-use-before-define': OFF,
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        proseWrap: 'always',
        tabWidth: 2,
        printWidth: 80,
      },
    ],
  },
};
