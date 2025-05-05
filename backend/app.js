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

/*
    This code connects to a mongodb database using mongoose.
    It exports a function 'connectDB' that connect to the database using the URI stored in the env variable
    if the connection is succcessful, it logs the host of the connected database
    if there is an error, it logs the error message and exits the process with a failure code 
*/