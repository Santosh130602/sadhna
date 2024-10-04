// const mongoose = require("mongoose")

// const UserSchema = mongoose.Schema({
//     fullName:{
//         type:String,
//         required:[true,"please add full name"],
//     },
//     email:{
//         type:String,
//         required:[true,"please add email"],
//         unique:true,
//         trime:true
//     },
//     password:{
//         type:String,
//         required:[true,"please add password"],
//         minlength:[6,"password must be at least 6 characters"]
//     },
//     image:{
//         type:String,
//     },
//     isAdmin:{
//         type:Boolean,
//         default:false,
//     },
//     transaction:[{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Transaction",
//     },],


// },
// {timestamps:true}
// )

// // export default mongoose.model("User",UserSchema);
// const User = mongoose.model("User", UserSchema);

// module.exports = User;




const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please add full name"],
  },
  email: {
    type: String,
    required: [true, "Please add email"],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Please add password"],
    minlength: [6, "Password must be at least 6 characters"]
  },
  image: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  transaction: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction",
  }],
  resetToken: {
    type: String,
  },
  tokenExpiration: {
    type: Date,
  }
}, { timestamps: true });

// export default mongoose.model("User", UserSchema);
const User = mongoose.model("User", UserSchema);

module.exports = User;
