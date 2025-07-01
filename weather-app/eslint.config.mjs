import js from "@eslint/js";
import globals from "globals";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import eslintPluginJest from "eslint-plugin-jest";
import eslintPluginJestModule from "eslint-plugin-jest";

export const rulesOverride = {
   files: ["**/*.css"],
   rules: {
      "css/use-baseline": ["off"],
      ...eslintPluginJest.configs.recommended.rules,
   },
};

export default defineConfig([
   {
      files: ["**/*.{js,mjs,cjs}", "**/*.test.js", "**/__tests__/**/*.js"],
      plugins: { js, jest: eslintPluginJestModule },
      extends: ["js/recommended"],
   },
   {
      files: ["**/*.{js,mjs,cjs}"],
      languageOptions: {
         globals: {
            ...globals.browser,
            ...globals.jquery,
            process: "readonly",
            jest: true,
            describe: true,
            it: true,
            expect: true,
            beforeEach: true,
            afterEach: true,
         },
      },
   },
   {
      files: ["**/*.css"],
      plugins: { css },
      language: "css/css",
      extends: ["css/recommended"],
   },
   rulesOverride,
]);
