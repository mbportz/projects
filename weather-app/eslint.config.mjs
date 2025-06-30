import js from "@eslint/js";
import globals from "globals";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export const rulesOverride = {
   files: ["**/*.css"],
   rules: {
      "css/use-baseline": ["off"],
   },
};

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
   rulesOverride,
]);
