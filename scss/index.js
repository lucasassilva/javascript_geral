import fs from "fs";
import sass from "sass";
import watch from "node-watch";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function bundleSass() {
  sass.render(
    {
      file: path.resolve(__dirname, "src", "assets", "scss", "main.scss"),
      outputStyle: "compressed",
    },
    (err, output) => {
      if (err) {
        console.log(err);
      } else {
        fs.writeFile(
          path.resolve(__dirname, "public", "assets", "css", "bundle.css"),
          output.css,
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    }
  );
}

(function () {
  watch(path.resolve(__dirname, "src", "assets", "scss"), {
    recursive: true,
  }).on("change", () => {
    bundleSass();
  });
  bundleSass();
})();
