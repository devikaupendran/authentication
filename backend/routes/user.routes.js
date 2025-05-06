import express from 'express';
import { login, signup, getMe, logout } from '../controllers/user.controllers.js';
import { protect } from '../middlewares/verifyUser.middleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/logout', logout);

export default router;