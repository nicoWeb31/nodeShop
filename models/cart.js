const fs = require("fs");
const path = require("path");

const p = path.join(
    path.dirname(process.main.filename),
    "data",
    "products.json"
);

module.exports = class Cart {
    static addProduct(id) {
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent);
            }
        });

        //analyse Cart
        const existingProducts = cart.products.findIndex(product => product.id === id);

        let updateProducts;
        //Add new products/ incresase quantity

        if(existingProducts)
    }
};
