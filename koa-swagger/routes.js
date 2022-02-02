import Router from "koa-router";
const router = new Router({ prefix: "/api/v1"});

router.get("/products", (ctx) => {
    ctx.body = [
        { id: 1, name: "Vassoura" },
        { id: 2, name: "Escada"},
        { id: 3, name: "Mesa"},
        { id: 4, name: "Geladeira"}, 
        { id: 5, name: "Escova de dente"},
        { id: 6, name: "Fogão"},
        { id: 7, name: "Computador"},
        { id: 8, name: "Celular"},
        { id: 9, name: "Caixa de som"},
        { id: 10, name: "Violão"}
    ]
});

export default router;

