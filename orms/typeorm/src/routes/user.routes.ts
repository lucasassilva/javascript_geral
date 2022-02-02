import * as express from "express";
import userController from "../app/controllers/user.controller";
const router = express.Router();

router.get("/", userController.show);

export default router;
