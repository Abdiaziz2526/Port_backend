import express from 'express';
import { admin, protect } from '../middleware/authMiddleware.js';
import { deleteMessage, getAllMessages, getMessagesById, registerNewMessages, updateMessage } from '../controller/messagesController.js';

const router = express.Router();
router.route('/')
  .get(getAllMessages)
  .post(registerNewMessages);
router.route('/:id')
  .get(getMessagesById)
  .put(updateMessage)
  .delete(protect, admin, deleteMessage);

export default router;