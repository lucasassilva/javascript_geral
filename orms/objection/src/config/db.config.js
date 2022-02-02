const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "Rlxrvt1241x@",
    database: "db_objection",
    charset: "utf8",
  },
});

module.exports = knex;
