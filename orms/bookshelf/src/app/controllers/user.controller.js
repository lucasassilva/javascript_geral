const User = require("../models/user.model");
const Crypto = require("node-crypt");
const crypto = new Crypto({
  key: "b95d8cb128734ff8821ea634dc34334535afe438524a782152d11a5248e71b01",
  hmacKey: "dcf8cd2a90b1856c74a9f914abbb5f467c38252b611b138d8eedbe2abb4434fc",
});

exports.show = function (req, res) {
  res.render("index");
};

exports.create = async function (req, res) {
  await User.forge({
    email: req.body.email,
    senha: crypto.encrypt(req.body.senha),
  }).save();
  res.redirect("/");
};
