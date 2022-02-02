const Path = require("path");
const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const Blankie = require("blankie");
const Scooter = require("@hapi/scooter");
const Ejs = require("ejs");
const HapiServerSession = require("hapi-server-session");
const HapiBodyParser = require("hapi-bodyparser");

async function startServer() {

    const server = Hapi.server({
        port: 3000
    });

    // body parser
    await server.register(HapiBodyParser);
    // static files
    await server.register(Inert);
    // views
    await server.register(Vision);
    // helmet
    await server.register([Scooter, {
        plugin: Blankie,
    }]);

    await server.register({
        plugin: HapiServerSession,
        options: {
            key: "hapi.sess",
            cookie: {
                isSecure: false, // nunca definido como false na produção 
                ttl: 1000 * 60 * 60 * 24 * 7,
            },
        },
    });

    // view engine
    server.views({
        engines: {
            ejs: Ejs
        },
        path: Path.join(__dirname, "src", "views")
    });

    // routes
    server.route({
        path: "/",
        method: "GET",
        config: {
            handler: function (request, response) {
                return response.view("index");
            }
        }
    });

    // static file
    server.route({
        method: "GET", 
        path: "/{param*}",
        handler: {
            directory: {
                path: Path.join(__dirname, "public", "assets"),
                listing: true
            }
        }
    });

    server.route({
        method: "POST",
        path: "/",
        handler: function (request, h) {
            const payload = request.payload;
            return `Bem vindo a ${payload.nome, payload.sobrenome}!`;
        }
    });

    await server.start();
    console.log("Servidor rodando em http://localhost:3000");
}

startServer();