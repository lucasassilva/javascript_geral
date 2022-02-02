const schema = require("../../config/db.config");

const User = schema.define("users", {
  email: { type: schema.String, null: false, unique: true },
  senha: { type: schema.String, null: false },
  createdAt: { type: schema.Date, default: Date.now },
  updatedAt: { type: schema.Date },
});

module.exports = User;
