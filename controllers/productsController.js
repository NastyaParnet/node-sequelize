const _ = require('lodash');
const Product = require("../models/productModel");

exports.checkProductId = async () => {
  // if fails - 404 status code with response body { status: "fail", message: "Invalid products id" }
};

exports.checkProduct = async (req, res, next) => {
  if(!req.body.title) {
    res.status(400).json({
      status: 'fail',
      message: 'Title is required',
    });
    return;
  }
  next();
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
};

exports.getProductById = async () => {
  // 200 status code with product in response body
};

exports.createProduct = async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    const product = await Product.create({
      id: allProducts.length + 1,
      ...req.body
    });
    const result =  _.pick(product, ["id", "title", "price", "description"]);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({message: error});
  }
};

exports.updateProduct = async () => {
  // 200 status code with updated product (without id) in response body 
};

exports.deleteProduct = async () => {
  // 204 status code
};
