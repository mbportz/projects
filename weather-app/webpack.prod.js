/**
 * Webpack production configuration for the SkyCast weather app.
 *
 * Features:
 * - Entry: src/index.js
 * - Output: Bundled JS and assets in 'dist' with content hashes for cache busting.
 * - CSS and SCSS/SASS extraction to separate files.
 * - JavaScript transpilation using Babel (@babel/preset-env).
 * - Image assets handled as resources and output to the assets directory.
 * - Plugins:
 *   - HtmlWebpackPlugin: Generates HTML from a template and injects scripts/styles.
 *   - MiniCssExtractPlugin: Extracts CSS into a separate file.
 *   - webpack.DefinePlugin: Injects environment variables into the build.
 *
 * @module webpack.prod.js
 * @requires path
 * @requires html-webpack-plugin
 * @requires mini-css-extract-plugin
 * @requires webpack
 *
 * @see https://webpack.js.org/
 * @see https://github.com/jantimon/html-webpack-plugin
 * @see https://github.com/webpack-contrib/mini-css-extract-plugin
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
   mode: "production", // Set mode to development
   entry: {
      bundle: path.resolve(__dirname, "src/index.js"), // Entry point for app
   },
   output: {
      path: path.resolve(__dirname, "dist"), // Output directory
      filename: "[name][contenthash].js", // Output filename pattern
      clean: true, // Clean output dir before build
      assetModuleFilename: "assets/[name][hash][ext][query]", // Asset output pattern
   },
   module: {
      rules: [
         {
            test: /\.css$/i, // Match .css files
            use: [MiniCssExtractPlugin.loader, "css-loader"], // Extract and load CSS
         },
         {
            test: /\.s[ac]ss$/i, // Match .sass/.scss files
            use: [
               MiniCssExtractPlugin.loader, // Extract CSS to file
               "css-loader", // Load CSS
               "sass-loader", // Compile Sass to CSS
            ],
         },
         {
            test: /\.js$/, // Match .js files
            exclude: /node_modules/, // Exclude node_modules
            use: {
               loader: "babel-loader", // Use Babel
               options: {
                  presets: ["@babel/preset-env"], // Babel preset
               },
            },
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match image files
            type: "asset/resource", // Handle as asset/resource
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: "SkyCast", // HTML title
         filename: "index.html", // Output HTML filename
         template: "src/index.html", // HTML template
         favicon: "public/favicon_io/favicon-32x32.png",
      }),
      new MiniCssExtractPlugin({
         filename: "main.css", // Output CSS filename
      }),
      new webpack.DefinePlugin({
         "process.env.BASE_URL": JSON.stringify(process.env.BASE_URL),
         "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
      }),
   ],
};
