const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
   mode: "development", // Set mode to development
   entry: {
      bundle: path.resolve(__dirname, "src/index.js"), // Entry point for app
   },
   output: {
      path: path.resolve(__dirname, "dist"), // Output directory
      filename: "[name][contenthash].js", // Output filename pattern
      clean: true, // Clean output dir before build
      assetModuleFilename: "assets/[name][hash][ext][query]", // Asset output pattern
   },
   devtool: "source-map", // Generate source maps
   devServer: {
      static: {
         directory: path.resolve(__dirname, "dist"), // Serve static files from dist
      },
      port: 3000, // Dev server port
      open: true, // Open browser on start
      hot: true, // Enable hot reloading
      compress: true, // Enable gzip compression
      historyApiFallback: true, // SPA fallback
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
      }),
      new MiniCssExtractPlugin({
         filename: "main.css", // Output CSS filename
      }),
      new Dotenv(),
   ],
};
