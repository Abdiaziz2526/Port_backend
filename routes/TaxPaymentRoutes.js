import express from 'express';
import {getAllTaxPayments, getTaxPaymentById, addNewTaxPayment,updateTaxPayment,deleteTaxPayment,} from '../controllers/taxPaymentController.js';

const router = express.Router();
router.route('/')
  .get(getAllTaxPayments)
  .post(addNewTaxPayment);
router.route('/:id')
  .get(getTaxPaymentById)
  .put(updateTaxPayment)
  .delete(deleteTaxPayment);

export default router;
