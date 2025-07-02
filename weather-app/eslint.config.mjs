/**
 * ESLint configuration for the weather-app project.
 *
 * This configuration provides linting rules and environment settings for:
 * - JavaScript files (including .js, .mjs, .cjs)
 * - CSS files
 * - Jest test files
 *
 * Features:
 * - Uses recommended rules from @eslint/js for JavaScript.
 * - Enables browser and jQuery globals, and sets 'process' as readonly.
 * - Applies recommended rules from @eslint/css for CSS files, with custom overrides.
 * - Integrates eslint-plugin-jest for test files, enabling Jest-specific globals and rules.
 *
 * @module eslint.config
 * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files-new}
 * @see {@link https://github.com/eslint-community/eslint-plugin-jest}
 * @see {@link https://github.com/eslint-community/eslint-plugin-css}
 */

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
