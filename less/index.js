import fs from "fs";
import less from "less";
import watch from "node-watch";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function bundleLess() {
  less.render(
    fs
      .readFileSync(
        path.resolve(__dirname, "src", "assets", "less", "main.less")
      )
      .toString(),
    {
      filename: path.resolve(__dirname, "src", "assets", "less", "main.less"),
      compress: true,
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
  watch(path.resolve(__dirname, "src", "assets", "less"), {
    recursive: true,
  }).on("change", () => {
    bundleLess();
  });
  bundleLess();
})();
