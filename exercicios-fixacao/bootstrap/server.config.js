module.exports = {
    "port": 3000,
    "files": [
      "./**/**/*.{html,htm,css,js}",
    ],
    "server": { 
        "baseDir": "./",
        "middleware": {
            "1": require("connect-history-api-fallback")({
              index: "./src/index.html",
              verbose: true,
            }),
          },
    }
}