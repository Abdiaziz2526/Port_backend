import express from 'express';
import {getAllRate, getRateById,registerNewRate,updateRate,deleteRate,} from '../controllers/taxRateController.js';

const router = express.Router();
router.route('/')
  .get(getAllRate)
  .post(registerNewRate);
router.route('/:id')
  .get(getRateById)
  .put(updateRate)
  .delete(deleteRate);

export default router;
