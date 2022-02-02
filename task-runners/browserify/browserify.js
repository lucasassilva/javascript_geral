const browserifyConfig = require("browserify");
const watchify = require("watchify");
const fs = require("fs");
const fse = require("fs-extra");
const sass = require("node-sass");
const chokidar = require("chokidar");
const path = require("path");
const uglifyify = require("uglifyify");
const babelify = require("babelify");
const browserifyCss = require("browserify-css");
const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
const imageminGiflossy = require("imagemin-giflossy");
const imageminSvgo = require("imagemin-svgo");

const browserify = browserifyConfig({
  debug: true,
  entries: [path.resolve(__dirname, "src", "main.js")],
  cache: {},
  packageCache: {},
  plugin: [watchify],
});

browserify.on("update", bundle);

browserify.transform(uglifyify, {
  global: true,
});

browserify.transform(babelify, {
  presets: ["@babel/preset-env"],
});

browserify.transform(browserifyCss, {
  minify: true,
  output: path.resolve(__dirname, "public", "assets", "css", "bundle.css"),
});

function bundle() {
  const pathFile = path.resolve(
    __dirname,
    "public",
    "assets",
    "js",
    "bundle.js"
  );
  browserify
    .bundle()
    .on("error", console.error)
    .pipe(fs.createWriteStream(pathFile));
}

function bundleSass() {
  chokidar
    .watch(path.resolve(__dirname, "src", "assets", "scss", "*.scss"))
    .on("all", (_) => {
      setTimeout(() => {
        sass.render(
          {
            file: path.resolve(__dirname, "src", "assets", "scss", "main.scss"),
            outFile: path.resolve(
              __dirname,
              "public",
              "assets",
              "css",
              "main.css"
            ),
            outputStyle: "compressed",
          },
          function(err, result) {
            if (err) {
              console.log(err);
            } else {
              fs.writeFile(
                path.resolve(
                  __dirname,
                  "public",
                  "assets",
                  "css",
                  "_bundle.css"
                ),
                result.css,
                (err) => {
                  if (err) {
                    console.log(err);
                  }
                }
              );
            }
          }
        );
      }, 100);
    });
}

function bundleImages() {
  chokidar
    .watch(
      path.resolve(
        __dirname,
        "src",
        "assets",
        "img",
        "*.{jpg, jpeg, png, gif, svg}"
      )
    )
    .on("all", (_) => {
      setTimeout(() => {
        imagemin(
          [
            path.resolve(
              __dirname,
              "src",
              "assets",
              "img",
              "*.{jpg, jpeg, png, gif, svg}"
            ),
          ],
          {
            destination: path.resolve(__dirname, "public", "assets", "img"),
            plugins: [
              imageminPngquant(),
              imageminJpegtran(),
              imageminGiflossy(),
              imageminSvgo(),
            ],
          }
        );
      }, 100);
    });
}

function bundleFonts() {
  chokidar
    .watch(
      path.resolve(
        __dirname,
        "src",
        "assets",
        "fonts",
        "*.{ttf,otf,eot,svg,woff}"
      )
    )
    .on("all", (_) => {
      setTimeout(() => {
        fse.copySync("./src/assets/fonts", "./public/assets/fonts", (err) => {
          if (err) {
            console.error(err);
          }
        });
      }, 100);
    });
}

(function() {
  bundle();
  bundleSass();
  bundleImages();
  bundleFonts();
})();
