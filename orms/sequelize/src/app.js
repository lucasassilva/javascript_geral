import express from "express";
import router from "./routes"

class AppController {

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {  
        this.express.use(router);
    }
}

const app = new AppController().express;  
export default app;