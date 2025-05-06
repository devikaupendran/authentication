// backend/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel.js';

export const protect = async (req, res, next) => {
    try {
        const token = req.cookies.authToken;
        if (!token) {
            return res.status(401).json({ success: false, message: 'Not authorized, no token' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(401).json({ success: false, message: 'Not authorized, user not found' });
        }

        req.user = user; // attach user to request for further use
        next(); // move to controller
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Token is invalid' });
    }
};
