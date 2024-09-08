const _ = require('lodash');
const Product = require("../models/productModel");

exports.checkProductId = async (req, res, next) => {
  const product = await Product.findByPk(req.params.id)
  if(product === null) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid products id',
    });
    return;
  }
  res.locals.product = product;
  next();
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

exports.getProductById = async (req, res) => {
  res.status(200).json(res.locals.product);
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

exports.updateProduct = async (req, res) => {
  await Product.update(req.body, {
    where: {
      id: res.locals.product.id
    }
  })
  const updatedProduct = await Product.findByPk(res.locals.product.id);
  const result =  _.pick(updatedProduct, ["title", "price", "description"]);
  res.status(200).json(result);
};

exports.deleteProduct = async (req, res) => {
  await Product.destroy({
    where: {
      id: res.locals.product.id
    }
  });
  res.status(204).json(null);
};
