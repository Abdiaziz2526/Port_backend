import express from 'express';
import { getAllRate, getRateById,registerNewRate,updateRate,deleteRate } from '../controller/taxesRateController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.route('/')
  .get(getAllRate)
  .post(registerNewRate);
router.route('/:id')
  .get(getRateById)
  .put(updateRate)
  .delete(protect, admin, deleteRate);

export default router;
