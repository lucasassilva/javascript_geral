let m = require("mithril");
let AppComponent = require("./views/AppComponent");

m.route(document.body, "/", {
  "/": AppComponent,
});
