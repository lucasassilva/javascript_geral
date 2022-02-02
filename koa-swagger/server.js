import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import swagger from "swagger2";
import routes from "./routes"; 
import { koaSwagger } from "koa2-swagger-ui";

const app = new Koa();
const router = new Router();
const spec = swagger.loadDocumentSync("swagger.json");

app.use(bodyParser());
app.use(router.routes());
app.use(routes.routes());

router.get("/api-docs", koaSwagger({ routePrefix: false, swaggerOptions: { spec }}));

router.get("/terms", (ctx) => {
  ctx.body = {
    message: "Termos de Serviço",
  };
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
