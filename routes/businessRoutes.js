import express from 'express';
// import { getAllBusiness,getBusinessById,registerNewBusiness,login,updateBusinessProfile,deleteBusiness} from '../controllers/businessController.js';
import { getAllBusiness, getBusinessById, registerNewBusiness, login, updateBusinessProfile, deleteBusiness } from '../controller/businessController.js';
const router = express.Router();

router.route('/')
  .get(getAllBusiness)
  .post(registerNewBusiness);

router.route('/:id')
  .get(getBusinessById)
  .put(updateBusinessProfile)
  .delete(deleteBusiness);

router.route('/login')
  .post(login);

export default router;
