const caminte = require("caminte");
const Schema = caminte.Schema;
const config = {
  driver: "mysql",
  host: "localhost",
  port: "3306",
  username: "root",
  password: "Rlxrvt1241x@",
  database: "db_caminte",
};

const schema = new Schema(config.driver, config);
module.exports = schema;
