const fs = require("fs").promises;

module.exports = function(caminho, dados, encoding) {
    fs.writeFile(caminho, dados , {flag: "w", encoding: encoding}); // flag irá apagar o que está dentro e reescrever
};



