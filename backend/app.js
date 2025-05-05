import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/mongodbConnect.js';
import userRoutes from './routes/user.routes.js'

const app = express();

dotenv.config();
connectDB();

app.use('/api/user', userRoutes)

app.get('/', (req, res) => {
    res.send('hello')
})

export default app;

/*
    This code connects to a mongodb database using mongoose.
    It exports a function 'connectDB' that connect to the database using the URI stored in the env variable
    if the connection is succcessful, it logs the host of the connected database
    if there is an error, it logs the error message and exits the process with a failure code 
*/