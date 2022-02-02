const fastify = require("fastify")();
const path = require("path");
const fastifyCookie = require("fastify-cookie");
const fastifyFormBody = require("fastify-formbody");
const fastifyCSRF = require("fastify-csrf");
const fastifyHelmet = require("fastify-helmet");
const pointOfView = require("point-of-view");
const fastifySession = require("@mgcrea/fastify-session");
const fastifyStatic = require("fastify-static");

// static files
fastify.register(fastifyStatic, {
    root: path.join(__dirname, "public", "assets"),
});

// view engine
fastify.register(pointOfView, {
    engine: {
        ejs: require("ejs")
    },
    root: path.join(__dirname, "src", "views"),
    viewExt: "ejs",
});

// cookie
fastify.register(fastifyCookie, {
    secret: "my-secret",
});

// session
fastify.register(fastifySession, {
    secret: "dajiidjmansdiqweiqjasdapeqwdasdadasdasdadadads",
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        signed: true,
        httpOnly: true,
    }
});

// body parser
fastify.register(fastifyFormBody);

// csrf
fastify.register(fastifyCSRF, {
    cookie: {
        signed: false,
    },
});

// helmet
fastify.register(
    fastifyHelmet, {
        contentSecurityPolicy: false
    }
);

// middlewares
fastify.decorateReply("locals", { csrfToken: null })
fastify.addHook("preHandler", async (req, reply) => {
  return reply.locals.csrfToken = await reply.generateCsrf();
});

// rotas
fastify.get("/", (req, reply) => {
    reply.view("index");
});

fastify.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});