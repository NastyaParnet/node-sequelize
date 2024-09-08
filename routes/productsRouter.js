const express = require('express');
const {checkProduct, getAllProducts, createProduct} = require('../controllers/productsController');

const router = express.Router();

router.route('/').get(getAllProducts).post(checkProduct).post(createProduct);

module.exports = router;
