const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const variables = require("postcss-simple-vars");
const nested = require("postcss-nested");
const color = require("postcss-color-function");
const mixins = require("postcss-mixins");
const minify = require("postcss-minify");
const watch = require("node-watch");

class PostCss {
  run() {
    postcss([mixins, variables, nested, color, minify])
      .process(fs.readFileSync("./src/assets/css/main.css"), {
        from: undefined,
      })
      .then((output) => {
        fs.writeFileSync("./public/assets/css/bundle.css", output.css);
      });
  }

  watcher() {
    watch(path.resolve(__dirname, "assets", "css"), { recursive: true }).on(
      "change",
      () => {
        this.run();
      }
    );
  }
}

const postCss = new PostCss();

postCss.watcher();
postCss.run();
