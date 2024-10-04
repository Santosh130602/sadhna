const asyncHandler = require("express-async-handler")
const User = require("../models/UserModels")
const bcrypt = require("bcrypt")
const { generateToken } = require("../middleware/auth")
const Transaction = require("../models/transition")
const Contact = require("../models/contact")
const crypto = require('crypto');
const nodemailer = require('nodemailer');



const register = asyncHandler(async (req, res) => {
    const { fullName, email, password, image } = req.body;

    try {

        if (!fullName || !email || !password) {
            res.status(400);
            throw new Error("Please enter all the fields.");
        }
        const userExist = await User.findOne({ email })
        if (userExist) {
            res.status(400)
            throw new Error("User already exist")
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            fullName,
            email,
            password: hashPassword,
            image,
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                image: user.image,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            })
        }
        else {
            res.status(400);
            throw new Error("Invalid user data");
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }

})


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                image: user.image,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            })
        } else {
            res.status(401);
            throw new Error("invalid email or password");
        }
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
})


const updateUserProfile = asyncHandler(async (req, res) => {
    const { fullName, email, password, image } = req.body;

    try {
        const user = await User.findById(req.user._id);
        if (user) {
            user.fullName = fullName || user.fullName;
            user.image = image || user.image

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                fullName: updatedUser.fullName,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
                image: updatedUser.image,
                token: generateToken(updatedUser._id),
            })
        }
        else {
            res.status(404);
            throw new Error("user not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})

const deleteUserProfile = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            if (user.isAdmin) {
                res.status(400);
                throw new Error("Admin user can't deleted")
            }
            await user.remove()
            res.json({
                message: "User deleted successfully"
            })
        } else {
            res.status(404);
            throw new Error("User not found")
        }


    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

const changePassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    try {
        const user = await User.findById(req.user._id)
        if (user && (await bcrypt.compare(oldPassword, user.password))) {
            const hashedNewPassword = await bcrypt.hash(newPassword, 10)
            user.password = hashedNewPassword
            await user.save();
            res.json({ message: "Password change.." });

        }
        else {
            res.status(401);
            throw new Error("Invalid old password");
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})




// router.post('/forgot-password', async (req, res) => {

// const forgotPassword = async (req,res) =>{

//     const { email } = req.body;
//     const user = await User.findOne({ email });
  
//     if (!user) {
//       return res.status(400).send('User with this email does not exist.');
//     }
  
//     const token = crypto.randomBytes(32).toString('hex');
//     user.resetToken = token;
//     user.tokenExpiration = Date.now() + 3600000; // Token valid for 1 hour
//     await user.save();
  
//     // Send email
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'your-email@gmail.com',
//         pass: 'your-email-password',
//       },
//     });
  
//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to: user.email,
//       subject: 'Password Reset',
//       text: `Click this link to reset your password: http://localhost:3000/reset-password/${token}`,
//     };
  
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         return res.status(500).send('Error sending email.');
//       }
//       res.send('Password reset link sent to your email.');
//     });
//   };



// const forgotPassword = async (req, res) => {
//     try {
//       const { email } = req.body;
  
//       // Check if user exists
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).send('User with this email does not exist.');
//       }
  
//       // Create reset token and expiration time
//       const token = crypto.randomBytes(32).toString('hex');
//       User.resetToken = crypto.createHash('sha256').update(token).digest('hex'); // Store hashed token in DB for security
//       User.tokenExpiration = Date.now() + 3600000; // Token valid for 1 hour
//       await User.save();
  
//       // Create transporter for sending email
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: process.env.EMAIL,  // Use environment variables
//           pass: process.env.EMAIL_PASSWORD,  // Use environment variables
//         },
//       });
  
//       // Email message configuration
//       const mailOptions = {
//         from: process.env.EMAIL,
//         to: user.email,
//         subject: 'Password Reset',
//         text: `Click this link to reset your password: http://localhost:3000/reset-password/${token}`,
//       };
  

//       // Send the email
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error('Error sending email:', error);
//           return res.status(500).send('Error sending email.');
//         }
//         res.status(200).send('Password reset link sent to your email.');
//       });
  
//     } catch (error) {
//       console.error('Error in forgot password:', error);
//       res.status(500).send('Server error, please try again later.');
//     }
//   };



const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('User with this email does not exist.');
    }

    // Create reset token and expiration time
    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = crypto.createHash('sha256').update(token).digest('hex'); // Store hashed token in DB for security
    user.tokenExpiration = Date.now() + 3600000; // Token valid for 1 hour

    // Save the updated user document
    await user.save();

    // Create transporter for sending email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_URL,  
        pass: process.env.EMAIL_PASSWORD,  
      },
    });

    // Email message configuration
    const mailOptions = {
      from: process.env.MAIL_URL,
      to: user.email,
      subject: 'Password Reset',
      text: `Click this link to reset your password: http://localhost:3000/reset-password/${token}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email.');
      }
      res.status(200).send('Password reset link sent to your email.');
    });

  } catch (error) {
    console.error('Error in forgot password:', error);
    res.status(500).send('Server error, please try again later.');
  }
};






//   const passwordReset = async(req,res,next) =>{

//     const 

//   }


// Controller function for password reset
// const passwordReset = async (req, res) => {
//   const { token } = req.params;  // Get the token from the URL
//   const { password, confirmPassword } = req.body; // Get password and confirmPassword from frontend

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const userId = decoded.id;

//     // Find user by ID
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: "Passwords do not match." });
//     }

//     // Hash the new password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Update the user's password in the database
//     user.password = hashedPassword;
//     await user.save();

//     return res.status(200).json({ message: "Password has been successfully reset." });
//   } catch (error) {
//     return res.status(500).json({ message: "Error resetting password.", error });
//   }
// };




const passwordReset = async (req, res) => {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;
  
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.id;
  
      // Find user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      // Check if passwords match
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match." });
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Update the user's password in the database
      user.password = hashedPassword;
      await user.save();
  
      return res.status(200).json({ message: "Password has been successfully reset." });
    } catch (error) {
      return res.status(500).json({ message: "Error resetting password.", error });
    }
  };
  




















// *****************   ADMIN CONTROLLER *********************
//  get all users




const getUser = asyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users)
    } catch (error) {
        res.status(400).json({ messag: error.message })
    }
})

// delete users

const deleteUsers = asyncHandler(async(req,res)=>{
    try{

        const user = await User.findById(req.params.id)
        if(user){
            if(user.isAdmin){
                res.status(400);
                throw new Error("Can't delete user")
            }
            await user.remove();
            res.json({message:"User delete successfully"});
        }
        else{
            res.status(404);
            throw new Error("user not found")
        }
    }catch(error){
        res.status(400).json({message:error.messag});
    }
})

const getTotalRegisteredCandidates = async (req, res) => {
    try {
        const total = await Transaction.findOne({});
        res.json({ total });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching total registered candidates', error });
    }
};

const submitContact = asyncHandler(async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact submitted successfully!', contact: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting contact form.' });
  }
});


const getAllContacts = async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching contact details.' });
    }
  };







module.exports = { register, loginUser, updateUserProfile, deleteUserProfile, changePassword, getUser, deleteUsers,getTotalRegisteredCandidates, submitContact, getAllContacts, forgotPassword, passwordReset};