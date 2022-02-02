exports.up = (knex) => {
  return knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("email").notNullable();
    table.string("senha").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("users");
};
