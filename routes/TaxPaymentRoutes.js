import express from 'express';
import { getAllTaxPayments, getTaxPaymentById, addNewTaxPayment, updateTaxPayment, deleteTaxPayment, getMyTaxPayments } from '../controller/taxPaymentController.js';
import { admin, protect } from '../middleware/authMiddleware.js';



const router = express.Router();
router.route('/')
  .get(getAllTaxPayments)
  .post(addNewTaxPayment);

router.route('/my/payments/:id').get(getMyTaxPayments)

router.route('/:id')
  .get(getTaxPaymentById)
  .put(protect, updateTaxPayment)
  .delete(protect, admin, deleteTaxPayment);

export default router;
