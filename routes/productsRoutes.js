import express from 'express';
import { deleteProduct, getProductById, getProducts, registerNewProduct, updateProduct } from "../controller/productController.js";

const router = express.Router();
router.route('/')
  .get(getProducts)
  .post(registerNewProduct);
router.route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
