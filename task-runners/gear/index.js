const gear = require("gear");
const watch = require("node-watch");
const minify = require("minify-images");
const copydir = require("copy-dir");
const path = require("path");

function bundleJs() {
  new gear.Queue({ registry: "gear-lib" })
    .read(["./src/assets/js/main.js"])
    .concat()
    .jsminify()
    .write({ name: "./public/assets/js/bundle.js" })
    .run();
}

function bundleCss() {
  new gear.Queue({ registry: "gear-lib" })
    .read(["./src/assets/css/main.css"])
    .concat()
    .cssminify()
    .write({ name: "./public/assets/css/bundle.css" })
    .run();
}

function bundleImg() {
  minify
    .compress({
      src: "./src/assets/img",
      dest: "./public/assets/img",
    })
    .catch((error) => {
      console.log(error);
    });
}

function bundleFonts() {
  copydir(
    "./src/assets/fonts",
    "./public/assets/fonts",
    {
      utimes: true,
      mode: true,
      cover: true,
    },
    function (err) {
      if (err) console.log(err);
    }
  );
}

(function () {
  watch(
    [
      path.resolve(__dirname, "src", "assets", "js"),
      path.resolve(__dirname, "src", "assets", "css"),
      path.resolve(__dirname, "src", "assets", "img"),
      path.resolve(__dirname, "src", "assets", "fonts"),
    ],
    {
      recursive: true,
    }
  ).on("change", () => {
    bundleJs();
    bundleCss();
    bundleImg();
    bundleFonts();
  });
  bundleJs();
  bundleCss();
  bundleImg();
  bundleFonts();
})();
