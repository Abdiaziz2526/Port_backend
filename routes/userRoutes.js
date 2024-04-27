import express from 'express';
import { updateUser, createUser, getUserById, getUsers } from '../controller/userController.js';

const router = express.Router();

router.get('/',getUsers)
//router.route('/:id').get(getUserById).put(updateUser);

export default router;
