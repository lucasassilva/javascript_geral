const fs = require("fs").promises;

module.exports = function(caminho, encoding) {
    return fs.readFile(caminho, { encoding: encoding });
}




