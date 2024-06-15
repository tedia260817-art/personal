{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".jsx", ".tsx"]
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "no-console": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never",
        "js": "never",
        "jsx": "never"
      }
    ],
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "always"
      }
    ]
  }
}
