const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  address: String,
  state: String,
  district: String,
  pincode: String,
});

const vayamRegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  gender: { type: String, required: true },
  aadhar: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  permanentAddress: addressSchema,
  education: { type: String },
  universityName: { type: String },
  universityAddress: addressSchema,
  amount: { type: Number, required: true }, // Amount based on role
});

const VayamRegistration = mongoose.model('VayamRegistration', vayamRegistrationSchema);

module.exports = VayamRegistration;
