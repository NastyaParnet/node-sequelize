const express = require('express');
const {
  checkProductId, 
  checkProduct, 
  getAllProducts, 
  createProduct, 
  getProductById, 
  updateProduct, 
  deleteProduct
} = require('../controllers/productsController');

const router = express.Router();

router.param('id', checkProductId);

router.route('/').get(getAllProducts).post(checkProduct).post(createProduct);
router.route('/:id').get(getProductById).put(checkProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
