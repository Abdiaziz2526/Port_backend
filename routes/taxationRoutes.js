import express from 'express';
import { createTaxtion, deleteTaxtionById, getAllTaxtion, getMyTaxtion, getTaxtionById, updateTaxtionById, } from '../controller/taxationController.js';


const router = express.Router();
router.route('/')
  .get(getAllTaxtion)
  .post(createTaxtion);
router.route('/my/taxation/:id').get(getMyTaxtion)
router.route('/:id')
  .get(getTaxtionById)
  .put(updateTaxtionById)
  .delete(deleteTaxtionById);

export default router;
