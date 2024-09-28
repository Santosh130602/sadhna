const asyncHandler = require("express-async-handler")
const User = require("../models/UserModels")
const bcrypt = require("bcrypt")
const { generateToken } = require("../middleware/auth")
const Transaction = require("../models/transition")
const Contact = require("../models/contact")


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


// const getLikedMovies = asyncHandler(async (req, res) => {
//     try {
//         const user = await User.findById(req.user._id).populate("likedMovies")

//         if (user) {
//             res.json(user.likedMovies)
//         }
//         else {
//             res.status(404);
//             throw new Error("user not found");
//         }

//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

// const addLikedMovies = asyncHandler(async (req, res) => {
//     const { movieId } = req.body;
//     try {
//         const user = await User.findById(req.user._id);
//         if (user) {
//             // check if movie already liked 
//             if (user.likedMovies.includes(movieId)) {
//                 res.status(400);
//                 throw new Error("Movie already liked");
//             }

//             user.likedMovies.push(movieId);
//             await user.save();
//             res.json(user.likedMovies)

//         }
//         else {
//             res.status(404)
//             throw new Error("user not found")
//         }

//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })


// delete all liked movie


// const deleteLikedMovies = asyncHandler(async (req, res) => {
//     try {
//         const user = await User.findById(req.user._id)
//         //  if user exist delete all movies
//         if (user) {
//             user.likedMovies = []
//             await user.save()
//             res.json({ message: "All liked movies deleted successfully" })
//         } else {
//             res.status(404)
//             throw new Error("user not found")
//         }

//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })






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
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
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







module.exports = { register, loginUser, updateUserProfile, deleteUserProfile, changePassword, getUser, deleteUsers,getTotalRegisteredCandidates, submitContact, getAllContacts};