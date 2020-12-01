const fs = require("fs");
const path = require("path");
const db = require('../util/database');
const Cart = require("./cart");


// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     "data",
//     "products.json"
// );

// const getProductsFromFile = (cb) => {
//     fs.readFile(p, (err, fileContent) => {
//         if (err) {
//             cb([]);
//         } else {
//             cb(JSON.parse(fileContent));
//         }
//     });
// };

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        // getProductsFromFile(products => {
        //   if (this.id) {
        //     const existingProductIndex = products.findIndex(
        //       prod => prod.id === this.id
        //     );
        //     const updatedProducts = [...products];
        //     updatedProducts[existingProductIndex] = this;
        //     fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        //       console.log(err);
        //     });
        //   } else {
        //     this.id = Math.random().toString();
        //     products.push(this);
        //     fs.writeFile(p, JSON.stringify(products), err => {
        //       console.log(err);
        //     });
        //   }
        // });

        db.execute('INSERT INTO prioducts (title, price,description,imgUrl) VALUES(?,?,?,?)',[this.title,this.price,this.description,this.imageUrl]);
    }

    static deleteById(id) {
        // getProductsFromFile(products => {
        //   const product = products.find(prod => prod.id === id);
        //   const updatedProducts = products.filter(prod => prod.id !== id);
        //   fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        //     if (!err) {
        //       Cart.deleteProduct(id, product.price);
        //     }
        //   });
        // });
        //WITH SQL BD
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    static fetchAll () {
        //   getProductsFromFile(cb);
        // }
        // static findById(id, cb) {
        //   getProductsFromFile(products => {
        //     const product = products.find(p => p.id === id);
        //     cb(product);
        //   });
        // }

        //WITH SQL BD
        try {
            const products = db.execute('SELECT * FROM prioducts')
            return products
        } catch (error) {
            console.log(error)
        }
    }

    static findById(id){
        try {
            
            return db.execute('SELECT * FROM prioducts WHERE prioducts.id = ?', [id])

        } catch (error) {
            
        }
    }
};
