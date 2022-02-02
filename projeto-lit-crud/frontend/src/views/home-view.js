import { html } from "lit-element";
import { BaseView } from "./base-view.js";

class HomeView extends BaseView {
  render() {
    return html` <h1>home works!</h1> `;
  }
}

customElements.define("home-view", HomeView);
