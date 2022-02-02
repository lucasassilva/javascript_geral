const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
        message: "Olá PostCSS"
    });
});

module.exports = router;