module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "Rlxrvt1241x@",
      database: "db_bookshelf",
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
