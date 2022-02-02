import { Application } from "https://deno.land/x/oak/mod.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.1/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { viewEngine, engineFactory, adapterFactory } from 'https://deno.land/x/view_engine/mod.ts';
import router from "./routes.ts";
const HOSTNAME = config().HOSTNAME ?? "localhost";
const PORT = config().PORT ?? 3000;

const app = new Application();

// view engine
const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();

app.use(viewEngine(oakAdapter, ejsEngine, {
    viewRoot: "./src/views",
    viewExt: ".ejs",
}));

// static files
app.use(staticFiles("./public/assets"));

// routes
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Servidor rodando em http://${HOSTNAME}:${PORT}`);
await app.listen(`${HOSTNAME}:${PORT}`);



