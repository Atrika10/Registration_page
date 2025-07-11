import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/index.js';
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
app.post('/api/register', async (req, res) => {
  console.log('Registration data received:', req.body);

  // extract user data from request body 
  const { firstName, lastName, email, password, phone } = req.body;

  if(!firstName || !lastName || !email || !password || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // create user 
  const user =  await User.create({
    firstName,lastName, email, password, phone
  })
  

  
  // For now, just send back a simple response
  res.json({
    success: true,
    message: 'user created successfully!',
    user
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
