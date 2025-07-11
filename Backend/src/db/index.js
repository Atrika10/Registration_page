import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

const mongo_uri = 'mongodb+srv://atrika:Atrika%232%40%401@cluster0.og3xbe9.mongodb.net';

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${mongo_uri}/${DB_NAME}`);
        console.log('Connected to MongoDB:', connectionInstance.connection.host);
        
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
}

export default connectDB;