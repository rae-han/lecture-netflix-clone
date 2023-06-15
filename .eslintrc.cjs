module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import'],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "typescript": {}
    }
  },
  rules: {
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling"],
          "index"
        ],
        "newlines-between": "always",
        "pathGroups": [
          {
            "pattern": "@/**",
            "group": "internal",
            "position": "after"
          }
        ]
      }
    ],
  },
}
