import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON data from frontend
app.use(express.json());
app.use(cors()); // Enable CORS for all routes


// API endpoint to handle user registration
app.post('/api/register', (req, res) => {
  console.log('🎯 Registration data received:', req.body);
  
  // For now, just send back a simple response
  res.json({
    success: true,
    message: 'Data receivedddddd successfully!',
    receivedData: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
