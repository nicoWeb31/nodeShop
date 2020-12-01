const  { getDb } = require('../util/database');

class Product {
  constructor(title, price,description,imageUrl) {

    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  async save() {

    try {
      const db =  getDb();

      
      const result = await db.collection('products').insertOne(this);
      console.log("🚀 ~ file: product.js ~ line 17 ~ Product ~ save ~ result", result)
      return result;
      

      
    } catch (error) {
      console.log(error)
    }

  }

}


module.exports = Product;
