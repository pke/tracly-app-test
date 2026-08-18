import js from "@eslint/js"
import importPlugin from "eslint-plugin-import"
import mocha from "eslint-plugin-mocha"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import globals from "globals"

export default [
  {
    ignores: ["public/**", "docs/**"],
  },
  {
    files: ["src/**/*.js", "tests/**/*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
    },
    plugins: {
      import: importPlugin,
      mocha,
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "18.3",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...mocha.configs.recommended.rules,
      ...react.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "comma-dangle": ["warn", {
        arrays: "always-multiline",
        objects: "always-multiline",
      }],
      indent: ["warn", 2],
      "linebreak-style": ["error", "unix"],
      "no-multi-spaces": "warn",
      "no-shadow": ["error", { allow: ["options"] }],
      "no-spaced-func": "error",
      "no-trailing-spaces": ["warn", { skipBlankLines: true }],
      "no-whitespace-before-property": "error",
      quotes: ["error", "double"],
      semi: ["error", "never"],
      "space-infix-ops": "warn",
    },
  },
]
