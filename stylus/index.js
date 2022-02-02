import fs from "fs";
import stylus from "stylus";
import watch from "node-watch";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function bundleStylus() {
  stylus.render(
    fs.readFileSync(
      path.resolve(__dirname, "src", "assets", "stylus", "main.styl"),
      "utf-8"
    ),
    {
      filename: path.resolve(__dirname, "src", "assets", "stylus"),
      compress: true,
    },
    (err, output) => {
      if (err) {
        console.log(err);
      } else {
        fs.writeFile(
          path.resolve(__dirname, "public", "assets", "css", "bundle.css"),
          output,
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
  watch(path.resolve(__dirname, "src", "assets", "stylus"), {
    recursive: true,
  }).on("change", () => {
    bundleStylus();
  });
  bundleStylus();
})();
