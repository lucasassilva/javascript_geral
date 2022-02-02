import * as express from "express";
import * as path from "path";
import { createConnection } from "typeorm";
import userRouter from "./routes/user.routes";

const app = express();
createConnection();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "app", "views"));

app.use(userRouter);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
