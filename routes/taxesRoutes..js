import express from 'express';
import { createTax, updateTax, getTaxById, deleteTax, getAllTaxes } from '../controller/TaxesController.js';

const router = express.Router();

router.route('/').get(getAllTaxes).post(createTax);
router.route('/:id').get(getTaxById).put(updateTax).delete(deleteTax);

export default router;
