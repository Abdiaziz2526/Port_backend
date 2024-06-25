import express from 'express';
import { updateUser, createUser, getUserById, getUsers, login } from '../controller/userController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getUsers).post(protect, admin, createUser)
router.route('/:id').get(getUserById).put(updateUser);
router.route('/login').post(login)

export default router;
