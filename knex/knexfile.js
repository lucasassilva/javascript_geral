// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Rlxrvt1241x@",
      database: "db_knex",
      charset: "utf8",
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
};
