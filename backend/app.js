import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/mongodbConnect.js';
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));

dotenv.config();
connectDB();

app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send('hello');
})

export default app;
