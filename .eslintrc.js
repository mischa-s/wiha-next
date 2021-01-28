export const env = {
  browser: true,
  es2021: true,
};
export const extends = [
  'plugin:react/recommended',
  'airbnb',
  'plugin:jsx-a11y/recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended',
  'plugin:prettier/react',
  'plugin:prettier/@typescript-eslint',
];
export const parser = '@typescript-eslint/parser';
export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 12,
  sourceType: 'module',
};
export const plugins = ['react', '@typescript-eslint', 'prettier'];
export const rules = {
  'react/react-in-jsx-scope': 'off',
};
export const globals = {
  React: 'writable',
};
