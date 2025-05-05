import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongoDB connected : ${mongoose.connection.host}`);
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;

/*
    This code connects to a mongoDB database using mongoose.
    it exports a function 'connectDB' that connect to the database using the URI stored in the env variable
    if the connection is successful it logs the host of the connected database.
    if there is an error, it logs  the error message and exits the process with a failure code
*/