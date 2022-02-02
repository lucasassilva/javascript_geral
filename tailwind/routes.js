const express = require("express");0

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

module.exports = router;

