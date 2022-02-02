import {Controller} from "@hotwired/stimulus";
import {ProductService} from "../services/ProductService";

export default class extends Controller {

    http = new ProductService();
    static targets = ["productCard"]
    products = [];

    connect() {
        this.getAllProducts();
    }

    getAllProducts() {
        const productCardElement = this.productCardTarget;
        this.http.get().then((products) => {
            return products.json();
        }).then((data) => {
            data.forEach((products) => {
                this.products.push(products);
            });
            for (let x = 0; x < this.products.length; x++) {
                const id = `${this.products[x]["id"]}`;
                const card = document.createElement("div");
                const cardBody = document.createElement("div");
                const productName = document.createElement("p");
                const productPrice = document.createElement("p");
                const dividerOne = document.createElement("hr");
                const dividerTwo = document.createElement("hr");
                const btnDelete = document.createElement("button");
                const btnEdit = document.createElement("button");
                btnDelete.classList.add("btn", "btn-danger");
                btnDelete.innerHTML = "Deletar";
                btnDelete.style.display = "inline-block";
                btnDelete.style.marginLeft = "7px";
                btnDelete.setAttribute("data-action", "product#delete");
                btnDelete.setAttribute("data-value", `${this.products[x]["id"]}`)
                btnEdit.classList.add("btn", "btn-warning");
                btnEdit.innerHTML = "Editar";
                btnEdit.style.display = "inline-block";
                btnEdit.setAttribute("data-content-loader-url-param", "/pages/edit_product.html");
                btnEdit.setAttribute("data-action","content-loader#load product#show");
                btnEdit.setAttribute("data-product-id-param", `${this.products[x]["id"]}`);
                card.classList.add("card", "mb-4");
                cardBody.classList.add("card-body");
                productName.classList.add("lead", "font-weight-bold");
                productName.innerHTML = `${this.products[x]["name"]}`;
                productPrice.classList.add("lead");
                productPrice.innerHTML = `<strong>Preço do produto:</strong> 
                R$ ${this.products[x]["price"]}`;
                productCardElement.appendChild(card);
                card.appendChild(cardBody);
                cardBody.appendChild(productName);
                cardBody.appendChild(dividerOne);
                cardBody.appendChild(productPrice);
                dividerOne.before(productName);
                productPrice.before(dividerOne);
                cardBody.appendChild(dividerTwo);
                cardBody.appendChild(btnEdit);
                cardBody.appendChild(btnDelete);
            }
        }).catch((err) => {
            console.log(err);
        });
    }

}
