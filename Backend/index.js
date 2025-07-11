import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/index.js';
import userRouter from './src/routes/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON data from frontend
app.use(express.json());
app.use(cors()); // Enable CORS for all routes


// Connect to MongoDB
connectDB()
 .then(()=>{
    console.log('MongoDB connected successfully!');
 }).catch((err)=>{
    console.error(' MongoDB connection failed:', err);
 })

// API endpoint to handle user registration
//app.post('/api/register', registerUser);

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
