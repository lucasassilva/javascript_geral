"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_controller_1 = require("../app/controllers/user.controller");
var router = express.Router();
router.get("/", user_controller_1.default.show);
exports.default = router;
