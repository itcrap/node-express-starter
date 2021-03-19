module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier", "eslint:recommended"],
  plugins: ["prettier"],
  parser: "babel-eslint",
  rules: {
    "max-len": [2, { code: 160, tabWidth: 2, ignoreUrls: true }],
    "no-console": "off",
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
