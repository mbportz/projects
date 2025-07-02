// jest.config.js

export default {
   // Set the test environment to jsdom (browser-like)
   testEnvironment: "jsdom",

   // Run this file after the test framework is installed in the environment
   setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.mjs"],

   // Use babel-jest to transform JavaScript and JSX files
   transform: { "^.+\\.jsx?$": "babel-jest" },

   moduleNameMapper: {
      // Mock CSS, SCSS, and SASS imports using identity-obj-proxy
      "\\.(css|scss|sass)$": "identity-obj-proxy",

      // Mock image imports (jpg, jpeg, png, svg) with a custom file mock
      "\\.(jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileMock.js",
   },
};
