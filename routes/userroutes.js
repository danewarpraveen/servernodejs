import express from 'express'

import multer from 'multer'
import { adduser, getuser } from '../controller/userController.js';
import { authenticateToken } from '../utils/authMiddleware.js';

const userRoutes = express.Router();

userRoutes.post('/adduser',adduser);
userRoutes.get('/getuser', authenticateToken ,getuser);

export default userRoutes