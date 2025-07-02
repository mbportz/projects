/**
 * Babel configuration file.
 * 
 * Exports an object specifying the presets to be used by Babel for transpiling code.
 * - "@babel/preset-env": Allows you to use the latest JavaScript features.
 * - "@babel/preset-react": Adds support for JSX and React-specific syntax.
 *
 * @module babel.config
 * @type {Object}
 * @property {Array<string>} presets - List of Babel presets to apply.
 */
module.exports = {
   presets: ["@babel/preset-env", "@babel/preset-react"],
};
