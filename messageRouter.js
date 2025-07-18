import express from 'express'
import { sendMessage, getAllMessages } from '../controller/messageController.js';
import { isAdminAuthenticated } from '../middleware/auth.js'

const router = express.Router();
router.post("/sendmessage", sendMessage);
router.get("/getmessages", isAdminAuthenticated, getAllMessages)

export default router;