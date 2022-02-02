exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        { email: "teste8512@gmail.com", password: "123" },
        { email: "teste8271@hotmail.com", password: "123" },
        { email: "teste7219@outlook.com", password: "123" },
      ]);
    });
};
