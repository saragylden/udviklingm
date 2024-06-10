/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    module: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
