import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/index.js';
import userRouter from './src/routes/user.route.js';
import User from './src/models/user.model.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors()); 


// Connect to MongoDB
connectDB()
 .then(()=>{
    console.log('MongoDB connected successfully!');
 }).catch((err)=>{
    console.error(' MongoDB connection failed:', err);
 })

// API endpoint to handle user registration
//app.post('/api/register', registerUser);
// API endpoint to handle user login

app.use("/user", userRouter);

app.post('/user/details', async (req, res)=>{
   const { startDate, endDate } = req.body;
   console.log("data is coming from frontend", { startDate, endDate });

   // Find all users created between startDate and endDate
   try {

      const users = await User.find({
         createdAt : {
            $gte : new Date(startDate),
            $lte : new Date(endDate)
         }
      });

      console.log(users);
      res.status(200).json({
         success : true,
         message: "Details received successfully",
         data: users
      })
      
   } catch (err) {
      console.log("Error fetching user details:", err);
      res.status(500).json({
         success: false,
         message: "Error fetching user details",
         error: err.message
      })
   }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
