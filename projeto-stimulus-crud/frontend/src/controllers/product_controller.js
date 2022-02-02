import {Controller} from "@hotwired/stimulus";
import {ProductService} from "../services/ProductService";

export default class extends Controller {

    http = new ProductService();

    show(event) {
        this.http.get().then((products) => {
            return products.json();
        }).then((data) => {
            return data.filter((product) => product.id == event.params.id);
        }).then((product) => {
            const name = document.getElementById("name");
            const price = document.getElementById("price");
            product.forEach((prod) => {
                const form = document.getElementById("form");
                const input = document.createElement("input")
                input.type = "hidden";
                input.id = "id";
                input.value = prod["id"];
                form.appendChild(input);
                name.value = prod["name"];
                price.value = prod["price"];
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    create() {
        const name = this.nameTarget.value;
        const price = this.priceTarget.value;
        this.http.post({
            name: name,
            price: price
        }).then((response) => {
            window.location.href = "/";
        }).catch((err) => {
            console.log(err);
        })
    }

    update() {
        const id = document.getElementById("id");
        const name = document.getElementById("name");
        const price = document.getElementById("price");
        this.http.put(id.value, {
            name: name.value,
            price: price.value,
        }).then(() => {
            window.location.href = "/";
        }).catch((err) => {
            console.log(err);
        });
    }

    delete(event) {
        const id = event.target.dataset.value
        this.http.delete(id).then(() => {
            document.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    }

}
