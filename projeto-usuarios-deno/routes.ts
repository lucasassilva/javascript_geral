import { Router } from "https://deno.land/x/oak/mod.ts";
import { paginaInicial } from "./src/controllers/homeController.ts";

const router = new Router();

router.get("/", paginaInicial);

export default router;