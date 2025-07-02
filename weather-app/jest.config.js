/**
 * Jest configuration file for the weather-app project.
 *
 * @module jest.config
 * @type {import('jest').Config}
 *
 * @property {string} testEnvironment - Specifies the test environment to use. "jsdom" simulates a browser-like environment for testing.
 * @property {string[]} setupFilesAfterEnv - Array of paths to modules that run after the test framework is installed in the environment.
 * @property {Object} transform - Maps file patterns to transformers. Uses "babel-jest" for JavaScript and JSX files.
 * @property {Object} moduleNameMapper - Maps module import patterns to mock implementations:
 *   - CSS, SCSS, and SASS files are mocked using "identity-obj-proxy".
 *   - Image files (jpg, jpeg, png, svg) are mocked using a custom file mock.
 */

module.exports = {
   testEnvironment: "jsdom",
   setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.mjs"],
   transform: { "^.+\\.jsx?$": "babel-jest" },
   moduleNameMapper: {
      "\\.(css|scss|sass)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileMock.js",
   },
};
