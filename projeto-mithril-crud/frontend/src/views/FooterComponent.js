let m = require("mithril");

let FooterComponent = {
  controller: function() {},
  view: function () {
      return m("footer", {class: "d-flex justify-content-end bg-light p-4 fixed-bottom"}, [
          m("p", {class: "lead"}, "Desenvolvido com ", [
            m("i", {class: "fas fa-heart text-danger"})
          ], " por Lucas Alves")
      ])
  },
};

module.exports = FooterComponent;
