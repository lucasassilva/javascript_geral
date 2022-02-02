const path = require("path"); // CommonJS

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output:{
        path: path.resolve(__dirname, "public", "assets"),
        filename: "js/bundle.js"
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                }
            }
        }]
    },
    //devtool: "source-map",
};

