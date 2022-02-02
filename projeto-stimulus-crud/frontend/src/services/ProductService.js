export class ProductService {

    baseUrl = "http://localhost:3001/products";

    get() {
        return fetch(this.baseUrl);
    }

    post(data) {
        return fetch(this.baseUrl, {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }

    put(id, data) {
        return fetch(this.baseUrl + "/" + id, {
            method: "put",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    delete(id) {
        return fetch(this.baseUrl + "/" + id, {
            method: "delete",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
    }

}
