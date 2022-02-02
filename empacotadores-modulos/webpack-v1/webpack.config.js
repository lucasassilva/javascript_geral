const path = require("path"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "public", "assets"),
    filename: "js/bundle.js",
  },
  plugins:[
    new MiniCssExtractPlugin({
        filename: "css/bundle.css"
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
        new UglifyJsPlugin({
            cache: true,
            parallel: true
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        }
      }
    }, {
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
      ],
    }]
  },
  //devtool: "source-map"
};