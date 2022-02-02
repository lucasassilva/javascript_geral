let m = require("mithril");

let NavBarComponent = {
  controller: function(){},
  view: function () {
    return m(
      "nav",
      { class: "navbar navbar-expand-lg navbar-light bg-light" },
      [
        m("a[href='/']", { class: "navbar-brand", oncreate: m.route.Link }, "Mithril"),
        m(
          "button",
          {
            class: "navbar-toggler",
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#navbarSupportedContent",
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
          },
          m("span", { class: "navbar-toggler-icon" })
        ),
        m(
          "div",
          { class: "collapse navbar-collapse", id: "navbarSupportedContent" },
          [
            m("ul", { class: "navbar-nav mr-auto" }, [
              m(
                "li",
                { class: "nav-item" },
                m("a[href='/']", { class: "nav-link", oncreate: m.route.Link }, "Início")
              )
            ]),
          ]
        ),
      ]
    );
  },
};

module.exports = NavBarComponent;
