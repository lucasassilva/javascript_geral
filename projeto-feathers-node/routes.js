const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const router = express(feathers());
const produtoController = require("./src/controllers/produtoController");

router.get("/", produtoController.home);
router.get("/:id", produtoController.show);
router.post("/", produtoController.create);
router.put("/:id", produtoController.update);
router.delete("/:id", produtoController.delete);

module.exports = router;


