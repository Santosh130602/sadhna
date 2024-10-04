// models/InternshipApplication.js

const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  address: String,
  state: String,
  district: String,
  pincode: String,
});

const educationSchema = new mongoose.Schema({
  percentage: String,
  year: String,
  board: String,
});


const internshipApplicationSchema = new mongoose.Schema({
  userId: {type: String, require: true, ref: "User"},
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  aadhar: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  address: addressSchema,
  photo: { type: String, required: true },
  appliedFor: { type: String, required: true },

  education: {
    highSchool: educationSchema,
    intermediate: educationSchema,
    graduation: educationSchema,
    postGraduation: educationSchema,
  },
},
{timestamps:true});

const InternshipApplication = mongoose.model("InternshipApplication", internshipApplicationSchema);

module.exports = InternshipApplication;
