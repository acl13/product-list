const router = require("express").Router();
const faker = require("faker");
const { Product } = require("../models/product");

router.get("/generate-fake-data", (req, res) => {
  for (let i = 0; i < 90; i++) {
    let product = new Product();

    product.category = faker.commerce.department();
    product.name = faker.commerce.productName();
    product.price = faker.commerce.price();
    product.image = "https://via.placeholder.com/250?text=Product+Image";

    product.save();
  }
  res.end();
});

router.get("/products", (req, res) => {
  const perPage = 9;

  // return the first page by default
  const page = req.query.page || 1;

  Product.find({})
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec()
    .then((error, products) => {
      if (error) {
        return console.error(error);
      }
      res.send(products);
    });
});

// router.get("/products/:productId", (req, res) => {
//   Product.find({ _id: req.params.productId })
//     .exec()
//     .then((error, product) => {
//       if (error) {
//         return console.error(error);
//       }
//       res.send(product);
//     });
// });

router.get("/products/:productId/reviews", (req, res) => {
  Product.find({ _id: req.params.productId }, { reviews: 1 })
    .populate("reviews")
    .limit(4)
    .exec()
    .then((error, reviews) => {
      if (error) {
        return console.error(error);
      }
      res.send(reviews);
    });
});

module.exports = router;
