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


export const loginUser = async (req, res)=>{
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
 }

 export const getUserDetailsByTime = async (req, res)=>{
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
}
