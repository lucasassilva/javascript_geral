const knex = require("../../config/db.config");
const bookshelf = require("bookshelf")(knex);

const User = bookshelf.model("User", {
  tableName: "users",
});

module.exports = User;
