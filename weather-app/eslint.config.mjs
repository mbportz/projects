import js from "@eslint/js";
import globals from "globals";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

export default defineConfig([
   {
      files: ["**/*.{js,mjs,cjs}"],
      plugins: { js },
      extends: ["js/recommended"],
   },
   {
      files: ["**/*.{js,mjs,cjs}"],
      languageOptions: {
         globals: {
            ...globals.browser,
            ...globals.jquery,
            process: "readonly",
         },
      },
   },
   {
      files: ["**/*.css"],
      plugins: { css },
      language: "css/css",
      extends: ["css/recommended"],
   },
   {
      files: ["**/*.css"],
      rules: {
         "css/use-baseline": ["off"],
      },
   },
   {
      files: ["**/*.test.js", "**/__tests__/**/*.js"],
      plugins: {
         jest,
      },
      languageOptions: {
         globals: {
            // Node
            global: "readonly",
            navigator: "readonly",
            // Jest
            jest: "readonly",
            describe: "readonly",
            it: "readonly",
            expect: "readonly",
            beforeEach: "readonly",
            afterEach: "readonly",
         },
      },
      rules: {
         ...jest.configs.recommended.rules,
      },
   },
]);
