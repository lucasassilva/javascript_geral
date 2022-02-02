const rand = require("./random");

function send(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== "string") {
                reject(
                    new Error("A mensagem precisa ser uma string.")
                );
            } else {
                resolve(msg);
            }
        }, rand(1, 3))
    });
}

module.exports = send