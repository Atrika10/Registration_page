import User from "../models/user.model.js";
export const registerUser = async (req, res) => {
  console.log('Registration data received:', req.body);

  // extract user data from request body 
  const { firstName, lastName, email, password, phone } = req.body;

  if(!firstName || !lastName || !email || !password || !phone) {
    return res.status(400).json({ 
        success : false,
        error: 'All fields are required'
     });
  }

  // create user 
  const user =  await User.create({
    firstName,lastName, email, password, phone
  })
  

  // For now, just send back a simple response
  res.status(200).json({
    success : true,
    error : null,
    message : "User Registered successfully",
    user,
  })
}

