import express from 'express';
import {getAllTaxPayments, getTaxPaymentById, addNewTaxPayment,updateTaxPayment,deleteTaxPayment,} from '../controllers/taxPaymentController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.route('/')
  .get(getAllTaxPayments)
  .post(addNewTaxPayment);
router.route('/:id')
  .get(getTaxPaymentById)
  .put(updateTaxPayment)
  .delete(protect, admin, deleteTaxPayment);

export default router;
