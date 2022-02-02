import express from "express";
import swaggerUi from "swagger-ui-express";
import swagger from "swagger2";
import router from "./routes";

const app = express();
const spec = swagger.loadDocumentSync("swagger.json");

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));

app.get("/terms", (req, res) => {
    return res.json({
        message: "Termos de Serviço"
    });
});

app.use("/api/v1", router);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});


