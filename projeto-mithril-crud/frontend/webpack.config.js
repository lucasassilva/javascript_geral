const modoDev = process.env.NODE_ENV !== "production";
const path = require("path");

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: path.join(__dirname, "./src/index.js"),
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
};
