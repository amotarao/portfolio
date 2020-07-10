module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'for', 'each', 'include', 'mixin', 'content'],
      },
    ],
  },
};
