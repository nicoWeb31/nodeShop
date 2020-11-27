const Product = require('../models/product');


//get one
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

//get one
exports.getOneProduct= (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId,product =>{

    res.render('shop/product-detail', {
      product,
      pageTitle:product.title,
      path: '/products'
    })

  })

}

exports.postCart= (req, res, next) => {
  const prodId = req.body.productId;
  console.log("🚀 ~ file: shop.js ~ line 32 ~ prodId", prodId)
  res.redirect(req.originalUrl)
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

