const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
   mode: "development",
   entry: {
      bundle: path.resolve(__dirname, "src/index.js"),
   },
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name][contenthash].js",
      clean: true,
      assetModuleFilename: 'assets/[name][hash][ext][query]',
   },
   devtool: "source-map",
   devServer: {
      static: {
         directory: path.resolve(__dirname, "dist"),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               MiniCssExtractPlugin.loader, // Extract CSS to file
               "css-loader", // Turns CSS into CommonJS
               "sass-loader", // Compiles Sass to CSS
            ],
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"],
               },
            },
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: "SkyCast",
         filename: "index.html",
         template: "src/index.html",
      }),
      new MiniCssExtractPlugin({
         filename: "main.css",
      }),
   ],
};
