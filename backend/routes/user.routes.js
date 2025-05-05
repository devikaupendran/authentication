import express from 'express';
import { signup } from '../controllers/user.controllers.js';

const router = express.Router();

router.get('/signup', signup);

export default router;