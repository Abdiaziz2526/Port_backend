import express from 'express';
import { updateUser, createUser, getUserById, getUsers } from '../controller/userController.js';

const router = express.Router();

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserById).put(updateUser);
router.route('/Login').post(login)

export default router;
