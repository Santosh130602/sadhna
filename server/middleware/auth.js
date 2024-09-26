
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/UserModels")

const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn: "2d",
})
}


// const protect = asyncHandler(async(req,res,next) =>{
//     let token;
//     // check token exist on header 
//     if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")
//     ){
//         // set token from bearer token in header
//         try{
//             token = req.headers.authorization.split(" ")[1];
//             const decoder = jwt.verify(token, process.env.JWT_SECRET);
//             // get userID from decoded token

//             req.user = await User.findById(decoder.id).select("-password");
//             next();
//         }catch(error){
//             console.error(error);
//             res.status(401);
//             throw new Error("Not authorized, token failed")
//         }
//     }
//     if(!token){
//         res.status(401);
//         throw new Error("Token not found")
//     }
// })


const protect = asyncHandler(async (req, res, next) => {
    let token;
  
    // Check if token exists in the header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      try {
        // Set token from Bearer token in header
        token = req.headers.authorization.split(" ")[1];
        
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Get user ID from decoded token and attach user to request object
        req.user = await User.findById(decoded.id).select("-password");
        
        next();
      } catch (error) {
        console.error(error);
        res.status(401);  // Set the status code to Unauthorized
        throw new Error("Not authorized, token failed");
      }
    } else {
      // If no token is found
      res.status(401);
      throw new Error("Token not found");
    }
  });
  
// admin middleware
const admin = (req,res,next) =>{
  if(req.user && req.user.isAdmin){
    next();
  }else{
    res.status(401);
    throw new Error("Not authorized as an admin")
  }
}


module.exports = {generateToken, protect,admin};