module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["eslint-config-airbnb-base", "eslint-config-prettier"],
  plugins: ["eslint-plugin-prettier"],
  parser: "babel-eslint",
  rules: {
    "no-debugger": "off",
    "no-console": "off",
    "max-len": [2, { code: 160, tabWidth: 2, ignoreUrls: true }],
    "no-underscore-dangle": "off",
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
