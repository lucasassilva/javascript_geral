let m = require("mithril");
let NavBarComponent = require("./NavbarComponent");
let FooterComponent = require("./FooterComponent");
let Product = require("../models/Product");

let AppComponent = {
  oninit: function() {
    Product.fetch();
  },
  view: function () {
    return m("div", [
      m(NavBarComponent),
      m("main.layout", {class: "content container mt-5"}, [
        m("div", Product.list.map(function (prod) {
          return m("div", {class: "card mb-4"}, [
            m("div", {class: "card-body"}, [
              m("div", {class: "card-title"}, [
                m("h3", prod.name)
              ]),
              m("hr"),
              m("p", {class: "lead"}, "Preço do produto: R$" + prod.price),
            ])
          ])
        }))
      ]),      
      m(FooterComponent),
    ])
  },
};

module.exports = AppComponent;