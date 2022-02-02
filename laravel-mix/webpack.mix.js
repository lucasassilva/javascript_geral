const mix = require("laravel-mix");

mix.js("./src/assets/js/main.js", "./assets/js/bundle.js")
   .sass("src/assets/scss/main.scss", "./assets/css/bundle.css")
   .setPublicPath("public");

mix.webpackConfig({
    watchOptions: { ignored: /node_modules/ }
});