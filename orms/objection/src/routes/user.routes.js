const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/user.controller");

router.get("/", userController.show);
router.post("/", userController.create);

module.exports = router;
