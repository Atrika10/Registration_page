import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/index.js';
import userRouter from './src/routes/user.route.js';
import User from './src/models/user.model.js';

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

// API endpoint to handle user login
 app.post('/user/login', async (req, res)=>{
    // Logic for user login 
    console.log("Response is going from backend");
    const {email, password} = req.body;
    console.log(email);
    // check if user exists in database
    const user = await User.findOne({email});
    console.log(user);
     if(!user){
        return res.status(404).json({
           success : false,
           message : "user not found"
        })
     }
    res.status(200).json({
       success : true,
       error : null,
       message : "User Logged In successfully"
 
    });
 })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
