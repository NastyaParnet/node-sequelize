const express = require('express');
const {checkProductId, checkProduct, getAllProducts, createProduct, getProductById} = require('../controllers/productsController');

const router = express.Router();

router.param('id', checkProductId);

router.route('/').get(getAllProducts).post(checkProduct).post(createProduct);
router.route('/:id').get(getProductById);

module.exports = router;
