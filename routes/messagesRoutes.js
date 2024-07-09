import express from 'express';
import { admin, protect } from '../middleware/authMiddleware.js';
import { deleteMessage, getAllMessages, getMessagesById, getMyMessages, registerNewMessages, updateMessage } from '../controller/messagesController.js';

const router = express.Router();
router.route('/')
  .get(getAllMessages)
  .post(registerNewMessages);
  router.route('/my/messages/:id').get(getMyMessages)
router.route('/:id')
  .get(getMessagesById)
  .put(updateMessage)
  .delete(protect, admin, deleteMessage);

export default router;