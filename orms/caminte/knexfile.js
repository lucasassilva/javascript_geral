module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "Rlxrvt1241x@",
      database: "db_caminte",
      charset: "utf8",
    },
    migrations: {
      directory: __dirname + "/src/database/migrations",
    },
    seeds: {
      directory: __dirname + "/src/database/seeds",
    },
  },
};
