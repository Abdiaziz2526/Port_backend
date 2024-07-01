import express from 'express';
import { getAllBusiness, getBusinessById, registerNewBusiness, login, updateBusinessProfile, deleteBusiness } from '../controller/businessController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/')
  .get(protect, getAllBusiness)
  .post(registerNewBusiness);
router.route('/:id/:token').get(getBusinessById)
router.route('/:id')
  .put(protect, updateBusinessProfile)
  .delete(protect, deleteBusiness);

router.route('/login')
  .post(login);

export default router;
