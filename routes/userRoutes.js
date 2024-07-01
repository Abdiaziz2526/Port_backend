import express from 'express';
import { updateUser, createUser, getUserById, getUsers, login, deleteUser } from '../controller/userController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getUsers).post(protect, admin, createUser)
router.route('/:id/:token').get(protect, getUserById)
router.route('/:id').put(protect, updateUser).delete(protect, deleteUser)
router.route('/login').post(login)

export default router;
