import express from 'express';
import { deleteProduct, getMyProducts, getProductById, getProducts, registerNewProduct, updateProduct } from "../controller/productController.js";
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.route('/')
  .get(getProducts)
  .post(registerNewProduct);
  router.route('/my/products/:id').get(getMyProducts)
router.route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(protect, admin,deleteProduct);

export default router;
