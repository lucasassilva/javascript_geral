const Router = require('restify-router').Router;
const router = new Router();
const homeController = require("./src/controllers/homeController");

router.get("/",  homeController.home);
router.get("/:isbn", homeController.show);


module.exports = router;

