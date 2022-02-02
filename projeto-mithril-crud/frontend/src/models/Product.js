var m = require("mithril");

var Product = {
  list: [],
  fetch: function () {
    m.request({
      method: "GET",
      url: "http://localhost:3001/products",
      withCredentials: true,
    })
      .then(function (items) {
        Product.list = items;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};

module.exports = Product;
