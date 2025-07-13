import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";
import dotenv from 'dotenv'
dotenv.config();

const mongo_uri = process.env.MONGODB_URI;

const connectDB = async ()=>{
    console.log(mongo_uri);
console.log(DB_NAME);
    try {
        const connectionInstance = await mongoose.connect(`${mongo_uri}/${DB_NAME}`);
        console.log('Connected to MongoDB:', connectionInstance.connection.host);
        
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
}

export default connectDB;