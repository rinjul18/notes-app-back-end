module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      "env": {
        "commonjs": true,
        "es2021": true,
        node: true,
      },
      "extends": [
        "airbnb-base"
      ],
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        "ecmaVersion": 12,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-console": "off"
  },
};


