const router = require("express").Router();
const faker = require("faker");
const { Product } = require("../models/product");
const { Review } = require("../models/product");

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

router.get("/products/:productId", (req, res) => {
  Product.find({ _id: req.params.productId })
    .exec()
    .then((error, product) => {
      if (error) {
        return console.error(error);
      }
      res.send(product);
    });
});

router.get("/products/:productId/reviews", (req, res) => {
  const perPage = 4;
  const page = req.query.page || 1;

  Product.find({ _id: req.params.productId }, { reviews: 1 })
    .populate("reviews")
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec()
    .then((error, reviews) => {
      if (error) {
        return console.error(error);
      }
      res.send(reviews);
    });
});

router.post("/products", (req, res) => {
  const product = new Product({
    category: req.body.category,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
  });

  product.save();
  res.end();
});

router.post("/products/:productId/reviews", (req, res) => {
  const product = Product.find({ _id: req.params.productId })
    .exec()
    .then((error, product) => {
      if (error) {
        return console.error(error);
      }
      return product;
    });
  const review = new Review({
    userName: req.body.userName,
    text: req.body.text,
    product: req.params.productID,
  });

  product.reviews.push(review);
  res.send({ message: "Review added" });
});

router.delete("/products/:productId", (req, res) => {
  Product.findByIdAndDelete({ _id: req.params.productId })
    .exec()
    .then((error, product) => {
      if (error) {
        return console.error(error);
      }
      res.send({ message: `The following product was deleted: ${product}` });
    });
});

router.delete("/reviews/:reviewId", (req, res) => {
  Review.findByIdAndDelete({ _id: req.params.reviewId })
    .exec()
    .then((error, review) => {
      if (error) {
        return console.error(error);
      }
      res.send({ message: `The following product was deleted: ${review}` });
    });
});

module.exports = router;
