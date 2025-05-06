import { UserModel } from "../models/user.models.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validateSignupData } from '../utils/userFormValidator.js'

/*
    1. Receives user data from frontend
    2. adding to validator for validation
    3. check if the user already exists
    4. if its a new user , hashes password before storing
    5. creates new user
    6. save it in database
    7. Generates JWT and sets as HTTP-only cookie
    8. returns user data (excluding password)
*/

export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        const { isValid, errors } = validateSignupData({ name, email, password, confirmPassword })

        if (!isValid) {
            return res.status(200).json({ success: false, message: errors[0] });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already in use" });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new UserModel({ name, email, password: hashedPassword });
        const user = await newUser.save();

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT is not defined in env variables");
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie('authToken', token, {
            httpOnly: true,
            maxAge: 3600000,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
        })
        const { password: _, ...userWithoutPassword } = newUser.toObject();
        return res.status(201).json({ user: userWithoutPassword, success: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
}

/*
    1. Receives email and password
    2. Finds user by email
    3. Compares hashed password with bcrypt
    4. Generates JWT and sets cookie if credentials match
    5. Returns user data
*/

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        // Check user exists and password matches
        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }
        );

        res.cookie('authToken', token, { httpOnly: true, maxAge: 3600000 });

        const { password: _, ...userWithoutPassword } = user.toObject();
        return res.status(200).json({ success: true, user: userWithoutPassword });
    }
    catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ success: false, message: "Something went wrong" });
    }
}

export const getMe = async (req, res) => {
    try {
        // `protect` middleware has already run and added `req.user` to the request
        return res.status(200).json({ success: true, user: req.user });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

export const logout = (req, res) => {
    res.clearCookie('authToken', { httpOnly: true });
    res.status(200).json({ success: true, message: 'Logged out successfully' });
};


