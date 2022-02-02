import {Controller} from "@hotwired/stimulus"

export default class extends Controller {

    static targets = ["content"]
    static values = {url: String}

    connect() {
        this.initLoad();
    }

    load({params}) {
        fetch(params.url)
            .then(response => response.text())
            .then(html => this.contentTarget.innerHTML = html)
    }

    initLoad() {
        fetch(this.urlValue + "/pages/home.html")
            .then(response => response.text())
            .then(html => this.contentTarget.innerHTML = html)
    }

}
